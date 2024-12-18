// Créer un simulateur de lancés de dés

// Lorsque vous lancer votre page de navigateur, je veux voir apparaitre le résultat la face d'un dé à 6 face (faire apparaitre une image).

// Quelques conseils pour réussir l'exercice :

// Essayez de décomposer au maximum le projet et allez y étape par étape.
// Faites votre structure HTML avec votre image
// Changer la source de votre image à l'aide de JS
// Récupérer dans la console un nombre aléatoire entre 1 et 6
// Adapter votre changement de source d'image par rapport au résultat du random (if) 
const dice = document.getElementById('dice-roll')
const dice2 = document.getElementById('dice-roll2')

const roll = document.getElementById('roll')

const random = Math.floor(Math.random() * 6) + 1
const random2 = Math.floor(Math.random() * 6) + 1
dice.src = `img/${random}.png`
dice2.src = `img/${random2}.png`

roll.addEventListener('click', () => {
    document.location.reload()
})