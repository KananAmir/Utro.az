
        function hideIcon(self) {
            self.style.backgroundImage = 'none';
        }
        var active=0;
var passive=null;
slider();

 var forward=document.createElement('div');
 forward.style.right="0";
 forward.innerHTML=">";
 forward.className="forward";
 forward.onclick=function(){slider();}
 var back=document.createElement("div");
 back.style.left="0";
 back.innerHTML="<";
 back.className="back";
 back.onclick=function(){ active-=2; slider();}
 var anadiv=document.getElementById("main-col-2-slider");
 anadiv.appendChild(forward);
 anadiv.appendChild(back);

anadiv.onclick=function(){clearTimeout(slayt_zaman);}
        
function slider(){
    
    if(active>=document.getElementsByClassName("main-col-2-slide").length){ 
    active=0;
    }else if(active<0){ 
    active=document.getElementsByClassName("main-col-2-slide").length-1; }
if(passive!=null){
        var passivediv=document.getElementsByClassName("main-col-2-slide")[passive];
        passivediv.style.animation="action2 linear 0.5s";
        passivediv.style.right="-700px";
    }
    for(var s=0;s<document.getElementsByTagName("li").length;s++){
        document.getElementsByTagName("li")[s].setAttribute("class","");
    }
    var activediv=document.getElementsByClassName("main-col-2-slide")[active];
    activediv.style.animation="action linear 0.5s";
    activediv.style.opacity="1";
    activediv.style.right="0px";
        document.getElementsByTagName("li")[active].setAttribute("class","activeLi");
    
passive=active;
active++;
}
    var slayt_zaman=setInterval(slider,5000);
    
