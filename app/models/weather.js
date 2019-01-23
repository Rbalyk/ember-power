import DS from 'ember-data';

const {attr,} = DS;

export default DS.Model.extend({
    weathers: attr(),
    name: attr(),
    sys: attr(),
    main: attr()
});
