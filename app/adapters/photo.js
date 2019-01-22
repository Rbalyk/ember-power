import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host:'https://api.instagram.com',
    namespace: 'v1/users/self/media/recent',
    pathForType(){
        return '?access_token=1554840227.1677ed0.0eeb346a248d45c3a4b80c30ca2b2f5e';
    }
});