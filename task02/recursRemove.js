var tagNames = [ "div", "div", "div", "div", "button" ]
var divStyle = `
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px green;
    font-size: 25px;
`
elements = tagNames.map ( function ( x ) {
    return document.body.appendChild ( 
        document.createElement ( x ) 
    )
})

elements.filter ( function ( element ) {
    return element.tagName === "DIV"
})
.forEach ( function ( element, num ) {
            element.style = divStyle
            element.innerText = num
})

elements.filter ( function ( element ) {
    return element.tagName === "BUTTON"
})
.forEach ( function ( element ) {
    element.innerHTML = "remove DIVs"
    element.onclick = function ( event ) {
            recursRemove ()
    }
})

var recursRemove = (function (elem) {
    var numElDiv = 0
    return function() {
        var div =  document.querySelector("div")

        var removed = div.parentNode.removeChild(div)
        
        if (numElDiv < elem.length ) {
            div[numElDiv++]
            return arguments.callee() //  хвостовая рекурсия - в arguments.callee() - вызывается повторно функция
        }   
    }

})("DIV")