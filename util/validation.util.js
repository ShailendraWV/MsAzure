const Validator = require('validatorjs')

exports.validate = (body, rules) => {
    let validation = new Validator(body, rules);
    if (validation.fails()) {
        let errors = validation.errors.all()
        return {
            keys: Object.keys(errors),
            error: Object.keys(errors).map(e => errors[e][0]),
            result: false
        }
    } else {
        return {
            keys: [],
            error: null,
            result: true
        }
    }
}
