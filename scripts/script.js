console.log('js');


$(document).ready(function(){

  $(document).on('click', '#searchButton', function(){

    var searchTitle = $('#searchIn').val();
    console.log('searching for: ', searchTitle);

    var searchURL = 'http://www.omdbapi.com/?s=' + searchTitle;

    if($('#searchIn').val()=== ''){
      alert('Opps! Need to enter something in the search');
    }

    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function (data){
        console.log( 'data:', data );

        showResults(data.Search);
      },

      statusCode: {
        404: function(){
          alert('error connecting to server');
        }
      }
    });
  });//end click button

  var showResults = function (results) {
    console.log('in showResults', results);

$('#outputDiv').empty();
//now loop through results and display movies
for(var i = 0; i < results.length; i++){
  $('#outputDiv').append('<p><b>' + results[i].Title + ' ' + '<b>(' + results[i].Year+')</p>');
  $('#outputDiv').append('<img src="' + results[i].Poster + '">');
}//end for
$('#outputDiv').hide();
$('#outputDiv').fadeIn('slow');
};
});//end show results
