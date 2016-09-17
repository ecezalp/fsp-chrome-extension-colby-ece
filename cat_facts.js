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

var message = function(){
  return "hello"
  // $.ajax({
  //   url: 'http://catfacts-api.appspot.com/api/facts',
  //   method: 'GET',
  //   success: "hello"
  // });
};

chrome.alarms.onAlarm.addListener(function(alarm){
  alert(message())
});
