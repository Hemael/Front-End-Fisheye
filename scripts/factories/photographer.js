

function photographerFactory(data,tabindex = 0) {
    const { name, id, city, country, tagline, price, portrait} = data;

    
    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM(typeFactory) {
        
        var item;
        let article, url, h2, img, texte, tag;
        
        if (typeFactory == 'header' || typeFactory == 'index') {
            console.log(typeFactory)
            article = document.createElement('article');
            url = `photographer.html?idPhotographer=${id}`;
            h2 = document.createElement('h2');
            h2.textContent = name;

            img = document.createElement('img');
            img.setAttribute("src", picture)
            img.setAttribute("alt", `${name} - Photographe`)

            texte = document.createElement('p');
            texte.textContent = city + ", " + country;
            texte.classList.add("habitation");

            tag = document.createElement('p');
            
            tag.textContent = tagline;
        }

        if (typeFactory == 'index') {
            let div = document.createElement('div');
            div.classList.add("photodim");

            h2.setAttribute("onclick", `document.location.href='${url}'`)
            h2.setAttribute("tabindex", tabindex);
            img.setAttribute("onclick", `document.location.href='${url}'`)
            img.setAttribute("tabindex", tabindex);
            div.appendChild(img);

            let prix = document.createElement('p');
            prix.setAttribute("tabindex", tabindex);
            prix.textContent = price + "€/jour";
            prix.classList.add("prix");

            tag.setAttribute("tabindex", tabindex);
            texte.setAttribute("tabindex", tabindex);

            article.appendChild(div);
            article.appendChild(h2);
            article.appendChild(texte);
            article.appendChild(tag);
            article.appendChild(prix)
            item = article;
        } 
        else if (typeFactory == 'header') {
            let headerTexte = document.createElement('div');
            headerTexte.classList.add("header-texte")

            tag.classList.add("tagline");

            headerTexte.appendChild(h2);
            headerTexte.appendChild(texte);
            headerTexte.appendChild(tag);

            //Je profite d'avoir récupéré les données du Json pour alimenter ma page photographer sans recharger le json
            let somme = document.querySelector("#pricedays")
            somme.textContent = `${price}€ / jour`
            const nameContact = document.querySelector("#nameContact")
            nameContact.innerHTML = `Contactez-moi <br>${name}`
            nameContact.setAttribute("aria-label", `Contactez-moi ${name}`);


            let headerContact = document.createElement('div');
            headerContact.classList.add("photograph-header");

            let boutonContact = document.createElement('button');
            boutonContact.classList.add("contact_button");
            boutonContact.setAttribute("aria-label", "Contactez-moi");
            boutonContact.addEventListener("click", () => displayModal(id));
            boutonContact.textContent = "Contactez-moi";

            headerContact.appendChild(boutonContact);
            headerContact.appendChild(headerTexte)


            const headerImage = document.createElement('div');

            headerImage.appendChild(img)
            headerImage.classList.add("photodim");
              
            headerContact.appendChild(headerImage)
                
            article.appendChild(headerContact);
            console.log(article)
            item = article;
        }

        return (item);  
    }

      return {getUserCardDOM }
    
}


