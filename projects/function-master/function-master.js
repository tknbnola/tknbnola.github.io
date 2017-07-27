
function objectValues(data){
    var objectValuesArray = [];
    for(var key in data){
        objectValuesArray.push(data[key]);
        
    }return objectValuesArray; 
}

function keysToString(data){
    var keyString;
    var keyArray;
    for(var key in data){
        keyArray = Object.keys(data);
     return keyString = keyArray.join(" ");   
    }
    
}   

function valuesToString(data){
    var keyString;
    var keyArray = [];
    for(var key in data){
       if(typeof data[key] === "string"){
        keyArray.push(data[key]);
        
       }
       
    }return keyString = keyArray.join(" "); 
}

function arrayOrObject(data){
    if (Array.isArray(data)){
        return 'array';
    }   else {return 'object';
    }
}

function capitalizeWord(string){
    return string.charAt(0).toUpperCase() + string.slice(1);

}

