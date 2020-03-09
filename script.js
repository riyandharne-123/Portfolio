$(document).ready(function(){
//see skills
    $("#show-profile").click(function(){

     
    $('#span-profile').slideToggle("slow");
    
   
});


//div

$("#show-info").click(function(){

    $('.hidden-info').slideToggle("slow");
    
   });

//$("#show-info").mouseover(function(){

// $('.hidden-info').slideToggle("slow");
 
//});
//hidden div information
$("#go-back-to-card").mouseover(function(){
$('.hidden-info').slideUp("fast");
});
$("#go-back-to-card").click(function(){
    $('.hidden-info').slideUp("fast");
    });
//go back from table
$('#go-back-from-table').click(function(){
$('#span-profile').slideUp('fast');
});
//see projects
$('#show-projects').click(function(){
$('#hidden-projects').show();
});

});