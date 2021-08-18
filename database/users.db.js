let {Users} = require('./../model')

exports.add = (data) => {
    return (new Users(data)).save()
}

exports.update = (id, data) => {
    return Users.updateOne({_id: id}, {$set: data}).exec()
}
exports.delete = (id, data) => {
    return Users.updateOne({_id: id}, {$set: data}).exec()
}

exports.get = (query, paginationOption) => {
    return Users
        .find(query)
        .skip((paginationOption.page - 1) * paginationOption.limit)
        .limit(paginationOption.limit)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

exports.details = (id) => {
    return Users
        .findById(id)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

