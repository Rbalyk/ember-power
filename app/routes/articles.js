import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return Ember.RSVP.hash({
            articles: this.store.findAll('article'),
        });
    },
    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'articles', model.articles);
    }
});
