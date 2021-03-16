var myNodelist =document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
    let span=document.createElement("SPAN");
    let txt=document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
close[i].onclick=function(){
    var li = this.parentElement;
    li.style.display = "none";
}   
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement(){    

let input = document.getElementById("myinput").value;
let txt=document.createTextNode(input);
let li=document.createElement("li");
li.appendChild(txt);
if (input === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myinput").value ="";
  var span = document.createElement("SPAN");
  var str = document.createTextNode("\u00D7");
  span.className ="close";
  span.appendChild(str);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}
