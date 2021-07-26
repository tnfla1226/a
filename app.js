// 전역변수

// 연산 버튼을 눌렀을 때 저장하는 곳
let firstNum = 0; 
// 숫자 버튼을 눌렀을 때 저장하는 곳
let secondNum = 0; 



// 함수정의부


function addNum(num) {
  const $show = document.getElementById('show');

  // 숫자를 클릭했을 때 0이 안나오게 하는 것
  $show.setAttribute('value', '');

  // 숫자 버튼을 클릭한 숫자를 value 값에 저장하는 것
  $show.value += num;
  $show.setAttribute('value', $show.value);

  // 숫자 버튼을 클릭한 수를 저장하는 것
  secondNum = +$show.value;
  console.log(secondNum);

}


// 함수실행부

(function () {

  const $buttons = document.querySelector('.buttons');
  const $show = document.getElementById('show');


  // 숫자버튼을 눌렀을 때 input창에 숫자가 나오게 하는 것
  $buttons.addEventListener('click', (e) => {
    if (e.target.matches('.num')) {
      console.log('숫자버튼 클릭댐!');
      addNum(+e.target.textContent);
    }
  });

  // 플러스(+) 버튼 클릭 이벤트
  const $plus = document.querySelector('.plus');
  $plus.addEventListener('click', (e) => {
    if (e.target.matches('.plus')) {
      console.log('플러스버튼 클릭!');
      
      // 연산 버튼을 클릭한 수를 저장하는 것
      firstNum = +$show.value;
      console.log(firstNum);
    }

    // input에 빈공간을 만드는 것
    $show.value = '';
  })

   // 플러스(-) 버튼 클릭 이벤트
   const $minus = document.querySelector('.minus');
   $minus.addEventListener('click', (e) => {
     if (e.target.matches('.minus')) {
       console.log('마이너스버튼 클릭!');
       
       // 연산 버튼을 클릭한 수를 저장하는 것
       firstNum = +$show.value;
       console.log(firstNum);
     }
 
     // input에 빈공간을 만드는 것
     $show.value = '';
   })


  // 플러스 합계(=) 버튼 클릭 이벤트
  const $plusAnswer = document.querySelector('.answer');
  $plusAnswer.addEventListener('click', (e) => {
    // 숫자로 입력한 숫자와 플러스 버튼 누르고 입력한 숫자를 더한 값
    const plusSum = firstNum + secondNum;
    $show.setAttribute('value', plusSum);
    $show.value = plusSum;
    console.log(plusSum);
    
  })

  /* 
  마이너스 합계 클릭 이벤트를 하게 되면 플러스 합계 이벤트가 마이너스 합계 이벤트로 바뀜 (마이너스 합계 이벤트가 밑에 설정했기 때문)
  그래서 중복이 안되게 설정하는 것을 해결 해야함 

  // 마이너스 합계(=) 버튼 클릭 이벤트
  const $minusAnswer = document.querySelector('.answer');
  $minusAnswer.addEventListener('click', (e) => {
    // 숫자로 입력한 숫자와 플러스 버튼 누르고 입력한 숫자를 더한 값
    const minusSum = firstNum - secondNum;
    $show.setAttribute('value', minusSum);
    $show.value = minusSum;
    console.log(minusSum);
  })
*/


// .버튼 클릭 이벤트
const $dec = document.querySelector('.dec');
$dec.addEventListener('click', (e) => {
  console.log('점 클릭!');
  
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
