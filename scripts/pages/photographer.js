//Mettre le code JavaScript lié à la page photographer.html


async function getMedia(photographerId) {

    //recuperer les donnés de data
    const response = await fetch('/data/photographers.json');
    const photographe = await response.json();
    // retourner photographers
    return photographe.media.filter(vaba  => vaba.photographerId == photographerId)
    
    
}

async function getPhotographer(photographerId) {

    //recuperer les donnés de data
    const response = await fetch('/data/photographers.json');
    const photographe = await response.json();
    // retourner photographers
    return photographe.photographers.filter(vaba  => vaba.id == photographerId)
    
    
}




async function displayData(medias) {
    const mediasSection = document.querySelector(".mediasSection");

        medias.forEach((media) => {
            
            const mediaModel = mediaFactory(media);
            const userCardDOM = mediaModel.getUserCardDOM();
            mediasSection.appendChild(userCardDOM);
        });
};

async function displayHeader(photographer) {
    const headerSection = document.querySelector(".headerSection");
    const headerModel = headerPhotographerFactory(photographer);
    const headerDOM = headerModel.getUserCardDOM();
    headerSection.appendChild(headerDOM);
};


async function init() {
    // Récupère les datas des photographes
    var str = window.location.toString();
    var url = new URL(str);
    const idPhotographer = url.searchParams.get("idPhotographer")
    const photographer = await getPhotographer(idPhotographer);
    displayHeader(photographer[0])
    const  medias  = await getMedia(idPhotographer);
    displayData(medias);
};

const submit = document.querySelector("#contact_submit");
submit.addEventListener("click",validateForm )

function validateForm(e) {
    //annule le comportement par defaut
    e.preventDefault();

    //recupere les infos du formulaire
    const prenom = document.querySelector("input[name='first']")
    const nom = document.querySelector("input[name='last']")
    const adresse = document.querySelector("input[name='email']")
    const commentaire = document.querySelector("textarea[name='message']")
    
    //met le formulaire dans la console
    console.log(prenom.value,nom.value,adresse.value,commentaire.value)

}

function addlike(number){
    const nombre = document.querySelector("#numberlike");
    nombre.textContent = parseInt (nombre.textContent)+number;
}


init();
