function isOk(){
$('#username').val('')
$('#password').val('')
$('#con_password').val('')
$('#lblmsg').removeClass('isErr')
$('#lblmsg').addClass('isOk')
}

function isErr(){
    $('#lblmsg').removeClass('isOk')
    $('#lblmsg').addClass('isErr')
}

$(document).on('click','#username', function(){
    $('#lblmsg').removeClass('isOk')
    $('#lblmsg').removeClass('isErr')
    $('#lblmsg').text('')
})