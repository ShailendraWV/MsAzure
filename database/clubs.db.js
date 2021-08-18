let {Clubs} = require('./../model')

exports.add = (data) => {
    return (new Clubs(data)).save()
}

exports.update = (id, data) => {
    return Clubs.updateOne({_id: id}, {$set: data}).exec()
}
exports.delete = (id, data) => {
    return Clubs.updateOne({_id: id}, {$set: data}).exec()
}

exports.get = (query, paginationOption) => {
    return Clubs
        .find(query)
        .skip((paginationOption.page - 1) * paginationOption.limit)
        .limit(paginationOption.limit)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

exports.details = (id) => {
    return Clubs
        .findById(id)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

