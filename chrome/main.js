var chrome = window.chrome;

function turnOn () {
    var config = {
        mode: "pac_script",
        pacScript: {
            data: `
                function FindProxyForURL (url, host) {
                    if (host === 'www.bilibili.com') {
                        return 'PROXY 127.0.0.1:8123';
                    } else {
                        return "DIRECT";
                    }
                }
            `
        }
    };

    chrome.proxy.settings.set(
        { value: config, scope: "regular" },
        function () {
            console.log("turned proxy on");
        }
    );
}

function turnOff () {
    var config = {
        mode: "auto_detect"
    };

    chrome.proxy.settings.set(
        { value: config, scope: "regular" },
        function () {
            console.log("turned proxy off");
        }
    );
}

function updateState () {
    chrome.browserAction.setIcon({
        path: localStorage.switch === "关闭" ? "icon-off.png" : "icon.png"
    });
}

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.type === "switch") {
        if (msg.value === "开启") {
            turnOff();
        } else {
            turnOn();
        }
    }

    updateState();
});

updateState();
