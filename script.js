let arrayNumbers = []
function add(number){
    let arrayAddText = Number(document.querySelector(`#textAdd`).value)
    number = arrayAddText
    let array = document.querySelector(`#array`)
    let numbersArray = document.createElement(`option`)
    numbersArray.text = `Number ${number} Add`
    if(arrayAddText < 0 || arrayAddText > 100 || arrayAddText == 0){
        window.alert(`Invalid Number, please type a number between 0 and 100 !`)
    }else{
        array.appendChild(numbersArray)
        arrayNumbers.push(number)
        arrayNumbers.sort((a,b) => a - b) //order array
        console.log(arrayNumbers)
    }
}
function finalize(){
    let analise1 = document.querySelector(`#analise1`)
    let analise2 = document.querySelector(`#analise2`)
    let analise3 = document.querySelector(`#analise3`)
    let analise4 = document.querySelector(`#analise4`)
    let analise5 = document.querySelector(`#analise5`)
    analise1.innerHTML = `The biggest number is: ${arrayNumbers[arrayNumbers.length - 1]}`
    analise2.innerHTML = `The Smallest number is: ${arrayNumbers[0]}`
    let sum = 0
    let med = 0
    for(let count in arrayNumbers){
        sum += arrayNumbers[count]
    }
    analise3.innerHTML = `The sum of the all numbers is: ${sum}`
    med = sum / arrayNumbers.length
    analise4.innerHTML = `The average of the numbers is: ${med.toFixed(2)}~`
}