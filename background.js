chrome.webNavigation.onDOMContentLoaded.addListener(function(tab) {
  alert('test')
  console.log("Script Executed .. "); // Notification on Completion

  chrome.tabs.executeScript(tab.id, {
    "file": "content.js"
  }, function () { // Execute your code
    console.log("Script Executed .. "); // Notification on Completion
  });
});
