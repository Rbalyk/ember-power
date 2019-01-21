import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [1,2,3,4,5,6,7,8,9,0,'.'];
    }
});
