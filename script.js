//initialize AOS
AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});


//dropdown toggle menu
jQuery(document).ready(function () {

    jQuery('.toggleNav').click(function (e) {
        jQuery(this).toggleClass('active');
        jQuery('.mainNav ul').toggleClass('active');

        e.preventDefault();
    });

});
