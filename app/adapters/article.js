import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host:'https://api.nytimes.com',
    namespace: 'svc/topstories/v2/',
    pathForType(){
        return 'science.json?api-key=jKjMLK9m0c30Gg2v6jnrsXl7CyDHxVO0';
    }


});