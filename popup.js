/**
 * Opens each of listings in a new tab
 */
async function openAll() {
  var nodes = document.evaluate("//div[@class='thing']", document, null, 
                                XPathResult.ANY_TYPE, null)
  var resultNode = nodes.iterateNext()
  if (resultNode) {
    // Found the first node. Output its contents.
    alert(resultNode.innerHTML);
  }
  var listing = document.querySelectorAll('div.thing');

  chrome.tabs.executeScript({
    code: "var listing = document.querySelectorAll(\"div.thing\");for (var item of listing){window.open(\"https://reddit.com/\" + item.getAttribute(\"data-permalink\"));}"
  });
  
  chrome.tabs.executeScript({
    code: 'console.log("Yes")'
  });
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('openAllButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        openAll();
    });
});