const cursor = document.querySelector('.cursor')
if (cursor) {

	cursor.style.opacity = 1

	window.onmousemove = (e) => {
		requestAnimationFrame(() => {
			cursor.style.opacity = 1
			let x = `${(e.pageX - scrollX - 40)}px`,
				y = `${(e.pageY - scrollY - 40)}px`
			cursor.style.setProperty('--top', y)
			cursor.style.setProperty('--left', x)
		})
	}

	// window.onmouseenter = (e) => {
	// 	console.log("enter", e)
	// 	requestAnimationFrame(() => {
	// 		cursor.style.opacity = 1
	// 	})
	// }

	window.onmouseout = (e) => {
		requestAnimationFrame(() => {
			cursor.style.opacity = 0
		})
	}

	//todo window events or speciefic events
	document.addEventListener('click', () => {
		cursor.classList.add("expand")
		setTimeout(() => {
			cursor.classList.remove("expand")
		}, 600)
	})
}