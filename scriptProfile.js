const saveBtn = document.getElementById('saveBtn')

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
