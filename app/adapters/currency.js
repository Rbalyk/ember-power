import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host:'https://api.privatbank.ua',
    namespace: 'p24api',
    pathForType(){
        return 'pubinfo?json&exchange&coursid=5';
    }
});
