export default [
    // ["规则1", "需要识别成的pathname"]
    [/^article\/(\d+)$/, "home/article/detail?id=:1"],
    // ["规则2", {
    //     get: "get请求下需要识别成的pathname",
    //     post: "post请求下需要识别成的pathname"
    // }]
    [/^article\/(\d+)$/, {
        get: "home/article/detail?id=:1",
        delete: "home/article/delete?id=:1",
        post: "home/article/save?id=:1"
    }]
];