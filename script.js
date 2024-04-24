const toggleButton1 = document.getElementById("toggleButton1");
const toggleButton2 = document.getElementById("toggleButton2");
const toggleHandle1 = document.getElementById("toggleHandle1");
const toggleHandle12 = document.getElementById("toggleHandle2");

toggleButton1.addEventListener("click", function () {
  toggleButton1.classList.toggle("bg-gray-300");
  toggleButton1.classList.toggle("bg-blue-500");
  toggleHandle1.classList.toggle("translate-x-full");
});

toggleButton2.addEventListener("click", function () {
  toggleButton2.classList.toggle("bg-gray-300");
  toggleButton2.classList.toggle("bg-blue-500");
  toggleHandle2.classList.toggle("translate-x-full");
});

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;

  var check = document.forms["box"]["checkbox"].value;

  if (checkbox == 0) {
    seterror("checkbox", "please check this box");
    returnval = false;
  }

  return returnval;
}




