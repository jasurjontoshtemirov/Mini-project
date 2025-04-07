document.addEventListener('DOMContentLoaded', () => {
	const advs = document.querySelectorAll('.promo__adv img'),
		genre = document.querySelector('.promo__genre'),
		wrapper = document.querySelector('.promo__bg'),
		seriesList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		input = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector("[type='checkbox']")

	const seriesDB = {
		series: [
			'Omar',
			'The Final Legacy',
			'Ertugrul',
			'Magnificent Century',
			'The Great Seljuks: Guardians...',
		],
	}	

	advs.forEach(item => {
		item.remove()
	})

	genre.textContent = 'Comedy'
	seriesList.innerHTML = ''


	wrapper.style.backgroundImage = 'url(./img/1.jpg)';

		seriesDB.series.forEach((item, index) => {
			seriesList.innerHTML += `
				<li class="promo__interactive-item">
					${index + 1}. ${item}
					<div class="delete"></div>
				</li>
			`
		});

		
	});

