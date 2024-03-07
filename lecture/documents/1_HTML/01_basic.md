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

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/82b56376-9f39-403b-a567-1e220a3536fc)

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


## 문서(Document)의 구조
### 전체 구조

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/5a35d9dc-f9cc-4100-a783-8af2cfb30b91)

### 계층 구조
* 문서를 구성하는 요소는 계층 구조를 형성
* ‘상위 요소’ - ‘하위 요소’ 또는 ‘부모 요소’ - ‘자식 요소’로 표현
* 요소 내부에 요소가 중첩되는 형상

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/2032b5d3-c715-44d8-8844-6e47d1abda36)

* 들여쓰기를 사용하여 상위 요소(부모)와 하위 요소(자식)를 구분


## 초기 화면 작성 및 실행
index.html

![image](https://github.com/tiblo/front_edu_4th/assets/34559256/1f743a33-98a6-425e-b46e-0567d3504b49)

> ```!``` + ```Enter↵``` 조합으로 문서의 기본 문장을 자동 완성
