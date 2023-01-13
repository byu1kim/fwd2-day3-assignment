const select = document.getElementById("referredby");
const hidden = document.getElementById("hidden");
const detail = document.getElementById("detail");

function handleChange(e) {
  const value = e.target.value;
  if (value == "magic" || value == "other") {
    hidden.classList.remove("hidden");
    detail.classList.remove("hidden");
  } else {
    hidden.classList.add("hidden");
    detail.classList.add("hidden");
  }
}

select.addEventListener("change", handleChange);
