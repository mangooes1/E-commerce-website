document.querySelector('.loopple-alert.loopple-alert-dismissible .close').onclick = function() {
    // Add class to change opacity to 0
    document.querySelector('.loopple-alert').classList.add('loopple-opacity-0');
    
    // Set a timeout to remove the alert after 1 second
    setTimeout(function() {
        document.querySelector('.loopple-alert').remove();
    }, 1000);
};
