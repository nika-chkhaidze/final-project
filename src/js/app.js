window.onload = function() {

    let slider = document.querySelector('#slider');
    let move = document.querySelector('#move');
    let moveLi = Array.from(document.querySelectorAll('#slider #move li'));
    let forword = document.querySelector('#slider #forword');
    let back = document.querySelector('#slider #back');
    let counter = 1;
    let time = 5000;
    let dot;

    line.style.animation = 'line ' + (time / 5000) + 's linear infinite';

    function moveUP() {

        if (counter == moveLi.length) {

            moveLi[0].style.marginLeft = '0%';
            counter = 1;

        } else if (counter >= 1) {

            moveLi[0].style.marginLeft = '-' + counter * 100 + '%';
            counter++;
        } 

    }

    function moveDOWN() {

        if (counter == 1) {

            moveLi[0].style.marginLeft = '-' + (moveLi.length - 1) * 100 + '%';
            counter = moveLi.length;

        } else if (counter <= moveLi.length) {

            counter = counter - 2;
            moveLi[0].style.marginLeft = '-' + counter * 100 + '%';   
            counter++;


        }  

    }


    forword.onclick = moveUP;
    back.onclick = moveDOWN;

    let autoPlay = setInterval(moveUP, time);


    slider.onmouseout = function() {

        autoPlay = setInterval(moveUP, time);
        line.style.animation = 'line ' + (time / 5000) + 's linear infinite';

    }

    
  
}


const element = document.querySelector('.progress-value-1');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle('progress-value-1', entries[0].isIntersecting );
});

observer.observe( element );
 


