let 나의변수 = "라떼"
// undefined
나의변수
// '라떼'
나의변수 = "영희"
// '영희'
나의변수
// '영희'
const 친구이름 = "철수"
// undefined
친구이름
// '철수'
친구이름 = "라떼"
// VM688:1 Uncaught TypeError: Assignment to constant variable.
    // at <anonymous>:1:6
// (anonymous) @ VM688:1Understand this error
친구이름
// '철수'
const 철수가진돈 = 5000
// undefined
철수가진돈
// 5000
const 영희가진돈 = 3000
// undefined
영희가진돈
3000
철수가진돈+영희가진돈
8000
const 총합계금액 = 철수가진돈+영희가진돈
// undefined
총합계금액
8000
const 철수가진돈2 = "5000"
// undefined
const 영희가진돈2 = "3000"
// undefined
const 총합계금액2 = 철수가진돈2 + 영희가진돈2 
// undefined
총합계금액2
'50003000'
const 철수가진돈3 = "1000"
// undefined
const 영희가진돈3= 5000
총합계3 = 철수가진돈3 + 영희가진돈3
'10005000'
총합계3
'10005000'