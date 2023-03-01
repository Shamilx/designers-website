$('#quoteParent').scroll(function() { 
    $('#quoteChild').css('top', $(this).scrollTop());
});