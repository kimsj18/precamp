function 인풋검증기능(){
    const 이메일 = document.getElementById("이메일입력창").value
    const 여자선택여부 = document.getElementById("여자선택").checked
    const 남자선택여부 = document.getElementById("남자선택").checked
    const 동의선택여부 = document.getElementById("동의하기체크").checked

    const 인풋창다채웠는지 = 이메일 !== ""
    const 성별선택했는지 = (여자선택여부 === true) || (남자선택여부 ===true)
    const 동의선택했는지 = 동의선택여부 === true


    if(인풋창다채웠는지 && 성별선택했는지 && 동의선택했는지 ){
        document.getElementById("가입버튼").style = "background-color: yellow"
        document.getElementById("가입버튼").disabled = false
    } else{
        document.getElementById("가입버튼").style = "background-color: gray"
        document.getElementById("가입버튼").disabled = true
    }
}
    function 회원가입기능(){
        const 이메일 = document.getElementById("이메일입력창").value

        if(이메일.includes("@") === true){
            alert("회원가입을 축하합니다.")
        }else{
            alert("이메일이 올바르지 않습니다.")
        }
    }

