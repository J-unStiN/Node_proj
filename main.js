function hello() {
    /*
    str1 = "121212"
    str2 = "asjdkasjdk"
    console.log("Hello node"+str1+str2);

    var a = 1, b = 2, c = 3, d = 4;

    // 비교연산자
    a += 1;  //  a = a + 1; 과 같다 
    b -= 1;  //  b = b - 1; 과 같다 
    c *= 2;  //  c = c * 2; 과 같다 
    d /= 2;  //  d = d / 2; 과 같다 
    console.log(a,b,c,d)


    //데이터타입
    var int = 11;
    var string = "hello JS"
    console.log(typeof int)   // Number타입 .toSting을 통해서 10,16,8,2 진수로 변환가능함
    console.log(typeof string)  // String 문자열은 ""와 ''로 가능하다.
    // Boolean 참과 거짓을 구별하는 자료형
    // Array 배열자료형


    // 조건문
    var a = 3;
    var result = '';
    if(a > 2){
        result = 'a is greater than 2';
    }
    else if(a == 2){
        result = 'a is 2';
    }
    else{
        result = 'a is smaller than 2'; 
    }

    console.log(result);
    // 조건문

    //반복문 for문
    var array = new Array();

    for(var i=0; i<10; i++){
        array.push(i);
    }
    console.log(array.toString());


    // for in 문
    var a = ['a', 'b', 'c', 'x', 'y', 'z'];
    var result = '';

    for (var i in a) {   
        result += 'index:'+ i + ', value:'+ a[i] + '\n'; 
    }

    console.log(result);
    //반복문 for문

    //반복문 while
    var i = 0 ;
    do {
        i++;
    }while(i<10)
    console.log(i)
    //반복문 while
    */
/*
함수
함수를 선언할 때는 function 이라는 키워드를 사용하며 
별도로 함수의 반환값에 대한 자료형은 명시하지 않아도 됩니다.
*/

    function sum(a,b) {
        var c = a + b;
        return c;
    }
    
    var add = sum;
    console.log(add(3,3));
}

 
  function one() {
    return 555;
  }
  
  var two = function () {
    return 333;
  }
  
  function invoke_and_add(a, dd) {
    return a() + dd();
  }
  
  console.log(invoke_and_add(one, two));
  // 3






hello();

// 하루 1커밋이라도 하는게 정신이다.