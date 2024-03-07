

function photographerFactory(data,tabindex) {
    const { name, id, city, country, tagline, price, portrait} = data;

    
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const url = "/photographer.html?idPhotographer="+id
        
        const div = document.createElement( 'div' );
        div.classList.add("photodim");
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("onclick",`document.location.href='${url}'`)

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute('alt', name)
        img.setAttribute("onclick",`document.location.href='${url}'`)
        img.setAttribute("tabindex", tabindex);
        div.appendChild(img);

        
        const texte = document.createElement( 'p' );
        texte.textContent = city + ", " + country;
        texte.classList.add("habitation"); 
        
        const tag= document.createElement( 'p' );
        tag.textContent = tagline;

        const prix= document.createElement( 'p' );
        prix.textContent = price + "€/jour";
        prix.classList.add("prix"); 
        
        
        article.appendChild(div);
        article.appendChild(h2);
        article.appendChild(texte);
        article.appendChild(tag);
        article.appendChild(prix)        
        
        return (article);
    }

      return {getUserCardDOM }
    
}

