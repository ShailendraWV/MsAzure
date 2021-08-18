let {Activities} = require('./../model')

exports.add = (data) => {
    return (new Activities(data)).save()
}

exports.update = (id, data) => {
    return Activities.updateOne({_id: id}, {$set: data}).exec()
}
exports.delete = (id, data) => {
    return Activities.updateOne({_id: id}, {$set: data}).exec()
}

exports.get = (query, paginationOption) => {
    return Activities
        .find(query)
        .skip((paginationOption.page - 1) * paginationOption.limit)
        .limit(paginationOption.limit)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

exports.details = (id) => {
    return Activities
        .findById(id)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}
exports.getHallway = (query, paginationOption) => {
    return Activities
        .find(query)
        .skip((paginationOption.page - 1) * paginationOption.limit)
        .limit(paginationOption.limit)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}