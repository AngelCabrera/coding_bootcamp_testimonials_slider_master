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
  testimonials[testimonialIndex-1].style.display = "block";
}