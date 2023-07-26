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

const navbarToggler = document.getElementsByClassName('navbar-toggler');
for (let i = 0; i < navbarToggler.length; i++) {
  navbarToggler[i].addEventListener('click', toggleMenu);
}

projects = [
  {
    id: 0,
    imageClass: 'image-1',
    image: '',
    title: 'Tonic',
    company: 'Canopy',
    position: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['HTML', 'CSS', 'Javascript'],
    buttons: ['See project']
  },
  {
    id: 1,
    imageClass: 'image-2',
    image: '',
    title: 'Multi-Post Stories',
    company: 'Facebook',
    position: 'Full Stack Dev',
    year: 2015,
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    langs: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
    buttons: ['See project']
  },
  {
    id: 2,
    imageClass: 'image-3',
    image: '',
    title: 'Facebook 360',
    company: 'Facebook',
    position: 'Full Stack Dev',
    year: 2015,
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    langs: ['React', 'Ruby on Rails', 'CSS', 'Javascript'],
    buttons: ['See project']
  },
  {
    id: 3,
    imageClass: 'image-4',
    image: '',
    title: 'Uber Navigation',
    company: 'Uber',
    position: 'Lead Developer',
    year: 2018,
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    langs: ['HTML', 'CSS', 'Javascript'],
    buttons: ['See project']
  }    
]

var workSection = document.getElementsByClassName('work-section');

function generateModal(project) {
  var cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'grid-item');
  
  var imageDiv = document.createElement('div');
  imageDiv.className = project.imageClass;
  cardDiv.appendChild(imageDiv);

  var cardInfoDiv = document.createElement('div');
  cardInfoDiv.className = 'card-info';
  cardDiv.appendChild(cardInfoDiv);

  var h3Div = document.createElement('h3');
  h3Div.textContent = project.title;
  cardInfoDiv.appendChild(h3Div);

  var projectInfoDiv = document.createElement('div');
  projectInfoDiv.className = 'project-info';
  cardInfoDiv.appendChild(projectInfoDiv);

  var companyDiv = document.createElement('div');
  companyDiv.className = 'company';
  companyDiv.textContent = project.company;
  projectInfoDiv.appendChild(companyDiv);

  var dotDiv = document.createElement('div');
  projectInfoDiv.appendChild(dotDiv);

  var positionDiv = document.createElement('div');
  positionDiv.className = 'position';
  positionDiv.textContent = project.position;
  projectInfoDiv.appendChild(positionDiv);

  var dot2Div = document.createElement('div');
  projectInfoDiv.appendChild(dot2Div);

  var yearDiv = document.createElement('div');
  yearDiv.className = 'year';
  yearDiv.textContent = project.year;
  projectInfoDiv.appendChild(yearDiv);

  var pDiv = document.createElement('p');
  pDiv.className = 'desc';
  pDiv.textContent = project.description;
  cardInfoDiv.appendChild(pDiv);

  // var ulDiv = document.createElement('ul');
  // ulDiv.className = 'stack';
  // for (i = 0; i < project.langs.length; i++) {
  //   var liDiv = document.createElement('li');
  //   liDiv.className = 'lang';
  //   liDiv.textContent = project.langs[i];
  //   ulDiv.appendChild(liDiv);
  // }

  // var buttonDiv = document.createElement('button');
  // buttonDiv.className = 'see-project';
  // buttonDiv.setAttribute('type', 'button');
  // buttonDiv.setAttribute('data-bs-toggle', 'modal');
  // buttonDiv.setAttribute('data-bs-target', '#exampleModal');
  // buttonDiv.textContent = 'See Project';
  // cardInfoDiv.appendChild(buttonDiv);

  // // Create a new modal div element
  // var modalDiv = document.createElement("div");
  // modalDiv.classList.add("modal", "fade");
  // modalDiv.setAttribute("id", "exampleModal");
  // modalDiv.setAttribute("tabindex", "-1");
  // modalDiv.setAttribute("aria-labelledby", "exampleModalLabel");
  // modalDiv.setAttribute("aria-hidden", "true");

  // // Create the modal dialog element
  // var modalDialog = document.createElement("div");
  // modalDialog.classList.add("modal-dialog");

  // // Create the modal content element
  // var modalContent = document.createElement("div");
  // modalContent.classList.add("modal-content");

  // modalDialog.appendChild(modalContent);

  // // Create the modal header element
  // var modalHeader = document.createElement("div");
  // modalHeader.classList.add("modal-header");
  // modalContent.appendChild(modalHeader);

  // // Create the modal title element
  // var modalTitle = document.createElement("h5");
  // modalTitle.classList.add("modal-title");
  // modalTitle.setAttribute("id", "exampleModalLabel");
  // modalTitle.textContent = project.title;
  // modalHeader.appendChild(modalTitle);

  // // Create the close button element
  // var closeButton = document.createElement("button");
  // closeButton.classList.add("btn-close");
  // closeButton.setAttribute("type", "button");
  // closeButton.setAttribute("data-bs-dismiss", "modal");
  // closeButton.setAttribute("aria-label", "Close");
  // modalHeader.appendChild(closeButton);

  // // Create the modal body element
  // var modalBody = document.createElement("div");
  // modalBody.classList.add("modal-body");
  // modalContent.appendChild(modalBody)

  // // Create the card element
  // var card = document.createElement("div");
  // card.classList.add("card");
  // modalBody.appendChild(card);

  // // Create the image element
  // var image = document.createElement("div");
  // image.classList.add(project.imageClass);
  // card.appendChild(image);

  // // Create the card body element
  // var cardBody = document.createElement("div");
  // cardBody.classList.add("card-body");
  // card.appendChild(cardBody);

  // // Create the project name element
  // var projectName = document.createElement("h3");
  // projectName.classList.add("project-name");
  // projectName.textContent = project.title;
  // cardBody.appendChild(projectName);

  // // Create the project info element
  // var projectInfo = document.createElement("div");
  // projectInfo.classList.add("project-info");
  // cardBody.appendChild(projectInfo);

  // // Create the company element
  // var company = document.createElement("div");
  // company.classList.add("company");
  // company.textContent = project.company;
  // projectInfo.appendChild(company);

  // // Create the dot element
  // var dot1 = document.createElement("div");
  // dot1.classList.add("dot");
  // projectInfo.appendChild(dot1);

  // // Create the position element
  // var position = document.createElement("div");
  // position.classList.add("position");
  // position.textContent = "Back End Dev";
  // projectInfo.appendChild(position);

  // // Create the dot element
  // var dot2 = document.createElement("div");
  // dot2.classList.add("dot");
  // projectInfo.appendChild(dot2);

  // // Create the year element
  // var year = document.createElement("div");
  // year.classList.add("year");
  // year.textContent = "2015";
  // projectInfo.appendChild(year);
  // cardBody.appendChild(projectInfo);

  // // Create the description element
  // var description = document.createElement("p");
  // description.classList.add("desc");
  // description.textContent = projectInfo.description;
  // cardBody.appendChild(description);

  // // Create the stack element
  // var stack = document.createElement("ul");
  // stack.classList.add("stack");

  // for (i = 0; i < project.langs.length; i++) {
  //   // Create the HTML element
  //   var liDiv = document.createElement("li");
  //   liDiv.classList.add("lang");
  //   liDiv.textContent = project.langs[i];
  //   stack.appendChild(liDiv);
  // }

  // cardBody.appendChild(stack);
  // card.appendChild(cardBody);
  // modalBody.appendChild(card);

  // // Create the modal footer element
  // var modalFooter = document.createElement("div");
  // modalFooter.classList.add("modal-footer");

  // // Create the live button element
  // var liveButton = document.createElement("button");
  // liveButton.classList.add("btn", "btn-secondary");
  // liveButton.setAttribute("type", "button");
  // liveButton.setAttribute("data-bs-dismiss", "modal");
  // liveButton.textContent = 'See Live';
  // var sourceButton = document.createElement("button");
  // sourceButton.classList.add("btn", "btn-secondary");
  // sourceButton.setAttribute("type", "button");
  // sourceButton.setAttribute("data-bs-dismiss", "modal");
  // sourceButton.textContent = 'See Source';
  
  // iconDiv = document.createElement("img");
  // iconDiv.setAttribute("src", "./images/projectLive.png");

  // modalFooter.appendChild(liveButton);
  // modalFooter.appendChild(sourceButton);

  // modalContent.appendChild(modalFooter);

  // // Add the modal elements to the DOM
  // modalContent.appendChild(modalFooter);

  workSection[0].appendChild(cardDiv);
}

for (var i = 0; i < projects.length; i++) {
  project = projects[i];

  generateModal(project);
}

const projectBtns = document.getElementsByClassName('see-project');
for (let i = 0; i < projectBtns.length; i++) {
  projectBtns[i].addEventListener('click', showModal);
}
