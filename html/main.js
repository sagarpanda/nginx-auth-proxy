function apiCall() {
  fetch('/api')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
}