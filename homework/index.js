function 인증번호요청기능(){
    const 나의인증번호 = String(Math.floor(Math.random() *1000000)).padStart(6,0)
    document.getElementById("인증번호보여주기").innerText = 나의인증번호


let 시간 = 180
setInterval(function(){
    const 분 = Math.floor(시간/60)
    const 초 = 시간 % 60

    document.getElementById("남은시간").innerText = 분 + ":" + 초

    시간 = 시간 -1
    // 실행마다 1초씩 줄어들어야하니까 시간 -1 해주기
},1000)

document.getElementById("버튼").disabled = true
//버튼 비활성화
document.getElementById("버튼").style = "color: red"
//스타일바꾸기
}

function 인증하기버튼(){
    document.getElementById("인증하기버튼").disabled = true
    document.getElementById("인증하기버튼").innerText = "인증완료"
}