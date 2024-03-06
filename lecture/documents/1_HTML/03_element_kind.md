# HTML 요소의 종류

## Block 요소
* 브라우저 화면의 너비를 100% 차지하는 요소
* 요소 사이에 줄 바꿈이 발생
* 대표 태그
    * 제목 태그들(h1 ~ h6), \<p\>, \<hr\>, \<div\> 등

## Inline 요소
* 내용(Content) 만큼만 너비를 차지하는 요소
* 요소 사이에 줄 바꿈이 없음
* 대표 태그
    * \<img>, \<b>, \<span> 등

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