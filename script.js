const container = document.querySelector('.container');
const gambarGede = document.querySelector('.pict-big');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {


    if (e.target.className == 'thumb') {
        gambarGede.src = e.target.src;
        gambarGede.classList.add('fade');
        setTimeout(function() {
            gambarGede.classList.remove('fade');
        },500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';  
        });

        e.target.classList.add('active');
    }

});