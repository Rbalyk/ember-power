import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'ccy',
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        payload = { currencies:payload };
        return this._super(store, primaryModelClass, payload, id, requestType)
    }
});
