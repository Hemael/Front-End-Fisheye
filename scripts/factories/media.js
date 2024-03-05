function headerPhotographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;




    
    const prix = document.querySelector("#pricedays")
    prix.textContent = `${price}€ / jour`

    const nameContact = document.querySelector("#nameContact")
    nameContact.innerHTML = `Contactez-moi <br>${name}`
    nameContact.setAttribute("aria-label", `Contactez-moi ${name}`);


    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const url = `/photographer.html?idPhotographer=${id}`;

        const headerTexte = document.createElement( 'div' );
        headerTexte.classList.add("header-texte")

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;


        const texte = document.createElement( 'p' );
        texte.textContent = city + ", " + country;
        texte.classList.add("habitation"); 
        
        const tag= document.createElement( 'p' );
        tag.textContent = tagline;
        tag.classList.add("tagline"); 

        headerTexte.appendChild(h2);
        headerTexte.appendChild(texte);
        headerTexte.appendChild(tag);


        const headerContact = document.createElement( 'div' );
        headerContact.classList.add("photograph-header");

        const boutonContact = document.createElement('button');
        boutonContact.classList.add("contact_button");
        boutonContact.setAttribute("aria-label", "Contactez-moi");
        boutonContact.addEventListener("click", () => displayModal(id));
        boutonContact.textContent = "Contactez-moi";

        headerContact.appendChild(boutonContact);
        headerContact.appendChild(headerTexte)
        

        const headerImage = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt",`${name} - Photographe`)
        headerImage.appendChild(img)
        headerImage.classList.add("photodim");
        
        headerContact.appendChild(headerImage)
         
        article.appendChild(headerContact);
      
        return (article);
    }
    return {getUserCardDOM }
    
}


function mediaFactory(data) {
    //const { name, id, city, country, tagline, price, portrait } = data;
    const {id, photographerId, title, image, likes, date, price, video} = data;

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
            div.appendChild(img);
        }
        else{
            const videoArticle = document.createElement( 'video' );

            videoArticle.setAttribute("src", videos);
            videoArticle.setAttribute("title", title);
            videoArticle.addEventListener("click",showLightbox);
            videoArticle.setAttribute("idForLight",idForLight);
            videoArticle.setAttribute("tabindex",idForLight);
            div.appendChild(videoArticle);
             videoArticle.setAttribute("idForLight",idForLight);
        }

        

        

        const titrePhoto = document.createElement( 'p' );
        titrePhoto.textContent = title;
        

        const likeHeart = document.createElement('div');
        likeHeart.classList.add("like_heart")


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
        
        
        idForLight++;

        


        return (article);
    }
    return {getUserCardDOM }
    
}