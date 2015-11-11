import kit from "nokit";

let proxy = kit.require("proxy");

let { flow } = proxy;

let app = flow();

async () => {
    app.push(
        proxy.select(/^\/$/, $ => {
            $.body = `
                function FindProxyForURL(url, host) {
                    return "PROXY 127.0.0.1:58732";
                }
            `
        }),

        "OK"
    );

    await app.listen(58732);
}();
