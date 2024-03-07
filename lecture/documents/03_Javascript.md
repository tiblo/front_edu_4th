# Javascript 기초
## Data Type
- String - 따옴표(', ")를 사용하여 표현
- Number - 정수와 실수
- Boolean - true와 false
- Undefined - 값이 할당되지 않은 상태
- Null - 변수를 의도적으로 비워놓음
- Object - 객체 데이터(key, value 쌍으로 구성되는 데이터 묶음)
- Array - 여러 데이터를 순차적으로 저장한 배열

```javascript
let str = "문자열";
let num = 100;
let bool = true;
let undef;
let nl = null;
let obj = {
    a : "문자열",
    b : 200
};
let arry = [1, 2, false, 4, "5"];
```

<br>

## 변수(variable)
- 데이터를 저장하고 참조(사용)하는 공간
- var, let, const로 선언
  - 변수는 먼저 선언하고 사용해야 함

```javascript
//typeof(변수) : 변수의 자료형을 출력
console.log("str", str, typeof(str));
console.log("num", num, typeof(num));
console.log("bool", bool, typeof(bool));
console.log("undef", undef, typeof(undef));
console.log("nl", nl, typeof(nl));
console.log("obj", obj, typeof(obj));
console.log("arry", arry, typeof(arry));

//Object member
console.log("obj.a", obj.a, typeof(obj.a));
console.log("obj.b", obj.b, typeof(obj.b));
//Array
console.log("arry[0]", arry[0], typeof(arry[0]));
console.log("arry[2]", arry[2], typeof(arry[2]));
console.log("arry[4]", arry[4], typeof(arry[4]));
console.log(arry[4]);//숫자문자열을 출력하면 숫자와 구분되지 않는다.
```

- const(상수)는 데이터의 재할당이 불가능한 공간(초기화한 데이터 유지)

```javascript
const cs = "abc";
// cs = "edf"; // 에러 발생
```

var과 let의 차이
```javascript
console.log("v1", v1);  //hoisting 가능
var v1 = 100;
console.log("v1", v1);
var v1 = 200;   //동일한 변수 재선언 가능
console.log("v1", v1);

// console.log("l1", l1); //에러 발생. hoisting 불가
let l1 = 100;
console.log("l1", l1);
// let l1 = 200;        //에러 발생. 재선언 불가
// console.log("l1", l1);
```

<br>

## 연산자(javascript만의 연산자)
```javascript
let a = 7;
let b = 3;
let c = "3";

console.log("a : ", a, ", b : ", b, ", c: ", c);

console.log("+ : ", a + b);
console.log("+ : ", b + c);//숫자 + 문자열 -> 문자열 + 문자열
                           // : 두 문자열의 결합으로 처리
console.log("- : ", a - b);//+를 제외한 나머지 연산에서는 
                           //숫자문자열도 숫자로 변환하여 처리 가능
console.log("* : ", a * b);
console.log("/(실수) : ", a / b);//정수 나눗셈도 실수로 변환하여 처리
console.log("/(정수) : ", parseInt(a / b));//몫을 구할 경우는 parseInt() 사용
console.log("% : ", a % b);//나머지 연산

console.log("a > b : ", a > b);
console.log("a >= b : ", a >= b);
console.log("a < b : ", a < b);
console.log("a <= b : ", a <= b);
console.log("a == b : ", a == b);
console.log("a != b : ", a != b);
```

- 비교 연산자
  - ==, != : 값만 비교
  - ===, !== :값과 타입을 모두 비교

```javascript
let d = 10;
let e = "10";
console.log("d : ", d, ", e : " + e);

console.log("== : ", d == e);
console.log("=== : ", d === e);
console.log("!= : ", d != e);
console.log("!== : ", d !== e);
```

<br>

## 제어문
### 조건문 
- if, else if
    - 특정 조건이 참인 경우 수행되는 코드 블록을 정의

```javascript
let sw1 = false;
if(sw1){
    let conf = confirm("실행할까요?");

    if(conf == true){
        alert("실행을 선택하였습니다.");
    }
    else {
        alert("실행하지 않습니다.");
    }
}

let sw2 = false;
if(sw2){
    let prom = prompt("이름를 입력하세요.");
    console.log(prom);
    if(prom == ""){
        alert("이름 입력이 필요합니다.");
    }
    else if(prom == null){
        alert("취소하였습니다.");
    }
    else {
        alert(prom + "님 반갑습니다.");
    }
}
```

- switch
    - 입력값에 따라 처리를 다르게 하는 경우의 코드 블록을 정의

```javascript
let sw3 = true;
let fruits = ["사과", "배", "바나나"];
if(sw3){
    let fr = prompt(fruits + " 중에 하나를 선택하세요.");
    
    switch(fr){
        case "사과":
            alert("사과를 선택하였습니다.");
            break;
        case "배":
            alert("배를 선택하였습니다.");
            break;
        case "바나나":
            alert("바나나를 선택하였습니다.");
            break;
        default:
            alert("3개 중에 하나를 선택하세요.");
    }
}
```


- 반복문
    - while
        - 조건이 성립하는 경우 계속 반복하는 코드 블록을 정의
    - for
      - 주어진 횟수에 맞도록 반복하는 코드 블록을 정의

```javascript
let cnt = confirm("반복할까요?");

while(cnt){
    document.write("안녕하세요.<br>");
    cnt = confirm("계속할까요?");
}

let idx = prompt("반복 횟수를 입력하세요.");

for(let i = 0; i < idx; i++){
    document.write("Hi~~~<br>");
}
```

<br>

## 함수(function)
특정 동작(기능)을 수행하는 일부 코드의 집합

함수는 먼저 선언 후 사용해야 함

함수 선언

```javascript
funtion functionName(Parameter_List){
    Operation_Statement;
}
```

함수 사용

```javascript
functionName(Parameter_List);
```

### 예제
```javascript
//함수 선언
function helloFunc(){
    console.log(1234);
}

//함수 사용
helloFunc();

//데이터(결과값) 반환 함수
function returnFunc(){
    return 123;
    // console.log("ABC");//return 다음 문장은 실행 안됨
}

const a = returnFunc();
console.log(a);

//함수 재사용
function sum(x, y){
    return x + y;
}

let f = sum(1, 2);
let s = sum(7, 12);
let t = sum(2, 4);

console.log(f, s, t);

//익명함수(함수 표현식) - 함수의 hoisting 방지
const world = function(){
    console.log("hello world~");
}
world();
```

<div class="page">

# DOM(Document Object Model)
문서객체모델이라고 하며 HTML 혹은 XML문서의 구조화된 표현을 제공하는 표준

자바스크립트로 DOM 구조에 접근할 수 있는 방법이 제공되며 이를 통해 문서 구조, 스타일, 내용등을 변경

![alt text](image.png)

<br>

## HTML 요소 핸들링
HTML DOM 요소에 접근하는 방법은 태그이름, 아이디, 클래스, 이름 등을 이용해 특정 노드 객체를 선택(css의 선택자와 유사)

### HTML 요소선택
- getElement\[s]ByXXX() : 태그이름, class, id로 요소를 선택
- queryselector\[All]() : css의 선택자를 사용하여 요소를 선택하는 방식

<br>

#### 예제
css
```css
div {
    margin: 20px;
    width: 80%;
    border: 1px solid;
    padding: 10px;
    text-align: center;
}
```

<div class="page">

html
```html
<body>
    <h1>DOM Selector</h1>
    <p>ES6 문법에서 querySelector와 querySelectorAll이 추가됨</p>
    <div>
        <h2>getElementsByTagName</h2>
        <span>항목1</span>
        <span>항목2</span>
        <span>항목3</span>
    </div>
    <hr>
    <div>
        <h2>getElementsByClassName</h2>
        <p class="c1">단락</p>
        <span class="c1">항목</span>
        <b class="c1">강조</b>
    </div>
    <hr>    
    <div>
        <h2>getElementById</h2>
        <button id="b1">버튼1</button>
        <button id="b1">버튼2</button>
        <button id="b2">버튼3</button>
        <button id="b2">버튼4</button>
    </div>
    <hr>
    <div>
        <h2>querySelector</h2>
        <button id="b3">버튼1</button>
        <button id="b3">버튼2</button>
        <button class="b4">버튼3</button>
        <button class="b4">버튼4</button>
    </div>
    <hr>
    <div>
        <h2>querySelectorAll</h2>
        <button id="b5">버튼1</button>
        <button id="b5">버튼2</button>
        <button class="b6">버튼3</button>
        <button class="b6">버튼4</button>
    </div>
</body>
```

javascript
```javascript
const spans = document.getElementsByTagName("span");
console.log(spans);

const cls = document.getElementsByClassName("c1");
console.log(cls);

const btn1 = document.getElementById("b1");
console.log(btn1);
const btn2 = document.getElementById("b2");
console.log(btn2);
//동일한 id여도 1개만 선택

const btn3 = document.querySelector("#b3");
console.log(btn3);
const btn4 = document.querySelector(".b4");
console.log(btn4);
//동일한 id나 class여도 1개만 선택

const btn5 = document.querySelectorAll("#b5");
console.log(btn5);
const btn6 = document.querySelectorAll(".b6");
console.log(btn6);
//동일한 id나 class를 모두 선택
```

<br>

### HTML 이벤트 핸들러 추가
- 이벤트 속성에 함수를 할당하는 방식

    ``document.getElementById("id_value").onclick = function() { code };``

- addEventHandler()를 활용하는 방식
    ``document.getElementById("id_value").addEventHandler("click", function() { code });``

<br>

#### 예제
css
```css
div.box {
    margin: 20px;
    width: 80%;
    border: 1px solid;
    padding: 10px;
    text-align: center;
}

.btn2 {
    width: 100px;
    height: 30px;
    background-color: aqua;
    margin: 0 auto;
    border: 1px solid;
}
.btn2:hover {
    background-color: aquamarine;
}
```

html
```html
<body>
    <div class="box">
        <h2>이벤트 처리</h2>
        <button id="btn1">버튼1</button><p/>
        <div class="btn2">버튼2</div>
    </div>
</body>
```

javascript
```javascript
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

btn1.onclick = function() {
    alert("버튼1 눌림!!");
}

btn2.addEventListener("click", function(){
    alert("버튼2 눌림!!")
});
```

<br>

## DOM 활용
### 스타일 변경
해당 요소의 style 속성변경, style 객체변경, 클래스 지정등의 방법으로 변경

style 속성변경

``document.getElementById('box1').setAttribute('style','background-color:yellow');``

style 객체 변경(style.properties)

``document.getElementById('box1').style.backgroundColor = 'yellow';``

클래스 지정 : 별도의 디자인 클래스를 지정해 놓고 해당 요소의 class 속성을 지정하는 형태

``document.getElementById('box1').className = 'bgyellow';``

<div class="page">

#### 예제
css
```css
div.box {
    margin: 20px;
    width: 80%;
    border: 1px solid;
    padding: 10px;
    text-align: center;
}
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.item {
    width: 100px;
    height: 50px;
    border: 1px solid;
}
.btn-area {
    margin-top: 50px;
}
.bgyellow {
    background-color: yellow;
    border: 2px dotted green;
}
```

html
```html
<body>
    <div class="box">
        <h2>이벤트 처리</h2>
        <button id="btn1">버튼1</button><p/>
        <div class="btn2">버튼2</div>
    </div>
    <div class="box">
        <h2>스타일 변경</h2>
        <div class="container">
            <div class="item" id="item1"></div>
            <div class="item" id="item2"></div>
            <div class="item" id="item3"></div>
        </div>
        <div class="btn-area">
            <button id="btn3">스타일1</button>
            <button id="btn4">스타일2</button>
            <button id="btn5">스타일3</button>
        </div>
    </div>
</body>
```

javascript
```javascript
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");

btn1.onclick = function() {
    alert("버튼1 눌림!!");
}

btn2.addEventListener("click", function(){
    alert("버튼2 눌림!!")
});

const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");

btn3.onclick = function() {
    item1.setAttribute("style", "background-color: red");
}
btn4.onclick = function() {
    item2.style.border = "3px dashed blue";
}
btn5.onclick = function() {
    item3.className = "item bgyellow";
}
```