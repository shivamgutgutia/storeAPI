const products=require("../models/products")

const operatorMap = {
    '>': '$gt',
    '>=': '$gte',
    '=': '$eq',
    '<': '$lt',
    '<=': '$lte',
}
const numericRegex = /(\w+)([<>]=?|=)(\d+)/;

const getProducts =async (req,res)=>{
    let {
        name="",
        featured=false,
        numericFilter="",
        company="",
        sortFields="",
        fields=""
    } = req.query

    let queryObject={}
    queryObject.name={ $regex: name, $options: 'i' }
    queryObject.featured = featured === 'true' ? true : false
    queryObject.company={ $regex: company, $options: 'i' }

    let newNumericFilters={
        price:{},
        rating:{}
    }

    if (numericFilter){
        numericFilter=numericFilter.split(",")
        for(filter of numericFilter){
            const match = filter.match(numericRegex);
            if(match){
                const field=match[1]
                let operator=match[2]
                operator = operatorMap[operator]
                const value=Number(match[3])
                if(field==="price" || field==="rating"){
                    newNumericFilters[field][operator]=value
                }
            }
        } 
    }

    queryObject.price=newNumericFilters.price
    queryObject.rating=newNumericFilters.rating
    

    sortFields = sortFields.split(",").join(" ")

    fields = fields.split(",").join(" ")
    const product = await products.find(queryObject).sort(sortFields).select(fields).exec()
    res.send(product)


}

module.exports={getProducts}