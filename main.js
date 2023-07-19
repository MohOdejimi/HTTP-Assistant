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
    
    const savedJson = localStorage.getItem('json');
    if (savedJson) {
      jsonInput.value = savedJson;
    }
    saveButton.addEventListener('click', () => {
      const json = jsonInput.value;
      try {
        const parsedJson = JSON.parse(json);
        
        localStorage.setItem('json', json);
      } catch (error) {
        console.error('Invalid JSON:', error);
        const responseField = document.querySelector('#responseField')
        responseField.value = `Invalid JSON:', ${error}`
      }
    });

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

  const keyInput = queryParamInput.getElementsByClassName('keyInput')[0];
  const valueInput = queryParamInput.getElementsByClassName('valueInput')[0];
  keyInput.addEventListener('input', updateQueryString);
  valueInput.addEventListener('input', updateQueryString);

  updateQueryString();
});

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

// GET Response

async function getResponse(url) {
  try {
    const startTime = performance.now(); 
    const response = await fetch(url);
    const endTime = performance.now(); // 

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

  const queryParams = {};
  if (queryString) {
    const params = new URLSearchParams(queryString);
    params.forEach((value, key) => {
      queryParams[key] = value;
    });
  }
  const headers = {};
  const headerKeys = Object.keys(navigator.headers || navigator.allHeaders || {});
  headerKeys.forEach((key) => {
    headers[key] = navigator.headers.get(key) || navigator.allHeaders[key];
  });

  // Other request properties
  const userAgent = navigator.userAgent;
  const referrer = document.referrer;

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
  
    const requestHeader = getRequestHeader(baseUrlInput.value)
    const responseField = document.querySelector('#responseField');
    
  if (methods.innerHTML === 'GET') {
    try {
      const response = await getResponse(baseUrlInput.value); 
      const responseHeader = Object.entries(response.headers)
      
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
        size.innerText = `${response.size}B`
      } else {
        size.innerText = ''
      }
      
      const headerUrl = document.querySelector('.baseurl')
      headerUrl.innerText = requestHeader.baseUrl
      const useragent = document.querySelector('.useragent')
      useragent.innerText = requestHeader.userAgent
      
      const ul = document.createElement('ul')
      
      for(let i = 0; i < responseHeader.length; i++) {
        const li = document.createElement('li')
        for(let j = 0; j < responseHeader[i].length; j++) {
         if (j % 2 === 0) {
           const label = document.createElement('span');
           label.textContent = `${responseHeader[i][j]}: `;
           label.style.fontsSize = '1rem';
         
           const value = document.createElement('span');
           value.textContent = responseHeader[i][j + 1];
           value.style.fontSize = '.7rem'; 
           value.style.color = '#f9774b';
           value.style.paddingLeft = '.2rem'
         
           li.appendChild(label);
           li.appendChild(value);
         }
        }
        ul.appendChild(li)
        responseHeaderField.innerHTML = ''
        responseHeaderField.appendChild(ul)
      }
    } catch (error) {
      responseField.value = `Error: ${error}`
    }
  } 
  if(methods.innerHTML === 'POST') {
    const savedJson = localStorage.getItem('json');
    if (savedJson) {
      jsonInput.value = savedJson;
    }
    const json = jsonInput.value;
    const parsedJson = JSON.parse(json);
   
    localStorage.setItem('json', json);
  fetch(baseUrlInput.value, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(parsedJson)
})
  .then(response => {
    const headers = Array.from(response.headers.entries());
    const responseJson = response.json();
    const status = response.status;
    const size = response.headers.get('content-length');
    const time = response.headers.get('x-response-time');
    return Promise.all([headers, responseJson, status, size, time]);
  })
  .then(([headers, data, status, size, time]) => {
    responseField.value = JSON.stringify(data, null, 2)
     const statusTab = document.querySelector('.status')
     if (status) {
       statusTab.innerText = status
     } else {
       statusTab.innerText = ''
     }
    
     const timeTab = document.querySelector('.time')
     if (time) {
       timeTab.innerText = `${(time/100).toFixed()}ms`
     } else {
       timeTab.innerText = ''
     }
    
     const sizeTab = document.querySelector('.size')
     if (size) {
       sizeTab.innerText = `${size}B`
     } else {
       sizeTab.innerText = ''
     }
     
     const ul = document.createElement('ul')
     
     for(let i = 0; i < headers.length; i++) {
       
        const li = document.createElement('li')
        for(let j = 0; j < headers[i].length; j++) {
         if (j % 2 === 0) {
           const label = document.createElement('span');
           label.textContent = `${headers[i][j]}: `;
           label.style.fontsSize = '1rem';
         
           const value = document.createElement('span');
           value.textContent = headers[i][j + 1];
           value.style.fontSize = '.7rem'; 
           value.style.color = '#f9774b';
           value.style.paddingLeft = '.2rem'
         
           li.appendChild(label);
           li.appendChild(value);
         }
        }
        ul.appendChild(li)
        responseHeaderField.innerHTML = ''
        responseHeaderField.appendChild(ul)
      }
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle any errors
    responseField.value = `Error: ${error}`
  });

  const headerUrl = document.querySelector('.baseurl')
  headerUrl.innerText = requestHeader.baseUrl
  const useragent = document.querySelector('.useragent')
  useragent.innerText = requestHeader.userAgent
  }
  if(methods.innerHTML === 'PUT') {
    const savedJson = localStorage.getItem('json');
    if (savedJson) {
      jsonInput.value = savedJson;
    }
    const json = jsonInput.value;
    const parsedJson = JSON.parse(json);
   
    localStorage.setItem('json', json);
    
    fetch(baseUrlInput.value, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(parsedJson)
    })
    .then(response => {
      const headers = Array.from(response.headers.entries())
      const responseJson = response.json()
      const status = response.status
      const size = response.headers.get('content-length')
      const time = response.headers.get('x-response-time')
      return Promise.all([headers,responseJson, status, size, time])
    })
    .then(([headers, data, status, size, time]) => {
      responseField.value = JSON.stringify(data, null, 2)
      
     const statusTab = document.querySelector('.status')
     if (status) {
       statusTab.innerText = status
     } else {
       statusTab.innerText = ''
     }
    
     const timeTab = document.querySelector('.time')
     if (time) {
       timeTab.innerText = `${(time/100).toFixed()}ms`
     } else {
       timeTab.innerText = ''
     }
    
     const sizeTab = document.querySelector('.size')
     if (size) {
       sizeTab.innerText = `${size}B`
     } else {
       sizeTab.innerText = ''
     }
     
     const ul = document.createElement('ul')
     
     for(let i = 0; i < headers.length; i++) {
       
        const li = document.createElement('li')
        for(let j = 0; j < headers[i].length; j++) {
         if (j % 2 === 0) {
           const label = document.createElement('span');
           label.textContent = `${headers[i][j]}: `;
           label.style.fontsSize = '1rem';
         
           const value = document.createElement('span');
           value.textContent = headers[i][j + 1];
           value.style.fontSize = '.7rem'; 
           value.style.color = '#f9774b';
           value.style.paddingLeft = '.2rem'
         
           li.appendChild(label);
           li.appendChild(value);
         }
        }
        ul.appendChild(li)
        responseHeaderField.innerHTML = ''
        responseHeaderField.appendChild(ul)
      }
    })
    .catch(error => {
    console.error('Error:', error);
    
    responseField.value = `Error: ${error}`
  });

  const headerUrl = document.querySelector('.baseurl')
  headerUrl.innerText = requestHeader.baseUrl
  const useragent = document.querySelector('.useragent')
  useragent.innerText = requestHeader.userAgent
  }
  if(methods.innerHTML === 'DELETE') {
    
     fetch(baseUrlInput.value, {
  method: 'DELETE',
})
  .then((response) => {
    if (response.ok) {
      const headers = Array.from(response.headers.entries())
      const responseJson = response.json()
      const status = response.status
      const size = response.headers.get('content-length')
      const time = response.headers.get('x-response-time')
      return Promise.all([headers, responseJson, status, size, time])
    } 
  })
  .then(([headers, data, status, size, time]) => {
    responseField.value = 'Item deleted Successfully'
    const statusTab = document.querySelector('.status')
    
    if (status) {
      statusTab.innerText = status
    } else {
      statusTab.innerText = ''
    }
    
    const timeTab = document.querySelector('.time')
    if (time) {
      timeTab.innerText = `${(time/100).toFixed()}ms`
    } else {
      timeTab.innerText = ''
    }
    
    const sizeTab = document.querySelector('.size')
    if (size) {
      sizeTab.innerText = `${size}B`
    } else {
      sizeTab.innerText = ''
    }
    
    const ul = document.createElement('ul')
    
    for (let i = 0; i < headers.length; i++) {
    
      const li = document.createElement('li')
      for (let j = 0; j < headers[i].length; j++) {
        if (j % 2 === 0) {
          const label = document.createElement('span');
          label.textContent = `${headers[i][j]}: `;
          label.style.fontsSize = '1rem';
    
          const value = document.createElement('span');
          value.textContent = headers[i][j + 1];
          value.style.fontSize = '.7rem';
          value.style.color = '#f9774b';
          value.style.paddingLeft = '.2rem'
    
          li.appendChild(label);
          li.appendChild(value);
        }
      }
      ul.appendChild(li)
      responseHeaderField.innerHTML = ''
      responseHeaderField.appendChild(ul)
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    responseField.value = `Error: ${error}`
  });
  
  const headerUrl = document.querySelector('.baseurl')
  headerUrl.innerText = requestHeader.baseUrl
  const useragent = document.querySelector('.useragent')
  useragent.innerText = requestHeader.userAgent
  }
});


