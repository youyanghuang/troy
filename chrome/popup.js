
var btnSwitch = document.querySelector(".btnSwitch");
var chrome = window.chrome;
var sendMessage = chrome.runtime.sendMessage;

btnSwitch.value = localStorage.btnSwitch || "关闭";

btnSwitch.onclick = function () {
    var value = localStorage.btnSwitch;
    sendMessage({ type: "switch", value: value });

    if (value === "关闭") {
        chrome.browserAction.setIcon({
            path: "icon-off.png"
        });
        value = "开启";
    } else {
        chrome.browserAction.setIcon({
            path: "icon.png"
        });
        value = "关闭";
    }

    btnSwitch.value = localStorage.btnSwitch = value;
};
