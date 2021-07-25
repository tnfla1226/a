// 전역변수 

    //0~9까지의 숫자 
    const numArr = [0,1,2,3,4,5,6,7,8,9];


// 함수 정의부

// 1. 숫자 버튼을 눌렀을 때 input창에 나오게 하는 것
function numBtn() {
    const $num = [...document.getElementsByClassName('num')];
    const $input = document.querySelector('.show');
    // 숫자 0
    $num[9].addEventListener('click', () => {
        $input.setAttribute('value', $num[9].textContent);
        
    });
    // 숫자 1
    $num[6].addEventListener('click', () => {
        $input.setAttribute('value', $num[6].textContent);
    });
    // 숫자 2
    $num[7].addEventListener('click', () => {
        $input.setAttribute('value', $num[7].textContent);
    });
    // 숫자 3
    $num[8].addEventListener('click', () => {
        $input.setAttribute('value', $num[8].textContent);
    });
    // 숫자 4
    $num[3].addEventListener('click', () => {
        $input.setAttribute('value', $num[3].textContent);
    });
    // 숫자 5
    $num[4].addEventListener('click', () => {
        $input.setAttribute('value', $num[4].textContent);
    });
    // 숫자 6
    $num[5].addEventListener('click', () => {
        $input.setAttribute('value', $num[5].textContent);
    });
    // 숫자 7
    $num[0].addEventListener('click', () => {
        $input.setAttribute('value', $num[0].textContent);
    });
    // 숫자 8
    $num[1].addEventListener('click', () => {
        $input.setAttribute('value', $num[1].textContent);
    });

    // 숫자 9
    $num[2].addEventListener('click', () => {
        $input.setAttribute('value', $num[2].textContent);
    });

}

// 2. 숫자 두개를 덧셈하는 연산
function numPlus() {
    const $plus = document.querySelector('.plus');
    $plus.addEventListener('click', () => {
        
    });
 
}



// 함수 호출부

numBtn();
numPlus();

