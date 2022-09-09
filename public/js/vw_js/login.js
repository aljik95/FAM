function isErr(){
    $('#lblmsg').removeClass('isOk')
    $('#lblmsg').addClass('isErr')
}

$(document).on('click','#username', function(){
    $('#lblmsg').removeClass('isOk')
    $('#lblmsg').removeClass('isErr')
    $('#lblmsg').text('')
})