const menuItems = document.querySelectorAll('.menu-item')
const messagesNotification =  document.querySelector('#messages-notification')
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')
 


function changeActiveItem () {
  menuItems.forEach(item => {
    item.classList.remove('active')
  })
} 

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem ()
    item.classList.add('active')
    if (item.id != 'notifications'){
      document.querySelector('.notifications-popup').style.display = 'none'
    }else{
      document.querySelector('.notifications-popup').style.display = 'block'
      document.querySelector('.notification-count').style.display = 'none'
    }
  })
})

messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary'
  setTimeout(()=>{
    messages.style.boxShadow = 'none'
  }, 1500)
  messagesNotification.querySelector('.notification-count').style.display = 'none'
})

messageSearch.addEventListener('keyup', () => {
  const val = messageSearch.value.toLowerCase()
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase()
    if(name.indexOf(val) == -1){
      chat.style.display = 'none'
    }else{
      chat.style.display = 'flex '
    }
  })
})

function openThemeModal() {
  themeModal.style.display = 'grid'
}

theme.addEventListener('click', openThemeModal)

themeModal.addEventListener('click',(e) => {
  if(e.target.classList.contains('customize-theme')){
  themeModal.style.display = 'none'
  }
})

function removeSizeSelector() {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector()
    let fontSize
    size.classList.toggle('active')


    if(size.classList.contains('font-size-1')){
      fontSize = '10px'
      root.style.setProperty('--sticky-top-left', '5.4rem')
      root.style.setProperty('--sticky-top-right', '5.4rem')
    }else if(size.classList.contains('font-size-2')){
      fontSize = '13px'
      root.style.setProperty('--sticky-top-left', '5.4rem')
      root.style.setProperty('--sticky-top-right', '-7rem')
    }else if(size.classList.contains('font-size-3')){
      fontSize = '16px'
      root.style.setProperty('--sticky-top-left', '5rem')
      root.style.setProperty('--sticky-top-right', '5rem')
    }else if(size.classList.contains('font-size-4')){
      fontSize = '19px'
      root.style.setProperty('--sticky-top-left', '5rem')
      root.style.setProperty('--sticky-top-right', '5rem')
    }else if(size.classList.contains('font-size-5')){
      fontSize = '22px'
      root.style.setProperty('--sticky-top-left', '5rem')
      root.style.setProperty('--sticky-top-right', '5rem')
    }

    document.querySelector('html').style.fontSize = fontSize
  })
})

function removeColorSelector() {
  colorPalette.forEach(color => {
    color.classList.remove('active')
  })
}


colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    removeColorSelector()
    let primaryHue

    if(color.classList.contains('color-1')){
      primaryHue = 252
    }else if(color.classList.contains('color-2')){
      primaryHue = 52
    }else if(color.classList.contains('color-3')){
      primaryHue = 352
    }else if(color.classList.contains('color-4')){
      primaryHue = 153
    }else if(color.classList.contains('color-5')){
      primaryHue = 202
    }
    color.classList.add('active')

    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})


let lightColorLightness
let whiteColorLightness
let darkColorLightness

function changeBg (){
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
}

Bg1.addEventListener('click', () => {
  Bg1.classList.add('active')
  Bg2.classList.remove('active')
  Bg3.classList.remove('active')

  window.location.reload()
})

Bg2.addEventListener('click', () => {
  lightColorLightness = '15%'
  whiteColorLightness = '20%'
  darkColorLightness = '100%'

  Bg2.classList.add('active')
  Bg1.classList.remove('active')
  Bg3.classList.remove('active')
  changeBg()
})
Bg3.addEventListener('click', () => {
  lightColorLightness = '0%'
  whiteColorLightness = '10%'
  darkColorLightness = '100%'

  Bg3.classList.add('active')
  Bg1.classList.remove('active')
  Bg2.classList.remove('active')
  changeBg()
})