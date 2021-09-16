function obj() {
    console.log("original")
    var d = a+b+c
}
copy = obj
console.log(copy)
