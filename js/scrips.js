
function create(a,b,c) {
  if (a+b>c && c+b>a && a+c>b && a==b && b==c)
      window.location = "equilateral.html"
      
  else if (a+b>c && c+b>a && a+c>b && a==b || b==c || a==c)
    alert("isoscelese")
  else if (a+b>c && c+b>a && a+c>b && a!=b!=c)
    alert("scalene")
    else
    alert("Wacha ujinga")
    }
