//==================
//Control Module
//==================
var budgetController = (function () {




})();
//==================
//UI Module
//==================
var UIController = (function () {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    }



})();

//==================
//App Controller Module
//==================
var controller = (function (budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function () {
        // 1. Get field input data
        var input = UICtrl.getInput();
        console.log(input);
        //2. add item to budget controller

        //3. add item to UI

        //4.calc the budget

        //5. display budger on UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event.keycode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });


})(budgetController, UIController);