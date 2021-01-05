chrome.runtime.sendMessage({greeting:"dismissvalid"},function(res){})

var toSelectCity = "POLICIA-TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)";
var toSelectCityValue = "4010"

var citySelector = document.getElementById("tramiteGrupo[0]")
citySelector.value = toSelectCityValue

// var options = citySelector.options;
// var toSelectIndex = 0;
// for (i = 0; i < options.length; i++) {
//   if (options[i].text == toSelectCity) toSelectIndex = i;
// }
// citySelector.value = options[toSelectIndex].value

chrome.storage.local.get('userInfo', function(obj){
  console.log(obj);
var policeSelector = document.getElementById("tramiteGrupo[0]");
policeSelector.value = obj['userInfo']['police']
var input = document.getElementById("btnAceptar");
input.click();
});
