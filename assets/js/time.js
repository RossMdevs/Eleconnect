var a=setInterval(getTime,1000);

function getTime(){
    var d = new Date();

    document.getElementById("time").innerHTML = d.getHours() + ':' + d.getMinutes();
}
