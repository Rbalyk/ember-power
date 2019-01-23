import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host:'https://api.openweathermap.org',
    namespace: 'data/2.5/weather?q=Lviv,ua',
    pathForType(){
        return '&appid=91e78d5995aaa7da41b1960645f4e654&units=metric';
    }
});