var txt = document.getElementById('txtInput');
txt.value = 'waqar';
var btnCharAt = document.getElementById('btnCharAt');
btnCharAt.addEventListener('click', onCharAtClick);

var btnLen = document.getElementById('btnLen');
btnLen.addEventListener('click', onLenClick);

function onCharAtClick() {
    var str = txt.value;
    console.log('string ki 3 position per kia likha ha :' + str.charAt(3));
}

function onLenClick() {
    var str = txt.value;
    // console.log('length of string value:', str.length);

    // console.log(str.indexOf('q'));
    // console.log('last index of a:', str.lastIndexOf('a'));
    // console.log('start from 2 and pick up 2 chars: ', str.substr(2, 2));
    // console.log('toLocaleUpperCase: ', str.toLocaleUpperCase());
    // console.log(str.toUpperCase());
    // console.log(str .slice(2,3)	);
    // console.log(str.valueOf())
    // console.log(str.anchor('test'));
    //console.log(str .replace('a','e')	);
    //console.log(str .match('w','q'));
    console.log(str.substr(0,length));
    console.log(str.blink());
    console.log(str.bold());
    console.log(str.fixed());
    

    
}


