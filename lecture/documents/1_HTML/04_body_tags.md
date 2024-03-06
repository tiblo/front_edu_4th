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

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/c7863aa4-7190-4363-b74d-507f874a1beb)

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
> URI(Uniform Resource Indentifier) : 통합자원 식별자<br>
URL(Uniform Resource Locator) : 통합자원 위치정보<br>
URN(Uniform Resource Name) : 통합자원 이름

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/d0537102-8ab3-4ffa-990b-1266549eac73)

### 예제
```html
<body>
    <h2>연결(링크) 태그</h2>
    <a href="https://www.naver.com" target="_blank">네이버</a>
    <br>
    <a href="02_element_kind.html" target="_self">요소의 종류</a>
</body>
```

<br>

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
```html
<head>
    ...
    <style>
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
    </style>
</head>
<body>
    ...
    <h2>공간 태그</h2>
    <div>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit.
        Nullam quis tortor nec enim 
        convallis hendrerit.
    </div>
    <div>
        Lorem ipsum dolor sit amet, 
        <span>consectetur</span> adipiscing elit.
        Nullam <span>quis tortor nec enim</span>
        convallis hendrerit.
    </div>
</body>
```

<br>

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
