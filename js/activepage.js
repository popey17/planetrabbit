const activePage = window.location.pathname;
const navLink = document.querySelectorAll('#navbarNav ul li a').
forEach(link=> {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }

})