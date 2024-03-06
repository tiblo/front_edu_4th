# head 영역 Tag

## \<title\>
* HTML  문서의 제목을 정의하는 태그
* 브라우저 창(또는 탭)의 제목으로 출력

## \<link\>
* 다른 파일을 가져와 현재의 문서와 연결할 때 사용
* 외부 스타일시트(CSS), 파비콘(favicon, favorite Icon) 등을 문서에 포함시킴
* 사용 속성
    * rel(Relationship) - 연결할 파일과 현재 문서의 관계(stylesheet, icon 등)
    * href(Hypertext Reference) - 연결할 파일의 위치

## \<style\>
* 문서 내부에 스타일시트를 작성할 때 사용

## \<script\>
* 외부 자바스크립트 파일을 현재 문서에 연결할 때 사용
* 현재 문서에 적용할 자바스크립트 코드를 작성할 때 사용
* \<script\> 태그는 \<html\> 내부의 어느 곳에서도 작성할 수 있음

## \<meta\>
* 검색엔진이나 브라우저에 제공할 정보를 작성하는 태그
* 문서의 제작자, 문서의 개요, 검색 키워드, 문자셋 등
* 사용 속성
    * charset(Character Set) - 문자 인코딩 방식(euc-kr, utf-8 등)
    * name - 제공되는 정보의 종류(author, viewport 등)
    * content - 제공되는 정보의 내용

## 예제
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="jongil Park">
    <title>head tag</title>
    <link rel="stylesheet" href="exam.css">
    <link rel="icon" href="mlogo.png">
    <style>
        h1 {
            text-decoration: underline;
        }
        p {
            font-size: 1.5em;
            color: blue;
        }
    </style>
    <script>
        alert("경고창");
    </script>
</head>
<body>
    <h1>제목</h1>
    <p>단락(문장)</p>
</body>
</html>
```