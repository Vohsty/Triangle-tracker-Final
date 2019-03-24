
function create(a,b,c) {
  if (a+b>c && c+b>a && a+c>b && a==b && b==c)

      equi();

  else if (a+b>c && c+b>a && a+c>b && a==b || b==c || a==c)
    isosceles();

  else if (a+b>c && c+b>a && a+c>b && a!=b!=c)

    scalene();
    else
    alert("Wacha ujinga");
    }
function equi() {
  window.location = "equilateral.html";

}
function isosceles() {
  window.location = "isosceles.html";

}
function scalene() {
  window.location = "scalene.html";

}
