function start(){
    
    var firstsection =document.getElementsByClassName("section-1");
    var secondsection =document.getElementsByClassName("section-2");
    for(var i=0;i<firstsection.length;i++){
        firstsection[i].style.display='none';
    }
    for(var i=0;i<secondsection.length;i++){
        secondsection[i].style.display='block';
    }
}


var count1=0;
var count2=0;
function roll(){
    var input1=document.getElementById("name1").value;
    var input2=document.getElementById("name2").value;
    
    var box1=document.getElementById("box1");
    var box2=document.getElementById("box2");
    // console.log(box1);
    // console.log(box2);
    var a=Math.floor(Math.random()*6+1);
    var b=Math.floor(Math.random()*6+1);
    console.log(a);
    console.log(b);

    box1.style = "background-image:url(dice" +a+".png)";
    box2.style = "background-image:url(dice" +b+".png)";

    //localStorage.clear(); 
 
   
    if(a>b){
        count1++;
        document.getElementById("wonStatus").innerHTML = "Player1 Won!!";
       
        
    }
    else if(a==b){
        document.getElementById("wonStatus").innerHTML = "Match Draw!!";
    }
    else{
        count2++;
        document.getElementById("wonStatus").innerHTML = "Player2 Won!!"; 
    
    } 
    document.getElementById("player1").innerHTML = input1+" : "+count1;
    document.getElementById("player2").innerHTML = input2+" : "+count2;

}
function reset(){
    document.getElementById("wonStatus").innerHTML ="";
    document.getElementById("player1").innerHTML ="";
    document.getElementById("player2").innerHTML ="";
    var box1=document.getElementById("box1");
    var box2=document.getElementById("box2");
    box1.style = "background-image:url(dice1.png)";
    box2.style = "background-image:url(dice1.png)";
}