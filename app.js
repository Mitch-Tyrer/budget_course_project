//==================
//Control Module
//==================
var budgetController = (function () {
    //create a constructor function for inc and exp
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //[1,2,3,4,5], next ID = 6
            //[1,2,4,6,8], next ID =9
            //ID = last ID + 1
            //create newID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //create new item based on inc or exp type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //push it into datastructure
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },
        testing: function () {
            console.log(data);
        }

    }


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

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keycode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

    }

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function () {
        //all variables
        var input, newItem
        // 1. Get field input data
        input = UICtrl.getInput();

        //2. add item to budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);
        //3. add item to UI

        //4.calc the budget

        //5. display budger on UI

    }

    return {
        init: function () {
            console.log('App Started');
            setupEventListeners();
        }
    }


})(budgetController, UIController);

controller.init();