function timer(id, deadline){
//  TIMER !!!!


function getTimeRemainig(endtime){
    // превращаем разницу в милисекунды
    const t= Date.parse(endtime) - Date.parse(new Date());
    let days,hours,minutes,seconds;
    if (t<=0){
        days = 0;
        hours = 0;
        minutes =0; 
        seconds = 0;

    }else {
        days = Math.floor(t/(1000*60*60*24)),
        hours= Math.floor((t/(1000*60*60))%24),
        minutes = Math.floor((t/1000/60)%60),
        seconds =Math.floor((t/1000)%60);
        }
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            }
};
function getZero(num){
    if(num>=0 && num<10){
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock (selector, endtime){
    const timer=document.querySelector(selector),
            days=timer.querySelector('#days'),
            hours= timer.querySelector('#hours'),
            minutes= timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock(){
                 const t=getTimeRemainig(endtime);
                days.innerHTML=getZero(t.days);
                hours.innerHTML=getZero(t.hours);
                minutes.innerHTML=getZero(t.minutes);
                seconds.innerHTML=getZero(t.seconds);
                    // function showZeros (timeValue, timeSelector){
                    //     if(timeValue<=0){
                    //         timeSelector.innerHTML='00';
                    //     } else {
                    //         timeSelector.innerHTML=getZero(timeValue);
                    //     }

                    // }
                    // showZeros(t.days, days);
                    // showZeros(t.hours, hours);
                    // showZeros(t.minutes, minutes);
                    // showZeros(t.seconds, seconds);
                if (t.total<=0){
                    clearInterval(timeInterval);
                    
    
                }
            }
           
}

setClock(id, deadline);
}

export default timer;