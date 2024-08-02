let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let homeScore = 0
let guestScore = 0

function hadd1(){
    homeScore += 1
    scoreHome.textContent = homeScore
}

function hadd2(){
    homeScore += 2
    scoreHome.textContent = homeScore
}

function hadd3(){
    homeScore += 3
    scoreHome.textContent = homeScore
}

function gadd1(){
    guestScore += 1
    scoreGuest.textContent = guestScore
}

function gadd2(){
    guestScore += 2
    scoreGuest.textContent = guestScore
}

function gadd3(){
    guestScore += 3
    scoreGuest.textContent = guestScore
}

function reset(){
    homeScore = 0
    guestScore = 0
    scoreHome.textContent = homeScore
    scoreGuest.textContent = guestScore
}