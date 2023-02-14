const carousel = $('#items').bxSlider({
    pager: false,
    controls: false
});

$('#left').click(e => {
    e.preventDefault();
    carousel.goToPrevSlide();
});


$('#right').click(e => {
    e.preventDefault();
    carousel.goToNextSlide();
});