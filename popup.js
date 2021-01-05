//打开popup 默认执行的js


// chrome.storage.sync.set('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

//恢复上次数据
document.getElementById('restore').onclick = function (element) {

  chrome.storage.local.get('userInfo', function (obj) {
    document.getElementById('provice').value = obj['userInfo']['provice']
    document.getElementById('police').value = obj['userInfo']['police']
    document.getElementById('country').value = obj['userInfo']['country']
    document.getElementById('nienumber').value = obj['userInfo']['nieNumber']
    document.getElementById('niename').value = obj['userInfo']['nieName']
    document.getElementById('idSede').value = obj['userInfo']['idSede']
    document.getElementById('phone').value = obj['userInfo']['phone']
    document.getElementById('email').value = obj['userInfo']['email']
    if(Number.isInteger(Number(obj['userInfo']['retryduration'])))
    document.getElementById('retryduration').value = obj['userInfo']['retryduration']
  })
}

var save = function () {

  var provice = document.getElementById('provice').value
  var police = document.getElementById('police').value
  var country = document.getElementById('country').value
  var nieNumber = document.getElementById('nienumber').value
  var nieName = document.getElementById('niename').value
  var idSede = document.getElementById('idSede').value
  var phone = document.getElementById('phone').value
  var email = document.getElementById('email').value
  var retryDuration
  if (Number.isInteger(Number(document.getElementById('retryduration').value)))
    retryDuration = document.getElementById('retryduration').value
  else retryDuration = 300

  if (provice === "" | police === "" | country === "" | nieNumber === "" | nieName === "" | idSede === "" | phone === "" | email === "" |
  retryDuration === "") {
    alert("请填写所有资料")
    return
  }
  if (!provice | !police | !country | !nieNumber | !nieName | !idSede | !phone | !email | !retryDuration) {
    alert("请填写所有资料")
    return
  }

  var userInfo = {
    'provice': provice,
    'police': police,
    'country': country,
    'nieNumber': nieNumber,
    'nieName': nieName,
    'idSede': idSede,
    'phone': phone,
    'email': email,
    'retryduration': retryDuration
  }

  chrome.storage.local.set({
    'userInfo': userInfo
  })
}

document.getElementById('save').onclick = function (element) {
  save()
}

document.getElementById('start').onclick = function (element) {
  save()
  chrome.runtime.sendMessage({ greeting: "start" }, function (response) {
    console.log(response.farewell)
  })
}

  // changeColor.onclick = function(element) {
  //   let color = element.target.value;
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.executeScript(
  //         tabs[0].id,
  //         {code: 'document.body.style.backgroundColor = "' + color + '";'});
  //   });
  // };