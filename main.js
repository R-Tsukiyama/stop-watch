const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime = 0;   
let timeId;        
let elapsedTime = 0; 

let hours = 0;
let minutes = 0;
let seconds = 0;
let mini = 0;

//count条件
function count(){
    mini++;
    if(mini/10 == 1){
        seconds++;
        mini = 0;
        if(seconds/60 == 1){
            minutes++;
            seconds = 0;
            if (minutes/60 == 1){
                hours++;
                minutes = 0;
                }
        }
    }
    time.innerHTML = hours+":"+minutes+":"+seconds+":"+mini;
}

//startButton→押すとstop,resetが活性
start.addEventListener("mousedown", function(){
    timeId = setInterval(count, 100);
    start.setAttribute("disabled", true);
    stop.removeAttribute("disabled", false);
    reset.removeAttribute("disabled", false);
});

//stopButton→押すとstart,resetが活性
stop.addEventListener("mousedown", function(){
    clearInterval(timeId);
    start.removeAttribute("disabled", false);
    stop.setAttribute("disabled", true);
    reset.removeAttribute("disabled", false);
});

//resetButton→00:00.000に上書き、押すとstartだけ活性
reset.addEventListener("mousedown", function(){
    clearInterval(timeId);
    time.innerHTML = "0:0:0:0";
    elapsedTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    mini = 0;
    start.removeAttribute("disabled", false);
    stop.setAttribute("disabled", true);
    reset.setAttribute("disabled", true);
});
