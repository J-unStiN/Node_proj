function hello() {
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


}

hello();

// 하루 1커밋이라도 하는게 정신이다.
