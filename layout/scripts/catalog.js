var xhr = new XMLHttpRequest();

xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        for (var i = 0; i < responseObject.catalog.length; i++) {
            newContent += '<div class="cat_item">';
            newContent += '<img src="images/' + responseObject.catalog[i].image + '" ';
            newContent += 'alt="' + responseObject.catalog[i].item + '"/>';
            newContent += '<p><b>' + responseObject.catalog[i].item + '</b><br>';
            newContent += responseObject.catalog[i].description + '</p>';
            newContent += '</div>';
        }
        document.getElementById('content').innerHTML = newContent;
    }
};

xhr.open('GET', '../data/data_project3.json', true);
xhr.send(null);
