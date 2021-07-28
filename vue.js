new Vue({
    el: '.main',
    data: {
        goals: [],
        inputValue: ''
    },
    methods: {
        addGoal(){
            console.log('it works')
            this.goals.push(this.inputValue);
            this.inputValue = '';
        }
    }
});

















// JAVASCRIPT ONLY

// const btn = document.querySelector('.btn');
// const inputField = document.querySelector('.input-field');
// const ulList = document.querySelector('.list');

// function addGoal(){
//     let goal = inputField.value;
//     let addedGoal = document.createElement('li');
//     addedGoal.textContent = goal;
//     ulList.appendChild(addedGoal);
//     inputField.value = ''
// }

// btn.addEventListener('click', addGoal);