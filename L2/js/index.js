window.onload = () => {
    ejercicio1();
    ejercicio2();
    ejercicio3();
    ejercicio4();
}

function ejercicio1() {
    var section = document.getElementsByTagName('section')[0];
    var newSection = document.createElement('section');
    const texto = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.';
    
    var h2 = document.createElement('h2');
    h2.innerHTML = 'Lorem Ipsum';
    newSection.appendChild(h2);

    for (var i = 1; i <= 3; i++) {
        var art = document.createElement('article');
        art.innerHTML = texto;
        newSection.appendChild(art);
    }
   
    section.insertAdjacentElement('afterend', newSection);
}


function ejercicio2() {
    var lista = document.querySelector('aside ul');
    for (var j = 1; j <= 3; j++) {
        ejercicio2_2(lista, 'Link ' + j, true);
    }

    var lista2 = document.querySelector('nav ul');
    ejercicio2_2(lista2, 'Link extra', false);

    var lista3 = document.querySelector('footer ul');
    ejercicio2_2(lista3, 'Link extra', false);
}

function ejercicio2_2(lista, texto, aside){ 
    var li = document.createElement('li');
    var link = document.createElement('a');
    if (aside) link.setAttribute('class', 'menuBoton');
    link.setAttribute('href', '#');
    link.innerHTML = texto;
    li.appendChild(link);
    lista.appendChild(li);
}

function ejercicio3() {
    // Parte a
    var parrafos = document.querySelectorAll('article');
    for (var i = 1; i < parrafos.length; i++){
        parrafos[i].style.fontSize = "smaller";
    }

    // Parte b
    var enlaces = document.querySelectorAll('aside a');
    for (var i = 0; i < enlaces.length; i++){
        enlaces[i].style.textDecoration = "none";
        enlaces[i].style.fontStyle = "italic";
    }

    // Parte c
    var enlacesN = document.querySelectorAll('nav a');
    for (var i = 0; i < enlacesN.length; i++){
        enlacesN[i].style.fontSize = "smaller";
        enlacesN[i].style.fontWeight = "bold"; 
    }
}

function ejercicio4() {
    console.log('La cantidad de <li> en el documento es: '+document.querySelectorAll('li').length);
}