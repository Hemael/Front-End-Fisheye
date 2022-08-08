//Mettre le code JavaScript lié à la page photographer.html


async function getMedia(photographerId) {

    //recuperer les donnés de data
    const response = await fetch('/data/photographers.json');
    const photographe = await response.json();
    // retourner photographers
    return photographe.media.filter(vaba  => vaba.photographerId == photographerId)
    
    
}




async function displayData(medias) {
    console.log(medias);
};



async function init() {
    // Récupère les datas des photographes
    const  medias  = await getMedia(82);
    displayData(medias);
};

init();
