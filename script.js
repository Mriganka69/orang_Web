var moon = document.getElementById("moon");

moon.onclick = function(){
    console.log("Moon icon clicked");
  document.body.classList.toggle("dark-theme")
  if(document.body.classList.contains("dark-theme")){
    moon.src = "sun.png";
  }
  else{
    moon.src = "moon.png";
  }
}