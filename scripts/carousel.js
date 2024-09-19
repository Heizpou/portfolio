// Récupération des élements HTML
const formationSlidesContainer = document.getElementById("formation-container")
const formationSlide = document.querySelector(".formation-slide")
const formationNextButton = document.getElementById("formation-arrow-next")
const formationPrevButton = document.getElementById("formation-arrow-prev")
const professionnelsSlidesContainer = document.getElementById("professionnels-container")
const professionnelsSlide = document.querySelector(".formation-slide")
const professionnelsNextButton = document.getElementById("professionnels-arrow-next")
const professionnelsPrevButton = document.getElementById("professionnels-arrow-prev")
const liElementsProfessionnels = document.querySelectorAll(".professionnels-container li")
const liProfessionnelsCount = liElementsProfessionnels.length
const liElementsFormation = document.querySelectorAll(".formation-container li")
const liFormationCount = liElementsFormation.length

// Création des variables
let professionnelsSlideWidth = professionnelsSlide.clientWidth
let formationSlideWidth = formationSlide.clientWidth
var indexFormation = 0
var indexProfessionnels = 0
var lstFormation = createScrollList(liFormationCount, formationSlideWidth)
var lstProfessionnels = createScrollList(liProfessionnelsCount, professionnelsSlideWidth)

// Evenements lors des click
formationNextButton.addEventListener("click", () => {
  scrollFormation(true)
})

formationPrevButton.addEventListener("click", () => {
  scrollFormation(false)
})

professionnelsNextButton.addEventListener("click", () => {
  scrollProfessionnels(true)
})

professionnelsPrevButton.addEventListener("click", () => {
  scrollProfessionnels(false)
})

// Automatisation du scroll

// Permet de créer la liste de scroll
function createScrollList(nbli, width) {
  var lst = []
  for (var i = 0; i < nbli; i++) {
    lst.push(i * width)
  }
  return lst
}

function scrollProfessionnels(forward) {
  // Si scroll en avant
  if (forward) {
    if (indexProfessionnels >= lstProfessionnels.length) {
      indexProfessionnels = 0
    } else {
      indexProfessionnels++
    }
  }
  //   Si scroll en arrière
  else {
    if (indexProfessionnels <= 0) {
      indexProfessionnels = lstProfessionnels.length - 1
    } else {
      indexProfessionnels--
    }
  }

  // Activation du scroll
  professionnelsSlidesContainer.scrollLeft = lstProfessionnels[indexProfessionnels]
}

function scrollFormation(forward) {
  // Si scroll en avant
  if (forward) {
    if (indexFormation >= lstFormation.length) {
      indexFormation = 0
    } else {
      indexFormation++
    }
  }
  // Si scroll en arrière
  else {
    if (indexFormation <= 0) {
      indexFormation = lstFormation.length - 1
    } else {
      indexFormation--
    }
  }

  // Activation du scroll
  formationSlidesContainer.scrollLeft = lstFormation[indexFormation]
}

function startIntervals() {
  professionnelsInterval = setInterval(() => {
    scrollProfessionnels(true)
  }, 6000)
  formationInterval = setInterval(() => {
    scrollFormation(true)
  }, 7500)
}

window.addEventListener("resize", () => {
  professionnelsSlideWidth = professionnelsSlide.clientWidth
  formationSlideWidth = formationSlide.clientWidth

  lstProfessionnels = createScrollList(liProfessionnelsCount, professionnelsSlideWidth)
  lstFormation = createScrollList(liFormationCount, formationSlideWidth)
})

// Initialiser le premier intervalle
startIntervals()