let {InterestTheme} = require('./../model')

exports.add = (data) => {
    return (new InterestTheme(data)).save()
}

exports.update = (id, data) => {
    return InterestTheme.updateOne({_id: id}, {$set: data}).exec()
}
exports.delete = (id, data) => {
    return InterestTheme.updateOne({_id: id}, {$set: data}).exec()
}

exports.get = (query, paginationOption) => {
    return InterestTheme
        .find(query)
        .skip((paginationOption.page - 1) * paginationOption.limit)
        .limit(paginationOption.limit)
        .select("-updated_on -created_on -is_deleted -__v")
        .where({'is_deleted': false})
        .exec()
}

exports.details = (id) => {
    return InterestTheme
        .findById(id)
        .select("-updated_on -created_on -is_deleted -__v")
        .exec()
}

