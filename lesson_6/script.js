function task1() {
    var a = document.getElementById('a');
    var num = parseInt(a.value);
    var result = document.getElementById('result1');

    result.innerHTML = summ(num);

}

function summ(num) {
    if ((num / 10 | 0) != 0)
        return num % 10 + summ((num / 10 | 0));
    else
        return num % 10;
}

function task2() {
    var result = document.getElementById('result2');
    var num = parseInt(prompt('Введите число', 0));
    if (isNaN(num)) {
        task2();
    }
    if (num > 0) {
        if (num % 2 > 0) {
            result.innerHTML += num + ' ';
        }
        task2();
    }
    if ((num == 0) || (num < 0)) {}
}

function task3() {
    var result = document.getElementById('result3');
    var num = parseInt(prompt('Введите число', 0));
    if (num > 0) {
        if (arguments.length == 1) {
            task3();
        }
        if (arguments.length == 0) {
            result.innerHTML += num + ' ';
            task3(0);
        }
    }
    if ((num == 0) || (num < 0)) {}

}
