//변수 선언
let val1 = '';
let val2 = '';
let $show = document.getElementById('show');


//함수 정의
function addNum(num) {
  $show.value = $show.value + num;
}






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

    $show.value = result
    $show.setAttribute('value', result);

  }

}


function floatDot(dot) {
  if ($show.hasAttribute('.')) return;
  // console.log(!$show.hasAttribute('+','-','/','*'));
  $show.value = $show.value + dot;
  $show.setAttribute('Dot', dot);
}



//실행부 
(function () {
  const $buttons = document.querySelector('.buttons');
  const $show = document.getElementById('show');
  const $dot = document.querySelector('.dot');

  // 숫자 버튼 클릭 이벤트 
  $buttons.addEventListener('click', e => {
    if (e.target.matches('.num')) {
      console.log('숫자버튼 클릭댐!');
      addNum(e.target.textContent);

    }
  });

  $buttons.addEventListener('click', e => {
    if (e.target.matches('.plus') || e.target.matches('.minus') || e.target.matches('.divisor') || e.target.matches('.mul') || e.target.matches('.answer')) {
      calculate(e.target.textContent);
    }

  });

  //  .버튼 클릭 이벤트
  $dot.addEventListener('click', e => {
    if (e.target.matches('.dot')) {
      console.log('dot click');
      floatDot(e.target.textContent);

    }
  })

  // AC버튼 클릭 이벤트
  const $allClear = document.querySelector('.clear');
  $allClear.addEventListener('click', (e) => {
    console.log('올클리어 클릭!');

  })


  // C버튼 클릭 이벤트
  const $delete = document.querySelector('.delete');
  $delete.addEventListener('click', (e) => {
    console.log('삭제 클릭!');
  })


})();

// 고쳐야 할 오류
// 연산버튼 클릭시 나오는 것
// 연산시 숫자 합쳐서 나오는 것
// 점 연속 출현

// 할 것
// .버튼 클릭 이벤트 ,AC버튼 클릭 이벤트, C버튼 클릭 이벤트 해야함
// ppt
