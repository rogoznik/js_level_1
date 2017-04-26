
//задания 1-3
function task1() {
    var a = document.getElementById('a');
    var b = document.getElementById('b');
    var result = document.getElementById('result1');
    var r = range(a.value, b.value);
    result.innerHTML = '';
    for (var i = 0; i < r.length; i++){
        result.innerHTML += r[i] + ' ';
    }

}
function range(a, b) {
    var start = parseInt(a);
    var end = parseInt(b);
    var step = parseInt(arguments[2]);
    var result = [];
    if (isNaN(step)) {
        if (start < end) {
            for (var i = start; i <= end; i++) {
                result.push(i);
            }
        }
        if (start > end) {
            for (var i = end; i <= start; i++) {
                result.push(i);
            }
        }
    } else {
        if ((start < end) && (step > 0)) {
            for (var i = start; i <= end; i += step) {
                result.push(i);
            }
        }
        if ((start > end) && (step > 0)) {
            for (var i = end; i <= start; i += step) {
                result.push(i);
            }
        }
        if ((start < end) && (step < 0)) {
            for (var i = end; i >= start; i += step) {
                result.push(i);
            }
        }
        if ((start > end) && (step < 0)) {
            for (var i = start; i >= end; i += step) {
                result.push(i);
            }
        }
    }
    return result;
}

function task2() {
    var a = document.getElementById('a2');
    var b = document.getElementById('b2');
    var result = document.getElementById('result2');

    result.innerHTML = '';
    result.innerHTML = sum(range(a.value, b.value));

}
function sum(arr) {
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function task3() {
    var a = document.getElementById('a3');
    var b = document.getElementById('b3');
    var step = document.getElementById('step');
    var result = document.getElementById('result3');

    result.innerHTML = '';

    if (!isNaN(parseInt(step.value))) {
        var r = range(a.value, b.value, step.value);
        for (var i = 0; i < r.length; i++){
            result.innerHTML += r[i] + ' ';
        }
    } else {
        alert('Вы неуказали шаг');
    }
}

//Задание 4

function printList1(list) {
    var result = document.getElementById('result4');
    var value = list.value;
    var next = list.next;

    while (next != null) {
        result.innerHTML += value + ' ';
        value = next.value;
        next = next.next;
    }
    result.innerHTML += value;
}
function printList2(list) {
    var result = document.getElementById('result4');
    if (list.next != null) {
        result.innerHTML += list.value + ' ';
        printList2(list.next);
    } else {
        result.innerHTML += list.value;
    }
}
function printReverseList1(list) {
    var result = document.getElementById('result4');
    if (list.next != null) {
        printReverseList1(list.next);
    }
    result.innerHTML += list.value + ' ';
}
function printReverseList2(list) {
    var result = document.getElementById('result4');
    var value = list.value;
    var next = list.next;
    var temp = [];

    while (next != null) {
        temp.push(value);
        value = next.value;
        next = next.next;
    }
    temp.push(value);
    for (var i = temp.length - 1; i >= 0; i--){
        result.innerHTML += temp[i] + ' ';
    }
}

function task4(num) {
    var list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };

    var result = document.getElementById('result4');
    result.innerHTML = '';

    switch (num) {
        case 1:
            printList1(list);
            break;
        case 2:
            printList2(list);
            break;
        case 3:
            printReverseList1(list);
            break;
        case 4:
            printReverseList2(list);
            break;
    }
}

//задание 5




/* Задание из методички */

//Задание 1

// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни. Например, для числа 245 мы должны получить следующий
// объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать
// соответствующее сообщение с помощью console.log и вернуть пустой объект.

function taskM1() {
    var num = document.getElementById('num');
    console.log(numToObj(num.value));
}

function numToObj(num) {
    var n = parseInt(num)
    var result = {};
    if (isNaN(n) || (n < 0)) {
        alert('Введите число от 0 до 999');
    } else {
        if  (n <= 999) {
            if (num.length == 3) {
                result = {
                    'еденицы': num[2],
                    'десятки': num[1],
                    'сотни': num[0]
                }
            }
            if (num.length == 2){
                result = {
                    'еденицы': num[1],
                    'десятки': num[0],
                    'сотни': 0
                }
            }
            if (num.length == 1){
                result = {
                    'еденицы': num[0],
                    'десятки': 0,
                    'сотни': 0
                }
            }
        } else if (n > 999){
            console.log ('Число должно быть от 0 до 999');
        }
    }

    return result;
}