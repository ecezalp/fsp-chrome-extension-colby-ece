document.addEventListener('DOMContentLoaded', function() {
  var goButton = document.getElementById('get-alert');
  var stopButton = document.getElementById('stop-alert');

  goButton.addEventListener('click', function() {
    chrome.alarms.create("cat facts", {periodInMinutes: 15})
  });

  stopButton.addEventListener('click', function() {
    chrome.alarms.clear("cat facts")
  });

});

chrome.alarms.onAlarm.addListener(function(alarm){
  alert(catFactAlertMessages());
  refreshObject();
});

  var obj = $.get('http://catfacts-api.appspot.com/api/facts')

  function refreshObject () {
  obj = null
  obj = $.get('http://catfacts-api.appspot.com/api/facts')
  return obj
}

function catFactAlertMessages(){
  respText = obj.responseText
  fact = JSON.parse(respText).facts[0]
  return fact
};
