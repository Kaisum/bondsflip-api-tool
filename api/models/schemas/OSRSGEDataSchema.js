const joi = require('joi');


module.exports = joi.object().keys({
    osrsApi: {
        osrsGePrice: joi.string().allow('').optional()
    }
});