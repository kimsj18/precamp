

function 이메일입력(){
    const 이메일 = document.getElementById("이메일입력").value
    if(이메일.includes("@")){
        if(이메일.split("@")[1] === "gmail.com" || 이메일.split("@")[1] === "naver.com" || 이메일.split("@")[1] === "hanmail.com" ||
        이메일.split("@")[1] === "kakao.com"){
            document.getElementById("이메일검증안내").innerText = "사용가능한 이메일입니다."
        
        }else{
            document.getElementById("이메일검증안내").innerText = "네이버,구글,한메일,카카오 계정만 입력가능합니다."
        }
    }else{
        document.getElementById("이메일검증안내").innerText = "이메일 양식으로 입력부탁드립니다 (@빠짐)"

    }

}


function 비밀번호검증(){
    const 비밀번호입력 = document.getElementById("비밀번호입력").value
    const 비밀번호확인 = document.getElementById("비밀번호확인").value

    if(비밀번호확인 === 비밀번호입력){
        document.getElementById("비밀번호검증안내").innerText = "비밀번호 일치"
        document.getElementById("비밀번호확인").style.border = ""
      
       
    }else{
        document.getElementById("비밀번호검증안내").innerText = "비밀번호 불일치"
        document.getElementById("비밀번호확인").style.border = "solid red"
        
    }
}

let 타이머;
function 인증번호요청기능(){
    const 나의인증번호 = String(Math.floor(Math.random() *1000000)).padStart(6,0)
    document.getElementById("인증번호보여주기").innerText = 나의인증번호

clearInterval(타이머)
let 시간 = 180
타이머 = setInterval(function(){
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
document.getElementById("인증하기버튼").disabled = false;
}

function 인증하기버튼(){
    document.getElementById("인증하기버튼").disabled = true
    document.getElementById("인증하기버튼").innerText = "인증완료"
    clearInterval(타이머);
    document.getElementById("남은시간").innerText = ""
    
}

function 휴대폰번호입력(){
    const 휴대폰번호 = document.getElementById("휴대폰번호").value

    if(휴대폰번호.includes("-")){
        if(휴대폰번호.split("-")[0] === "010"){
            document.getElementById("휴대폰번호확인").innerText = "휴대폰번호입력완료"
        }else{
            document.getElementById("휴대폰번호확인").innerText = "010으로 시작하십시오."
            
        }
    }else{
        document.getElementById("휴대폰번호확인").innerText = "- 를 입력하십시오."

    }
}
