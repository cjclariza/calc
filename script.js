let key = $('.key').val();
let holder = $('#holder').val();

$('.key').click(function(){
   let key = $(this).val();
   $('#holder').val(function() {
       return this.value + key;
   })
});

$('#compute').click(function() {
    let total = eval( $('#holder').val() );
    $('#holder').val(total);

    if (document.getElementById('key').onclick = function () {
        $('#holder').val(' ');
    });
});
