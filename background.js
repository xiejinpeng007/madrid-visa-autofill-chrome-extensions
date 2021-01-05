//安装时调用
chrome.runtime.onInstalled.addListener(function () {
  //持久化存储
  // chrome.storage.sync.set({ color: "#3aa757" }, function () {
  //   console.log("The color is green.");
  // });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: "https://sede.administracionespublicas.gob.es/*",
            },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

//异常时返回主页
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  if(request.greeting == "needvalid"){
    chrome.browserAction.setBadgeText ( { text: '验证码'} );
  }
  if(request.greeting == "dismissvalid"){
    chrome.browserAction.setBadgeText ( { text: ''} );
  }

  if (request.greeting == "start") {
    chrome.tabs.create({
      url:
        "https://sede.administracionespublicas.gob.es/icpplustiem/index.html",
    });
  }


  if (request.greeting == "backtohome") {
    // sendResponse({farewell: "goodbye"});
    chrome.tabs.update(sender.tab.id, {
      url:
        "https://sede.administracionespublicas.gob.es/icpplustiem/index.html",
    });
  }
});
