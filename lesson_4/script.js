//простое ли число
function isSimpleNum(num) {
    var result;
    if (num == 1) {
        result = false;
    }else if (num == 2) {
        result = true;
    } else {
        result = true;
        for (var i = 2; i <= num/2; i++){
            if (num % i == 0) {
                result = false;
            }
        }
    }
    return result;
}

//Задание 1
function showSimpleNum() {
    var i = 0;
    var res = document.getElementById('result1');
    res.innerHTML = '';
    while (i <= 100) {
        if (isSimpleNum(i)) {
            res.innerHTML += (i + ' ');
        }
        i++;
    }
}

//Задание 2
function showEvenUneven() {
    var i = 0;
    var res = document.getElementById('result2');
    res.innerText = '';
    var even = 'четное число';
    var uneven = 'нечетное число';
    do {
        if (i == 0) {
            res.innerText += (i + ' - это ноль\n');
        }else if (i % 2 == 0){
            res.innerText += (i + ' - ' + even + '\n');
        } else {
            res.innerText += (i + ' - ' + uneven + '\n');
        }
        i++;
    } while (i <= 10)
}

//Задание 3
function showTask3(num) {
    var res = document.getElementById('result3');
    res.innerHTML += (num + ' ');
    for (var i = 0; i <= num; i++){}
    if (i <= 10) {
        showTask3(i);
    }
}

//Задание 4
function showPyramid() {
    var res = document.getElementById('result4');
    res.innerText = '';
    var s = '';
    for (var i = 1; i <= 20; i++){
        s = '';
        for (var j = 0; j < i; j++){
            s += '*';
        }
        console.log(s);
        res.innerText += (s + '\n');
    }
}