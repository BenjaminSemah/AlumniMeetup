/// //////////// SPEAKERS SECTION - DYNAMIC HTML ///////////////

const speakersInfo = [
  {
    img: './images/speakers/speaker1.png',
    speakerName: 'Omo Akuba Yalley',
    speakerPortfolio: 'Founder, TheBrightDev.com',
    speakerBrief: 'Omo is passionate about connecting devs with information needed to make intelligent decisions.',
  },
  {
    img: './images/speakers/speaker2.png',
    speakerName: 'Ann-Marie Adjoba',
    speakerPortfolio: 'Microverse Alumnus',
    speakerBrief: 'Adjoba is a recognized tech consultant and spent 3 years as a Strategic Planning Consultant.',
  },
  {
    img: './images/speakers/speaker3.png',
    speakerName: 'Emma K. Dolphyne',
    speakerPortfolio: 'Communications Director, C.D.S.T.',
    speakerBrief: 'Emma is a communications specialist with more than a decade of experience.',
  },
  {
    img: './images/speakers/speaker4.png',
    speakerName: 'Eddie O. Agyeman',
    speakerPortfolio: 'Tech Consultant',
    speakerBrief: 'Eddie is the recipient of numerous awards for his outstanding leadership.',
  },
  {
    img: './images/speakers/speaker5.png',
    speakerName: 'Teresa Agyiriba',
    speakerPortfolio: 'Team Lead, Tech Recruiters Hub',
    speakerBrief: 'Agyiriba has worked as tech recruiter for five years. She is also founder of TechNewbies.',
  },
  {
    img: './images/speakers/speaker6.png',
    speakerName: 'Theo Annor',
    speakerPortfolio: 'CTO, Anbuzz Technologies',
    speakerBrief: 'Theo has seven years of experience as a Freelance Front End Developer',
  },
];

function fetchSpeakers(s) {
  const speakerHTML = `
  <li class="speaker-card">
    <img
      class="speaker-image"
      src="${s.img}"
      alt="name of Speaker"
    />
    <div class="speaker-info">
      <h4 class="speaker-name">${s.speakerName}</h4>
      <p class="speaker-portfolio">${s.speakerPortfolio}</p>
      <div class="speaker-info-line"></div>
      <p class="speaker-brief">
        ${s.speakerBrief}
      </p>
    </div>
  </li>`;
  return speakerHTML;
}

const speakersList = document.querySelector('.speakers-list');

function addSpeakers() {
  let dynamicSpeakers = '';
  speakersInfo.forEach((s) => {
    dynamicSpeakers += fetchSpeakers(s);
  });
  speakersList.innerHTML = dynamicSpeakers;
}

if (speakersList !== null) {
  speakersList.onresize = addSpeakers();
}

/// //////////// MOBILE MENU INTERACTIONS ///////////////

const hamburgerMenu = document.querySelector('#hmenu');
const menuCloseBtn = document.querySelector('#mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuProgram = document.querySelector('.mobile-menu-program');
const mobileMenuSponsors = document.querySelector('.mobile-menu-sponsors');

function openMobileMenu() {
  mobileMenu.style.display = 'block';
}

function closeMobileMenu() {
  mobileMenu.style.display = 'none';
}

hamburgerMenu.addEventListener('click', openMobileMenu);
menuCloseBtn.addEventListener('click', closeMobileMenu);

if (mobileMenuProgram !== null && mobileMenuSponsors !== null) {
  mobileMenuProgram.addEventListener('click', closeMobileMenu);
  mobileMenuSponsors.addEventListener('click', closeMobileMenu);
}


/// //////////// ACTIVITIES SECTION -DYNAMIC HTML ///////////////

const activityData = [
  {
    activityImage: './images/activities/lecture.png',
    activityImageAlt: 'lectures icon',
    activityName: 'Lecture',
    activityBrief: 'Listen to inspiring talks by renowned Software developers.'
  },
  {
    activityImage: './images/activities/interview.png',
    activityImageAlt: 'Interviews icon',
    activityName: 'Interviews',
    activityBrief: 'Mock interviews with recruiters from reputable organizations.'
  },
  {
    activityImage: './images/activities/workshops.png',
    activityImageAlt: 'Workshops icon',
    activityName: 'Workshops',
    activityBrief: 'Workshops on various topics such as how to craft your resume.'
  },
  {
    activityImage: './images/activities/networking.png',
    activityImageAlt: 'Networking icon',
    activityName: 'Networking',
    activityBrief: 'Network with other Micronauts from around the world.'
  },
  {
    activityImage: './images/activities/tour.png',
    activityImageAlt: 'Tour icon',
    activityName: 'Tour',
    activityBrief: 'Explore the beautiful city of Accra, Ghana\'s capital.'
  },
]

let activityHTML = ``;

activityData.forEach(function(activity) {
  activityHTML = 
    activityHTML + 
    `        
    <li class="activity-list lecture">
      <img
        class="activity-image"
        src="${activity.activityImage}"
        alt="${activity.activityImageAlt}"
      />
      <h4 class="activity-title">${activity.activityName}</h4>
      <p class="activity-brief">
        ${activity.activityBrief}
      </p>
    </li>
  `
});

const activityLineup = document.querySelector('.activities-lineup');

activityLineup.innerHTML = activityHTML;

/////////////// FORM VALIDATION ///////////////

const form = document.querySelector('.form');
const userName = document.querySelector('name-form');
const email = document.querySelector('email-form');

const setErrorMessage = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccessMessage = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const nameValue = userName.value.trim();
  const emailVaule = email.value.trim();

  if (nameValue === ''){
      setErrorMessage(userName, 'Name is Required');
  } else {
    setSuccessMessage(userName);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
})
