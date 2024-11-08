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

const saveBtn = document.getElementById('saveBtn')
console.log(saveBtn)
saveBtn.addEventListener('click', () => {
  window.location.href = './homepage.html'
})
const langSelected = document.getElementById('langDrop')
const languages = document.querySelectorAll('#langList li')
console.log(languages)

for (let i = 0; i < languages.length; i++) {
  languages[i].addEventListener('click', () => {
    langSelected.innerText = languages[i].innerText
  })
}
