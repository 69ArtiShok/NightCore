'use strict';

// Сколько типов данных существует в JS? - 7 учитывать symbol

// Как вывести информацию в консоль? - console.log(Информация);

// Какая функция операторов || и &&? первое "||" - это когда один из всех элементов правдивы, а "&&" - если все элементы правдивы.

var money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

    console.log(money);
    console.log(time);

var article_expenses = +prompt("Введите обязательную статью расходов в этом месяце"),
    deduction_expenses = +prompt("Во сколько обойдется?");

    article_expenses = +prompt("Введите обязательную статью расходов в этом месяце"),
    deduction_expenses = +prompt("Во сколько обойдется?");

    console.log(article_expenses);
    console.log(deduction_expenses);

var appData = {
    money,
    time,
    expenses,
    optionalExpenses,
    income,
    savings : false
};

var expenses = {
    "article_expenses" : "deduction_expenses"
};

var optionalExpenses = {

};

var income = {
    
};

    console.log(money/30);
    alert(money/30);
    