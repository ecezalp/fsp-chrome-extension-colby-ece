document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('cat-alert');
  button.addEventListener('click', function() {
    if (button.value === "go") {
      chrome.alarms.create("cat facts", {periodInMinutes: 0.05})
      button.value = "stop"
    }
    else {
      chrome.alarms.clear("cat facts")
      button.value = "go"
    }
  });
});

chrome.alarms.onAlarm.addListener(function(alarm){
  alert("It works!")
});
