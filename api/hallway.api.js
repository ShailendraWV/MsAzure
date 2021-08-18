let {ac, rs} = require('./../constant')
let {ActivitiesService} = require('./../database')

/**
 * @function
 * @name hallway.api.js => get
 *
 * @description - fetches the list of activities
 * <br>
 */
exports.get = async (req, res) => {
    try {
        const {page = 1, limit = 10, query} = req.query
        let docs = await ActivitiesService.getHallway({query}, {
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
