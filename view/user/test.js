var data = {
    "list": [{
        "name": "张三",
        "age": 20
    }, {
        "name": "李四",
        "age": 21
    }]
};
var options = {
    url: 'template.ejs'
}
var html = new EJS(options).render(data);
document.getElementById("test").innerHTML = html;