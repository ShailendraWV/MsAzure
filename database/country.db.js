let {Country} = require('./../model')

exports.add = (data) => {
    return (new Country(data)).save()
}

exports.update = (id, data) => {
    return Country.updateOne({_id: id}, {$set: data}).exec()
}
exports.delete = (id, data) => {
    return Country.updateOne({_id: id}, {$set: data}).exec()
}

exports.get = (query, paginationOption) => {
    return Country
        .find(query)
        .skip((paginationOption.page - 1) * paginationOption.limit)
        .limit(paginationOption.limit)
        .select("-updated_on -created_on -is_deleted -__v")
        .where({'is_deleted': false})
        .exec()
}

exports.details = (id) => {
    return Country
        .findById(id)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

