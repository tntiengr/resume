var localKey='hoobies';
var theHobbies;
var dataString= localStorage.getItem(localKey);
var addBtn= document.getElementById('add');
var deleteBtn= document.getElementById('remove');
if(dataString)
theHobbies= JSON.parse(dataString);
else
theHobbies=[];
addBtn.addEventListener('click',addItem);
deleteBtn.addEventListener('click',deteleItem);

function addItem(){
    var input= document.getElementById('inputData');
    theHobbies.push(input.value);
    render();
    input.value='';
    localStorage.setItem(localKey,JSON.stringify(theHobbies));
}

function deteleItem(){
    theHobbies.pop();
    render();
    localStorage.setItem(localKey,JSON.stringify(theHobbies));
}

var hobbiesDiv= document.getElementById('myHoobies');
function render() {
    var dataHobbies=theHobbies.map(function(item){
        return '<li>'+ item+'</li>';
    });
    hobbiesDiv.innerHTML = dataHobbies.join('');
}
render();

var theInforRandom= document.getElementById('inforUser');



