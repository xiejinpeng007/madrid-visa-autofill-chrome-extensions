//https://sede.administracionespublicas.gob.es/icpplustiem/index.html

chrome.runtime.sendMessage({greeting:"dismissvalid"},function(res){})

//test data
// var toSelectValue = "Madrid";


  // chrome.browserAction.setIcon ( { path: 'icon.png'} );
  // chrome.browserAction.setBadgeText ( { text: '1'} );

// chrome.runtime.sendMessage({ greeting: "needvalid" }, function (response) {
//   console.log(response.farewell);
// });
// return
var infoButton = document.getElementById("btnSubmit");
if (infoButton != null) {
  infoButton.click();
}
chrome.storage.local.get('userInfo', function(obj){
  console.log(obj);
var proviceSelector = document.getElementById("form");
// var options = proviceSelector.options;
// var toSelectIndex = 0;
// for (i = 0; i < options.length; i++) {
//   if (options[i].text == toSelectValue) toSelectIndex = i;
// }
// proviceSelector.value = options[toSelectIndex].value;
proviceSelector.value = obj['userInfo']['provice']

var input = document.getElementById("btnAceptar");
input.click();
});


//失败时返回主页
// chrome.runtime.sendMessage({greeting: "backtohome"}, function(response) {
// console.log(response.farewell);
//   });
