function naturalNumber() {
    var num = parseFloat(document.getElementsByName('num')[0].value);
    if (num > 0) {
        if (isInt(num)) {
            if (isSimpleNum(num)) {
                document.getElementsByName('result')[0].innerHTML = 'Это простое натуральное число';
            } else {
                document.getElementsByName('result')[0].innerHTML = 'Это натуральное число не является простым';
            }
        } else {
            document.getElementsByName('result')[0].innerHTML = 'Это не натуральное число';
        }
    } else {
        document.getElementsByName('result')[0].innerHTML = 'Это не натуральное число';
    }
}
function isInt(num) {
    return num % 1 == 0;
}
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

function genPass(){
    var numChars = parseInt(document.getElementsByName('numChars')[0].value);
    var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678!@#$%()*-+,.?';
    var pass = '';
    numChars = numChars < 4 ? 4 : numChars;
    for (var i = 0; i < numChars; i++){
        pass += abc[rand(abc.length)];
    }
    document.getElementsByName('pass')[0].value = pass;
}
function rand(max) {
    return Math.floor(Math.random() * (max));
}

function lastChar(){
    var word = document.getElementsByName('word')[0].value;
    if (word.length == 0) {
        document.getElementsByName('lastCharResult')[0].innerHTML = 'Вы ничего не ввели';
    } else {
        document.getElementsByName('lastCharResult')[0].innerHTML = word + word[word.length-1].toUpperCase();
    }

}

function toCamelCase() {
    var str = document.getElementsByName('str')[0].value.split('_');
    var result = str[0];
    for (var i = 1; i < str.length; i++){
        result += (str[i][0].toUpperCase() + str[i].substr(1, str[i].length-1));
    }
    document.getElementsByName('camelCaseResult')[0].innerHTML = result;
}


/*Побитовые операции */

function bitAND(){
    var num1 = parseInt(document.getElementsByName('num1')[0].value);
    var num2 = parseInt(document.getElementsByName('num2')[0].value);
    document.getElementsByName('numBit1')[0].innerHTML = toBinary(num1);
    document.getElementsByName('numBit2')[0].innerHTML = num2.toString(2);
}
function toBinary(num){
    var a = num;
    var b;
    var str = '';
    var result = '';
    while (a > 1){
        a = num / 2 | 0;
        b = num % 2;
        str += b;
        num = a;
    }
    str += a;
    for (var i = str.length-1; i >=0; i--){
        result += str[i];
    }
    return result;
}