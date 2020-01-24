## Node_proj
하루에 1커밋을 어떻게든 이루는 것이 정신이다.
-------------


### 알아야할 것들
/* 필수!!!!!!!
자바스크립트에서 암묵적으로 지켜지는 약속을 알려드리자면,
함수의 첫 글자를 대문자로 설정하면 객체로 선언한 것임을
알려주는 것입니다. 따라서, 객체를 선언하는 함수라면
첫글자로 대문자로 하고, 일반 함수라면 첫글자를 소문자로
하는 것을 습관으로 해두시면 좋다 */ 

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

/* 필수!!!!!!!
자바스크립트에서 암묵적으로 지켜지는 약속을 알려드리자면,
함수의 첫 글자를 대문자로 설정하면 객체로 선언한 것임을
알려주는 것입니다. 따라서, 객체를 선언하는 함수라면
첫글자로 대문자로 하고, 일반 함수라면 첫글자를 소문자로
하는 것을 습관으로 해두시면 좋다 */ 

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

// 파일 읽는법!!

var fs = require("fs"); 
var cac = require("./test");

fs.readFile('./test_txt.txt', encoding = 'utf-8', function(err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
});


// exports 객체를 활용하여 모듈을 만든 예제
//console.log(cac.div(3));


// 파일 입출력에 대한 방법
/*
fs.readFile(filename, [options], callback) 
: filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출합니다. (비동기적) 
fs.readFileSync(filename, [options]) 
: filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환합니다.(동기적)
fs.writeFile(filename, data, [options], callback) 
: filename의 파일에 [options]의 방식으로 data 내용을 쓴 후 callback 함수를 호출합니다.(비동기적) 
fs.writeFileSync(filename, data, [options]) 
: filename의 파일에 [options]의 방식으로 data 내용을 씁니다.(동기적)
*/


// 비동기에서 콜백함수를 적을 때 첫번 째 인자가 에러, 두번 째 인자를 String으로 받아옴
fs.readFile('test_txt.txt','utf8',function a(err,data) {
	console.log('비동기'+data);	
})

console.log (fs.readFileSync('test_txt.txt','utf8'));


// 예외처리를 하면서 파일을 읽는 방법
fs.readFile('test_txt.txt', 'utf8', function(err, data) { // 존재하지 않는 파일 읽기
    if (err) {
        console.log(err); // 읽기 실패
    }
    else {
        console.log(data); // 읽기 성공
    }
});

/*
이벤트 생성(이벤트 핸들러 연결)
이벤트를 추가하려면, emitter에 이벤트를 연결할 객체, event에 이벤트 이름,
listener에 이벤트 핸들러를 작성하면 됩니다.
addlistener() 메소드와 on() 메소드는 서로 같으니
둘 중 익숙한 것을 사용하면 됩니다. 
*/

/*노드js 에서는 상속을 util모듈의 
util.inherits() 메소드를 통해 쉽게 상속을 할 수 있다.
*/

// util.inherits(Bar, Foo);
// 첫번째 인자가 두번째 인자를 상속받음
