let forward = document.querySelector('.prev1')
let back = document.querySelector('.prev2')
let active = document.querySelector('.active')
let lunbos = document.querySelectorAll('.lunbo li')
let text = document.querySelector('h3')
let index = 0

function common() {
    for (let i = 0; i < lunbos.length; i++) {
        active.classList.remove('active')
        this.classList.add('active')
    }
}

back.addEventListener('click', function () {
    index++
    index = index % lunbos.length
    text.innerHTML = `播放第${index}张`
    common()
})

forward.addEventListener('click', function () {
    index--
    index = (index + lunbos.length) % lunbos.length
    common()
})