function showModal() {
  document.getElementById('exampleDialog').showModal();
}

const menus = document.querySelectorAll('.navbar-toggler-icon');

function toggleMenu() {
  const m1 = menus[0].classList;
  const m2 = menus[1].classList;

  if (m1.contains('active')) {
    m1.remove('active');
    m2.add('active');
  } else {
    m1.add('active');
  }
}

const projectBtn = document.getElementsByClassName('see-project');
projectBtn.addEventListener('click', showModal);
const navbarToggler = document.getElementsByClassName('navbar-toggler');
navbarToggler.addEventListener('click', toggleMenu);