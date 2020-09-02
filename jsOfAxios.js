var data= axios.get('https://randomuser.me/api')
.then(function(response) {
    console.log(response.data);
    document.write(JSON.stringify(response.data));
});


var data2= fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {console.log(json);
  document.write(JSON.stringify(json));
  })
