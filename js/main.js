$(document).ready(function() {
    $('h1').click(function() {
        console.log('clicked');
    });
});

$('.jumbotron').mouseover(function () {
    $('.profile-img-overlay').show();
}).mouseout(function () {
    $('.profile-img-overlay').hide();
});
