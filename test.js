document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('cat-alert');
  button.addEventListener('click', function() {

    chrome.alarms.create("cat facts", {periodInMinutes: 0.1})
    

  });
});
