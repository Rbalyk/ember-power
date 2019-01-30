import Ember from '@ember';
import Controller from '@ember/controller';

export default Controller.extend({
    loginName: null,
    password: null,
    session: Ember.inject.service(),
    actions: {
        authenticate() {
            this.get('session').authenticate(this.get('loginName'),
                this.get('password')).then(() => {
                    alert('Logged in!');
                    this.transitionToRoute('students');
                }, (err) => {
                    alert('Error with login' + err.responseText);
                }
            )
        }
    }
});
