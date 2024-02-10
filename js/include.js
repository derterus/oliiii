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
        if(localStorage.getItem('login')==='admin@mail.ru'){
            let x =document.getElementById('ads');
            x.style.display = 'none';
         }
         else{
            let ads = document.getElementById('admin-profile');
            ads.style.display ='none';
         }

    });

fetch('profile-admin.html').then(response=>response.text()).then(data=>{document.querySelector('#admin-profile').innerHTML=data;})
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
    
