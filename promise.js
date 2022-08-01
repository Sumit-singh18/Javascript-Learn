// promises
// 1. inside catch =reject  
// 2.inside then= rsolve
// 3.pending

function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('function: your function is resolved')
                resolve();
            } else {
                console.log('function: your function is not resolved');
                reject();
            }

        }, 2000);
    })
}
func1().then(function() {
    console.log('me:thanks for resolve');
}).catch(function(error) {
    console.log('me: very bad performance');
})