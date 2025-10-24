document.addEventListener('DOMContentLoaded', function() {

var handleClick = function () {

     console.log(document.querySelector('img').src)

    if (document.querySelector('img').src.endsWith('img/1000241540.jpg')) {
        document.querySelector('img').src = 'img/1000241541.jpg'; 
        document.querySelector('img').id = 'susi'; 
     
    } else    if (document.querySelector('img').src.endsWith('img/1000241541.jpg')) {
        document.querySelector('img').src = 'img/1000241542.jpg';
        document.querySelector('img').id = 'rosa';

    } else    if (document.querySelector('img').src.endsWith('img/1000241542.jpg')) {
        document.querySelector('img').src = 'img/1000241540.jpg';
        document.querySelector('img').id = 'betti'; 
        
    }
    

    }

    var button = document.querySelector('#next');

    button.addEventListener('click', handleClick);


    var button = document.querySelector('#next');

button.addEventListener('click', handleClick);


});


