/* 슬라이터 제어용 스크립트 */

let i = 0; //슬라이드 번호
const pos = document.querySelectorAll("[type='radio']");

function slide() {
  i++;
  if (i >= 4) {
    //슬라이드 번호 상한
    i = 0;
  }
  //라디오버튼 체크 상태 변경
  pos[i].checked = true;
}

//3초 마다 한번씩 슬라이드
let inter = setInterval(slide, 3000);

//특정 슬라이드를 선택했을 때
//그 슬라이드로부터 자동 재생이 처리되도록
function change(po) {
  i = po;
  clearInterval(inter);
  inter = setInterval(slide, 3000);
}
