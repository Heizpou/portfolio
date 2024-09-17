document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section") // Toutes les sections
  const navItems = document.querySelectorAll("#navigation ul li") // Tous les éléments de navigation
  const menuToggle = document.querySelector(".menu-toggle")
  const navigation = document.getElementById("navigation")

  // Fonction pour retirer la classe active de tous les éléments de navigation
  function removeActiveClasses() {
    navItems.forEach((item) => {
      item.classList.remove("active")
    })
  }

  // Fonction pour ajouter la classe active à l'élément de navigation correspondant
  function addActiveClassToNav(sectionId) {
    navItems.forEach((item) => {
      const targetSection = item.getAttribute("data-section")
      if (targetSection === sectionId) {
        item.classList.add("active")
      }
    })
  }

  // Fonction pour détecter la section visible à l'écran
  function onScroll() {
    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const scrollPosition = window.pageYOffset

      // Vérifier si la section est visible
      if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
        currentSection = section.getAttribute("id")
      }
    })

    if (currentSection) {
      removeActiveClasses() // Enlever la classe active de tous les éléments de navigation
      addActiveClassToNav(currentSection) // Ajouter la classe active au bon élément
    }
  }

  // Écouteur d'événements sur le défilement
  window.addEventListener("scroll", onScroll)

  // Fonction pour gérer le clic sur les éléments de la navigation
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      stopIntervals()
      const sectionId = item.getAttribute("data-section")
      const section = document.getElementById(sectionId)

      section.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      });
      
      // Mettre à jour la classe active manuellement
      navigation.classList.remove("toggleMenu")
      removeActiveClasses()
      startIntervals()
      onScroll()
    })
  })

  document.getElementById("cvbutton").addEventListener("click", function () {
    const documentUrl = "assets/CV.pdf"
    window.open(documentUrl, "_blank")
  })


  menuToggle.addEventListener("click", function () {
    navigation.classList.toggle("toggleMenu")
  })
})
