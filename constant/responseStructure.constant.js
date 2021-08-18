/**
 * @description - This file contains the different types of responses used in the application
 * */

let ac = require('./app.constant')

/**
 * @name getResponseStructure
 * @description - Basic response structure
 * @param {Number} status
 * @param {string} message
 * @param {any?} data
 * */
exports.getResponseStructure = (status, message, data) => {
    return {
        status: status,
        message: message,
        response: data || {}
    }
}

exports.getAuthHeaderMissingResponse = () => {
    return this.getResponseStructure(ac.status.unauthorized, ac.message.tokenMissing)
}

exports.getParameterMissingResponse = () => {
    return this.getResponseStructure(ac.status.badRequest, ac.message.parameterMissing)
}

exports.getUnsupportedFileFormatResponse = () => {
    return this.getResponseStructure(ac.status.unsupportedMediaType, ac.message.unsupportedMediaType)
}

exports.getSessionExpiredResponse = () => {
    return this.getResponseStructure(ac.status.sessionExpired, ac.message.sessionExpired)
}

exports.getServerErrorResponse = () => {
    return this.getResponseStructure(ac.status.internalServerError, ac.message.internalServerError)
}

exports.getUnauthorizedAccessResponse = () => {
    return this.getResponseStructure(ac.status.unauthorized, ac.message.unauthorized)
}

exports.getUnauthenticatedAccessResponse = () => {
    return this.getResponseStructure(ac.status.unauthenticated, ac.message.unauthenticated)
}

exports.getSuccessResponse = (message, data) => {
    if(message !== null && message !== undefined && data === undefined) {
        data = message
        message = null
    }
    return this.getResponseStructure(ac.status.success, message ? message : ac.message.success, data)
}

exports.getSuccessCreatedResponse = (message, data) => {
    if(message !== null && message !== undefined && data === undefined) {
        data = message
        message = null
    }
    return this.getResponseStructure(ac.status.successCreated, message ? message : ac.message.success, data)
}

exports.getDataNotFoundResponse = () => {
    return this.getResponseStructure(ac.status.successNoRecords, ac.message.noDataFound)
}

exports.getConflictWithDataResponse = (reason) => {
    return this.getResponseStructure(ac.status.conflict, ac.message.conflict, reason)
}

