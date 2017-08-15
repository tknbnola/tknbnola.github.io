/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-quotes').css('background-color', 'white').css('border-radius', '5px');
        $('#section-bio').css('background-color', 'white').css('border-radius', '5px');
        $('#section-praise').css('background-color', 'white').css('border-radius', '5px');
        $('div').css('color', 'black');
        // uncomment this to inspect all available data; delete when done //
        console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
            _.map(topRated, function(album, i, a) {
            $("<li>").text(album['title']).appendTo($('#list-top-rated')); 
        });
        //topRated contains all the top rated albums
        //#list-top-rated is where we want stuff to go
        // want to be <li>
        // title from album
        
        /* var topRatedList = _.map(topRated, function(album, i, a) {
        var $list = $('<li>')
        $("<li>").text(album['title']).appendTo($('#list-top-rated')); 
        }); */
        
        /////////////////////////////////////////////////////////////////
        /*
        Create a new section and unordered list for Billy's music.
        */
       $('#sidebar').append($('<section>').attr('id', 'section-recordings'));
       
       $('#section-recordings').append($('<div>')
            .attr('id', 'image-container-recording')
            .attr('class', 'image-container'));
        
       $("#image-container-recording").append($('<img>')
            .attr('src', 'images/album/eastern-rebellion.jpg')
            .attr('id', 'recording-image')
            .attr('class', 'image'));
       
       $('#section-recordings')
            .append($('<ul>').attr("id", 'list-recordings').css('color', 'black'));
            
       let records = data.discography.recordings;
       
        
       
       _.map(records,function(e){
           var $listItem = $('<div>').addClass('recording');
           var $title = $('<div>').text("Title: " + e.title).addClass('title');
           var $artist = $('<div>').text("Artist: " + e.artist).addClass('artist');
           var $release = $('<div>').text("Released: " + e.release).addClass('release');
           var $year = $('<div>').text("Year: " + e.year).addClass('year');
           var $blank = $('<div>').text(' _').css('color', 'white');
           $listItem.append($title, $artist, $release, $year, $blank);
           $('#list-recordings').append($listItem);
           
       });
       
      
        
        //find thing to click on - billy image
        //make click event on billy image
        //swap billy image next imake
        var billyImages = data.images.billy;
        
        $('#image-billy').click(function(event){
            console.log(event);
            var billyPic = $('image-billy').attr('src', 'billyImages');
            console.log(billyPic, billyIndex, billyImages);
            var billyIndex = _.indexOf(billyImages,billyPic);
            console.log(billyPic, billyIndex, billyImages);
            if(billyIndex < billyImages.length - 1){
                console.log(billyPic, billyIndex, billyImages);
                billyPic = billyImages[billyIndex + 1];
            } else {
                billyPic = billyImages[0];
                console.log(billyPic, billyIndex, billyImages);
            }
            console.log(billyPic, billyIndex, billyImages);
        });
       
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


