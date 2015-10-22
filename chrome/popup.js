
var btnSwitch = document.querySelector(".btnSwitch");
var sendRequest = window.chrome.extension.sendRequest;

btnSwitch.onclick = function () {
    if (btnSwitch.value === "关闭") {
        btnSwitch.value = "开启";

        sendRequest({ type: "" })
    } else {
        btnSwitch.value = "关闭";
    }
}
