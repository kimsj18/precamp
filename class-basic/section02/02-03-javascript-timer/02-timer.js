180/60
3
179/60
2.9833333333333334
75/60
1.25
const 분 = Math.floor(172/60)
undefined
분
2
const 초 = 172 % 60
undefined
초
52
분:초
52
분 + ":" + 초
'2:52'
let 시간 = 180
// const로 하면 변경이 안되기에 let 으로 사용
setInterval(function(){
    const 분 = Math.floor(시간/60)
    const 초 = 시간 % 60
    console.log(분 + ":" + 초)
    시간 = 시간 -1
    // 실행마다 1초씩 줄어들어야하니까 시간 -1 해주기
},1000)
4
VM8152:5 3:0
VM8152:5 2:59
VM8152:5 2:58
VM8152:5 2:57