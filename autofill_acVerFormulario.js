// https://sede.administracionespublicas.gob.es/icpplustiem/acVerFormulario
chrome.runtime.sendMessage({greeting:"dismissvalid"},function(res){})


chrome.storage.local.get('userInfo', function(obj){
    console.log(obj);
  var txtTelefonoCitadoInput = document.getElementById("txtTelefonoCitado");
  txtTelefonoCitadoInput.value = obj['userInfo']['phone']
  var txtMailCitadoInput  = document.getElementById("emailUNO");
  txtMailCitadoInput.value = obj['userInfo']['email']
  var emailDOSInput  = document.getElementById("emailDOS");
  emailDOSInput.value = obj['userInfo']['email']
  var input = document.getElementById("btnSiguiente");
  input.click();
  });
  