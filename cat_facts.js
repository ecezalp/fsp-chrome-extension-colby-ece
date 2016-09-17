// note to Colby: this works when popup.html is being inspected on the console, but it seems to stop working whenever I get out of the console. I don't know if it is because I have some sort of pop-up blocker that I am unaware of, I disabled my adblocker and catblocker but it doesn't seem to solve the problem. Everything works perfectly when I am in the inspect console.

// stackoverflow: http://stackoverflow.com/questions/9445788/chrome-extension-javascript-in-onclick-function-only-works-when-debugging

//stackoverflow2: http://stackoverflow.com/questions/10290160/chrome-tabs-executescript-only-fires-when-the-developer-console-is-open


document.addEventListener('DOMContentLoaded', function() {
  var goButton = document.getElementById('get-alert');
  var stopButton = document.getElementById('stop-alert');
  

  goButton.addEventListener('click', function() {
    chrome.alarms.create("cat facts", {periodInMinutes: 0.08})
  });

  stopButton.addEventListener('click', function() {
    chrome.alarms.clear("cat facts")
  });

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


chrome.alarms.onAlarm.addListener(function(alarm){
  alert(catFactAlertMessages()); 
  refreshObject();
  });