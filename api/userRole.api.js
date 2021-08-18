let {ac, rs} = require('./../constant')
let {UserRoleService} = require('./../database')
let {RequestUtil, DateUtil} = require('./../util')

/**
 * @function
 * @name userRole.api.js => add
 * @description - used to add userRole
 * <br>
 */
exports.add = async (req, res) => {
    try {
        let jsonData = req.body
        let missingParams = RequestUtil.isAllParametersPresent([jsonData, 'user_role']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));

        jsonData.created_on = DateUtil.getDateInUTCFormat()
        const doc = await UserRoleService.add(jsonData)
        return res.status(ac.status.success).send(rs.getSuccessCreatedResponse(doc))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}
/**
 * @function
 * @name userRole.api.js => update
 * @description - used to update userRole
 * <br>
 */
exports.update = async (req, res) => {
    try {
        let jsonData = req.body
        let missingParams = RequestUtil.isAllParametersPresent([jsonData, 'id']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));

        jsonData.updated_on = DateUtil.getDateInUTCFormat()
        const doc = await UserRoleService.update(jsonData.id, jsonData)
        return res.status(ac.status.success).send(rs.getSuccessResponse(doc))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}
/**
 * @function
 * @name userRole.api.js => delete
 * @description - used to delete userRole
 * <br>
 */
exports.delete = async (req, res) => {
    try {
        let jsonData = req.body
        let missingParams = RequestUtil.isAllParametersPresent([jsonData, 'id']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));

        let doc = await UserRoleService.update(jsonData.id, {
            is_deleted: true,
            updated_on: DateUtil.getDateInUTCFormat()
        })
        return res.status(ac.status.success).send(rs.getSuccessResponse(doc['nModified']))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}

/**
 * @function
 * @name userRole.api.js => get
 *
 * @description - fetches the list of userRole
 * <br>
 */
exports.get = async (req, res) => {
    try {
        const {page = 1, limit = 10} = req.query
        let docs = await UserRoleService.get({}, {
            page: Number(page),
            limit: Number(limit)
        })

        if (docs.length === 0)
            return res.status(ac.status.success).send(rs.getDataNotFoundResponse())
        return res.status(ac.status.success).send(rs.getSuccessResponse(docs))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}

/**
 * @function
 * @name userRole.api.js => details
 *
 * @description - fetches the details the business
 * <br>
 * Required parameters are as follows:
 * <br>
 * <ul>
 * <li><b> id </b> - userRole id to be fetched <u> => in headers </u> </li>
 * </ul>
 */
exports.details = async (req, res) => {
    try {
        const {id} = req.query;
        let missingParams = RequestUtil.isAllParametersPresent([{id}, 'id']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));
        let doc = await UserRoleService.details(id)
        return res.status(ac.status.success).send(rs.getSuccessResponse(doc))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}
