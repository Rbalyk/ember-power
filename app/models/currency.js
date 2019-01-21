import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    ccy: attr('string'),
    base_ccy:attr('string'),
    buy: attr('string'),
    sale: attr('string')
});
