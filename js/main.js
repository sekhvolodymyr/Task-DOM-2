function changeStyle() 
{
  let myH1 = document.querySelector("h1");
  myH1.classList.add("h-style");

  let firstP = document.querySelector("div p");
  firstP.classList.add("firstP-style");

  let secondP = document.querySelector("div p");
  secondP.classList.add("secondP-style");
}
changeStyle();