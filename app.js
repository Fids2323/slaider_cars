const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button') //bring buttons

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length //count divs(nomber)

const container = document.querySelector('.container')
let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh` //4 slaids, need 3


//event buttons, callback
upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

//1 commit add use buttons
document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp') {
		changeSlide('up')
	} else if (event.key === 'ArrowDown') {
		changeSlide('down')
	}
})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else if (direction === 'down') {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}
	const height = container.clientHeight
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}