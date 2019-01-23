import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return Ember.RSVP.hash({
            weathers: this.store.findAll('weather'),
            weatherParameters: this.store.findAll('weather-parameter')
        });
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'weathers', model.weathers);
        Ember.set(controller, 'weatherParameters', model.weatherParameters);
    }
});
