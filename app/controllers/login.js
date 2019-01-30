import Controller from '@ember/controller';

export default Controller.extend({
    loginName: null,
    password: null,
    actions: {
        authenticate() {
            if(this.get('loginName') === "3.14159" && this.get('password') === "7"){
                this.transitionToRoute('say-hi')
            }
        }
    }
});