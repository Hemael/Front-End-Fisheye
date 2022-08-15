function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const url = "/photographer.html?idPhotographer="+id
        article.setAttribute("onclick",`document.location.href='${url}'`)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city;
        
        

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        //article.appendChild(p)
        

        return (article);
    }
    return { name, picture, getUserCardDOM }
    
}