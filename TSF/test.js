var Hello = (function () {
    function Hello() {
        this.count = 0;
        console.log('Hello World22222');
    }
    Hello.prototype.tick = function () {
        ++this.count;
        console.log('count1111111111111', this.count);
    };
    return Hello;
}());
var hello = new Hello();
function main() {
    hello.tick();
    setTimeout(main, 1000);
}
main();
//# sourceMappingURL=test.js.map