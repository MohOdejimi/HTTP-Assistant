// Selectors 
const open = document.querySelector('.paragraph2')
const paragraph = document.querySelector('.open-paragraph')
const main = document.querySelector('.main')
const button = document.querySelector('button')
const up = document.getElementById('up')
const down = document.getElementById('down')
const lists = document.querySelector('nav')






open.addEventListener('click', () => {
  paragraph.style.display = 'none'
  open.style.display = 'none'
  main.style.display = 'block'
})

down.addEventListener('click', () => {
  lists.style.display = 'block'
  up.style.display = 'block'
  down.style.display = 'none'
})
up.addEventListener('click', () => {
  lists.style.display = 'none'
  up.style.display = 'none'
  down.style.display = 'block'
})
button.addEventListener('click', (e) => {
  e.preventDefault()
  
})

function collectRequestProperties(url) {
  // Split the URL into base URL and query string
  const [baseUrl, queryString] = url.split('?');

  // Get query parameters
  const queryParams = {};
  if (queryString) {
    const params = new URLSearchParams(queryString);
    params.forEach((value, key) => {
      queryParams[key] = value;
    });
  }

  // Get request headers
  const headers = {};
  const headerKeys = Object.keys(navigator.headers || navigator.allHeaders || {});
  headerKeys.forEach((key) => {
    headers[key] = navigator.headers.get(key) || navigator.allHeaders[key];
  });

  // Other request properties
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;

  // Return collected properties as an object
  return {
    baseUrl,
    queryParams,
    headers,
    userAgent,
    referrer,
  };
}


const url = "https://example.com?param1=value1&param2=value2";
const requestProperties = collectRequestProperties(url);
