document.addEventListener('DOMContentLoaded', function() {
  var goButton = document.getElementById('get-alert');
  var stopButton = document.getElementById('stop-alert');

  goButton.addEventListener('click', function() {
    chrome.alarms.create("cat facts", {periodInMinutes: 0.1})
  });

  stopButton.addEventListener('click', function() {
    chrome.alarms.clear("cat facts")
  });

});
var url = 'http://catfacts-api.appspot.com/api/facts'

};

chrome.alarms.onAlarm.addListener(function(alarm){
  alert(message())
});
