document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    navbarToggler.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });
});
// JavaScript source code
