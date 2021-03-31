console.log("This is asynchronisation tutorial");
setTimeout(() => {
    for (let i = 0; i < 4000; i++) {
        const element = i;
        console.log("this is index " + i);
    }
}, 100);

console.log("done ")