const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';//1
const key = '5ed6dc3685f14078a1e678d372f9719c';//2
let url;//3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = 'none';

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e) { //1

    e.preventDefault();

    //assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3

    //conditionals
    if(startDate.value !== '') {
        console.log(startDate.value)
       url += '&begin_date=' + startDate.value;
    };

    if(endDate.value !== '') {
        url += '&endDate=' + endDate.value;
    };
    //end conditionals
    fetch(url).then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json)
    });

    console.log(url); //4
}
function displayResults(json) {
    while (section.firstChild){
        section.removeChild(section.firstChild);
    }
    let articles = json.response.docs;

    if ( articles.length === 10){
        nav.style.display = 'block'; 
    }else {
        nav.style.display = 'none';
    }
    
    if ( articles.length === 0){
        console.log("no results");
    }else{
        for (let i = 0; i <articles.length; i++){
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = 'Keywords:';

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            clearfix.setAttribute('class','clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage() {
    console.log("Next button clicked");
} //5

function previousPage() {
    console.log("Next button clicked");
} //5

