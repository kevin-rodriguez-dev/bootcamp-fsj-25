var counter = 0; // TypeScript ya infiere que counter es de tipo 'number'
function increment() {
    for (var i = 0; i < 10; i++) {
        counter++;
    }
    console.log(counter);
}
increment();
