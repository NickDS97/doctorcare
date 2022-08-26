window.addEventListener('scroll', onScroll)
 
onScroll()
function onScroll () {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
 
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}
 
function activateMenuAtCurrentSection (section) {
  const targetLine = scrollY + innerHeight / 2
 
  // veirificar se a seção apssou da linha
  //quais dados vou precisar?
  // o topo da seção
  const sectionTop = section.offsetTop
  
  //a altura da seção
  const sectionHeight = section.offsetHeight
  
  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
 
  // verificar se a base está abaixo da linha alvo
 
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
 
  const navigationEl = document.getElementById('navigation');
 
  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine
 
  const sectionId = section.getAttribute ('id')
  const menuElement = document.querySelector (`.menu a[href*=${sectionId}]`)
 
  menuElement.classList.remove ('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
 
function showNavOnScroll() {
  if (scrollY > 0) {
    navigationEl.classList.add('scroll')
  } 
  else {
    navigationEl.classList.remove('scroll')
  }
}
 
function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } 
  else {
    backToTopButton.classList.remove('show')
  }
}
 
function openMenu () {
  document.body.classList.add('menu-expanded')
}
 
function closeMenu () {
  document.body.classList.remove('menu-expanded')
}
 
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card
#about,
#about header,
#about .content`)