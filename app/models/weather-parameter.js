import DS from 'ember-data';

const {attr} = DS;

export default DS.Model.extend({
    weather: attr(),
    main: attr(),
    icon: attr(),
    description: attr(),
});
