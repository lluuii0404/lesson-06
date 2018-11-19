var initArray = []
function inputNewElemInArray(arr){
    var inputIndElem = document.body.appendChild(
        document.createElement("input")
    )
    inputIndElem.type = "number"
    inputIndElem.placeholder = "Введите индекс"

    var inputValue = document.body.appendChild(
        document.createElement("input")
    )
    inputValue.type = "text"
    inputValue.placeholder = "Введите новый елемент массива"

    var btn = document.body.appendChild(
        document.createElement("button")
    )
    var p = document.body.appendChild(
        document.createElement("p")
    )
    btn.innerText = "OK"
    btn.onclick = function(event) {
        var inpt =  Number(inputIndElem.value)
        var newVal = inputValue.value
        inpt >= 0 && inpt <= arr.length ? arr.splice(inpt, 0 , newVal) : console.log("Enter right position number !!!")
        p.innerText = arr
    }
}

inputNewElemInArray(initArray)