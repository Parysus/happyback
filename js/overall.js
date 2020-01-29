$(document).ready(function() {

  var price = 20;

  $('#amountForm').on('input', function() {
    let current = $(this).val();
    if ($(this).val() <= parseInt($(this).attr('max'))) {
      $('#price').text(current * price);
    }
  });


  // $( "form" ).on( "submit", function( event ) {
  //   var ajaxRequest;

  //   event.preventDefault();
  //   var values = $(this).serialize();
  //   values += "&postType=buy"

  //   ajaxRequest= $.ajax({
  //       url: "/paymentsMethods.php",
  //       type: "POST",
  //       data: values
  //   });

  //   ajaxRequest.done(function (response, textStatus, jqXHR){
  //        console.log('Submitted successfully');
  //        window.location.replace(response);
  //   });

  //   /* On failure of request this function will be called  */
  //   ajaxRequest.fail(function (){
  //       console.log('There is error while submit');
  //   });
  // });


});
