const button = document.getElementById('share-button')
button.style.width = '150px'
button.style.height = '150px'
button.style.color = '#FCFFFC'
button.style.fontSize = '22px'
button.style.backgroundColor = '#2BA84A'
button.style.borderRadius = '50%'
button.style.display = 'flex'
button.style.alignItems = 'center'
button.style.justifyContent = 'center'
button.style.cursor = 'pointer'

button.onclick = () => {
  if (!navigator.share) return

  navigator.share({
    title: 'Share test',
    text: 'Check out this app',
    url: 'https://briovr.com',
  })
}
