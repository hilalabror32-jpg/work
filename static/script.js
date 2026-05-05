function go(n) {
  document.querySelectorAll(".slide").forEach(s => {
    s.classList.add("hide");
  });

  document.getElementById("s" + n).classList.remove("hide");
}

// tombol NO kabur 😈
function noKabur() {
  let btn = document.getElementById("noBtn");

  btn.style.position = "absolute";
  btn.style.top = Math.random() * window.innerHeight + "px";
  btn.style.left = Math.random() * window.innerWidth + "px";

  btn.innerText = "YAKIN? 😈";
}