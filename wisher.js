

function play() {
    var audio = new Audio('audio.mp3');
    audio.play();
  }
  var count=0;
function change(){
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let dt=time.getDate();
    let month=time.getMonth();
    let y=time.getFullYear();
    document.getElementById('samay').innerHTML="Date:"+dt+"/"+month+"/"+y+"   "+"  Time:"+h+":"+m+":"+s;
    if (dt=='3') {
        
        
        document.getElementById('wish').innerHTML="WISH YOU VERY VERY 🎆🎈🎇🎉HAPPY BIRTHDAY🎊🎁 UJJWAL";
        
        if (count==0) {
            play();
            count=1;
        }

        

    }
    console.log(h);
}
change();
setInterval(change,1000);

