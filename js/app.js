
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
    

  //  -------- COL3 FIRST SLIDER ----------
    var images = document.getElementById("images");

var imagesList = document.querySelectorAll("#images img");
let index = 0;

var changeImage = () => {
if (index > imagesList.length - 1) index = 0;
else if (index < 0) index = imagesList.length - 1;
images.style.transform = `translateX(${-index * 250}px)`;
};

var run = () => {
index++;
changeImage();
}; 

var resetInterval = () => {
clearInterval(interval);
interval = setInterval(run, 2000);
};

let interval = setInterval(run, 2000);


//  -------- COL3 SECOND SLIDER ----------


var images2 = document.getElementById("images2");

var images2List = document.querySelectorAll("#images2 img");
let index2 = 0;

var changeImage2 = () => {
if (index2 > images2List.length - 1) index2 = 0;
else if (index2 < 0) index2 = images2List.length - 1;
images2.style.transform = `translateX(${-index2 * 250}px)`;
};

var run2 = () => {
index2++;
changeImage2();
}; 

var resetInterval2 = () => {
clearInterval(interval2);
interval2 = setInterval(run2, 2500);
};

let interval2 = setInterval(run2, 2500);


//  -------- COL3 THIRD SLIDER ----------


var images3 = document.getElementById("images3");

var images3List = document.querySelectorAll("#images3 img");
let index3 = 0;

var changeImage3 = () => {
if (index3 > images3List.length - 1) index3 = 0;
else if (index3 < 0) index3 = images3List.length - 1;
images3.style.transform = `translateX(${-index3 * 250}px)`;
};

var run3 = () => {
index3++;
changeImage3();
}; 

var resetInterval3 = () => {
clearInterval(interval3);
interval3 = setInterval(run3, 3000);
};

let interval3 = setInterval(run3, 3000);


//  -------- COL3 FORTH SLIDER ----------


var images4 = document.getElementById("images4");

var images4List = document.querySelectorAll("#images4 img");
let index4 = 0;

var changeImage4 = () => {
if (index4 > images4List.length - 1) index4 = 0;
else if (index4 < 0) index4 = images4List.length - 1;
images4.style.transform = `translateX(${-index4 * 250}px)`;
};

var run4 = () => {
index4++;
changeImage4();
}; 

var resetInterval4 = () => {
clearInterval(interval4);
interval4 = setInterval(run4, 3500);
};

let interval4  = setInterval(run4, 3500);


//  -------- COL3 FIFTH SLIDER ----------


var images5 = document.getElementById("images5");

var images5List = document.querySelectorAll("#images5 img");
let index5 = 0;

var changeImage5 = () => {
if (index5 > images5List.length - 1) index5 = 0;
else if (index5 < 0) index5 = images5List.length - 1;
images5.style.transform = `translateX(${-index5 * 250}px)`;
};

var run5 = () => {
index5++;
changeImage5();
}; 

var resetInterval5 = () => {
clearInterval(interval5);
interval5 = setInterval(run5, 4000);
};

let interval5 = setInterval(run5, 4000);