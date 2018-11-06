const RootController = require('./RootController');
const CalculatorParametersDataModel = require('../models/CalculatorParametersDataModel');
const OSBuddySummarySvc = require('../services/bll/OSBuddySummarySvc');


module.exports = class extends RootController{
    static createResponse(parameterObj){
        return OSBuddySummarySvc.processData(parameterObj);
    }

    static createParamModelObj(req){
        return new CalculatorParametersDataModel({
            parameters : {
                profitMargin: Number(req.query.profitMargin),
                optimisticRounding: JSON.parse(req.query.optimisticRounding)
            }
        })
    }
}