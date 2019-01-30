import Component from '@ember/component';

export default Component.extend({
    steplers:12,
    click(){
        this.attrs.pressed();
    }
});
