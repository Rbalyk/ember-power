import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCity(param) {
            let filterInputValue = this.value;
            document.getElementById('inputValue').innerHTML = filterInputValue ;
            console.log(filterInputValue)
        }
    }
});
