exports.getCleanObject = (object) => {
    Object.keys(object).forEach(key => object[key] === undefined && delete object[key])
    return object
}

exports.excludedFields = {
    '__v': 0,
    "createdBy": 0,
    "createdAt": 0,
    "updatedBy": 0,
    "updatedAt": 0,
    "recStatus": 0,
    "isDeleted": 0
}

exports.excludedFieldsWithId = {
    '__v': 0,
    "createdBy": 0,
    "createdAt": 0,
    "updatedBy": 0,
    "updatedAt": 0,
    "recStatus": 0,
    "isDeleted": 0,
    "_id": 0
}

exports.readStoryIncludeFields = {
    '_id': 1,
    "title": 1,
    "founder": 1,
    "bannerImage": 1,
    "aboutStory": 1,
    "storySummary": 1,
    "readType": 1
}

exports.readStoryFounderIncludeFields = {
    "email": 1,
    "name": 1,
    "imageSrc": 1,
    "_id": 0
}
