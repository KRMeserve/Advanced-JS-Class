// use strict

"use strict"; //it isn't a keyword, it's a string. This is so it works in super old browsers

// Can also do this
//not strict mode
function newCode() {
    "use strict"
    //strict mode
}


// strict mode will not allow variables to be declared improperly. Need var, const, or let in front of the variable for it to work (otherwise it gets added to the JavaScript global object). This saves time looking for syntax errors later.
// It also doesn't let us delete variables or functions using the delete command.
//Can't delete arguments of functions, either... not sure why this would ever happen.
// Also let's eval be used safely. 
