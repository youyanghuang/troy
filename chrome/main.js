var chrome = window.chrome;

fetch("http://127.0.0.1:8123/popup");

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
        console.log("set proxy done");
    }
);
