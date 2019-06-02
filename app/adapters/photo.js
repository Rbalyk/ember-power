import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host:'https://api.instagram.com',
    namespace: 'v1/users/self/media/recent',
    pathForType(){
        return '?access_token=1554840227.1677ed0.27d0b691cd4c449a8b0680601b385335';
    }
});