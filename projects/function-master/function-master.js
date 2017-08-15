
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

function capitalizeAllWords(string){
    var splitString = string.split(" ");
    var modified =[];
    var capString;
    for (var i = 0; i < splitString.length; i++){
        modified.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1));
    }
    return capString = modified.join(" ");
}

function welcomeMessage(object){
    for(var key in object){
        if(object.hasOwnProperty('name')){
            return "Welcome" + " " + object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + "!";
        }
    }
}

function profileInfo(object){
    for(var key in object){
        if(object.hasOwnProperty('name') && object.hasOwnProperty('species')){
            return object['name'].charAt(0).toUpperCase() + object['name'].slice(1) + " " + "is a " + object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
        }
    }
}

function maybeNoises(object){
  
    if(Array.isArray(object.noises) && object.noises.length > 0){
     return object.noises.join(" ");   
        
    }
        
    return "there are no noises";
}

function hasWord(data, string){
    var splitString = data.split(" ");
    for(var i = 0; i < splitString.length; i++){
        if(splitString[i] === string){
            return true;
        }
    }return false;
}

function addFriend(string, object){
    object.friends.push(string);
    return object;
}

function isFriend(string, object){
    if (object.friends && object.friends.length > 0){
        for(var i = 0; i < object.friends.length; i++){
        if(string === object.friends[i]){
            return true;    
            }
        }
    }return false;
}

function nonFriends(string, data){ // Intakes name and list of people objects.
 var notFriends = [];
    var friend = [];
    for(var i = 0; i < data.length; i++){
        if(data[i].name !== string && data[i].friends.indexOf(string)){
            notFriends.push(data[i].name);
        }
    } return notFriends;
}

function updateObject(data, key, value){
   if(data.hasOwnProperty(key)){
       data[key] = value;
   } else {
     data[key] = value;
   }return data;
}

function removeProperties(data, array){
    for(var i = 0; i < array.length; i++){
        if(data.hasOwnProperty(array[i])){
            delete data[array[i]];
        }
    }
    
}

 function dedup(data){
      var noDups = Array.from(new Set(data));
      return noDups;
 }  
     