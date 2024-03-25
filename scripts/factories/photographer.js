import { displayModal } from "../utils/contactForm.js";


export function photographerFactory(data, tabindex = 0) {

    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/${portrait}`;

    function createUserCard() {

        const article = document.createElement('article');
        const url = `photographer.html?idPhotographer=${id}`;
        
        const h2 = document.createElement('h2');
        h2.textContent = name;

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("alt", `${name} - Photographe`)

        const texte = document.createElement('p');
        texte.textContent = city + ", " + country;
        texte.classList.add("habitation");

        const tag = document.createElement('p');
        tag.textContent = tagline;

        const prix = document.createElement('p');
        prix.textContent = price + "€/jour";
        prix.classList.add("prix");


        const div = document.createElement('div');
        div.classList.add("photodim");


        h2.setAttribute("onclick", `document.location.href='${url}'`)
        h2.setAttribute("tabindex", tabindex);
        img.setAttribute("onclick", `document.location.href='${url}'`)
        img.setAttribute("tabindex", tabindex);
        texte.setAttribute("tabindex", tabindex);
        tag.setAttribute("tabindex", tabindex);
        prix.setAttribute("tabindex", tabindex);

        div.appendChild(img);
        article.appendChild(div);
        article.appendChild(h2);
        article.appendChild(texte);
        article.appendChild(tag);
        article.appendChild(prix);

        return article;

    }


    function createHeaderPhotograph() {

        const article = document.createElement("article");
        const headerTexte = document.createElement("div");
        headerTexte.classList.add("header-texte");

        const h2 = document.createElement('h2');
        h2.textContent = name;
        h2.setAttribute("tabindex", tabindex);
    
        const tag = document.createElement("p");
        tag.classList.add("tagline");
        tag.textContent = tagline;
        tag.setAttribute("tabindex", tabindex);

        const texte = document.createElement('p');
        texte.textContent = city + ", " + country;
        texte.classList.add("habitation");
        texte.setAttribute("tabindex", tabindex);

        const headerContact = document.createElement("div");
        headerContact.classList.add("photograph-header");

        const boutonContact = document.createElement('button');
        boutonContact.classList.add("contact_button");
        const nameContact = document.querySelector("#nameContact")
        nameContact.innerHTML = `Contactez-moi <br>${name}`
        nameContact.setAttribute("aria-label", `Contactez-moi ${name}`);
        let somme = document.querySelector("#pricedays")
        somme.textContent = `${price}€ / jour`
        boutonContact.setAttribute("aria-label", "Contactez-moi");
        boutonContact.addEventListener("click", () => displayModal(id));
        boutonContact.textContent = "Contactez-moi";

        headerContact.appendChild(boutonContact);
        headerContact.appendChild(headerTexte);
    
        const headerImage = document.createElement("div");
        headerImage.classList.add("photodim");
    
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", `${name} - Photographe`);
        headerTexte.appendChild(h2);
        headerTexte.appendChild(texte)
        headerTexte.appendChild(tag);
        article.appendChild(headerContact);
        headerImage.appendChild(img);
        headerContact.appendChild(headerImage);
    
    
        return article;
    
      }


    return {
        createUserCard,
        createHeaderPhotograph
    }

}
