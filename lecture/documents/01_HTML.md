# HTML(Hyper Text Mark-up Language)

Web 문서의 골격을 만드는 언어

## HTML의 구조
* 한 HTML 문서는 다양한 요소(Elements)로 구성
* 한 요소는 하위 요소를 포함(계층 구조)
    * 포함된 하위 요소를 자식요소(Child Element)
    * 포함하는 상위 요소를 부모요소(Parent Element)
* 하나의 요소는 태그(Tag)와 내용(Contents)로 구성
    * 태그는 시작태그와 종료태그가 있음
    * 시작태그만 있는 것은 빈태그(Empty tag)라고 함
        * 원래부터 시작 태그만 있는 것
        * Self closing tag : 작성할 내용이 없을 경우 시작태그와 종료태그를 합친 형태<br>
            ```<p></p> => <p />```

<br>

## Hyper Text Mark-up Language
### 요소(Element)
#### 구조

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/f5cf70e5-3eb1-4ca7-96a8-38bb045645e4)

#### 속성(attribute)
요소에 대한 추가적인 정보를 지정할 때 사용<br>
한 시작태그에는 다양한 속성을 작성할 수 있음(속성이 없을 수도 있음)<br>
종료태그에는 속성을 넣지 않음

### 작성규칙
* 태그명은 대소문자를 구분하지 않지만, HTML5에서는 소문자를 권장
* 내용(Content)에 연속된 공백이나 줄바꿈은 화면(브라우저)에서 한 칸의 공백으로 출력
* 요소의 포함관계(계층 관계) 표현을 위해 들여쓰기 사용
* 한 요소는 시작태그와 종료태그로 작성하며, 다른 요소의 태그와 중첩되지 않아야 함<br>
```<h1>제목<p>어떤 내용... </h1><p> X``` <br>
```<h1>제목</h1><p>어떤 내용...</p> O```

* 주석은 ```<!--```로 시작하여 ```-->```로 끝남

<br>

## 문서(Document)의 구조
### 전체 구조

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/3e6bb761-ea03-4562-b018-7e78f4ffac93)

### 계층 구조
* 문서를 구성하는 요소는 계층 구조를 형성
* ‘상위 요소’ - ‘하위 요소’ 또는 ‘부모 요소’ - ‘자식 요소’로 표현
* 요소 내부에 요소가 중첩되는 형상

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/df86fb2d-eadc-4b4c-b3b8-1764f2a8a76f)

* 들여쓰기를 사용하여 상위 요소(부모)와 하위 요소(자식)를 구분

<div class="page">

## 초기 화면 작성 및 실행
index.html

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/e006469e-0b64-4774-9205-ffef2dabcf8e)

> ``!`` + ``Enter↵`` 조합으로 문서의 기본 문장을 자동 완성

<br>

<div class="page">

# head 영역 Tag
## \<title\>
* HTML  문서의 제목을 정의하는 태그
* 브라우저 창(또는 탭)의 제목으로 출력

```html
<head>
    ...
    <title>head tag</title>
</head>
```

<br>

## \<link\>
* 다른 파일을 가져와 현재의 문서와 연결할 때 사용
* 외부 스타일시트(CSS), 파비콘(favicon, favorite Icon) 등을 문서에 포함시킴
* 사용 속성
    * rel(Relationship) - 연결할 파일과 현재 문서의 관계(stylesheet, icon 등)
    * href(Hypertext Reference) - 연결할 파일의 위치

```html
<head>
    ...
    <link rel="stylesheet" href="exam.css">
    <link rel="icon" href="mlogo.png">
</head>
```

<br>

## \<style\>
* 문서 내부에 스타일시트를 작성할 때 사용

```html
<head>
    ...
    <style>
        h1 {
            text-decoration: underline;
        }
        p {
            font-size: 1.5em;
            color: blue;
        }
    </style>
</head>
<body>
    <h1>제목</h1>
    <p>단락(문장)</p>
</body>
```

<br>

## \<script\>
* 외부 자바스크립트 파일을 현재 문서에 연결할 때 사용
* 현재 문서에 적용할 자바스크립트 코드를 작성할 때 사용
* \<script\> 태그는 \<html\> 내부의 어느 곳에서도 작성할 수 있음

```html
<head>
    ...
    <script>
        alert("경고창");
    </script>
</head>
```

<br>

## \<meta\>
* 검색엔진이나 브라우저에 제공할 정보를 작성하는 태그
* 문서의 제작자, 문서의 개요, 검색 키워드, 문자셋 등
* 사용 속성
    * charset(Character Set) - 문자 인코딩 방식(euc-kr, utf-8 등)
    * name - 제공되는 정보의 종류(author, viewport 등)
    * content - 제공되는 정보의 내용

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="jongil Park">
    ...
</head>
```

<div class="page">

# HTML 요소의 종류

## Block 요소
* 브라우저 화면의 너비를 100% 차지하는 요소
* 요소 사이에 줄 바꿈이 발생
* 대표 태그
    * 제목 태그들(h1 ~ h6), \<p\>, \<hr\>, \<div\> 등

<br>

## Inline 요소
* 내용(Content) 만큼만 너비를 차지하는 요소
* 요소 사이에 줄 바꿈이 없음
* 대표 태그
    * \<img>, \<b>, \<span> 등

<br>

## 예제
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>요소의 종류</title>
</head>
<body>
    <h1>블록 요소</h1>
    <p style="background-color: yellow;">단락</p>
    <p style="background-color: green;">단락</p>
    <hr>
    <h1>인라인 요소</h1>
    <a href="#">연결1</a>
    <a href="#">연결2</a>
</body>
</html>
```

<div class="page">

# body 영역 Tag

## 문단 관련 tag
### Heading Tag - \<h1> ~ \<h6>. 
제목을 작성하는데 사용
* \<title>은 사이트의 이름이며 Heading tag는 페이지에서의 제목을 뜻함
* 숫자가 클 수록 글자의 크기가 작아짐.
* Block 요소

### \<p> - Paragraph. 문단을 작성하는데 사용
* 문장을 작성하는 주요 태그
* 블록 요소

### \<br> - Break. 줄바꿈 태그
* 인라인 요소에 줄바꿈을 제공
* 빈태그(Empty tag)

### \<hr> - Horizontal Rule
* 페이지에 가로선을 작성하는데 사용
* 블록요소이며 빈태그

### 예제
```html
...
<body>
    <h1>제목 태그 - h1</h1>
    <h2>제목 태그 - h2</h2>
    <h3>제목 태그 - h3</h3>
    <h4>제목 태그 - h4</h4>
    <h5>제목 태그 - h5</h5>
    <h6>제목 태그 - h6</h6>
    <hr>
    <p>문단 태그 - p</p>
    <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit.<br>
        Nullam quis tortor nec enim 
        convallis hendrerit.
    </p>
</body>
```

<br>

## 목록 tag
* 화면에 목록을 출력하는 요소
* 블록 요소
* 자식 요소로 \<li> 태그를 사용하여 목록의 항목을 작성

### 비순서 목록 - \<ul> Unordered List
* 출력하는 항목의 객관적인 순서가 없는 형태

### 순서 목록 - \<ol> Ordered List
* 항목에 나름의 순서를 부여

### 목록 항목 - \<li> List Item
* 목록 태그의 자식 태그로 항목을 출력하는데 사용

### 예제
```html
...
<body>
    <h2>목록 태그 - ul</h2>
    <ul>
        <li>아메리카노</li>
        <li>카페라떼</li>
        <li>카푸치노</li>
        <li>에스프레소</li>
    </ul>
    <h2>목록 태그 - ol</h2>
    <ol>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
    </ol>
</body>
```

<br>

## 표 tag

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/07c334dc-c640-47a0-8a33-1a3d085f292d)

### \<table>
* 표를 표현하는데 사용하는 태그
* 행과 열 단위로 값을 출력하는 구조

### \<tr> - Table Row
* 표의 행을 표현하는 태그

### \<th> - Table Header cell
* 열의 제목을 표현하는 태그
* 굵은 글씨체로 중앙에 정렬

### \<td> - Table Data cell
* 각 열의 값을 작성하는데 사용
* 좌측 정렬

### 예제
```html
<body>
    <h2>표 태그 - table, tr, th, td</h2>
    <table border="1">
        <tr>
            <th>아이디</th><th>이름</th><th>나이</th><th>직업</th>
        </tr>
        <tr>
            <td>hong01</td><td>홍길동</td><td>20</td><td>학생</td>
        </tr>
        <tr>
            <td>jun2009</td><td>전우치</td><td>32</td><td>회사원</td>
        </tr>
    </table>
</body>
```

<br>

## Image tag - \<img>
* 그림 파일을 문서에 추가하기 위한 태그
* 빈태그, 인라인 태그
* 사용 속성
    * src : 필수 속성. 삽입할 이미지 파일의 경로와 파일명을 작성.
    * alt : 이미지가 출력되지 않을 경우 대신 출력할 문장을 작성.
    * title : 이미지 위에 마우스가 오버되었을 경우 출력할 문장을 작성.
    * width : 이미지의 출력 너비 값을 지정.
    * height : 이미지의 출력 높이 값을 지정.
* 너비(width)와 높이(height)를 지정하지 않으면 이미지의 원래크기로 출력

### 참고
> Pixel(픽셀) - Pictures Element의 줄인말. 화소.<br>
> 요소의 크기(너비/높이)를 지정하는 기본 단위(px)<br>
예) 화면 크기 : 1920X1080 - 가로 1920px, 세로 1080px

<div class="page">

### 예제
```html
<body>
    <h2>이미지 태그</h2>
    <img src="mlogo.png" alt="M로고" title="로고" width="200" height="200">
    <hr>
</body>
```

<br>

## 연결(링크) tag - \<a>
* Anchor(닻). Hyper link를 구현(페이지를 연결)
* 클릭 이벤트를 통해 페이지를 전환(연결된 페이지로 이동)
* 인라인 요소
* 사용 속성
    * href - 이동할 문서의 URI를 지정하는 속성
    * target - 이동할 문서의 출력 대상을 지정하는 속성.
        * _self(기본값), _blank(새 탭)

### 참고
![image](https://github.com/tiblo/front_edu_4th/assets/34559256/c6099aa8-0875-4c02-928b-7569a72fa5b5)

- URI(Uniform Resource Indentifier) : 통합자원 식별자
- URL(Uniform Resource Locator) : 통합자원 위치정보
- URN(Uniform Resource Name) : 통합자원 이름


### 예제
```html
<body>
    <h2>연결(링크) 태그</h2>
    <a href="https://www.naver.com" target="_blank">네이버</a>
    <br>
    <a href="02_element_kind.html" target="_self">요소의 종류</a>
</body>
```

<div class="page">

## 공간 tag
### \<div>
* 브라우저 전체 공간을 기준(너비)으로 일정 영역을 설정하는 태그
* 특별한 형태나 모양을 표현하지 않고, 영역의 구분을 위해 사용
* 문서 전체를 몇 가지 영역으로 분할하여 사용할 때 활용
* 구분한 영역에 각기 다른 스타일을 부여
* 블록 요소

### \<span>
* 브라우저의 일부 공간(블록 요소의 일부)을 설정하는 태그
* 특별한 형태나 모양을 표현하지 않고, 블록 내에서 영역의 구분을 위해 사용
* 구분한 영역에 각기 다른 스타일을 부여
* 인라인 요소

### 예제
```css
/* 공간 태그용 스타일 */
div { /* 모두 적용됨 */
    background-color: yellow;
    width: 80%;
    height: 100px;
    border: 1px solid black;
    padding: 10px;
}
span {
    background-color: green;
    width: 100px; /* 적용 안됨 */
    height: 100px; /* 적용 안됨 */
    border: 3px dashed red;
    padding: 5px;
}
```

```html
<body>
    <h2>공간 태그</h2>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam quis tortor nec enim convallis hendrerit.
    </div>
    <div>
        Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing elit.
        Nullam <span>quis tortor nec enim</span> convallis hendrerit.
    </div>
</body>
```

<div class="page">

## 입력 양식 tag
### \<input>
* 입력란을 만드는 태그(사용자의 입력값을 받는 요소 작성)
* 사용 속성
    * type : 입력란의 모양을 지정하는 속성
    * value : 사용자의 입력을 저장하는 속성
    * placeholder : 입력값을 힌트를 작성하는 속성
    * disabled : 입력란을 비활성화로 설정하는 속성
    * readonly : 입력란의 값을 수정할 수 없도록 설정하는 속성.(value 필요!)

#### 예제
```html
<body>
    <h2>입력 양식</h2>
    일반형태 : 
    <input type="text" value="초기값" placeholder="입력(초기)값이 없으면 보임">
    <br>
    비활성화 : 
    <input type="text" disabled>
    <br>
    읽기전용 : 
    <input type="text" value="어떤값" readonly>
</body>
```

* 주요 type
    * text : 일반 텍스트 입력 형태
    * password : 비밀문자 입력 형태(입력한 값은 ’●’로 변경)
    * button : 버튼 형태(value에 출력할 문구를 작성)
    * checkbox : 체크박스 형태(다중 선택). name 속성이 같은 \<input>을 하나로 그룹화
    * radio : 라디오버튼 형태(단일 선택). name 속성이 같은 \<input>을 하나로 그룹화

#### 예제
```html
<body>
    <h2>다양한 입력 형태</h2>
    비밀번호 : 
    <input type="password" placeholder="비밀번호를 입력하세요.">
    <br>
    버튼형태 : 
    <input type="button" value="버튼">
    <br>
    체크박스 : 
    <input type="checkbox" name="ck">강아지
    <input type="checkbox" name="ck">고양이
    <br>
    라디오버튼 :
    <input type="radio" name="ra">남성
    <input type="radio" name="ra">여성
</body>
```

<br>

### \<textarea>
* 여러 줄의 문장을 입력받는 요소용 태그
* 블록 요소
* 크기 지정 속성
    * rows : 높이 지정. 줄 수
    * cols : 너비 지정. 글자 수

#### 예제
```html
<body>
    ...
    <h3>텍스트 영역</h3>
    <textarea rows="5" cols="30"></textarea>    
</body>
```
<br>

### \<select>
* 선택 목록을 출력하는 태그
* \<option> 태그로 목록의 항목을 작성

#### 예제
```html
<body>
    ...
    <h3>선택 목록</h3>
    <select>
        <option>Americano</option>
        <option>Caffe latte</option>
        <option>Espresso</option>
    </select>
</body>
```
<br>

### \<label>
* 꼬리표(이름표) 태그
* 입력 태그의 클릭 영역을 확장하는데 사용하는 태그
* 입력 태그의 id 속성과 \<label> 태그의 for 속성을 사용하여 연결

<br>

#### 예제
```html
<body>
    ...
    <h3>꼬리표 태크(label)</h3>
    직업선택 : 
    <input type="radio" name="job" id="std">
    <label for="std">학생</label>
    <label>
        <input type="radio" name="job">회사원
    </label>    
</body>
```

<div class="page">

# 전역 속성(Global Attributes)
모든 요소에서 사용할 수 있는 공통 속성

## title
* 요소에 대한 설명글(tool tip)을 지정하는 속성
* 요소에 마우스를 올리면 출력됨

```html
<body>
    <h2>title</h2>
    <p>요소의 설명글(tool tip)을 지정하는 속성</p>
    <p title="title로 출력할 내용">요소에 마우스 포인트를 올리면 출력됨</p>
</body>
```

<br>

## style
* 요소 단독의 스타일을 지정하는 속성
* CSS 인라인 선언 방식

```html
<body>
    <h2>style</h2>
    <p>요소 단독의 스타일을 지정하는 속성</p>
    <p style="color: red">CSS 인라인 선언 방식</p>
</body>
```

<br>

## class
* 요소에 분류명(classification name)을 지정하는 속성
* 요소에 스타일을 부여하거나 동적인 처리(자바스크립트)에 활용하는 값

```html
<head>
    <style>
        /* 요소의 class 속성값으로 스타일을 지정 */
        .c1 {
            color: blue;
        }
    </style>
</head>
<body>
    <h2>class</h2>
    <p>요소에 분류명(classification name)을 지정하는 속성</p>
    <p class="c1">요소에 스타일을 부여하거나 동적인 처리에 활용</p>
</body>
```

<br>

## id
* 요소에 식별자(Identifier)를 지정하는 속성
* 고유(유일)한 값을 넣는 것이 좋음.

```html
<body>
    <h2>id</h2>
    <p>요소에 식별자(Identifier)를 지정하는 속성</p>
    <p id="id1">요소별로 고유(유일)한 값 사용을 권장</p>
</body>
<script>
    //id 속성값으로 요소의 스타일를 제어함.
    const elm1 = document.getElementById("id1");
    elm1.style.backgroundColor = "green";
</script>
```

<br>

## data-xxx
* 화면에 보이지 않게 요소에 데이터를 저장하기 위해 사용하는 속성
* ```data-```로 시작
* Stylesheet에서 선택자로 사용 가능
* Javascript에서 ```elements.dataset.xxx``` 형식으로 데이터를 불러올 수 있음.

css
```css
/* data-*로 구분하여 스타일을 지정 */
p[data-number="1"] {
    background-color: aqua;
}
p[data-number="2"] {
    background-color: yellow;
}
```

html
```html
<body>
    <h2>data-*</h2>
    <p>요소에 (의미론적인) 추가 정보를 지정하는 속성</p>
    <p id="id2" data-number="1">화면에 안 보이게 글이나 추가 정보를 요소에 담아을 수 있음</p>
    <p id="id3" data-number="2">이 정보는 Javascript나 CSS에서 활용</p>
</body>
<script>
    //data-*의 정보를 가져와서 활용
    const elm2 = document.getElementById("id2");
    const elm3 = document.getElementById("id3");
    console.log(elm2.dataset.number, elm3.dataset.number);
</script>
```
