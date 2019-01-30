import Ember from '@ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    session: Ember.injection.service(),
    headers: Ember.computed('session.token',function () {
       return{
           'Authorization': `Bearer ${this.get('session.token')}`
       };
    })

});
