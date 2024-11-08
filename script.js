console.log('funziona')

const thumbnails = document.getElementsByClassName('overflow-hidden')
console.log(thumbnails)

for (let i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener('mouseenter', () => {
    thumbnails[i].style.transform = 'scale(1.05)'
  })

  thumbnails[i].addEventListener('mouseleave', () => {
    thumbnails[i].style.transform = 'scale(1.0)'
  })
}

const genresBtn = document.getElementById('genresBtn')
const genres = document.querySelectorAll('#genresList li a')
console.log(genresBtn)
console.log(genres)

for (let i = 0; genres.length; i++) {
  genres[i].addEventListener('click', () => {
    genresBtn.innerText = genres[i].innerText
  })
}
