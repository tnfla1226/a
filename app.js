//변수 선언
// 숫자 저장소
let val1 = '';
let val2 = '';

// input 창
let $show = document.getElementById('show');


//함수 정의
// 숫자 함수
function addNum(num) {
  $show.value = $show.value + num;
  $show.setAttribute('value', $show.value);
}


// 연산 함수
function calculate(sign) {
  let result = '';
  if (sign === '+') {
    $show.value = $show.value + sign;
  } else if (sign === '-') {
    $show.value = $show.value + sign;
  } else if (sign === '/') {
    $show.value = $show.value + sign;
  } else if (sign === '*') {
    $show.value = $show.value + sign;
  } else if (sign === '=') {
    // answer = (new Function ('return '+$show.value))(); 
    result = eval($show.value); // : 수정코드

    $show.value = result;
    $show.setAttribute('value', result);

  }

}

// .(점) 함수
function floatDot(dot) {
  if($show.getAttribute('value')) {
    $show.dot = $show.value + '.'
   } 
  
}

// AC 함수
function allClear() {
  $show.value = '';
  $show.setAttribute('value', '0');
}







//실행부 
(function () {
  const $buttons = document.querySelector('.buttons');
  const $show = document.getElementById('show');
  const $dot = document.querySelector('.dot');
  const $allClear = document.querySelector('.clear');
  const $delete = document.querySelector('.delete');

  // 숫자 버튼 클릭 이벤트 
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.num')) {
      console.log('숫자버튼 클릭댐!');
      addNum(e.target.textContent);

    }
  });

  // 연산 버튼 클릭 이벤트
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.plus') || e.target.matches('.minus') || e.target.matches('.divisor') || e.target.matches('.mul') || e.target.matches('.answer')) {
      calculate(e.target.textContent);

    }

  });

  //  .(점)버튼 클릭 이벤트
  $dot.addEventListener('click', e => {
    if (e.target.matches('.dot')) {
      console.log('점 클릭!');
      floatDot(e.target.textContent);

    }
  })

  // AC버튼 클릭 이벤트
  $allClear.addEventListener('click', e => {
    if (e.target.matches('.clear')) {
    console.log('올클리어 클릭!');
    allClear();

    }

  })


  // C버튼 클릭 이벤트
  $delete.addEventListener('click', e => {
    console.log('삭제 클릭!');
    

  })


})();

// 고쳐야 할 오류
// 연산버튼 클릭시 나오는 것
// 연산시 숫자 합쳐서 나오는 것
// 점 연속 출현

// 할 것
// .버튼 클릭 이벤트 , C버튼 클릭 이벤트 해야함
// ppt

