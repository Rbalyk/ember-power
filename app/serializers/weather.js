import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
    primaryKey:'main',
    normalizeResponse(store, primaryModelClass, payload, id, requestType){
        payload = { weathers: payload };
        return this._super(store, primaryModelClass, payload, id, requestType)
    },
});
