document.addEventListener('DOMContentLoaded', function() {
  var goButton = document.getElementById('get-alert');
  var stopButton = document.getElementById('stop-alert');

  goButton.addEventListener('click', function() {
    if (goButton.value === "go") {
      chrome.alarms.create("cat facts", {periodInMinutes: 0.08})
      goButton.value = "stop"
    }
    else {
      chrome.alarms.clear("cat facts")
      goButton.value = "go"
    }
  });
