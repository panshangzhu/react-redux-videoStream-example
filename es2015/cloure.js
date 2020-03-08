function connect() {
    let i = Date.now()
    return function () { // inner function
        return `${i}, now is:`
    }
}

//
let printDateFun = connect()
console.log(printDateFun())
