chrome.runtime.sendMessage({greeting:"dismissvalid"},function(res){})

const errorInfo =
  "En este momento no hay citas disponibles.En breve, la Oficina pondrá a su disposición nuevas citas.";

if (
  document.getElementById("comp19_captcha") ||
  (document.getElementById("reCAPTCHA_site_key") != null &&
    document.getElementById("reCAPTCHA_site_key").type != "hidden")
) {
  //warning
  alert("请手动输入验证码并点击下一步");
  // chrome.browserAction.setBadgeText({ text: "验证码" });
  chrome.runtime.sendMessage({greeting:"needvalid"},function(res){})
} else {
  var input = document.getElementById("btnEnviar");
  // input.click();
  chrome.storage.local.get("userInfo", function (obj) {
    console.log(obj);
    var officeSelector = document.getElementById("idSede");
    var officeSelectorValue = obj["userInfo"]["idSede"];
  
    var match = false;
    for (var i = 0; i < officeSelector.length; i++) {
      if (officeSelector.option[i].value == officeSelectorValue) {
        officeSelector.value = officeSelectorValue;
  
        var input = document.getElementById("btnSiguiente");
        input.click();
        match = true;
      }
    }
    if (!match) alert("没有匹配的 Office ,请手动选择");
  });
}
function sleep(seconds) {
  var start = new Date().getTime();
  while (new Date() < start + seconds * 1000) {}
  return 0;
}
var errorInfoEle = document.getElementsByClassName("mf-msg__info")[0];
if (errorInfoEle != null && errorInfoEle.textContent == errorInfo) {
  chrome.storage.local.get('userInfo', function (obj) {
    var retryDuration = obj['userInfo']['retryduration']
    if(!Number.isInteger(Number(retryDuration))){
      retryDuration = 300
    }
    alert("等待重试中")
    sleep(retryDuration);
    chrome.runtime.sendMessage({ greeting: "backtohome" }, function (response) {
      console.log(response.farewell);
    });
  })
}

//https://sede.administracionespublicas.gob.es/icpplustiem/acCitar
