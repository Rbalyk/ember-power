import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    images: attr(),
    user: attr(),
});
