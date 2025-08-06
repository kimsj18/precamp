if(1+1===2){}
// undefined
if(1+1===2){
    console.log("정답이에요!")
}
// VM217:2 정답이에요!
// undefined
if(1+1===3){
    console.log("정답이에요!")
}
// undefined
if(1+1===3){
    console.log("정답이에요!")
}else{
    console.log("틀림")
}
// VM302:4 틀림
// undefined
const 철수나이 = 6
// undefined
철수나이
// 6
if(철수나이 >= 20){
    console.log("성인입니다.")
}else if(철수나이 >= 8){
    console.log("학생입니다.")
}else{
    console.log("어린이입니다.")
}

// VM728:6 어린이입니다.
// undefined
const 프로필 = {
    이름: "철수",
    나이: 12,
    학교: "다람쥐초등학교"
}
// undefined
프로필
// {이름: '철수', 나이: 12, 학교: '다람쥐초등학교'}
if( 프로필.나이 >= 20){
    console.log("성인입니다.")
}else if( 프로필.나이 >= 8){
    console.log("학생입니다.")
}else{
    console.log("어린이입니다.")
}

// VM901:4 학생입니다.
// undefined
const 국영수점수 = [75, 50, 60]
// undefined
국영수점수
(3) [75, 50, 60]
if(  국영수점수[0] >= 90){
    console.log("국어합격입니다.")
}else{
    console.log("국어공부가 부족해요")
}
// VM1215:4 국어공부가 부족해요
// undefined

"aaa@a.com".includes("@")
// true
//includes 해당문자를 포함하고있니?
// undefined

"aaaa.com".includes("@")
// false

const 내가입력한이메일 = "codecamp@naver.com"
// undefined
내가입력한이메일
// 'codecamp@naver.com'
if(내가입력한이메일.includes("@") === true){
    console.log("제대로된 이메일입니다.")
}else{
    console.log("@가 입력되지 않았습니다.")
}
// VM1951:2 제대로된 이메일입니다.
// undefined
const 과학점수 = 50
// undefined
과학점수 >= 90 ? "과학 합격" : "과학 불합격"
// '과학 불합격'
const 결과 = 과학점수 >= 90 ? "과학 합격" : "과학 불합격"
// undefined
결과
// '과학 불합격'