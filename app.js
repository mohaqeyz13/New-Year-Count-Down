function updateCountDown(){
    const now =new Date()
    const nextYear=now.getFullYear()+1;
    const newYearDte=new Date(`january 1, ${nextYear}, 0000`);
    const currenyTime=now.getTime()
    const timeDefference=newYearDte-currenyTime;
    const days=Math.floor(timeDefference/(1000*60*60*24));
    const hours=Math.floor(timeDefference %(1000*60*60*24)/(1000*60*60));
    const minutes=Math.floor(timeDefference %(1000*60*60)/(1000*60));
    const seconds=Math.floor(timeDefference %(1000*60)/(1000));
    document.getElementById('days').textContent=days<10?'0'+days:days;
    document.getElementById('hours').textContent=hours<10?'0'+hours:hours;
    document.getElementById('Minutes').textContent=minutes<10?'0'+minutes:minutes;
    document.getElementById('seconds').textContent=seconds<10?'0'+seconds:seconds;


}
setInterval(updateCountDown,1000);
updateCountDown();