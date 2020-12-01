jQuery(document).ready(function() {
    jQuery('.post').addClass('hidden').viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 100
    });
});