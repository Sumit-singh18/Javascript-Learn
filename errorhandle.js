console.log("This is error handling chapter");
let a = "sumit singh";
a = undefined;
if (a != undefined) {
    throw new Error("A is not defined"); //we can use this to throw custom  error
} else {
    console.log("no errror");
}

try {
    fcvhgbhngvbh;
    console.log("we are inside try block");
} catch (error) {
    console.log("you are writting wrong Syntax");
    console.log(error);
} finally {
    console.log(
        "This will run whatever the statement is present in try block statement "
    );
}
