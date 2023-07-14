// Selectors 
const body = document.body
const open = document.querySelector('.paragraph2')
const paragraph = document.querySelector('.open-paragraph')
const main = document.querySelector('.main')
const button = document.querySelector('button')
const up = document.getElementById('up')
const down = document.getElementById('down')
const lists = document.querySelector('nav ul')

// HTTP methods 
const methods = document.querySelector('.method'
)

const geT = document.querySelector('.get')
const post = document.querySelector('.post')
const del = document.querySelector('.delete')
const put = document.querySelector('.put')

// Requests
const paramsTab = document.querySelector('.paramsTab')
const reqheader = document.querySelector('.reqHeader')
const reqJson = document.querySelector('.reqJson')
const params = document.querySelector('.params')
const keysAndValues = document.querySelector('.keysAndValues')
const add = document.querySelector('.add')

add.addEventListener('click', (e) => {
  e.preventDefault()
  let section = document.createElement('div')
  section.insertAdjacentHTML = `${keysAndValues}`
  console.log(section)
  add.before(section)
})
console.log(keysAndValues)

paramsTab.addEventListener('click', () => {
  params.style.display = 'block'
})









geT.addEventListener('click', () => {
  const getReq = geT.innerText
  methods.innerHTML = getReq
  lists.style.display = 'none'
  up.style.display = 'none'
  down.style.display = 'block'
})
post.addEventListener('click', () => {
  const postReq = post.innerText
  methods.innerHTML = postReq
  lists.style.display = 'none'
  up.style.display = 'none'
  down.style.display = 'block'
})
put.addEventListener('click', () => {
  const putReq = put.innerText
  methods.innerHTML = putReq
  lists.style.display = 'none'
  up.style.display = 'none'
  down.style.display = 'block'
})
del.addEventListener('click', () => {
  const delReq = del.innerText
  methods.innerHTML = delReq
  lists.style.display = 'none'
  up.style.display = 'none'
  down.style.display = 'block'
})


open.addEventListener('click', () => {
  paragraph.style.display = 'none'
  open.style.display = 'none'
  main.style.display = 'block'
  body.style.background = '#171717'
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
  //e.preventDefault()
  
})

/*function collectRequestProperties(url) {
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
console.log(requestProperties)*/