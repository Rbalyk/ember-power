import Component from '@ember/component';

export default Component.extend({
    init() {
        this._super(...arguments);
        this.arrayOfFruit = [];
    },
    actions: {
        addFruit(val) {
            let arrayFruit = this.get('arrayOfFruit');
            // && !arrayFruit.includes(val)
            if (val !== undefined && val !== "") {
                arrayFruit.pushObject(val);
            }

            if (val == undefined || val == "") {
                alert(`You didn't write any item`);
            }
        }
    }
});
