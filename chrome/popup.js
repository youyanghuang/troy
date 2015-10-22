
var btnSwitch = document.querySelector(".btnSwitch");
var chrome = window.chrome;
var sendMessage = chrome.runtime.sendMessage;

function updateState (value) {
    btnSwitch.value = value === "关闭" ? "开启" : "关闭";
}

function switchProxy () {
    var value = localStorage.switch;
    sendMessage({ type: "switch", value: value });

    if (value === "关闭") {
        value = "开启";
    } else {
        value = "关闭";
    }

    updateState(value);
    localStorage.switch = value;
}

btnSwitch.onclick = switchProxy;

updateState(localStorage.switch);
