let {City} = require('./../model')

exports.add = (data) => {
    return (new City(data)).save()
}
exports.update = (id, data) => {
    return City.updateOne({_id: id}, {$set: data}).exec()
}
exports.delete = (id, data) => {
    return City.updateOne({_id: id}, {$set: data}).exec()
}
exports.get = (query, paginationOption) => {
    return City
        .find(query)
        .skip((paginationOption.page - 1) * paginationOption.limit)
        .limit(paginationOption.limit)
        .select("-updated_on -created_on -is_deleted -__v")
        .where({'is_deleted': false})
        .exec()
}
exports.details = (id) => {
    return City
        .findById(id)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

