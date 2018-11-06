const DataComposerDecorator = require('./DataComposerDecorator.js');
const OSBuddyAPISummaryGoogleApisFilter = require('../responseFilters/OSBuddyAPISummaryGoogleApisFilter.js');
const OSBuddyDataModel = require('../../../models/OSBuddyDataModel.js');


module.exports = class extends DataComposerDecorator{
    static composedDataPromise(){
        return this.createComposedDataPromise(
            OSBuddyAPISummaryGoogleApisFilter,
            this.createDataModelObj
        );
    }

    static createDataModelObj(dataObj){
        return new OSBuddyDataModel({
            osbuddy : {
                avgPrice : dataObj.overall_average,
                avgBuyPrice : dataObj.buy_average,
                buyQuantity: dataObj.buy_quantity,
                avgSellPrice : dataObj.sell_average,
                sellQuantity: dataObj.sell_quantity,
            }
        });
    }
}