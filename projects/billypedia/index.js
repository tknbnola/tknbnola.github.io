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
       /* 
       let topRated = data.discography.topRated;
            _.map(topRated, function(album, i, a) {
            $("<li>").text(album['title']).appendTo($('#list-top-rated')); 
        });
        */
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
      /*
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
           var $blank = $('<div>').text(' .').css('color', 'white');
           $listItem.append($title, $artist, $release, $year, $blank);
           $('#list-recordings').append($listItem);
           
       });
       
      
        
        //find thing to click on - billy image
        //make click event on billy image
        //swap billy image next image
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
        */
               
            $('#section-bio')
                .css('border-radius', '4px');
        
            $('#section-quotes')
                .css('border-radius', '4px');
                
            $('#list-top-rated').css('list-style', 'none');
            $('#section-bio p:last-child').remove();
            
            
            var topRated = data.discography.topRated;
            var listTopRatedItems = _.map(topRated, function(recording) {
                return $('<ul>')
                    .append($('<div>')
                        .text(recording.title)
                        .addClass('title-top-rated')
                        .attr('art', recording.art));
            });
            
           
            $('#list-top-rated')
                .append(listTopRatedItems)
                .css('padding', 5);
                
            
            $('#header-top-rated')
                .append($('<div>')
                    .attr('id', 'image-container-top-rated')
                    .attr('class', 'image-container'));
                    
            $('#image-container-top-rated')
                .append($('<img>')
                    .attr('src', 'images/album/voice-in-the-night.jpg')
                    .attr('class', 'image')
                    .attr('id', 'image-top-rated'));
                    
            
            $('.title-top-rated').on('click', function(event) {
                var elem = $(event.currentTarget);
                $('#image-top-rated').fadeOut('fast', function() {
                    $('#image-top-rated')
                        .attr('src', $(elem).attr('art'));
                }).fadeIn('fast');
            });
            
            
            $('#sidebar')
                .append($('<section>')
                    .attr('id', 'section-recordings'));
                    
            $('#section-recordings')
                .append($('<header>')
                    .attr('id', 'header-recordings')
                    .attr('class', 'header')
                    .text('Recordings')
                    .css('padding', 5)
                    .css('font-size', '25px'))
                .append($('<ul>')
                    .attr('id', 'list-recordings'));
                    
            
            var recordings = data.discography.recordings;
            var listRecordings = _.map(recordings, function(recording) {
                return $('<ul>')
                    .append($('<div>')
                        .text(recording.title)
                        .addClass('title-recordings')
                        .attr('art', recording.art));
            });
            $('#list-recordings').append(listRecordings).css('padding', 5);
            
          
            $('#header-recordings').append($('<div>').attr('id', 'image-container-recordings')
                .attr('class', 'image-container'));
            $('#image-container-recordings').append($('<img>')
                .attr('src', 'images/album/eastern-rebellion.jpg')
                .attr('class', 'image').attr('id', 'image-recordings'));
                
            
            $('.title-recordings').on('click', function(event) {
                var elem = $(event.currentTarget);
                $('#image-recordings').fadeOut('fast', function() {
                    $('#image-recordings').attr('src', elem.attr('art'));
                }).fadeIn('fast');
            });
            

                
            
            $('#image-billy').on('click', function(event) {
                
                var elem = $(event.currentTarget);
                var i = elem.attr('i');
                if (i < data.images.billy.length - 1) {
                    var src = data.images.billy[i++];
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-" + i + ".jpg")
                            .attr('i', i);
                    }).fadeIn('fast');
                }
                else {
                    elem.fadeOut('fast', function() {
                        $('#image-billy')
                            .attr('src', "images/billy/billy-0.jpg")
                            .attr('i', '0');
                    }).fadeIn('fast');
                }
            });
            
            
            var createTable = function(equipment) {
                var createRow = function(instrument) {
                    var $row = $("<tr>");
                    var $type = $("<td>").text(instrument.type);
                    var $desc = $("<td>").text(instrument.desc)
                        .attr('class', 'instrument-desc');
                    $row.append($type);
                    $row.append($desc);
                    return $row;
                };
                var $table = $("<table>");
                var $rows = equipment.map(createRow);
                $table.append($rows);
                return $table;
            };
            
            
            $('#sidebar')
                .append($('<section>').attr('id', 'section-rider'));
            createTable(data.rider).appendTo('#section-rider').attr('id', 'table-rider');
            
            
            $('#section-rider')
                .prepend($('<header>')
                .text("Billy's Rider")
                .attr('class', 'header'));
            
            
            $('#table-rider').prepend($('<th>').text('Description'));
            $('#table-rider').prepend($('<th>').text('Instrument'));
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


