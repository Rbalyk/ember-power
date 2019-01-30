import Component from '@ember/component';

export default Component.extend({
    pens:15,
    click(){
        this.attrs.pressedPen();
    }
});
