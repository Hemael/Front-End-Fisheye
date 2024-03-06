async function getPhotographers() {

    //recuperer les donnés de data
    const response = await fetch('/data/photographers.json');
    const photographe = await response.json();
    // retourner photographers
    return photographe.photographers;
}

    
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  var idphoto = 0;
  photographers.forEach((photographer) => { 
      const photographerModel = photographerFactory(photographer, idphoto);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
      idphoto ++;
  });

};


async function init() {
    // Récupère les datas des photographes
    const  photographers  = await getPhotographers();
    displayData(photographers);
};
    
init();
    
var selectedElement;

// Écouter l'événement focus pour chaque élément pouvant recevoir le focus
document.addEventListener('focusin', function(event) {
// Stocker l'élément actuellement sélectionné
    selectedElement = event.target;
});



document.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {
  if(event.key === "Enter"){
       console.log(selectedElement)
       var event = new Event('click');
    selectedElement.dispatchEvent(event);
  }
}

    