//==================
//Control Module
//==================
var budgetController = (function () {




})();
//==================
//UI Module
//==================
var UIController = (function(){




})();

//==================
//App Controller Module
//==================
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get field input data

        //2. add item to budget controller

        //3. add item to UI

        //4.calc the budget

        //5. display budger on UI

        console.log('it works')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if(event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });


})(budgetController, UIController);