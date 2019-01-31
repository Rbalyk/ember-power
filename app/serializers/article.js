import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
    primaryKey: 'title',
    normalizeResponse(store, primaryModelClass, payload, id, requestType){

        payload = { articles: payload.results };
        console.log(payload);
        return this._super(store, primaryModelClass, payload, id, requestType)
    },

});
