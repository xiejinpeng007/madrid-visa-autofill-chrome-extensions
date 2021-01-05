//测试数据 动态获取
// var toSelectCity = "POLICIA-TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)";
// var idType = "N.I.E";
// var idText = "Y7593713R";
// var idName = "ZEWEN WANG";
// var idCountry = "CHINA";

// //id 类型
// var idTypeId;
// if (idType == "N.I.E") idTypeId = "rdbTipoDocNie";
// else idTypeId = "rdbTipoDocPas";
// document.getElementById(idTypeId).click();

// //NIE
// document.getElementById("txtIdCitado").value = idText;

// //NIE 名字
// document.getElementById("txtDesCitado").value = idName;

// //NIE 国家
// var countrySelector = document.getElementById("txtPaisNac");
// countrySelector.value = "406";
// var options = countrySelector.options;
// var toSelectIndex = 0;
// for (i = 0; i < options.length; i++) {
//   if (options[i].text == idCountry) toSelectIndex = i;
// }
// countrySelector.value = options[toSelectIndex].value

chrome.runtime.sendMessage({greeting:"dismissvalid"},function(res){})


  chrome.storage.local.get("userInfo", function (obj) {
    console.log(obj);

    document.getElementById("txtIdCitado").value = obj["userInfo"]["nieNumber"];
    document.getElementById("txtDesCitado").value = obj["userInfo"]["nieName"];
    //NIE 国家
    var countrySelector = document.getElementById("txtPaisNac");
    countrySelector.value = obj["userInfo"]["country"];

    var input = document.getElementById("btnEnviar");
    input.disabled = false
    input.click();
  });

