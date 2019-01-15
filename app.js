const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
/*
bands.sort((a, b) => a < b ? -1 : 1);
*/
const bandsList = document.querySelector('ul[class="bands"]');

//let input = 'The Plot in you'
function removeArticles(input) {
    const articles = ['(the)', '(a )', '(in )', '(as )', '(an )', '(and )', '(, )'];
    const regex = new RegExp(articles.join('|'), 'gi');
    return input.replace(regex, ' ').
                                    trim().
                                    replace(/\s\s+/g, ' ');
}
//console.log(removeArticles(input));

bands.sort((firstBand, secondBand) => {
    return removeArticles(firstBand) < removeArticles(secondBand) ? -1 : 1; 
})

function populateList(bands = [], bandsList) {
    bandsList.innerHTML = bands.map(band => {
        return `<li>${band}</li>`;
    }).join('');
}

populateList(bands, bandsList);