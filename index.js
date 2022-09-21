function clickFunction(){

    document.getElementById('search').innerHTML='<input type="text">'

}


function imageFunction(){
document.getElementById('homeground').style.backgroundImage = "url(image/7.jpg)";



}


function imageFunction2(){
    document.getElementById('homeground').style.backgroundImage = "url(image/8.jpg)";
    
    
    
    }
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >  document.documentElement.scrollTop >20 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  3000
}

