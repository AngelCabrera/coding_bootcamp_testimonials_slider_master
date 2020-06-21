let x = window.matchMedia("(max-width: 375px)")
let y = window.matchMedia("(min-width: 768px)")

let testimonialIndex = 1;
testimonialShow(testimonialIndex);

function testimonialPlus(n) {
  testimonialShow(testimonialIndex += n);
}

function testimonialShow(n) {
  let i;
  let testimonials = document.getElementsByClassName("testimonial");
  if (n > testimonials.length) {testimonialIndex = 1}
  if (n < 1) {testimonialIndex = testimonials.length}
  for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none";
  }
  testimonials[testimonialIndex-1].style.display = "flex";
  if(x.matches){
    testimonials[testimonialIndex-1].style.flexDirection = "column";
  }
  if(y.matches) {
    testimonials[testimonialIndex-1].style.flexDirection = "row-reverse";
    testimonials[testimonialIndex-1].style.alignItems = "center";
    testimonials[testimonialIndex-1].style.justifyContent = "center";
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //left
            e.preventDefault();
            testimonialIndex--;
            testimonialShow(testimonialIndex);
            break;
        case 39:
            //right
            e.preventDefault();
            testimonialIndex++;
            testimonialShow(testimonialIndex);
            break;
    }
}
}