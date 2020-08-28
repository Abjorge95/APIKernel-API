function consoleLog(message, type){
    /*
        Type - Type of message that will be logged on console
            0 - Error message and print in red
            1 - Success message and print in green
            != 0 || != 1 - Notification message and print in gray
    */
    var newDate = new Date().toLocaleString() + ": ";
    if(type == 0){
        console.log("%c" + newDate + message, 'color: red');
    } else if(type == 1){
        console.log("%c" + newDate + message, 'color: green');
    } else {
        console.log(newDate + message);
    }
}


function alertDefault(heading, text){
    $.toast({
        heading: heading,
        text: text,
        showHideTransition: 'fade',
        icon: 'warning',
        bgColor: 'rgba(55,55,55,0.8)',
        position: 'top-left',
        hideAfter: 5000
    })
}

function alertError(heading, text){
    $.toast({
        heading: heading,
        text: text,
        showHideTransition: 'fade',
        icon: 'warning',
        bgColor: 'rgb(220,41,30,0.8)',
        position: 'top-left',
        hideAfter: 5000
    })
}