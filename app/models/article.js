import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    results: attr(),
    title: attr(),
    abstract: attr(),
    url: attr(),
    byline: attr(),
    section: attr(),
});
