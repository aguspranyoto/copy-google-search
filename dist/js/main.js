function search() {
  const { value } = document.getElementById("searchInput");
  const baseUrl = "https://www.google.com/search?q=";
  if (!value) window.open("https://github.com/aguspranyoto");
  window.open(baseUrl + value);
}

function handleKeyPress(e) {
  var key = e.keyCode || e.which;
  if (key == 13) {
    search();
  }
}
