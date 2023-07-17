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
const reqHeaderField = document.getElementById('requestHeaderField')


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
  reqHeaderField.style.display = 'none'
  reqheader.style.border = 'none'
  reqheader.style.color = '#0b7b8e'
})
reqJson.addEventListener('click', () => {
  params.style.display = 'none'
  paramsTab.style.border = 'none'
  reqJson.style.border = '1px solid grey'
  reqJson.style.borderBottom = 'none'
  reqJson.style.color = 'white'
  paramsTab.style.color = '#0b7b8e'
  jsonHeader.style.display = 'block'
  reqHeaderField.style.display = 'none'
  reqheader.style.border = 'none'
  reqheader.style.color = '#0b7b8e'
})

reqheader.addEventListener('click', () => {
  reqHeaderField.style.display = 'block'
  params.style.display = 'none'
  jsonHeader.style.display = 'none'
  reqheader.style.color = 'white'
  reqheader.style.border = '1px solid grey'
  reqheader.style.borderBottom = 'none'
  paramsTab.style.color = '#0b7b8e'
  reqJson.style.color = '#0b7b8e'
  paramsTab.style.border = 'none'
  reqJson.style.border = 'none'
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
const responseHeaderField = document.querySelector('#responseHeaderField')

resBody.addEventListener('click', () => {
  resBody.style.color = 'white'
  resBody.style.border = '1px solid grey'
  resBody.style.borderBottom = 'none'
  responseField.style.display = 'block'
  resHeader.style.color = '#0b7b9e'
  resHeader.style.border = 'none'
  responseHeaderField.style.display = 'none'
})
resHeader.addEventListener('click', () => {
  responseField.style.display = 'none'
  resHeader.style.color = 'white'
  resBody.style.color = '#0b7b9e'
  resBody.style.border = 'none'
  resHeader.style.border = '1px solid grey'
  resHeader.style.borderBottom = 'none'
  responseHeaderField.style.display = 'block'
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
    responseJson.headers = {};

    response.headers.forEach((value, name) => {
      responseJson.headers[name] = value;
    });

    return responseJson;
  } catch (error) {
    const errorResponse = {
      error: error.message,
      headers: {}
    };
    
    if (error.response && error.response.headers) {
      error.response.headers.forEach((value, name) => {
        errorResponse.headers[name] = value;
      });
    }

    return errorResponse;
    
  }
}

function getRequestHeader(url) {
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

// Event listener for sending the request
const sendButton = document.querySelector('.sendButton');
sendButton.addEventListener('click', async (e) => {
  e.preventDefault();
  // Perform the HTTP request with the baseUrlInput value
  if (methods.innerHTML === 'GET') {
    const response = await getResponse(baseUrlInput.value);
    const requestHeader = getRequestHeader(baseUrlInput.value)
    console.log(requestHeader.baseUrl)
    console.log(response)
    try {
      
      const responseField = document.querySelector('#responseField');
      if(response[0]) {
        responseField.value = JSON.stringify(response[0], null, 2);
      } else if (response) {
        responseField.value = JSON.stringify(response, null, 2);
      } else {
        responseField.value = `An Error Occured: Check your Internet Connection and url input`
      }
      
      const status = document.querySelector('.status')
      if(response.status) {
        status.innerText = response.status
      } else {
        status.innerText = ''
      }
     
      const time = document.querySelector('.time')
      if(response.time) {
        time.innerText = `${(response.time/100).toFixed()}ms`
      } else {
        time.innerText = ''
      }
      
      const size = document.querySelector('.size')
      if(response.size) {
        size.innerText = response.size
      } else {
        size.innerText = ''
      }
      
      const headerUrl = document.querySelector('.baseurl')
      headerUrl.innerText = requestHeader.baseUrl
      const useragent = document.querySelector('.useragent')
      useragent.innerText = requestHeader.userAgent
    } catch (error) {
      
    }
  }
  console.log(baseUrlInput.value);
});


//https://api.dictionaryapi.dev/api/v2/entries/en/computer