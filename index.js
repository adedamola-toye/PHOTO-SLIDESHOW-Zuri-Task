const slideshowImages = document.querySelector('.slideshow-images');
const slideshowButton = document.querySelectorAll('.button');
const noOfSlide = document.querySelectorAll('.slideshow-images img').length;

let slideIndex = 1;
let translateX =0;

slideshowButton.forEach(button => {
    button.addEventListener('click', event =>{
        if (event.target.id === 'previous'){
            if (slideIndex !=1){
                slideIndex--;
                translateX += 250;
            }
        }
        else{
            if(slideIndex !== noOfSlide){
                slideIndex++;
                translateX -=250;
            }
        }
        slideshowImages.style.transform = `translateX(${translateX}px)`
    });
});