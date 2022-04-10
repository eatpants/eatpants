
// document.querySelector('button');
// document.querySelector('.new-quote button');

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

async function getQuote(){
  console.log('quote button click');

  try{
    const response = await fetch(endpoint);
    if(!response.ok){
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    // displayQuote(json.fact);
    displayQuote(json.value.joke);
}    catch(err) {
      console.log(err)
      alert('failed');
    }
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
  clickCount++
  updateDisplay();
}
let clickCount = 0;
let counterDisplayElem  = document.querySelector('.counter-display');
updateDisplay();
function updateDisplay(){
    counterDisplayElem.innerHTML = clickCount;
};


const endpoint = 'http://api.icndb.com/jokes/random'
//some of these are very weird lol

// const endpoint =  'https://catfact.ninja/fact'
