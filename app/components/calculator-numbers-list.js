import Component from '@ember/component';

export default Component.extend({
    sum: '',
    actions: {
        firstNumber(value) {
            let total = document.getElementById('total');
            let numberOne = document.getElementById('firstNumber');
            let numberTwo =  document.getElementById('secondNumber');
            if(total.innerText !== ''){
                total.innerText = '';
                numberOne.innerText = '';
                numberTwo.innerText = '';
                this.sum = '';
            }
            let numb = value;
            this.sum = this.sum + numb;
            numberOne.innerText = this.sum;
        },

        expression(){
            document.getElementById('secondNumber').innerText = this.sum;
            document.getElementById('firstNumber').innerText = `${this.sum = ''}`;
        },

        plus(){
            document.getElementById('action').innerText = '+';
        },

        minus(){
            document.getElementById('action').innerText = '-';
        },

        multiplication(){
            document.getElementById('action').innerText = '*';
        },

        division(){
            document.getElementById('action').innerText = '/';
        },

        total(x,y) {
            x = parseInt(document.getElementById('firstNumber').innerText);
            y = parseInt(document.getElementById('secondNumber').innerText);

            let total = document.getElementById('total');
            let action =  document.getElementById('action');

            if(action.innerText === '+'){
                total.innerText = x + y;
            }else if(action.innerText === '-'){
                total.innerText = x - y;
            }else if(action.innerText === '*'){
                total.innerText = x * y;
            }if(action.innerText === '/'){
                total.innerText = x / y;
            }

            if(total.innerText === 'NaN'){
                total.innerText = '';
                alert('This is simple calculator and It cant do it function')
            }

            document.getElementById('firstNumber').innerText = '';
            document.getElementById('secondNumber').innerText = '';
            action.innerHTML = '';
        }

    }
});
