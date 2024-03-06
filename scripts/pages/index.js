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
    
   

    document.addEventListener('keydown', function(event) {
        
        });