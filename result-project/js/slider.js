//slider 생성 및 스타일
const slider = document.querySelector(".slider");
const image_container = document.querySelector(".image_container");
const simgs = document.querySelectorAll(".image_container>img");
let nevbtns;
let playInter = null;

function setSlider(){
    start--;
    const sliderSize = `width: ${wsize}px; height: ${hsize}px`;
    const sitemSize = `width: ${simgs.length * wsize}px;`;

    slider.setAttribute("style", sliderSize);
    image_container.setAttribute("style", sitemSize);
    for(si of simgs){
        si.setAttribute("style", sliderSize);
    }
}
    
//slider 변경 버튼
function setControl(){
    const control = document.createElement("div");
    control.classList.add("control");
    let nvbtn = "";
    for(let i = 0; i < simgs.length; i++){
        nvbtn += ` <label onclick="change(${i})"></label> `;
    }
    
    control.innerHTML = nvbtn;
    slider.appendChild(control);
    control.style.width=`${wsize}px`;

    nevbtns = document.querySelectorAll(".control>label");
}

function change(btn){
    start = btn;
    if(playInter != null){
        clearInterval(playInter);
        playInter = setInterval(playSet, (playTime * 1000));
    }
    image_container.style.marginLeft = `${btn * -100}%`;
    for(nevb of nevbtns){
        nevb.style.backgroundColor = "white";
    }
    nevbtns[btn].style.backgroundColor = "#999";
}

//자동 slide 처리
function playSet(){
    start++;
    if(start == simgs.length){
        start = 0;
    }
    change(start);
}

function autoSlide(){
    playInter = setInterval(playSet, (playTime * 1000));
}

function startSlider(){
    setSlider();
    setControl();
    change(start);
    if(auto){
        autoSlide();
    }    
}