# CSS(Cascading Style Sheets)
HTML 문서의 요소에 스타일을 적용하는 언어

요소가 어떻게 보여질 것인지를 기술
* style 이란 웹 문서의 글꼴이나 색상, 정렬, 배치, 크기 등의 겉모습

형식
```
selector {
    property : value;
    ...
}
```

> selector : 선택자. HTML 요소를 선택하는 지시자<br>
property : 요소에 적용할 스타일 속성<br>
value : 스타일 속성의 값

<br>

## CSS 작성 위치

### 인라인 스타일
* HTML 태그의 style 속성에 작성
* 해당 요소에만 스타일 적용

### 내부 스타일
* \<head> 요소 내부의 \<style> 영역에 작성
* 한 문서 내부를 범위로 하여 selector로 선택할 수 있는 모든 요소에 동일한 스타일을 적용

### 외부 스타일
* 독립된 css 파일을 생성하여 작성 - ‘파일명.css’
* \<link> 태그를 통해 연결하면 사이트 내의 모든 문서에 동일한 스타일을 적용

> 참고) 상위 요소에 적용한 스타일은 하위 요소에도 반영됨(상속)

#### 외부 스타일 적용 방식
* \<link> 방식
    * html 파일이 있는 폴더 내에 css 폴더를 생성하여 style.css 파일을 작성
```html
<link rel=’stylesheet’ href=’css/style.css’>
```

* import 방식
    * css 파일 또는 \<style> 요소 내부에서 사용
```html
<style>
    @import url(”css/style.css”);
    ...
</style>
```

### 예제
#### html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 위치</title>
    <link rel="stylesheet" href="css/style1.css">
    <style>
        @import url("css/style2.css");
    </style>
</head>
<body>
    <h1>스타일시트의 위치</h1>
    <p style="color: blue;">인라인 스타일</p>
</body>
</html>
```

#### css
css/style1.css
```css
body {
    background-color: pink;
}
```
css/style2.css
```css
h1 {
    border: 1px solid red;
}
```

<div class="page">

# 기본 선택자(Simple Selectors)
## 전체 선택자(Universal Selector) - * 
모든 요소를 선택하여 동일한 스타일을 적용

```css
* {
    font-family: 'Courier New', Courier, monospace;
}
```

## 태그 선택자(Type Selector) - 태그명(h1, p, div 등)
태그 이름으로 요소를 선택

문서 내의 모든 같은 태그를 선택하여 동일한 스타일을 적용

```css
p1 {
    color: brown;
}
```

## class 선택자(Class Selector)
태그의 class 속성값으로 요소를 선택

태그의 종류와 상관없이 같은 클래스값을 가진 모든 요소를 선택하여 스타일 적용

```css
.c1 {
    background-color: yellow;
}
```

## id 선택자(Id Selector)
태그의 id 속성값으로 요소를 선택

태그의 종류와 상관없이 같은 id값을 가진 모든 요소를 선택하여 스타일 적용

```css
#i1 {
    background-color: red;
    color: yellow;
}
```

<br>

## html
```html
<body>
    <h1>기본 선택자(Simple Selector)</h1>

    <h2>전체 선택자(Universal Selector) - *</h2>
    <p>모든 요소를 선택하여 동일한 스타일을 적용</p>
    <hr>
    
    <h2>태그 선택자(Type Selector)</h2>
    <p1>태그 이름으로 요소를 선택</p1><br>
    <p1>문서 내의 모든 같은 태그를 선택하여 동일한 스타일을 적용</p1>
    <hr>

    <h2>class 선택자(Class Selector) - .</h2>
    <p class="c1">태그의 class 속성값으로 요소를 선택</p>
    <div class="c1">태그의 종류와 상관없이 같은 class를 가진 모든 요소를 선택하여 
        스타일을 적용</div>
    <div class="c2">같은 태그여도 다른 class면 선택되지 않음</div>
    <hr>
    
    <h2>id 선택자(Id Selector) - #</h2>
    <p id="i1">태그의 id 속성값으로 요소를 선택</p>
    <p id="i2">태그의 종류와 상관없이 같은 id를 가진 모든 요소를 선택하여
         스타일을 적용</p>
    <p id="i1">같은 id를 여러 요소에서 사용하는 것은 권장하지 않음</p>
</body>
```

<div class="page">

# 조합 선택자(Combinators)
## 일치 선택자(Basic Combinator)
두 선택자를 빈칸없이 연속으로 작성

태그와 class, 태그와 id, class와 id 등의 조합으로 사용

```css
p#i1 { /* 태그 선택자 + id 선택자 */
    color: blue;
}
span.c1 { /* 태그 선택자 + class 선택자 */
    color: red;
}
```

## 자식 선택자(Child Combinator) - selector1```>```selector2
selector1의 자식 요소 중 selector2에 해당하는 요소를 선택하여 스타일 적용

```css
p>span#i3 {
    color: red;
}
```

## 후손 선택자(Descendant Combinator) - selector1``` ```selector2
두 선택자 사이에 공백(' ')

selector1의 후손 요소 중 selector2에 해당하는 요소를 선택하여 스타일 적용

```css
.c3 #i6 {
    background-color: green;
}
```

## 인접 형제 선택자(Adjacent Sibling Combinator) - selector1```+```selector2
selector1의 바로 다음 요소가 selector2인 경우 선택하여 스타일 적용

```css
.sc11+.sc12 {
    color: blueviolet;
    font-weight: bold;
}
```

## 일반 형제 선택자(General Sibling Combinator) - selector1```~```selector2
selector1 다음의 모든 요소 중 selector2에 해당하는 요소를 선택하여 스타일 적용

```css
.sc21~.sc22 {
    color: red;
    font-weight: bold;
}
```

<br>

## html
```html
<body>
    <h1>복합 선택자(Combinator selector)</h1>

    <h2>일치 선택자(Basic Combinator)</h2>
    <p id="i1">두 선택자를 빈칸없이 연속으로 작성</p>
    <p class="c1">
        태그와 class, <span class="c1">태그와 id,</span> class와 id 등의 
        조합으로 사용
    </p>
    <hr>

    <h2>자식 선택자(Child Combinator) - &gt;</h2>
    <p>
        <span id="i2">selector1</span>
        <span id="i3">&gt;</span>
        <span id="i2">selector2</span>
    </p>
    <p class="c2">
        selector1의 자식 요소 중 selector2에 해당하는 요소를 선택하여 
        스타일을 적용
    </p>
    <hr>

    <h2>후손 선택자(Descendant Combinator)</h2>
    <div class="c3">
        <p id="i5">
            selector1<span id="i6">&nbsp;&nbsp;</span>selector2
        </p>
        <p id="i6">
            selector1의 후손 요소 중 selector2에 해당하는 요소를 선택하여 
            스타일을 적용
        </p>
    </div>
    <hr>

    <h2>인접 형제 선택자(Adjacent Sibling Combinator)</h2>
    <p>selector1+selector2</p>
    <p>
        <span class="sc11">selector1의</span>
        <span class="sc12">바로 다음 요소가</span>
        <span class="sc11">selector2인</span>
        <span class="sc13">경우 선택하여</span>
        <span class="sc12">스타일을 적용</span>
    </p>
    <hr>

    <h2>일반 형제 선택자(General Sibling Combinator)</h2>
    <p>selector1~selector2</p>
    <p>
        <span class="sc21">selector1의</span>
        <span class="sc22">바로 다음 요소가</span>
        <span class="sc23">selector2인</span>
        <span class="sc24">경우 선택하여</span>
        <span class="sc22">스타일을 적용</span>
    </p>
</body>
```

<div class="page">

# 가상 클래스 선택자(Pseudo-class)
## :link
링크 요소를 선택

```css
#a1:link {
    color: red;
}
```

## :visited
연결된 페이지가 이미 방문한 페이지의 링크라면 선택 

```css
#a3:visited {
    color: green;
}
```

## :hover
요소에 마우스 커서가 올라간 동안 선택

```css
div:hover {
    background-color: yellow;
}
```

## :active
요소를 클릭하는 동안 선택

```css
div:active {
    background-color: blue;
}
```

## :focus
요소가 포커스를 가진 동안 선택

```css
#input1:focus {
    background-color: #000;
    color: white;
}
```

## :first-child
형제 요소 중 첫 번째 요소라면 선택

```css
li:first-child {
    background-color: yellow;
}
```

## :last-child
형제 요소 중 마지막 요소라면 선택

```css
li:last-child {
    background-color: green;
}
```

## :nth-child(n)
형제 요소 중 n에 해당하는 요소를 선택

even(짝수), odd(홀수), 또는 간단한 수식으로 다수의 요소를 선택

```css
li:nth-child(odd) {
    border: 1px dashed;
}
```

<br>

## html
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo-class selector</title>
    <style>
        div {
            width: 100px;
            height: 50px;
            border: 1px solid;
        }
    </style>
</head>
<body>
    <h1>가상 클래스 선택자(Pseudo-class selector)</h1>

    <h2>selector:link</h2>
    <a href="test.html" id="a1">테스트페이지</a><br>
    <a href="test1.html" id="a2">테스트페이지1</a><br>
    <hr>

    <h2>selector:visited</h2>
    <a href="test.html" id="a3">테스트페이지</a><br>
    <hr>

    <h2>selector:hover, selector:active</h2>
    <div></div>
    <hr>

    <h2>selector:focus</h2>
    <input type="text">
    <input type="text" id="input1">
    <hr>

    <h2>selector:first-child, selector:last_child, selector:nth-child(n)</h2>
    <ul>
        <li>아메리카노</li>
        <li>카페라떼</li>
        <li>카푸치노</li>
        <li>녹차</li>
        <li>유자차</li>
    </ul>
</body>
```

<div class="page">

# 가상 요소 선택자(Pseudo-Elements)
## ::before
요소의 내용(content) 앞에 가상의 요소를 생성하여 삽입

```css
#i1::before {
    content: "";
    display: block;
    width: 300px;
    height: 300px;
    background-image: url("images/cake1.png");
    background-size: cover;
}
```

## ::after
요소의 내용(content) 뒤에 가상의 요소를 생성하여 삽입

```css
#i2::after {
    content: "";
    display: block;
    width: 300px;
    height: 300px;
    background-image: url("images/cake2.png");
    background-size: cover;
}
```

<br>

## html
```html
<body>
    <h1>가상 요소 선택자(Pseudo-elements selector)</h1>
    <h2>selector::before</h2>
    <p id="i1">바다 케이크</p>
    <hr>

    <h2>selector::after</h2>
    <p id="i2">바다 케이크</p>
</body>
```

<div class="page">

# 속성 선택자(Attribut)
## [attr]
지정한 속성이 있는 요소를 선택

```css
input[type] {
    background-color: yellow;
}
```

## [attr="value"]
지정한 속성과 값이 일치하는 요소를 선택

```css
input[type='password'] {
    color: red;
}
```

<br>

## html
```html
<body>
    <h1>속성 선택자(Attribut selector)</h1>
    <table>
        <tr>
            <th>속성없음</th>
            <td><input></td>
        </tr>
        <tr>
            <th>[attr]</th>
            <td><input type="text"></td>
        </tr>
        <tr>
            <th>[attr='value']</th>
            <td><input type="password"></td>
        </tr>
    </table>
</body>
```

<div class="page">

# Box Model
모든 요소는 사각형 상자(Box) 형태로 문서에 배치됨

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/2bbe851f-6ec5-4dc0-90e1-c75c40bff0b4)

## width, height
요소의 너비와 높이를 지정

### 표현 단위
* px - 픽셀
* % - 상대적 백분율
* em – 부모 요소의 글꼴 크기
* rem - 루트 요소(html)의 글꼴 크기
* vw - 뷰포트 가로 너비의 백분율
* vh - 뷰포트 세로 너비의 백분율

> Viewport : (Mobile) Device의 가로, 세로. 반응형 웹 제작에 활용되는 화면의 개념

<br>

## margin
요소의 외부 여백을 지정하는 속성
- margin : ``top right bottom left``;
- margin : ``top botton`` ``right left``;
- margin : ``top`` ``right left`` ``bottom``;
- margin : ``top`` ``right`` ``bottom`` ``left``;

<br>

<div class="page">

## Padding
요소의 내부 여백을 지정하는 속성
- padding : ``top right bottom left``;
- padding : ``top botton`` ``right left``;
- padding : ``top`` ``right left`` ``bottom``;
- padding : ``top`` ``right`` ``bottom`` ``left``;

<br>

## border
요소의 테두리 선을 지정하는 속성

- border: ``선-두께`` ``선-종류`` ``선-색상``;

<br>

## border-radius
요소의 모서리를 둥글게 설정하는 속성

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/5eea2265-8e5c-43cc-965f-45855acf463d)

(이미지 출처 : https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)

<br>

### 예제
#### css
```css
* {
    padding: 0;
    margin: 0;
}
.outer {
    width: 800px;
    height: 600px;
    border: 1px dotted red;
}
.inner {
    width: 400px;
    height: 300px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 20px;
    padding: 20px;
}
.content {
    background-color: yellow;
    width: 100%;
    height: 100%;
}
```

#### html
```html
<body>
    <h1>Box Model</h1>
    <div class="outer">
        <div class="inner">
            <div class="content"></div>
        </div>
    </div>
</body>
```

<div class="page">

# Box Sizing
요소의 크기 계산 기준을 지정

> margin은 포함되지 않음

설정 값
* content-box
    * 요소의 내용(content)으로 크기 계산
    * 실제 크기 = 내용크기 + padding + border<br>
        ```width 200px, padding 10px, border 1px -> width = 222px```

* border-box
    * 크기에 padding과 border가 포함된어 계산
    * 실제 크기 = width 또는 height<br>
    ```width 200px, padding 10px, border 1px -> width = 200px```

<br>

## 예제
### css
```css
div {
    width: 400px;
    height: 200px;
    margin: 20px;
    padding: 50px;
    border: 3px solid red;
}
.b1 {
    box-sizing: content-box;
}
.b2 {
    box-sizing: border-box;
}
```

### html
```html
<body>
    <h1>Box Sizing</h1>
    <h2>content-box</h2>
    <div class="b1"></div>
    <p id="b1_size"></p>
    <hr>
    <h2>border-box</h2>
    <div class="b2"></div>
    <p id="b2_size"></p>
</body>
```

### Javascript
div의 크기와 테두리, 패딩, 내부 크기를 산출하여 출력하는 코드
```javascript
const boxs = document.getElementsByTagName("div");
const ps = document.getElementsByTagName("p");
let box1Size = `${boxs[0].offsetWidth}px X ${boxs[0].offsetHeight}px`;
let box2Size = `${boxs[1].offsetWidth}px X ${boxs[1].offsetHeight}px`;

let box1Border = getComputedStyle(boxs[0]).getPropertyValue("border-width");
let box1Padding = Number(getComputedStyle(boxs[0])
                    .getPropertyValue("padding").replace("px",""));    
let box1Content = `${boxs[0].clientWidth-(2*box1Padding)}px
                    X ${boxs[0].clientHeight-(2*box1Padding)}px`;
let box2Border = getComputedStyle(boxs[1]).getPropertyValue("border-width");
let box2Padding = Number(getComputedStyle(boxs[1])
                    .getPropertyValue("padding").replace("px",""));
let box2Content = `${boxs[1].clientWidth-(2*box2Padding)}px
                    X ${boxs[1].clientHeight-(2*box2Padding)}px`;

ps[0].innerHTML = 
    `content-box(Element width = width + 2*border_width + 2*padding)<br>
    - size : ${box1Size}<br>
    - border : ${box1Border}<br>
    - padding : ${box1Padding}px<br>
    - content size : ${box1Content}`;
ps[1].innerHTML = 
    `border-box(Element width = width)<br>
    - size : ${box2Size}<br>
    - border : ${box2Border}<br>
    - padding : ${box2Padding}px<br>
    - content size : ${box2Content}`;
```

<div class="page">

# 글자 관련 속성
## color
글자의 색상을 지정하는 속성

```css
#p1 {
    color: red;
}
```

<br>

## text-align
문자의 정렬 방식

* 요소의 내용 또는 하위 요소를 정렬
    * left, center, right

테이블 CSS
```css
table {
    width: 80%;
}
th {
    width: 30%;
}
th:first-child {
    width: 10%;
}
img {
    width: 50px;
    height: 50px;
}
```

```html
<body>
    <h2>text-align</h2>
    <p>요소의 내용(글자) 또는 하위 요소의 정렬 방식을 지정</p>
    <table border="1">
        <tr>
            <th></th>
            <th>left(default)</th>
            <th>center</th>
            <th>right</th>
        </tr>
        <tr>
            <td>Text</td>
            <td style="text-align: left;">1</td>
            <td style="text-align: center;">2</td>
            <td style="text-align: right;">3</td>
        </tr>
        <tr>
            <td>Element</td>
            <td style="text-align: left;">
                <img src="images/cake1.png"></img>
            </td>
            <td style="text-align: center;">
                <img src="images/cake1.png"></img>
            </td>
            <td style="text-align: right;">
                <img src="images/cake1.png"></img>
            </td>
        </tr>
    </table>
</body>
```

<br>

## text-decoration
글자의 장식선을 지정하는 속성

* none(선없음), underline(밑줄), overline(윗줄), line-through(중앙선)

```html
<body>
    <h2>text-decoration</h2>
    <p style="text-decoration: none;">속성값 - none(default)</p>
    <p style="text-decoration: underline;">속성값 - underline</p>
    <p style="text-decoration: overline;">속성값 - overline</p>
    <p style="text-decoration: line-through;">속성값 - line-through</p>
</body>
```

<br>

## line-height
한줄의 높이. 행간 간격

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/7c24d131-2b82-4988-974d-533d2ec8b330)

(이미지 출처 : https://www.w3.org/TR/css-inline-3/)


css
```css
.box {
    width: 400px;
    height: 250px;
    border: 1px dotted;
}
```
html
```html
<body>
    <h2>line-height</h2>
    <div class="box">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam rhoncus nunc et congue convallis.
            Duis lorem mauris, varius vitae rhoncus suscipit, mattis et est.
            Praesent porta lacus sit amet ipsum volutpat auctor.
            Mauris faucibus nulla commodo leo cursus, eget sollicitudin velit sodales.
            Vivamus vitae urna ornare, condimentum felis at, elementum nunc.
        </p>
    </div>
    <div class="box">
        <p style="line-height: 2em;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam rhoncus nunc et congue convallis.
            Duis lorem mauris, varius vitae rhoncus suscipit, mattis et est.
            Praesent porta lacus sit amet ipsum volutpat auctor.
            Mauris faucibus nulla commodo leo cursus, eget sollicitudin velit sodales.
            Vivamus vitae urna ornare, condimentum felis at, elementum nunc.
        </p>
    </div>
</body>
```

<div class="page">

# 글꼴 관련 속성

## font-style
글씨체의 모양  
굵은 글씨(Bold), 이텔릭(Italic)  

```html
<body>
    <h2>font-style</h2>
    <p>
        글씨체의 모양을 지정.
        <span style="font-style: oblique;">oblique(기울임)</span>,
        <span style="font-style: italic;">italic(이텔릭)</span>
        등이 있음(동일하게 표현됨)
    </p>
</body>
```

<br>

## font-size
글자의 크기  
기본 크기 - 16px  

```html
<body>
    <h2>font-size</h2>
    <p style="font-size: 1em;">
        글씨체의 크기를 지정.<br>
        em : <span style="font-size: 1.5em;">1.5em</span><br>
        rem : <span style="font-size: 1.5rem;">1.5rem</span>
    </p>
</body>
```

<br>

## font-weight
글자의 두께  
normal(기본), bold(두껍게)  

```html
<body>
    <h2>font-weight</h2>
    <p>
        글씨체의 두께를 지정.
        <span style="font-weight: bold;">bold</span>,
        <span style="font-weight: lighter;">lighter, 
            <span style="font-weight: bolder;">bolder</span>
        </span>, 등이 있음
    </p>
</body>
```

<br>

## font-family
서체 지정 속성  
font-family: 글꼴1, "글꼭2", ... 글꼴계열;  
띄어쓰기 등 특수 문자가 들어간 경우 큰 따옴표로 묶음  

css
```css
.box1 {
    font-family: 'Courier New', batang;
    font-size: 1.2em;
}

.box2 {
    font-family: 'Nanum Pen Script', cursive;
    font-size: 2em;
}
```
html
```html
<body>
    <h2>font-family</h2>
    <p>글꼴을 지정하는 속성</p>
    <div class="box1">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            동해물과 백두산이 마르고 닳도록..
        </p>
    </div>
    <div class="box2">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            동해물과 백두산이 마르고 닳도록..
        </p>
    </div>
</body>
```

<div class="page">

## 웹 폰트(구글 폰트 등) 사용
https://fonts.google.com/

\<link>와 import 방식으로 문서에 추가 후 font-family 속성을 사용하여 지정

```css
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
```

<div class="page">

# 배경 관련 속성
## background-color
요소의 배경 색상

```css
.box1 {
    width: 200px;
    height: 50px;
    border: none;
    /* background-color: red; */
    /* background-color: #ff0000; */
    /* background-color: rgb(255, 0, 0); */
    background-color: rgba(255,0,0,0.5);
}
```

### 색상 표현
- 색상 이름 - 브라우저에서 제공하는 색상(red, green, tomato 등)
- 16진수 코드(HEX, Hexadecimal Colors) 
  - 검정색 : #000000
- rgb 함수 - 빨간색(Red), 초록색(Green), 파란색(Blue)로 표현. 
  - 각각 0~255. 
  - 초록색 : rgb(0, 255, 0)
- rgba 함수 - 투명도(Alpha channel)을 포함
    - 반투명 초록색 : rgba(0, 255, 0, 0.5)

<br>

## background-image
요소의 배경에 이미지 삽입  
- background-image: url("이미지파일");

<br>

## background-repeat
배경 이미지 반복 여부 설정
- repeat(가로, 세로 반복)
- repeat-x(가로 반복)
- repeat-y(세로 반복)
- no-repeat

<div class="page">

```css
.box2 {
    background-image: url("images/mlogo.png");
    background-repeat: no-repeat;
    /* background-repeat: repeat; */
    /* background-repeat: repeat-x; */
    /* background-repeat: repeat-y; */
}
```

<br>

## background-position
배경 이미지 위치 설정
- top, bottom, left, right, center
- x, y 좌표 값 형태의 px 수치

```css
.box3 {
    background-image: url("images/mlogo.png");
    background-repeat: no-repeat;
    background-position: top right;
    /* total 9 types */
    /* top, bottom, left, right, center */
    /* top left, top right, bottom left, bottom right */
}
```

<br>

## background-size
배경 이미지 크기 설정
- 표현 단위를 사용한 수치를 적용하거나 정해진 값을 사용할 수 있음.
- cover : 비율 유지. 요소의 너비에 이미지 너비를 맞춤
- contain : 비율 유지. 요소의 내부에 모든 이미지가 나오도록 축소 또는 확대

```css
.box4 {
    background-image: url("images/mlogo.png");
    background-repeat: no-repeat;
    background-position: center;
    /* background-size: auto; */
    /* background-size: 100px 50%; */
    /* background-size: contain; */
    background-size: cover;
}
```

### 예제용 추가 코드
css
```css
div {
    width: 400px;
    height: 300px;
    border: 1px dotted;
}
```
html
```html
<body>
    <h1>배경 관련 속성</h1>
    <h2>background-color</h2>
    <p>요소의 배경 색상</p>
    <div class="box1"></div>
    <hr>

    <h2>Background-image, repeat</h2>
    <p>요소의 배경 이미지 삽입 및 반복 여부 지정</p>
    <div class="box2"></div>
    <hr>

    <h2>Background-position</h2>
    <p>요소의 배경 이미지 위치 지정</p>
    <div class="box3"></div>
    <hr>

    <h2>Background-size</h2>
    <p>요소의 배경 이미지 크기 지정</p>
    <div class="box4"></div>
    <hr>
</body>
```

<div class="page">

# transition
요소의 전환(시작과 끝) 효과를 지정하는 속성

- transition: ``속성명`` ``지속시간`` ``타이밍함수`` ``대기시간``;

- 속성명 : 배경색(이미지), 너비/높이, 글자색 등 대부분의 속성 사용 가능
- 지속시간 : 전환 효과의 지속 시간(second)
- 타이밍 함수 : 지속 시간 내에서 전환 효과의 타이밍 함수를 지정
  - ease : 느리게 시작 - 빠르게 진행 - 느리게 멈춤
  - linear : 일정한 속도
  - ease-in : 느리게 시작 - 빠르게 멈춤
  - ease-out : 빠르게 시작 - 느리게 멈춤
  - ease-in-out : 느리게 시작 - 일정한 속도(linear) - 느리게 멈춤
- 대기 시간 : 전환 효과 시작 전의 지연(대기) 시간 설정(second)

css
```css
div {
    width: 100px;
    height: 100px;
}
.box1 {
    background-color: red;
    transition: background-color 2s;
    /* transition: width 2s; */
    /* transition: background-color 2s, width 2s; */
}
.box1:hover {
    background-color: yellow;
    /* width: 200px; */
}
.box2 {
    background-color: green;
    transition: width 5s linear;
    /* ease, linear, ease-in, ease-out, ease-in-out */
}
.box2:hover {
    width: 500px;
}
.box3 {
    background-color: blue;
    transition: width 5s linear 1s;
}
.box3:hover {
    width: 500px;
}
```
html
```html
<body>
    <h1>Transition</h1>
    <h2>Basic example</h2>
    <div class="box1"></div>
    <hr>

    <h2>Timing function</h2>
    <p>지속시간 내에서 전환 효과의 타이밍을 지정</p>
    <div class="box2"></div>
    <hr>

    <h2>Delay time</h2>
    <p>전환 효과 시작 전의 지연 시간을 지정</p>
    <div class="box3"></div>
    <hr>
</body>
```

<div class="page">

# Position
요소의 위치 지정 기준
- 주요 설정 값
    - static - 기준 없음(기본값). 원래 위치
    - relative - 요소의 static 위치를 기준으로 이동
    - absolute - 위치 상 부모 요소를 기준으로 이동
    - fixed - 브라우저에서의 위치를 기준으로 이동

- 함께 사용하는 속성(static 제외)
    - top, bottom, left, right

css
```css
body {
    height: 1000px;
}
.box {
    width: 500px;
    height: 300px;
    border: 1px solid;
    padding: 5px;
}
.item {
    padding: 3px;
    width: 100px;
    border: 1px solid;
}
.rel {
    position: relative;
    top: 5px;
    left: 30px;
}
.abs {
    position: absolute;
    bottom: 50px;
    left: 10px;
}
.fix {
    position: fixed;
    top: 0;
    right: 0;
}
```
<div class="page">

html
```html
<body>
    <h1>Position</h1>
    <div class="box">
        <div class="item">static</div>
        <div class="item rel">relative</div>
        <div class="item abs">absolute</div>
        <div class="item fix">fixed</div>
    </div>
</body>
```

<br>

## Position 조합 예
css
```css
.box {
    width: 500px;
    height: 300px;
    border: 1px solid;
    padding: 5px;
    position: relative;
}
.item {
    padding: 3px;
    width: 100px;
    border: 1px solid;
}
.abs {
    position: absolute;
    bottom: 50px;
    left: 10px;
}
```
html
```html
<body>
    <h1>relative와 absolute</h1>
    <p>부모 요소에 relative를 설정하고 자식 요소를 absolute로 설정</p>
    <div class="box">
        <div class="item abs">absolute</div>
    </div>
</body>
```

## z-index
요소 쌓임 순서 지정
- 숫자 값이 큰 요소는 위로, 작은 요소는 아래로 쌓임

css
```css
.box {
    width: 100px;
    height: 100px;
    position: absolute;
}
.z1 {
    top: 0;
    left: 0;
    background-color: red;
    z-index: 3;
}
.z2 {
    top: 30px;
    left: 30px;
    background-color: green;
    z-index: 20;
}
.z3 {
    top: 60px;
    left: 60px;
    background-color: blue;
    z-index: 1;
}
```
html
```html
<body>
    <h1>z-index</h1>
    <div class="z1 box">box1</div>
    <div class="z2 box">box2</div>
    <div class="z3 box">box3</div>
</body>
```

<div class="page">

# display
요소의 화면 출력 특성을 설정

- 주요 설정 값
    - none - 요소의 보여짐 특성을 제거(화면에서 사라짐) 
    - block - 요소를 블록 요소로 변경
    - inline - 요소를 인라인 요소로 변경
    - inline-block - 요소가 인라인의 특성과 블록의 특성을 모두 갖도록 설정
    - flex - 요소를 플렉스 박스 컨테이너로 변경

```html
<body>
    <h1>Display Property</h1>
    <p>요소의 화면 출력 특성을 설정</p>

    <h2>block</h2>
    <div>
        block은 인라인 요소를
        <span style="display: block;">
            블록 요소로
        </span>
        변경
    </div>
    <hr>

    <h2>inline</h2>
    <div>
        inline은 블록 요소를 
        <p style="display: inline;">
            인라인 요소로
        </p>
        변경
    </div>
    <hr>

    <h2>inline-block</h2>
    <div>
        inline-block은 
        <span class="ib">
            inline의 특성과
        </span>
        <span class="ib">
            block의 특성을
        </span>
        모두 갖는다.
    </div>
</body>
```

inline-block용 css
```css
.ib {
    width: 150px;
    height: 100px;
    padding: 5px;
    border: 1px solid blue;
    background-color: yellow;
    display: inline-block;
}
```

<br>

## 속성 비교 예
css
```css
span {
    width: 100px;
    height: 100px;
    padding: 5px;
    border: 1px solid blue;
    background-color: yellow;
}
.a {
    display: inline;
}
.b {
    display: inline-block;
}
.c {
    display: block;
}
```
html
```html
<body>
    <h1>inline vs inline-block vs block</h1>
    <h2>inline</h2>
    <div>
        Lorem 
        <span class="a">ipsum</span>
        <span class="a">dolor</span>
        sit amet, consectetur adipiscing elit.
    </div>
    <hr>

    <h2>inline-block</h2>
    <div>
        Lorem 
        <span class="b">ipsum</span>
        <span class="b">dolor</span>
        sit amet, consectetur adipiscing elit.
    </div>
    <hr>
    
    <h2>block</h2>
    <div>
        Lorem 
        <span class="c">ipsum</span>
        <span class="c">dolor</span>
        sit amet, consectetur adipiscing elit.
    </div>
</body>
```

<div class="page">

# Layout
## Float
요소의 위치 지정 속성(요소를 원래 위치에서 뜯어서 변경)
- 주요 설정 값
    - left - 요소를 왼쪽부터 채움
    - Right - 요소를 오른쪽부터 채움
- clear 속성
    - float 속성의 영향을 제거하는 속성
    - float를 설정한 요소 다음에 위치하는 요소에서 이전 요소의 float 속성을 지울 때 사용.
    - 속성값 - left, right, both

css
```css
img {
    float: right;
}
.p1 {
    padding: 5px;
    border: 1px solid;
    /* height: 270px; */
    /* overflow: auto; */
}
/* clear-fix
.p1::after {
    content: "";
    clear: both;
    display: block;
}
*/
```
html
```html
<body>
    <h1>float</h1>
    <p>float 속성은 웹 문서의 레이아웃을 설계하는
        과정에서 많이 사용하는 속성입니다.
    </p>
    <p class="p1">
        <img src="images/sky1.jpeg" width="200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam rhoncus nunc et congue convallis.
        Duis lorem mauris, varius vitae rhoncus suscipit, mattis et est.
        Praesent porta lacus sit amet ipsum volutpat auctor.
        Mauris faucibus nulla commodo leo cursus, eget sollicitudin velit sodales.
    </p>
</body>
```

<br>

## Flex
``display: flex;``

내부(자식) 요소를 배치하기 위해 사용하는 방식으로 요소의 크기가 불분명하거나 동적인 경우에도 각 요소를 정렬할 수 있는 효율적인 방법을 제공

해당 요소를 플렉스 박스(Flexible Box)의 컨테이너(Container)로 설정

자식 요소는 아이템(Item)이라고 함.

### html 코드
```html
<body>
    <div class="container">
        <div class="item">item1</div>
        <div class="item w-200">item2</div>
        <div class="item h-200">item3</div>
        <div class="item">item4</div>
        <div class="item">item5</div>
    </div>
</body>
```
css
```css
.container {
    margin: 10px;
    padding: 15px;
    border-radius: 5px;
    background-color: aqua;
    display: flex;
}
.item {
    margin: 10px;
    padding: 20px;
    background-color: darkgreen;
    color: white;
    border-radius: 5px;
}
```

<div class="page">

### 컨테이너 관련 속성
#### flex-direction
아이템 정렬 방향 지정
- row(좌->우), row-reverse(우->좌), column(위->아래), column-reverse(아래->위)

```css
.container {
    ...
    flex-direction: row;
    /* flex-direction: row-reverse; */
    /* flex-direction: column; */
    /* flex-direction: column-reverse; */
}
```

방향에 따른 축 설정

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/fb72631f-999c-4cf6-866f-c9adf7f56533)

(이미지 출처 : https://www.linkedin.com/posts/nehha_css-flexbox-activity-7106953710332715009-j7D4)

<br>

#### flex-wrap
아이템 감싸임 여부(overflow 허용 여부)
- nowrap(아이템이 컨테이너 밖으로 돌출됨)
- wrap(아이템이 컨테이너 내부에 존재)
- wrap-reverse
- wrap일 경우 컨테이너의 크기에 따라 여러줄로 아이템이 표현될 수 있음

```css
.container {
    width: 300px;
    ...
    flex-wrap: nowrap;
    /* flex-wrap: wrap; */
    /* flex-wrap: wrap-reverse; */
}
```

<br>

#### justify-content
주(main) 축의 정렬 방법 설정
- flex-start, flex-end, center, space-between, space-around, space-evenly

```css
.container {
    ...
    justify-content: flex-start;
    /* justify-content: flex-end; */
    /* justify-content: center; */
    /* justify-content: space-between; */
    /* justify-content: space-around; */
    /* justify-content: space-evenly; */
}
```

<br>

#### align-content
교차(cross) 축의 여러 줄 정렬 방법 설정
- stretch, flex-start, flex-end, center, space-between, space-around, space-evenly

```css
.container {
    height: 400px;
    ...
    align-content: stretch;
    /* align-content: flex-start; */
	/* align-content: flex-end; */
	/* align-content: center; */
	/* align-content: space-between; */
	/* align-content: space-around; */
	/* align-content: space-evenly; */
}
```

<div class="page">

#### align-items
교차(cross) 축의 한줄 정렬 방법 설정
- stretch, flex-start, flex-end, center, baseline

```css
.container {
    height: 400px;
    ...
    align-items: stretch;
	/* align-items: flex-start; */
	/* align-items: flex-end; */
	/* align-items: center; */
	/* align-items: baseline; */
}

/* flex-direction: row;인 경우 */
.h-200 {
    height: 200px;
}
/* flex-direction: column;인 경우 */
.w-200 {
    width: 200px;
}
```

<br>

### 아이템 관련 속성
#### order
아이템 배치 순서 설정
- 작은 수로 설정한 아이템을 먼저 배치

```html
<body>
    <div class="container">
        <div class="item" style="order: 1">item1</div>
        <div class="item w-200" style="order: 2">item2</div>
        <div class="item h-200" style="order: 3">item3</div>
        <div class="item" style="order: 4">item4</div>
        <div class="item" style="order: 5">item5</div>
    </div>
</body>
```

<div class="page">

#### flex-basis
아이템의 공간 배분 전 기본 크기

flex-directioni이 row일 때는 너비, column일 때는 높이

> width, heigth로 설정하는 것도 가능

- auto(요소의 내용 크기)
- 0(flex-grow에 따라 크기 설정)
- 숫자(px, em, rem 등)

```css
.container {
    ...
    flex-direction: row;
    /* flex-direction: column; */
}
.item {
    ...
    flex-basis: 100px;
}
```

<br>

#### flex-grow
아이템의 증가 비율 설정
- 0(증가 비율 설정 안함)
- 숫자

```css
.item {
	flex-grow: 1;
	/* flex-grow: 0; */ /* 기본값 */
}
```

<br>

#### flex-shrink
아이템의 감소 비율 설정
- 1(컨테이너의 크기에 따라 감소 비율 적용)
- 숫자
- 1로 설정할 경우 flex-basis보다 작아지지 않음

<div class="page">

```css
.item {
	flex-basis: 150px;
    flex-shrink: 0;
	/* flex-shrink: 1; */ /* 기본값 */
}
```

<br>

### Float와 Flex
float와 flex 모두 요소의 배치에 활용되지만, flex가 좀더 유용하다.

특히, Float는 다른 요소의 배치에도 영향을 주기 때문에 clear를 잘 활용해야한다.

<br>

#### 비교를 위한 예제
css
```css
.wrap {
    margin: 0;
    padding: 0;
    width: 100%;
}
.space {
    width: 800px;
    margin: 0 auto;
    padding: 10px;
    background-color: aqua;
}
.item {
    width: 100px;
    height: 50px;
    background-color: yellow;
    margin: 5px;
}
.section {
    padding: 10px;
}
/* f-item의 틀깨짐 방지 */
/* .float-space {
    overflow: hidden; 
} */
/* f-item의 틀깨짐 방지 : clear-fix */
.float-space::after {
    display: block;
    content: "";
    clear: both;
}
.float-item {
    float: right; /* 정렬 방식만 가능 */
} /* float는 하위 요소(item)에서 작성 */
.flex-space {
    display: flex; /* 내부 아이템의 배치방향 여백 조정이 가능 */
    flex-direction: row-reverse; /* 배치방향 */
    justify-content: right; /* 정렬 방식 */
} /* flex는 부모 요소(container)에서 작성 */
.flex-item {
    /* 배치와는 관계없는 속성들로 아이템 꾸미기 위한 내용 */
    background-color: greenyellow;
}
```
html
```html
<body>
    <div class="wrap">
        <h1>float와 flext 비교</h1>
        <hr>
        <h2>float를 활용한 layout</h2>
        <div class="section">
            <div class="space float-space">
                <div class="item float-item">1</div>
                <div class="item float-item">2</div>
                <div class="item float-item">3</div>
                <div class="item float-item">4</div>
            </div>
        </div>
        <hr>
        <h2>flex를 활용한 layout</h2>
        <div class="section">
            <div class="space flex-space">
                <div class="item flex-item">1</div>
                <div class="item flex-item">2</div>
                <div class="item flex-item">3</div>
                <div class="item flex-item">4</div>
            </div>
        </div>
    </div>
</body>
```
