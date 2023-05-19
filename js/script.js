const clock=document.querySelector('.clock');
function runColck(){
    var time=new Date();
    var hour=time.getHours();
    var minute=time.getMinutes();
    var second=time.getSeconds();
    var txt="AM";
    if(hour>12){
        hour=hour-12;
        txt="PM";
    }
    else if(hour==0){
        hour=12;
        txt="AM";
    }
    hour=hour<10?'0'+hour:hour;
    minute=minute<10?'0'+minute:minute;
    second=second<10?'0'+second:second;
    clock.innerHTML=`${hour} : ${minute} : ${second} : ${txt}`;
}
runColck();
setInterval(runColck,1000);