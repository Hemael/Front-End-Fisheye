function headerPhotographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const url = "/photographer.html?idPhotographer="+id
        

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
        boutonContact.setAttribute("onclick",`displayModal()`);
        boutonContact.textContent = "Contactez-moi";

        headerContact.appendChild(boutonContact);
        headerContact.appendChild(headerTexte)
        

       

        const headerImage = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
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
    const {id, photographerId, title, image, likes, date, price} = data;
    const picture = `assets/images/???/${image}`;
    const heart = "assets/images/Heart_symbol_c00.png";

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.classList.add("article_media");

        const div = document.createElement( 'div' );
        div.classList.add("photo_media");

        const boiteTexte = document.createElement( 'div' );
        boiteTexte.classList.add("texte_media");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        div.appendChild(img)

        const titrePhoto = document.createElement( 'p' );
        titrePhoto.textContent = title;
        
        const like = document.createElement( 'p' );
        like.textContent = likes;
        like.classList.add("like_chiffre"); 
        
        const coeur = document.createElement( 'img' );
        coeur.setAttribute("src", heart);
        coeur.classList.add("heart");
        
        
        article.appendChild(div);
        boiteTexte.appendChild(titrePhoto);
        boiteTexte.appendChild(like);
        boiteTexte.appendChild(coeur);

        article.appendChild(boiteTexte)
        
        
        

        return (article);
    }
    return {getUserCardDOM }
    
}