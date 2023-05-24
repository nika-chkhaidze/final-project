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
        line.style.animation = 'line ' + 's linear infinite';

    }

    
  
}


// const element = document.querySelector('.progress-value-1');
// const observer = new IntersectionObserver(entries => {
//   element.classList.toggle('progress-value-1', entries[0].isIntersecting );
// });

// observer.observe( element );

//progress bar//

var conteiner = document.querySelector('.conteiner'),
bar = document.querySelectorAll('.conteiner .bar');

window.addEventListener('scroll', function(){
  
   const conteinerSection = conteiner.getBoundingClientRect().top;
      if(window.innerHeight > conteinerSection){
        bar.forEach((bar)=>{
          const barWidth = bar.dataset.bar ;
          bar.style.width= `${barWidth}%`
        })
      }else{
        bar.forEach((bar)=>{
          bar.style.width = "0"
        })
      }
})


{
    const sliders = document.querySelectorAll(".slider");
    // interval between switching images
    // can't be less than your animation duration in css!
    // const interval = 7000;
    // if you don't want to first animation last longer than other animations  
    // set animDuration (in miliseconds) to your value of animation duration in css
    // const animDuration = 600;
  
    for (let i = 0; i < sliders.length; ++i) {
      const slider = sliders[i];
      const dots = slider.querySelector(".dots");
      const sliderImgs = slider.querySelectorAll(".img");
  
      let currImg = 0;
      let prevImg = sliderImgs.length - 1;
      let intrvl;
      let timeout;
  
      // Creates dots and add listeners to them
      for (let i = 0; i < sliderImgs.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
      }
  
      const allDots = dots.querySelectorAll(".dot");
      allDots[0].classList.add("active-dot");
  
      sliderImgs[0].style.left = "0";
     
  
      /**
       * Animates images
       * @param {number} [nextImg] - index of next image to show
       * @param {boolean} [right = false] - animate to right
       */
      function animateSlider(nextImg, right) {
        if (!nextImg)
          nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;
  
        --nextImg;
        sliderImgs[prevImg].style.animationName = "";
  
        if (!right) {
          sliderImgs[nextImg].style.animationName = "leftNext";
          sliderImgs[currImg].style.animationName = "leftCurr";
        } 
        else {
          sliderImgs[nextImg].style.animationName = "rightNext";
          sliderImgs[currImg].style.animationName = "rightCurr";
        }
  
        prevImg = currImg;
        currImg = nextImg;
  
        currDot = allDots[currImg];
        currDot.classList.add("active-dot");
        prevDot = allDots[prevImg];
        prevDot.classList.remove("active-dot");
      }

      onmouseover
  
      /**
       * Decides if animate to left or right and highlights clicked dot
       * @param {number} num 
       */
      function dotClick(num) {
        if (num == currImg)
          return false;
  
        clearTimeout(timeout);
        clearInterval(intrvl);
  
        if (num > currImg)
          animateSlider(num + 1);
        else
          animateSlider(num + 1, true);
  

      }
    }
  }

  //filter//

  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  };

  //form

  const formEL = document.querySelector('.form-1');

  formEL.addEventListener('submit', event => {

       event.preventDefault();

       const formData = new FormData(formEL);
       const data = Object.fromEntries(formData);

       fetch('https://borjomi.loremipsum.ge/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
       }).then(res => res.json())
         .then(data => console.log(data));

         alert("Message has been sent successfully")
  });