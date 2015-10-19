import kit from "nokit";

let proxy = kit.require("proxy");

let { flow } = proxy;

let app = flow();

async () => {
    app.push(
        $ => {
            $.res.setHeader("Access-Control-Allow-Origin", "*");
            kit.logs($.req.url);
            $.body = "OK";
        }
    );

    await app.listen(8123);
}();
