$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#bnt-cancel').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newTask = $('#input-tarefa').val();
        const newItem = $('<li></li>');
        $(`<p>${newTask}</p>`).appendTo(newItem);
        $(newItem).appendTo('ol')
        $(newItem).fadeIn(1200);
        $('#input-tarefa').val('');
    })
    $('ol').on('click', 'li', function() {
        $(this).find('p').css('text-decoration', 'line-through');
    });
    
})
