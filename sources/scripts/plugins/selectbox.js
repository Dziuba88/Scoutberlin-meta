var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("selectbox");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "selectbox--selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("div");
  b.setAttribute("class", "selectbox--items hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("div");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("hide");
      this.classList.toggle("active");
  });
}
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("selectbox--items");
  y = document.getElementsByClassName("selectbox--selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);