var chrome = window.chrome;

function turnOn () {
    var config = {
        mode: "pac_script",
        pacScript: {
            data: `
                function FindProxyForURL (url, host) {
                    if (host === 'test.com') {
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

chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.type === "switch") {
        if (msg.value === "开启") {
            turnOn();
        } else {
            turnOff();
        }
    }
});
