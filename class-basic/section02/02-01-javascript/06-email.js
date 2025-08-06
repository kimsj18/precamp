const 내이메일 = "codecamp@gmail.com"
// undefined
내이메일
// 'codecamp@gmail.com'

내이메일.split("@")
// (2) ['codecamp', 'gmail.com']0: "codecamp"1: "gmail.com"length: 2[[Prototype]]: Array(0)
const 분리한결과 = 내이메일.split("@")
// undefined
분리한결과
// (2) ['codecamp', 'gmail.com']0: "codecamp"1: "gmail.com"length: 2[[Prototype]]: Array(0)
분리한결과[0]
// 'codecamp'
분리한결과[1]
// 'gmail.com'
const 이메일앞부분 = 분리한결과[0]
// undefined
const 이메일뒷부분 = 분리한결과[1]
// undefined
이메일앞부분 
// 'codecamp'
이메일뒷부분
// 'gmail.com'
이메일앞부분.slice(0,4)
// 'code'
const 새로운이메일앞부분 = 이메일앞부분.slice(0,4) + "****"
// undefined
새로운이메일앞부분
// 'code****'
const 새로운이메일 = 새로운이메일앞부분 + "@" + 이메일뒷부분
// undefined
새로운이메일
// 'code****@gmail.com'