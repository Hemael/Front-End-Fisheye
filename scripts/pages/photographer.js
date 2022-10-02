//Mettre le code JavaScript lié à la page photographer.html
var idForLight = 0;

async function getMedia(photographerId) {

    //recuperer les donnés de data
    const response = await fetch('/data/photographers.json');
    const photographe = await response.json();
    const media = photographe.media.filter(vaba  => vaba.photographerId == photographerId)
    // retourner photographers
    return media.sort(function(a,b){
        return b.likes - a.likes;
    })
    
    
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
    closeModal()

}

function addlike(number){
    const nombre = document.querySelector("#numberlike");
    nombre.textContent = parseInt (nombre.textContent)+number;
}




const modale = document.querySelector("#lightbox");
const close = document.querySelector(".close-lightbox");
const next = document.querySelector(".next-lightbox")
const previous = document.querySelector(".previous-lightbox")



    
// On active le bouton close
close.addEventListener("click", function(){
    modale.classList.remove("show");
});



next.addEventListener("click",() =>{changeLightbox("up")});
previous.addEventListener("click",() =>{changeLightbox("previous")});
document.querySelector("#triSection").addEventListener("change",fctHideOption);

function showLightbox(){
    updateElementLightbox(this)
    

}

function changeLightbox(act){

    var id=document.querySelector(".id-lightbox").value;
    var numberArticle = document.querySelectorAll(".article_media").length;
    if (act == "up"){
        id++
    }
    else{
        id--
    }

    if(id == -1){
        id = numberArticle -1;
    }
    if (id == numberArticle){
        id = 0;
    }
    var newElement = document.querySelector(`*[idForLight="${id}"]`);
    updateElementLightbox(newElement);


}

function updateElementLightbox(element){

    const modale = document.querySelector("#lightbox");

    const video = modale.querySelector(".content-lightbox video");
    const image = modale.querySelector(".content-lightbox img");
    if(element.tagName == "VIDEO"){
        image.src = ""; 
        image.style.display = "none";
        video.src = element.getAttribute("src")
        video.style.display = "block";
        
        
    }

    else{
        
        video.style.display = "none";
        image.src = element.getAttribute("src");
        image.style.display = "block";
        
        
    }

    const commentaire = modale.querySelector(".commentaire-lightbox");
    commentaire.textContent = element.getAttribute("title");

    const idModale = modale.querySelector(".id-lightbox");
    idModale.setAttribute("value", element.getAttribute("idForLight"))

    modale.classList.add("show");

}


document.addEventListener("keydown", actkeys)


function actkeys(event){
    
   

    if( document.querySelector("#lightbox.show") != undefined){
        

        if(event.key == "ArrowRight" || event.key == "d" ){

            changeLightbox("up");

        }

        else if(event.key == "ArrowLeft" || event.key == "q" ){
            changeLightbox("down");
        }

        else if(event.key == "Escape" ){

            modale.classList.remove("show");
        }
    }
}



function clickLike(){

    this.parentNode.querySelector("p").innerHTML++;
    addlike(1);
    this.removeEventListener("click", clickLike);
}

function fctHideOption (){
    var option = this.value;
    var optdom = document.querySelector(".hideOption");
    if(optdom != undefined){
        optdom.classList.remove("hideOption");
    }
    document.querySelector(`option[value = "${option}"]`).classList.add("hideOption");
}


document.querySelector("#triSection").addEventListener("change", changeSortMethod);

function changeSortMethod(event){
    var articles = getArticleSort(this.value)
    var i = 1;
    articles.forEach(element => {
        element.style.order = i;
        element.querySelector("img").setAttribute("idForLight",i-1)
        i++;
    })
}

function getArticleSort(sort){
    var DOM = document.querySelectorAll(".article_media") 
    
    DOM = Array.from(DOM).sort(function(a,b){
        if(sort =="name"){
    
            return a.getAttribute(`data-${sort}`).localeCompare(b.getAttribute(`data-${sort}`))
            
        }
        else if(sort == "date"){
            var date1 = b.getAttribute(`data-${sort}`).split("-");
            var date2 = a.getAttribute(`data-${sort}`).split("-");

            return new Date(date1[0],date1[1],date1[2]).getTime()-new Date(date2[0],date2[1],date2[2]).getTime(); //firefox fais de la merde avec les dates, cordialement
            
        }
        return b.getAttribute(`data-${sort}`) -a.getAttribute(`data-${sort}`)
    });
    return DOM;
}
  

window.onload = function () {

    document.querySelector("#triSection").selectedIndex = "like";
    document.querySelector(`option[value = "like"]`).classList.add("hideOption");

}


init();

