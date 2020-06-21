let x = window.matchMedia("(max-width: 375px)")

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
  } else {
    testimonials[testimonialIndex-1].style.flexDirection = "row-reverse";
    testimonials[testimonialIndex-1].style.alignItems = "center";
    testimonials[testimonialIndex-1].style.justifyContent = "center";
  }
}