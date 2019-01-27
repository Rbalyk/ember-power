import Component from '@ember/component';
import { storageFor } from 'ember-local-storage';
import { computed } from '@ember/object';

export default Component.extend({
    arrayOfFruit: storageFor('shop-list'),
    isWide: false,
    init() {
        this._super(...arguments);
    },
    actions: {
        listItem() {
            this.toggleProperty('isWide');
        },

        expand: function() {
            this.set('isExpanded', true);
        },

        close: function() {
            this.set('isExpanded', false);
        },

        clear: function() {
            return this.get('arrayOfFruit').clear();
        },

        addFruit(val) {
            let arrayFruit = this.get('arrayOfFruit');
            if (val !== undefined && val !== "") {
                arrayFruit.pushObject(val);
            }
            if (val == undefined || val == "") {
                alert(`You didn't write any item`);
            }
        }
    }
});
