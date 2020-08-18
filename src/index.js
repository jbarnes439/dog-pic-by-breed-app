import $ from 'jquery';

function main(limit) {
    // let url = `https://dog.ceo/api/breeds/image/random/${limit}`;
    let url = `https://dog.ceo/api/breed/${limit}/images/random`;

    fetch(url)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}



function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const limit = $("#js-breed-results").val();
        main(limit);
    });
}


function displayResults(responseJson) {
    console.log(responseJson.message);
    let image = `<img src="" class="results-img">`;
    if (responseJson.message === 'Breed not found (master breed does not exist)') {
        image = `<p>Sorry we couldn't find that breed</p>`;
    } else {
        // let images = responseJson.message.map(url => `<img src="${url}" class="results-img">`);
        image = `<img src=${responseJson.message} class="results-img">`;
    }
    $('.hidden').html(image);
}

$(watchForm);