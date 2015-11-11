var chrome = window.chrome;

localStorage.pacUrl = localStorage.pacUrl || "http://127.0.0.1:58732";

function turnOn () {
    var config = {
        mode: "pac_script",
        pacScript: {
            url: localStorage.pacUrl
        }
    };

    chrome.proxy.settings.set(
        { value: config, scope: "regular" },
        () => {
            console.log("turned proxy on");
        }
    );
}

function turnOff () {
    var config = {
        mode: "system"
    };

    chrome.proxy.settings.set(
        { value: config, scope: "regular" },
        () => {
            console.log("turned proxy off");
        }
    );
}

function updateState () {
    chrome.browserAction.setIcon({
        path: localStorage.switch === "Enable" ? "icon.png" : "icon-off.png"
    });
}

chrome.runtime.onMessage.addListener(function (msg) {
    switch (msg.type) {
    case "switch":
        if (msg.value === "Enable") {
            turnOff();
        } else {
            turnOn();
        }
        updateState();
        break;

    case "pacUrl":
        turnOn();
        break;
    }
});

updateState();
