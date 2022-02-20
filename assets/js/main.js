let Mood = document.querySelector('#Mood')
if (window.localStorage.hasOwnProperty('Mood')) {
    if (window.localStorage.Mood === 'light') {
        lightMood()
    } else {
        darkMood()
    }
} else {
    lightMood()
}
function lightMood() {
    window.localStorage.setItem('Mood', 'light')
    document.querySelector('body').style['backgroundColor'] = 'var(--bgMainLightColor)'
    document.querySelector('.nav').classList.remove('dark')
    document.querySelector('.nav').classList.add('light')
    document.querySelector('.container').classList.remove('dark')
    document.querySelector('.container').classList.add('light')
}
function darkMood() {
    window.localStorage.setItem('Mood', 'dark')
    document.querySelector('body').style['backgroundColor'] = 'var(--bgSecondDarkColor)'
    document.querySelector('.nav').classList.add('dark')
    document.querySelector('.nav').classList.remove('light')
    document.querySelector('.container').classList.add('dark')
    document.querySelector('.container').classList.remove('light')
}
Mood.onclick = function () {
    if (window.localStorage.Mood === 'light') {
        darkMood()
    } else {
        lightMood()
    }
}

let navItems = document.querySelectorAll('.nav ul li a')
navItems.forEach((ele, ind) => {
    ele.onclick = () => {
        navItems.forEach((ele) => {
            ele.classList.remove('active')
        })
        ele.classList.add('active')
        if (ind === 0) {
            document.querySelector('.wrodsContainer').classList.add('show')
            document.querySelector('.contactContainer').classList.remove('show')
            document.querySelector('.content').style['overflow-y'] = 'scroll'
        } else if (ind === 1) {
            document.querySelector('.wrodsContainer').classList.remove('show')
            document.querySelector('.contactContainer').classList.add('show')
            document.querySelector('.content').style['overflow-y'] = 'hidden'
            document.querySelector('.content').scrollTo(0, 0)
        }
        document.querySelector('#indicator').classList = `active${ind}`
    }
})


let input = document.querySelector('#input')
let searchBtn = document.querySelector('#searchBtn')
let reloadBtn = document.querySelector('#reloadBtn')
let englishWord = document.querySelectorAll('.content .word .E')
let arabicWord = document.querySelectorAll('.content .word .A')
let words = document.querySelectorAll('.word')
searchBtn.addEventListener('click', () => {
    document.querySelector('.wrodsContainer').classList.add('show')
    document.querySelector('.contactContainer').classList.remove('show')
    document.querySelector('.content').style['overflow-y'] = 'scroll'
    navItems.forEach((ele) => {
        ele.classList.remove('active')
    })
    document.querySelector('#home').classList.add('active')
    document.querySelector('#indicator').classList = 'active0'
    englishWord.forEach((ele) => {
        ele.classList = 'E'
    })
    arabicWord.forEach((ele) => {
        ele.classList = 'A'
    })
    englishWord.forEach((ele) => {
        if (ele.textContent === input.value) {
            condition = true
            englishWord.forEach((ele) => {
                ele.classList.add('hidden')
            })
            ele.classList.remove('hidden')
            ele.classList.add('show')
        } else {
            condition = false
        }
    })
    arabicWord.forEach((ele) => {
        if (ele.textContent === input.value) {
            condition = true
            englishWord.forEach((ele) => {
                ele.classList.add('hidden')
            })
            ele.classList.remove('hidden')
            ele.classList.add('show')
        } else {
            condition = false
        }
    })
    words.forEach((ele) => {
        if (ele.querySelector('p.hidden') && (!ele.querySelector('p.show'))) {
            ele.classList.add('hidden')
        } else {
            ele.classList = 'word'
        }
    })
})
reloadBtn.addEventListener('click', () => {
    window.location.reload()
    englishWord.forEach((ele) => {
        ele.classList = 'E'
    })
    arabicWord.forEach((ele) => {
        ele.classList = 'A'
    })
})