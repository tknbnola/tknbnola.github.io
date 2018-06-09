/* global $ */
/* global _ */

$(document).ready(function() {
    	// ALL YOUR CODE GOES BELOW HERE //
   $.getJSON('data/product.json', function (product) {
//Show items on page

    $('main').attr('id', 'mainContent').append($('<div>').attr('id','imageContainerThumb'));
        _.map(product, function (e, i, a){

            var divlist=$('<li>')
                .attr('class', 'product');
                //.append($('<img>').attr('src', 'img/product/thumbs/' + e.image).attr('id', 'image'));

            $('#imageContainerThumb').append($(divlist));
             //   divlist.append($('<a>').attr('href', 'img/product/' + e.image).append($('<img>').attr('src', 'img/product/' + e.image).attr('class', 'imageFullsize')));
                divlist.append($('<img>').attr('src', 'img/product/thumbs/' + e.image).attr('class', 'image').attr('href', 'img/product/' + e.image));
                divlist.append($('<div>').attr('class', 'type').text("type: " + e.type).css({fontWeight: 'bold',
                                                                                                fontSize: '20px'}));
                divlist.append($('<div>').attr('class', 'desc').text("desc: " + e.desc).css({fontSize:'20px'}));
                divlist.append($('<div>').attr('class', 'specs').text("specs: " + e.specs));
                divlist.append($('<div>').attr('class', 'availableColors').text("availableColors: " + e.availableColors).css({fontWeight:'bold'}));
                divlist.append($('<div>').attr('class', 'price').text("price: $" + e.price).css({color: 'red',
                                                                                                    fontSize: '25px'}));
                divlist.append($('<div>').attr('class','textremove').text(e.image).hide());
                
   
    

});


// Drop down box
//var productCopy = product.slice();
    $('#dropdown').on('change', function(event){
    
    $('li').hide();
    
      if(event.currentTarget.value === 'all'){
        $('li').show();
      } else {
        $('#dropdown').attr('value', event.currentTarget.value);
        $('.' + event.currentTarget.value).show();
      }
    
  });
//Modal image click

$('img').on('click', function(){
    var src= $(this).attr('href');
    //alert (src)
    $('.imagetesting123').remove();
    ($('#myModal').modal('show'));
    $('.modal-body').append(($('<img>').attr("src", src).attr('class', 'imagetesting123').attr("width", 350)));
    
    
});


//Trigger Modal

$('main').append($('<button>').attr('type' ,'button')
                                .attr('class','"btn btn-info btn-lg"')
                                .attr('data-toggle','modal')
                                .attr('data-target','#myModal'));
                                
                                
// Modal

$('main').append($('<div>')
                    .attr('id', 'myModal')
                    .attr('class','modal fade')
                    .attr('role', 'dialog'));
    $('#myModal').append($('<div>').attr('class', 'modal-dialog'));
    
    
//Modal Content


        $('.modal-dialog').append($('<div>').attr('class','modal-content'));
            $('.modal-content').append($('<div>').attr('class','modal-header'));
                $('.modal-header').append($('<button>')
                                            .attr('class','close')
                                            .attr('data-dismiss','modal')
                                            .text('close'));
                $('.modal-header').append($('<h4>').attr('class','modal-title').text('not actual size').css({color: 'red',
                                                                                                            fontSize: '30px'
                }));
            $('.modal-content').append($('<div>').attr('class','modal-body'));
            
            $('.modal-content').append($('<div>').attr('class','modal-footer'));
                
                
//Nav Bar
 $('nav').append($('<section>').attr('id', 'navbar').append($('<div>').attr('class','dropdown')));
        
        $('.dropdown').append($('<button>').attr('onclick','myFunction()').attr('class','dropbtn').text('Menu'));
        $('.dropdown').append($('<div>').attr('id','type').attr('class','dropdown-content'));
            $('#type').append('<a href="#">PHONE</a>');
            $('#type').append(' <a href="#">CASE</a>');
            
          
        
// //Search Function
       
//         $('#navbar').append($('<input>').attr('type', 'text')
//                                         .attr('id','query'))
//                                         .append($('<button>')
//                                                     .attr('type', 'submit')
//                                                     .attr('id','search')
//                                                     .attr('value', 'Search')
//                                                     .text('SEARCH'));

  
var isCollection = function (value){
       if (value === null || value instanceof Date) return false;
       if (typeof value === 'object') return true;
       return false;
       
       

$('#searchButton').click(function(event){
      $('li').remove();
      var inputText = $('#searchTerm')[0].value.toString().toLowerCase();
      console.log(search(product, inputText));
      return overProducts(search(product, inputText));
    });
    var search = function(collection, term){
        var output = [];
        term = term.toLowerCase();
        _.each(collection, (function(value){
            if(isCollection(value)){
               if (search(value, term).length){
                    output.push(value);
               }
            } else {
                if (typeof value === 'string'){
                    if (value.toLowerCase().indexOf(term) > -1) {
                        output.push(value);
                    }
                }
            }
            }));
            return output;
    };




// //Working Search

//             function contains(text_one, text_two) {
//                 if(text_one.indexOf(text_two) != -1)
//                     return true;
//             }
//             $('#query').keyup(function(){
//                  var query = $('#query').val().toLowerCase();
//                 $('div li').each(function(){
//                     if(!contains($(this).text().toLowerCase(), query))
//                         $(this).hide();
//                     else
//                         $(this).show();
//                 });
//             });

 //end of $.getJson

	// ALL YOUR CODE GOES ABOVE HERE //
    });
    
});