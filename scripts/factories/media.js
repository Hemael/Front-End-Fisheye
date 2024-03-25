import { addlike, showLightbox, idForLight, clickLike, updateElementLightbox, selectedElement, incrementIdForLight} from "../pages/photographer.js";

export function mediaFactory(data) {
    //const { name, id, city, country, tagline, price, portrait } = data;
    const {title, image, likes, date, video} = data;

    var str = window.location.toString();
    var url = new URL(str);
    const idPhotographer = url.searchParams.get("idPhotographer")

    addlike(likes);


    const picture = `assets/images/${idPhotographer}/${image}`;
    const videos = `assets/images/${idPhotographer}/${video}`;
    const heart = "assets/images/coeur.png";

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("article_media");
        article.setAttribute("data-like", likes);
        article.setAttribute("data-date", date);
        article.setAttribute("data-name", title);


        const div = document.createElement( 'div' );
        div.classList.add("photo_media");

        const boiteTexte = document.createElement( 'div' );
        boiteTexte.classList.add("texte_media");
        

        if (image){
            const img = document.createElement( 'img' );

            img.setAttribute("src", picture)
            img.setAttribute("title",title)
            img.addEventListener("click", showLightbox)
            img.setAttribute("idForLight",idForLight);
            img.setAttribute("tabindex",idForLight);
            
            img.addEventListener("keydown", function(event){
                if(event.key === "Enter" || event.keyCode === 13){
                    updateElementLightbox(selectedElement)
                }
            });
            div.appendChild(img);
        }
        else{
            const videoArticle = document.createElement( 'video' );

            videoArticle.setAttribute("src", videos);
            videoArticle.setAttribute("title", title);
            videoArticle.addEventListener("click",showLightbox);
            videoArticle.setAttribute("idForLight",idForLight);
            videoArticle.setAttribute("tabindex",idForLight);
            
            videoArticle.addEventListener("keydown", function(event){
                if(event.key === "Enter" || event.keyCode === 13){
                    updateElementLightbox(selectedElement)
                }
            });
            div.appendChild(videoArticle);
             
        }   

        const titrePhoto = document.createElement( 'p' );
        titrePhoto.textContent = title;
        titrePhoto.setAttribute("tabindex", idForLight);
        titrePhoto.classList.add("descriPhoto");
        

        const likeHeart = document.createElement('div');
        likeHeart.classList.add("like_heart")
        likeHeart.setAttribute("tabindex", idForLight);


        const like = document.createElement( 'p' );
        like.textContent = likes;
        like.classList.add("like_chiffre"); 
        
        const coeur = document.createElement( 'img' );
        coeur.setAttribute("src", heart);
        coeur.setAttribute("alt", "likes")
        coeur.classList.add("heart");
        coeur.addEventListener("click", clickLike)
        
        
        article.appendChild(div);
        boiteTexte.appendChild(titrePhoto);
        
        //Je met mes coeurs et mes likes dans ma div 
        likeHeart.appendChild(like);
        likeHeart.appendChild(coeur);
    
        
        boiteTexte.appendChild(likeHeart)

        article.appendChild(boiteTexte)
        
        
        incrementIdForLight();

        return (article);
    }
    return {getUserCardDOM }
    
}

