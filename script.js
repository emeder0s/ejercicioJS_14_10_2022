// EJERCICIO 1
function ejercicio1(){
    fetch("https://api.github.com/emojis")
    .then(res=>res.json())
    .then(json => {
        var container = document.getElementById("container");
        for (var key in json){
            if(key.includes("y")){
                var img = document.createElement("img");
                img.src = json[key];
                img.alt = key; //añado el nombre en el alta para comprobar fácilmente que simplemente coge las que contenta una Y en el nombre. 
                container.appendChild(img);
            }
        }
    });
}

// function clear(){
//     document.getElementById("container").innerHTML = '';
// }

// EJERCICIO 2
function ejercicio2(){
    fetch("https://api.github.com/emojis")
    .then(res=>res.json())
    .then(json => {
        var array = [];
        var container = document.getElementById("container-flex");
        // No es mi solución favorita...
        for (var key in json){
            var img = document.createElement("img");
            img.src = json[key];
            array.push(img);
        }
        array = array.slice(0,3);
        array.forEach(img =>{ container.appendChild(img)});
        
    });

}