// GOOGLE MAP
function initMap() {
    const loc = {
        lat: 35.595058,
        lng: -82.551491
    };
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: loc,
        zoom: 14
    });
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

// STICKY NAV BACKGROUND
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})

// SMOOTH SCROLL
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 55
        }, 800);
    }
});