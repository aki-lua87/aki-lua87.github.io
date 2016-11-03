class Hello {  
    private count = 0;

    public constructor() {
        console.log('Hello World22222');
    }

    public tick(): void {
        ++this.count;
        console.log('count1111111111111', this.count);
    }
}

var hello = new Hello();

function main() {  
    hello.tick();
    setTimeout(main, 1000);
}

main();  