let body = document.getElementsByTagName('body');
function contact() {
  let body = document.getElementsByTagName('body');
  body[0].style.backgroundImage = "url('contacts.jpg')";
  body[0].style.backgroundPosition = "center";
  body[0].style.backgroundSize = "cover";
  body[0].style.backgroundRepeat = "no-repeat";

  body[0].style.opacity = "1";

  let menu = document.getElementsByClassName('menu');
  menu[0].style.margin = "4rem auto 0 auto";
  menu[0].innerHTML = "<div><p></p> </div><hr id='nerotiran1' style='position:relative;top:1.4rem;left:37.5rem;width:2rem;height:0.5rem; background-color:hsla(0, 27%, 40%, 0.5);border-radius:1rem; box-shadow:0.2rem 0.2rem 0.3rem #4B382A;'><hr id='rotiran1' style='transform:rotate(-90deg);position:relative;right:0.6rem;top:1.5rem;width:2rem;height:0.5rem; background-color:hsla(0, 27%, 40%, 0.5);border-radius:1rem; box-shadow:0.2rem 0.2rem 0.3rem #4B382A;'><div id='aboutmediv' style='background-color:hsla(0, 27%, 50%, 0.2);display:inline-block;'><a style='margin-left:7rem;' class='sociala' href='#'><img class='imaga' src='instagram.jpg'></a><a class='sociala' href='#'><img  class='imaga' src='tiktok.png'></a><a class='sociala' href='#'><img src='facebook.png' class='imaga'></a></div><hr style='width:2rem;height:0.5rem;position:relative;bottom:0.9rem; background-color:hsla(0, 27%, 40%, 0.5);border-radius:1rem; box-shadow:0.2rem 0.2rem 0.3rem #4B382A;' id='nerotiran2'><hr style='transform:rotate(-90deg);position:relative;left:40.5rem;bottom:2rem;width:2rem;height:0.5rem; background-color:hsla(0, 27%, 40%,0.5); border-radius:1rem;box-shadow:0.2rem 0.2rem 0.3rem #4B382A;' id='rotiran2'><p id='prvos' display='inline-block'><p id='s1'>S</p><br><p id='s2'>O</p><br><p id='s3'>C</p><br><p id='s4'>I</p><br><p id='s5'>A</p><br><p id='s6'>L</p><br><p id='s7'>S</p></p><div id='zastilizovanje'></div><a href='file:///C:/Users/tiaFrost/Desktop/portfolio/index.html#'><img id='zarotaciju' src='cutecat.webp' style='transition:all 1s;position:relative;bottom:78rem;left:54.8rem;width:12rem;margin-right:4.5rem;height:12rem;'></a>";
  document.getElementById("aboutmediv").style.width = "40rem";
  document.getElementById("aboutmediv").style.height = "22rem";
  //document.getElementById("aboutmediv").style.border="1.5rem double hsla(0, 27%, 50%, 0.9)";
  document.getElementById("aboutmediv").style.borderRadius = "0.5rem";

  document.getElementById("aboutmediv").style.boxShadow = "1rem 1rem 1rem black";



}

function aboutme() {

  let body = document.getElementsByTagName('body');
  body[0].style.backgroundColor = "white";
  body[0].style.opacity = "0";
  body[0].style.position = "relative";
  body[0].style.transition = "all 0.5s";
  body[0].style.transform = "translateY(-30rem)";
  body[0].style.display = "none";
  body[0].style.borderTop = "1.6rem dotted white";
  body[0].style.borderLeft = "2rem solid #365359";
  body[0].style.bordeRight = "2rem solid pink";
  body[0].style.backgroundImage = "none";
  body[0].style.backgroundSize = "30rem 41rem";
  body[0].style.backgroundPosition = "top";
  body[0].style.fontFamily = "Shadows Into Light";
  body[0].innerHTML = "<p id='tekst1' style='transition:all 1s;opacity:0;'>Hello there! I am Tijana and I am very passionate about coding! In the future I hope to learn more about coding and also make my code cleaner and more abstract.</p><p id='tekst2' style='transition:all 1s;opacity:0;' >Age:27<br>Country:Serbia<br>University diploma:Philosopher</p><img src='scrapbook2.jpg' style='transition:all 1s;width:28rem;z-index:200; height:20rem;transform:rotate(20deg);position:relative;top:2rem;right:35rem;'> <img src='aboutme.jpg' style='transition:all 1s;margin:0 2rem 0 0;width:23rem;border-radius:2rem;height:15rem;float:right;position:relative;bottom:20rem;'><p style='transition:all 1s;opacity:0;transform:rotate(90deg);display:inline-block;color:white;position:relative;right:7rem;bottom:12rem;'>My favorite animal</p><p style='transition:all 1s;opacity:0;position:relative;font-size:1.3rem;left:42.4rem;bottom:9rem;transform:rotate(9deg);z-index:200;'>Hobbies:<br>Drawing <br>Reading<br>Gaming</p><p style='transition:all 1s;opacity:0;display:inline-block;width:9rem;font-size:1.3rem;position:relative;bottom:7.5rem;left:32rem;z-index:200;transform:rotate(-17deg);'>Favorite movie: Love exposure<br>Favorite book:Shadow of the wind<br>Favorite color:blue</p><p style='transition:all 1s;opacity:0;Agedisplay:inline-block;position:relative;left:66.5rem;bottom:24rem;'> My logo and link to home</p><a href='file:///C:/Users/tiaFrost/Desktop/portfolio/index.html#' target='_blank'><img id='zarotaciju' src='cutecat.webp' style='transition:all 1s;position:relative;bottom:20rem;width:15rem;margin-right:4.5rem;height:15rem;clear:right;float:right;'></a>";
  setTimeout(() => {
      let pej = document.getElementsByTagName('p');
      for (let da = 0; da < pej.length; da++) { pej[da].style.opacity = "1"; }
  }, 2300);
  setTimeout(() => { body[0].style.backgroundImage = "url('scrapbook1.jpg')"; body[0].style.display = "block"; }, 1100);
  setTimeout(() => { body[0].style.opacity = "1"; }, 1300);
  setTimeout(() => { body[0].style.transform = "translateY(0)"; }, 1400);
}

function projects() {

  body[0].style.backgroundImage = "none";
  body[0].style.backgroundColor = "#1b1b18";
    body[0].innerHTML = "<h2 style='margin:0.5rem 0 0 38rem;font-size:3rem;font-family:Shadows Into Light;color:hsl(68, 67%, 90%)'>-Projects-</h2><div id='kontejnerzagrid' style='border-radius:2rem;'><div id='p1'></div><div id='p2'></div><div id='p3'></div><div id='p4'></div><hr style='color:hsl(68, 67%, 90%);width:25rem;margin-left:23rem;height:1rem;position:relative;top:2.8rem;border-radius:2rem;'>";
    document.getElementById("kontejnerzagrid").style.display = "grid";
    document.getElementById("kontejnerzagrid").style.margin = "2rem auto 0 auto";
    document.getElementById("kontejnerzagrid").style.width = "70rem";
    document.getElementById("kontejnerzagrid").style.backgroundColor = "white";
    document.getElementById("kontejnerzagrid").style.gridColumnGap = "1.5rem";
    document.getElementById("kontejnerzagrid").style.gridTemplateColumns = "16rem 16rem 16rem 16rem"
    document.getElementById("kontejnerzagrid").style.gridTemplateRows = "26rem";


}
