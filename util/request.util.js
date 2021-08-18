exports.isAllParametersPresent = array => {
    let jsonData = array[0];
    array.splice(0, 1);
    let nonData = [];
    array.forEach(e => {
        if (jsonData[e] === undefined || jsonData[e] === '') {
            nonData.push(e);
        }
    });
    return nonData;
};
exports.checkProperties = (obj, fields) => {
    return fields.every(e => obj.hasOwnProperty(e))
}
