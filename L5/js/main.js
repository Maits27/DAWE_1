window.onload = function() {
    var myButton = document.getElementById('obtener');
    myButton.onclick = function() {
        var isbn = document.getElementById('isbn').value;
        var uri = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`;
        console.log(uri);
        fetch(uri)
            .then((response) => response.json())
            .then((data) => imprimirDatos(data, isbn));
    }
}

function imprimirDatos(data, isbn) {
    var isbn2 = "ISBN:" + isbn;
    console.log(isbn2);
    console.log(data);
    var html =`<h2>Title: ${data[isbn2]['details']['title']}</h2>`;
    html += `<h3>Authors:</h3>
    <ul>`;
    for (author of data[isbn2]['details']['authors']) {
        html += `<li> ${author['name']}</li>`;
    }
    html += `</ul>`;
    
    var uriImg = data[isbn2]['thumbnail_url'];
    uriImg = uriImg.split('-')[0];
    uriImg = uriImg + '-L.jpg';
    html += `<img src="${uriImg}" alt="Cover">`
    var div = document.getElementById('datos');
    div.innerHTML = html;
}