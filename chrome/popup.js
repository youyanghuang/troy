
var btnSwitch = document.querySelector(".btnSwitch");
var txtPacUrl = document.querySelector(".txtPacUrl");
var btnSubmit = document.querySelector(".btnSubmit");
var chrome = window.chrome;
var sendMessage = chrome.runtime.sendMessage;

function updateState (value) {
    btnSwitch.value = value === "开启" ? "关闭" : "开启";
}

function switchProxy () {
    var value = localStorage.switch;
    sendMessage({ type: "switch", value: value });

    if (value === "开启") {
        value = "关闭";
    } else {
        value = "开启";
    }

    updateState(value);
    localStorage.switch = value;
}

function updatePacUrl () {
    localStorage.pacUrl = txtPacUrl.value;

    sendMessage({ type: "pacUrl", value: localStorage.pacUrl });
}

btnSwitch.onclick = switchProxy;
txtPacUrl.onchange = updatePacUrl;
btnSubmit.onclick = () => {
    window.close();
};

updateState(localStorage.switch);

txtPacUrl.value = localStorage.pacUrl;
