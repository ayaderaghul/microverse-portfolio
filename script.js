const menus = document.querySelectorAll('.navbar-toggler-icon');

function toggleMenu() {
    m1 = menus[0].classList 
    m2 = menus[1].classList

    if (m1.contains('active')) {
        m1.remove('active');
        m2.add('active');
    } else {
        m1.add('active');
        m2.remove('active');
    }
}