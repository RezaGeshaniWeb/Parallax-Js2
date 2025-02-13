// select element
const sec1 = document.querySelector('#sec1')
const cover = document.querySelectorAll('.cover')
const sec2 = document.querySelector('#sec2')
const sec3 = document.querySelector('#sec3')
const sec3Para = document.querySelectorAll('#sec3>p')
const sec4 = document.querySelector('#sec4')
const sec4Para = document.querySelector('#sec4>p')
const sec5 = document.querySelector('#sec5')
const sec5Img = document.querySelector('#sec5-img')
const sec5Title = document.querySelector('#sec5-title')
const sec6 = document.querySelector('#sec6')
// select element


// scroll event
let x = 0
window.addEventListener('scroll', () => {
    let st = window.scrollY
    console.log(st)

    // sec 1
    if (st > 100) cover.forEach(c => c.style.width = '100%')
    else cover.forEach(c => c.style.width = '0')
    // sec 1

    // sec 2
    let originalPosition = '100%'
    if (st >= 400 && st <= 800) {
        if (st < 600) {
            let x = ((600 - st) / 10)
            if (x <= 10) {
                sec2.style.top = ((600 - (st + 50)) / 10) + '%'
            } else if (x >= 90) {
                sec2.style.top = ((600 - (st - 50)) / 10) + '%'
            } else {
                sec2.style.top = originalPosition
            }
        }
    }
    // sec 2

    // sec 3
    let originalPosition2 = '100%'
    if (st >= 1200 && st <= 4500) {
        if (st < 1600) {
            let x = ((1600 - st) / 10)
            if (x <= 10) {
                sec3.style.top = ((1600 - (st + 50)) / 10) + '%'
            } else if (x >= 90) {
                sec3.style.top = ((1600 - (st - 50)) / 10) + '%'
            } else {
                sec3.style.top = originalPosition2
            }
        }

        if (st < 2500) {
            sec3.style.backgroundImage = "url(img/about1.jpg)"
            sec3Para[0].classList.remove('hidden')
            sec3Para[1].classList.add('hidden')
            sec3Para[2].classList.add('hidden')
        }

        if (st >= 2500 && st < 3500) {
            sec3.style.backgroundImage = "url(img/about2.jpg)"
            sec3Para[0].classList.add('hidden')
            sec3Para[1].classList.remove('hidden')
            sec3Para[2].classList.add('hidden')
        }

        if (st >= 3500) {
            sec3.style.backgroundImage = "url(img/about3.jpg)"
            sec3Para[0].classList.add('hidden')
            sec3Para[1].classList.add('hidden')
            sec3Para[2].classList.remove('hidden')
        }
    }
    // sec 3

    // sec 4
    let originalPosition3 = '100%'
    if (st > 4500 && st <= 6000) {
        if (st < 4800) {
            let x = ((4800 - st) / 10)
            if (x <= 10) {
                sec4.style.top = ((4800 - (st + 50)) / 10) + '%'
            } else if (x >= 90) {
                sec4.style.top = ((4800 - (st - 50)) / 10) + '%'
            } else {
                sec4.style.top = originalPosition3
            }
        }

        if (st < 5300) {
            sec4Para.style.opacity = '.4'
        } else {
            sec4Para.style.opacity = '1'
        }
    }
    // sec 4

    // sec 5
    let originalPosition4 = '100%'
    if (st >= 6000 && st <= 11200) {
        if (st < 6500) {
            let x = ((6500 - st) / 10)
            if (x <= 10) {
                sec5.style.top = ((6500 - (st + 50)) / 10) + '%'
            } else if (x >= 90) {
                sec5.style.top = ((6500 - (st - 50)) / 10) + '%'
            } else {
                sec5.style.top = originalPosition4
            }
        }

        if (st >= 6800 && st <= 7500) {
            sec5.style.backgroundImage = 'url(img/project1.jpg)'
            sec5Img.setAttribute('src', 'img/project1-scaled.avif')
            sec5Title.innerText = 'Positive Money'

        } else if (st > 7800 && st <= 8500) {
            sec5.style.backgroundImage = 'url(img/project2.jpg)'
            sec5Img.setAttribute('src', 'img/project1-scaled.avif')
            sec5Title.innerText = 'Positive Money'

        } else if (st > 8800 && st <= 9500) {
            sec5.style.backgroundImage = 'url(img/project3.jpg)'
            sec5Img.setAttribute('src', 'img/project2-scaled.avif')
            sec5Title.innerText = 'Time use initiative'

        } else if (st > 9800 && st <= 10500) {
            sec5.style.backgroundImage = 'url(img/project4.jpg)'
            sec5Img.setAttribute('src', 'img/project3-scaled.avif')
            sec5Title.innerText = 'Escuela de cateura'

        } else if (st > 10500 && st <= 11200) {
            sec5.style.backgroundImage = 'url(img/project5.jpg)'
            sec5Img.setAttribute('src', 'img/project4-scaled.avif')
            sec5Title.innerText = 'Ghana Bamboo Bikes Initiative'
        }
    }
    // sec 5

    // sec 6
    let originalPosition5 = '100%'
    if (st > 11200 && st <= 20000) {
        if (st < 19100) {
            let x = ((12000 - st) / 20)
            if (x <= 10) {
                sec6.style.top = ((12000 - (st + 50)) / 20) + '%'
            } else if (x >= 90) {
                sec6.style.top = ((12000 - (st - 50)) / 20) + '%'
            } else {
                sec6.style.top = originalPosition5
            }
        }
    }
    // sec 6
})
// scroll event