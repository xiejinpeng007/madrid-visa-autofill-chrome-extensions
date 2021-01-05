//https://sede.administracionespublicas.gob.es/icpplustiem/acValidarEntrada
chrome.runtime.sendMessage({greeting:"dismissvalid"},function(res){})

// &&document.getElementById('reCAPTCHA_site_key').type != 'hidden'
//
// function sleep(seconds) {
//   var start = new Date().getTime();
//   while (new Date() < start + seconds * 1000) {}
//   return 0;
// }
// sleep(5);
// var aceptar = document.getElementById("btnEnviar");
// if (aceptar && aceptar.disabled == false) {
//   aceptar.click();
// } else
 if (
  document.getElementById("reCAPTCHA_site_key") != null &&
  document.getElementById("reCAPTCHA_site_key").type === "hidden"
) {
  //确认 Solicitar Cita 画面
  var input = document.getElementById("btnEnviar");
  input.click();
}
// else if (
//   document.getElementById("comp19_captcha") !== null
//   document.getElementById("recaptcha-anchor") != null &&
//   document.getElementById("recaptcha-anchor").checked == false
// )
// {
//warning
//   alert("请手动输入验证码");
//   document.getElementById("recaptcha-anchor").checked = true;
// }
else {
  alert("请手动输入验证码并点击下一步");
  chrome.runtime.sendMessage({greeting:"needvalid"},function(res){})
}

//第一次输入信息
// var input = document.getElementById("btnEnviar");
// input.disabled = false;
// input.click();
// document.citadoForm.submit();

// document.getElementById('citadoForm').submit()

//提交后确认预约
// document.getElementById("btnEnviar").click();

function sleep(seconds) {
  var start = new Date().getTime();
  while (new Date() < start + seconds * 1000) {}
  return 0;
}
//失败时返回主页
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
//https://sede.administracionespublicas.gob.es/icpplustiem/index.html
