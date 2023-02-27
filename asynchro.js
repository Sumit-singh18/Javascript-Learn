console.log("This is asynchronisation tutorial");
setTimeout(() => {
    for (let i = 0; i < 40; i++) {
        const element = i;
        console.log("this is index " + i);
    }
}, 100);

console.log("done ")