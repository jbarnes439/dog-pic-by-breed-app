import $ from 'jquery';

function main(limit) {
    let url = `https://dog.ceo/api/breeds/image/random/${limit}`;

    fetch(url)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}



function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const limit = $("#js-max-results").val();
        main(limit);
    });
}


function displayResults(responseJson) {
    console.log(responseJson.message);
    let images = responseJson.message.map(url => `<img src="${url}" class="results-img">`);
    $('.hidden').html(images);
}

$(watchForm);