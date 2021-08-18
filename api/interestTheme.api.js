let {ac, rs} = require('./../constant')
let {InterestThemeService,InterestCategoryService} = require('./../database')
let {RequestUtil, DateUtil} = require('./../util')

/**
 * @function
 * @name interestTheme.api.js => add
 * @description - used to add interestTheme
 * <br>
 */
exports.add = async (req, res) => {
    try {
        let jsonData = req.body
        let missingParams = RequestUtil.isAllParametersPresent([jsonData, 'interest_themes','interest_category_id']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));

        jsonData.created_on = DateUtil.getDateInUTCFormat()
        const doc = await InterestThemeService.add(jsonData)
        await InterestCategoryService.update(jsonData.interest_category_id, {interest_themes_ids: doc['_id']})

        return res.status(ac.status.success).send(rs.getSuccessCreatedResponse(doc))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}
/**
 * @function
 * @name interestTheme.api.js => update
 * @description - used to update interestTheme
 * <br>
 */
exports.update = async (req, res) => {
    try {
        let jsonData = req.body
        let missingParams = RequestUtil.isAllParametersPresent([jsonData, 'id']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));

        jsonData.updated_on = DateUtil.getDateInUTCFormat()
        const doc = await InterestThemeService.update(jsonData.id, jsonData)
        return res.status(ac.status.success).send(rs.getSuccessResponse(doc['nModified']))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}
/**
 * @function
 * @name interestTheme.api.js => delete
 * @description - used to delete interestTheme
 * <br>
 */
exports.delete = async (req, res) => {
    try {
        let jsonData = req.body
        let missingParams = RequestUtil.isAllParametersPresent([jsonData, 'id']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));

        let doc = await InterestThemeService.update(jsonData.id, {
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
 * @name interestTheme.api.js => get
 *
 * @description - fetches the list of interestTheme
 * <br>
 */
exports.get = async (req, res) => {
    try {
        const {page = 1, limit = 10} = req.query
        let docs = await InterestThemeService.get({}, {
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
 * @name interestTheme.api.js => details
 *
 * @description - fetches the details the business
 * <br>
 * Required parameters are as follows:
 * <br>
 * <ul>
 * <li><b> id </b> - interestTheme id to be fetched <u> => in headers </u> </li>
 * </ul>
 */
exports.details = async (req, res) => {
    try {
        const {id} = req.query;
        let missingParams = RequestUtil.isAllParametersPresent([{id}, 'id']);
        if (missingParams.length > 0)
            return res.status(ac.status.success).send(rs.getParameterMissingResponse(missingParams));
        let doc = await InterestThemeService.details(id)
        return res.status(ac.status.success).send(rs.getSuccessResponse(doc))

    } catch (err) {
        return res.status(ac.status.success).send(rs.getServerErrorResponse())
    }
}
