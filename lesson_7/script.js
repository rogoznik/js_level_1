function task1() {
    var chessboard = document.getElementById('chessboard');
    var col = 'ABCDEFGH';
    var row = 9;
    var count = 0;

    chessboard.innerHTML = '';
    for (var i = 0; i <= 9; i++) {
        for (var j = 0; j <= 9; j++){
            var span = document.createElement('span');
            if (((i == 0) && (j == 0)) || ((i == 9) && (j == 9))) {
                span.className = 'cell hat';
                span.innerHTML = '&nbsp;';
            }
            if (((i == 0) && (j > 0)) || ((i == 9) && (j > 0))) {
                span.className = 'cell hat';
                if (j < 9) {
                    span.innerHTML = col[j-1];
                } else {
                    span.innerHTML = '&nbsp;';
                }


            }
            if (((j == 0) && (i > 0)) || ((j == 9) && (i > 0))) {
                span.className = 'cell hat';
                if (i < 9) {
                    span.innerHTML = row - i;
                } else {
                    span.innerHTML = '&nbsp;';
                }
            }
            if ((i > 0 && i < 9) && (j > 0 && j < 9)) {
                if (i % 2 == 0){
                    if (j % 2 == 0){
                        span.className = 'cell cell-white';
                    } else {
                        span.className = 'cell cell-black';
                    }
                    span.innerHTML = '&nbsp;';
                    span.id = count;
                    count++;
                } else {
                    if (j % 2 == 0){
                        span.className = 'cell cell-black';
                    } else {
                        span.className = 'cell cell-white';
                    }
                    span.innerHTML = '&nbsp;';
                    span.id = count;
                    count++;
                }
            }
            chessboard.appendChild(span);
            if (j == 9) {
                chessboard.innerHTML += '<br>';
            }
        }
    }
}

function task2() {
    task1();
    var chesspices1 = 'ЛКСФКСКЛП';
    var chesspices2 = 'ПЛКСФКСКЛ';
    var cb = 0;
    var cw = 0;
    for (var i = 0; i <= 63; i++) {
        if (i < 16){
            var cell = document.getElementById(i.toString());
            cell.classList.add('chess-pices-black');
            if (cb < 8) {
                cell.innerHTML = chesspices1[cb];
                cb++;
            } else {
                cell.innerHTML = chesspices1[cb];
            }
        }
        if (i > 47) {
            var cell = document.getElementById(i.toString());
            cell.classList.add('chess-pices-white');
            if (i < 56) {
                cell.innerHTML = chesspices2[0];
            } else {
                cw++;
                cell.innerHTML = chesspices2[cw];

            }
        }


    }
}

function task31() {
    task1();
    var chesspices1 = [
        '&#9814;',
        '&#9816;',
        '&#9815;',
        '&#9813;',
        '&#9812;',
        '&#9815;',
        '&#9816;',
        '&#9814;',
        '&#9817;'
    ];
    var chesspices2 = [
        '&#9817;',
        '&#9814;',
        '&#9816;',
        '&#9815;',
        '&#9813;',
        '&#9812;',
        '&#9815;',
        '&#9816;',
        '&#9814;'
    ];
    var cb = 0;
    var cw = 0;
    for (var i = 0; i <= 63; i++) {
        if (i < 16){
            var cell = document.getElementById(i.toString());
            cell.classList.add('chess-pices-black');
            if (cb < 8) {
                cell.innerHTML = chesspices1[cb];
                cb++;
            } else {
                cell.innerHTML = chesspices1[cb];
            }
        }
        if (i > 47) {
            var cell = document.getElementById(i.toString());
            cell.classList.add('chess-pices-white');
            if (i < 56) {
                cell.innerHTML = chesspices2[0];
            } else {
                cw++;
                cell.innerHTML = chesspices2[cw];

            }
        }


    }
}

function task32() {
    task1();
    var chesspices1 = [
        'img/rook-b.png',
        'img/knight-b.png',
        'img/bishop-b.png',
        'img/queen-b.png',
        'img/king-b.png',
        'img/bishop-b.png',
        'img/knight-b.png',
        'img/rook-b.png',
        'img/pawn-b.png'
    ];
    var chesspices2 = [
        'img/pawn-w.png',
        'img/rook-w.png',
        'img/knight-w.png',
        'img/bishop-w.png',
        'img/queen-w.png',
        'img/king-w.png',
        'img/bishop-w.png',
        'img/knight-w.png',
        'img/rook-w.png'
    ];
    var cb = 0;
    var cw = 0;
    for (var i = 0; i <= 63; i++) {
        var cell = document.getElementById(i.toString());
        var img = document.createElement('img');
        if (i < 16){
            if (cb < 8) {
                img.src = chesspices1[cb];
                cb++;
            } else {
                img.src = chesspices1[cb];
            }
            img.className = 'img img-black';
            cell.innerHTML = '';
            cell.classList.add('cell-img');
            cell.appendChild(img);
        }
        if (i > 47) {
            if (i < 56) {
                img.src = chesspices2[0];
            } else {
                cw++;
                img.src = chesspices2[cw];

            }
            img.className = 'img';
            cell.innerHTML = '';
            cell.classList.add('cell-img');
            cell.appendChild(img);
        }


    }
}