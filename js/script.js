let visible = true;

function showForm() {
  if (visible) {
    document.getElementById("form").style.display = "flex";
    document.getElementById("mainForm").style.display = "none";
    visible = false;
  } else {
    document.getElementById("form").style.display = "none";
    document.getElementById("mainForm").style.display = "block";

    visible = true;
  }
}

function closeForm() {
  if (visible) {
    document.getElementById("form").style.display = "flex";
    document.getElementById("mainForm").style.display = "none";

    visible = false;
  } else {
    document.getElementById("form").style.display = "none";
    document.getElementById("mainForm").style.display = "block";

    visible = true;
  }
}
