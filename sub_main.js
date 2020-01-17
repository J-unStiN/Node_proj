function mul(a) {
    var result = a*a;
    return result;
}

console.log(mul(2));
/* 필수!!!!!!!
자바스크립트에서 암묵적으로 지켜지는 약속을 알려드리자면,
함수의 첫 글자를 대문자로 설정하면 객체로 선언한 것임을
알려주는 것입니다. 따라서, 객체를 선언하는 함수라면
첫글자로 대문자로 하고, 일반 함수라면 첫글자를 소문자로
하는 것을 습관으로 해두시면 좋다 */ 

var JunStiN = { 
	name: "J",
	height: 178,
	weight: 67,
	position: "원톱",
	team : "첼시"
};

console.log(JunStiN);

/* 필수!!!!!!!  
자바스크립트에서는 스코프개념이 매우 중요함
다른 언어들은 블록단위이지만 자바스크립트는 함수블록이여서
함수내에서 선언한 거면 다 사용할 수 있음. 
유효범위, Global - Local, 
스코프 체인: 유효범위 - 지역변수로 선언하면 전역에서 참조못함
렉시컬 스코프: 어디서 선언이 아니라, 처음 선언되었을 때 위치가 중요함
호이스팅: 함수안에서 변수를 선언 시 어떤 위치에 있든 시작위치로 끌어올림
*/ 

/* Node.js 의 좋은점?
클로저: 외부 함수 실행이 끝난 후 소멸되어도 
내부함수가 외부함수의 변수에 접근할 수 있는 구조
내부함수를 클로저 함수라고 불림
메모리의 적페가 될 수도 있으니 주의바람!!
밑에는 클로저좀 이해하기위한 예제
*/

function f() {
    var a = [];
    var i;
	
    for(i = 0; i < 3; i++){
      a[i] = function() {
        return i;
        }
    }
    return a;
  }
  
  var b = f();

  console.log( b[0]() ); 
  console.log( b[1]() ); 
  console.log( b[2]() ); 


  function f() {
    var a = [];
    var i;
	
    for(i = 0; i < 3; i++){
      a[i] = ( function(x) { 
        return function() {
          return x;
        }
      })(i);
    }
    return a;
  }
  
  var b = f();

  console.log( b[0]() );
  console.log( b[1]() );
  console.log( b[2]() );

