function changeStyle() 
{
  let myH1 = document.querySelector("h1");
  myH1.classList.add("h-style");

 
  let p = document.getElementById("myDiv");
  p.getElementsByTagName("p")[0].style.fontWeight = "bold";
  p.getElementsByTagName("P")[1].style.color = "red";
  p.getElementsByTagName("p")[2].style.textDecoration = "underline";
  p.getElementsByTagName("p")[3].style.fontStyle = "italic";

  let l = document.getElementById("myList");
  l.getElementsByTagName("li")[0].style.display = "inline";
  l.getElementsByTagName("li")[1].style.display = "inline";
  l.getElementsByTagName("li")[2].style.display = "inline";
  document.getElementById("myList").style.display = "block";
  document.getElementById("myList").style.display = "flex";

  let s = document.getElementsByTagName("span")[0];
  s.style.visibility = "hidden";
}
changeStyle();
