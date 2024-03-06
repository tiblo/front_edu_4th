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

```html
<head>
    <style>
        /* data-*로 구분하여 스타일을 지정 */
        p[data-number="1"] {
            background-color: aqua;
        }
        p[data-number="2"] {
            background-color: yellow;
        }
    </style>
</head>
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