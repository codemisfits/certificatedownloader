const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const DOBInput = document.getElementById('DOB')
const GnameInput = document.getElementById('given-name')
const familynameInput = document.getElementById('family-name')
const fathernameInput = document.getElementById('father-name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'birth-1.png'
image.onload = function () {
	drawImage()
}


function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '14px Helvetica'
	ctx.fillStyle = 'black'
	ctx.fillText(nameInput.value, 312, 170)
	ctx.fillText(weightInput.value,200, 262)
	ctx.fillText(heightInput.value,200, 290)
	ctx.fillText(DOBInput.value,326, 350)
	ctx.fillText(GnameInput.value,470, 260)
	ctx.fillText(familynameInput.value,470, 275)
	ctx.fillText(fathernameInput.value,470, 290)
}

nameInput.addEventListener('input', function () {
   
	drawImage()
})

DOBInput.addEventListener('input', function () {
   
	drawImage()
})
heightInput.addEventListener('input', function () {
   
	drawImage()
})

weightInput.addEventListener('input', function () {
   
	drawImage()
})
GnameInput.addEventListener('input', function () {
   
	drawImage()
})

familynameInput.addEventListener('input', function () {
   
	drawImage()
})

fathernameInput.addEventListener('input', function () {
   
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value + weightInput.value
})