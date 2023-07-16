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

const reqheader = document.querySelector('#reqHeader')


const params = document.querySelector('#queryParametersContainer')
const paramsTab = document.querySelector('#paramsTab')
const queryParam = document.querySelector('.queryParam')


const jsonEditor = document.querySelector('.json-editor')
const jsonInput = document.getElementById('jsonInput');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');
const reqJson = document.querySelector('.reqJson')
const jsonHeader = document.querySelector('.requestjson')

const add = document.querySelector('#addQueryParamButton')
const removeButton = document.querySelector('.remove')





paramsTab.addEventListener('click', () => {
  params.style.display = 'block'
  reqJson.style.color = '#0b7b9e'
  reqJson.style.border = 'none'
  jsonHeader.style.display = 'none'
  paramsTab.style.color = 'white'
  paramsTab.style.border = '1px solid grey'
  paramsTab.style.borderBottom = 'none'
})
reqJson.addEventListener('click', () => {
  params.style.display = 'none'
  paramsTab.style.border = 'none'
  reqJson.style.border = '1px solid grey'
  reqJson.style.borderBottom = 'none'
  reqJson.style.color = 'white'
  paramsTab.style.color = '#0b7b8e'
  jsonHeader.style.display = 'block'
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
    // JavaScript code to handle the interface
    

    // Load JSON data from local storage (if available)
    const savedJson = localStorage.getItem('json');
    if (savedJson) {
      jsonInput.value = savedJson;
    }

    // Event listener for the save button
    saveButton.addEventListener('click', () => {
      const json = jsonInput.value;
      try {
        const parsedJson = JSON.parse(json);
        // Perform any desired actions with the parsed JSON
        console.log(parsedJson);

        // Save JSON data to local storage
        localStorage.setItem('json', json);
      } catch (error) {
        console.error('Invalid JSON:', error);
      }
    });

    // Event listener for the clear button
    clearButton.addEventListener('click', () => {
      jsonInput.value = '';
      localStorage.removeItem('json');
    });
    
  const baseUrlInput = document.querySelector('.url');
  const queryParametersContainer = document.getElementById('queryParametersContainer');
  const addQueryParamButton = document.getElementById('addQueryParamButton');

// Function to update the input field with query parameters
  function updateQueryString() {
    let queryString = '';
    const queryParamInputs = Array.from(queryParametersContainer.getElementsByClassName('queryParam'));
    queryParamInputs.forEach((queryParamInput, index) => {
    const keyInput = queryParamInput.getElementsByClassName('keyInput')[0];
    const valueInput = queryParamInput.getElementsByClassName('valueInput')[0];
    const key = encodeURIComponent(keyInput.value);
    const value = encodeURIComponent(valueInput.value);
    queryString += (index === 0 ? '?' : '&') + `${key}=${value}`;
  });
  baseUrlInput.value = baseUrlInput.value.split('?')[0] + queryString;
}

  // Event listener for adding a query parameter
  add.addEventListener('click', () => {
    const queryParamInput = document.createElement('div');
   queryParamInput.classList.add('queryParam');
   queryParamInput.innerHTML = `
     <input type="text" class="keyInput"  placeholder="Key">
     <input type="text" class="valueInput"  placeholder="Value">
     <button id = 'remove' class="remove" type="button" >Remove</button>

  `;
  queryParametersContainer.insertBefore(queryParamInput, add);

  // Add event listeners to update query string when key or value input is edited
  const keyInput = queryParamInput.getElementsByClassName('keyInput')[0];
  const valueInput = queryParamInput.getElementsByClassName('valueInput')[0];
  keyInput.addEventListener('input', updateQueryString);
  valueInput.addEventListener('input', updateQueryString);

  // Update query string on addition of new query parameter
  updateQueryString();
});

// Event listener for removing a query parameter
  queryParametersContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    e.target.parentNode.remove();
    updateQueryString();
  }
});

const resBody = document.querySelector('.body')
const resHeader = document.querySelector('.resHeader')
const responseField = document.querySelector('#responseField')


resBody.addEventListener('click', () => {
  resBody.style.color = 'white'
  resBody.style.border = '1px solid grey'
  resBody.style.borderBottom = 'none'
  responseField.style.display = 'block'
  resHeader.style.color = '#0b7b9e'
  resHeader.style.border = 'none'
})
resHeader.addEventListener('click', () => {
  responseField.style.display = 'none'
  resHeader.style.color = 'white'
  resBody.style.color = '#0b7b9e'
  resBody.style.border = 'none'
  resHeader.style.border = '1px solid grey'
  resHeader.style.borderBottom = 'none'
})



async function getResponse(url) {
  try {
    const startTime = performance.now(); // Start time measurement
    const response = await fetch(url);
    const endTime = performance.now(); // End time measurement

    const responseJson = await response.json();
    responseJson.status = response.status;
    responseJson.size = response.headers.get('content-length');
    responseJson.time = endTime - startTime;

    return { response: responseJson, status: response.status, size: response.headers.get('content-length'), time: endTime - startTime };
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
}




// Event listener for sending the request
const sendButton = document.querySelector('.sendButton');
sendButton.addEventListener('click', async (e) => {
  e.preventDefault();
  // Perform the HTTP request with the baseUrlInput value
  if (methods.innerHTML === 'GET') {
    try {
      const response = await getResponse(baseUrlInput.value);
      console.log(response);
      const responseField = document.querySelector('#responseField');
      responseField.value = JSON.stringify(response.response[0], null, 2);
      const status = document.querySelector('.status')
      status.innerText = response.status
      const time = document.querySelector('.time')
      time.innerText = `${(response.time/100).toFixed()}ms`
      time
      const size = document.querySelector('.size')
      size.innerText = response.size
      console.log(response)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  console.log(baseUrlInput.value);
});


// REQUEST HEADER and handle errors 


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
}*/


      
     // https://api.dictionaryapi.dev/api/v2/entries/en/hello