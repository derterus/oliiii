fetch('layouts/header.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('#header-container').innerHTML = data;
        var profile = document.querySelectorAll('.profile');
        var authLinks = document.querySelectorAll('.auth');
        if (localStorage.getItem('isLoggedIn') === 'true') {
            authLinks.forEach(function(link) {
                link.style.display = 'none';
            });
            profile.forEach(function(link) {
                link.style.display = 'block';
            });
        } else {
            authLinks.forEach(function(link) {
                link.style.display = 'block';
            });
            profile.forEach(function(link) {
                link.style.display = 'none';
            });
        }
    });

fetch('layouts/footer.html')
.then(response => response.text())
.then(data => {
    document.querySelector('#footer-container').innerHTML = data;
    var profile = document.querySelectorAll('.profile');
    var authLinks = document.querySelectorAll('.auth');
    if (localStorage.getItem('isLoggedIn') === 'true') {
        authLinks.forEach(function(link) {
            link.style.display = 'none';
        });
        profile.forEach(function(link) {
            link.style.display = 'block';
        });
    } else {
        authLinks.forEach(function(link) {
            link.style.display = 'block';
        });
        profile.forEach(function(link) {
            link.style.display = 'none';
        });
    }
});
    
