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
    speakerName: 'Eddie O. Agyeman',
    speakerPortfolio: 'Managing Director, MeTo Stores',
    speakerBrief: 'Eddie is an award-winning tech executive and change leader.',
  },
  {
    img: './images/speakers/speaker4.png',
    speakerName: 'Theophilus Annor',
    speakerPortfolio: 'CTO, Anbuzz Technologies',
    speakerBrief: 'Theophillus is the recipient of numerous awards for his outstanding leadership.',
  },
  {
    img: './images/speakers/speaker5.png',
    speakerName: 'Teresa Agyiriba',
    speakerPortfolio: 'Team Lead, Tech Recruiters Hub',
    speakerBrief: 'Agyiriba has worked as tech recruiter for five years. She is also founder of TechNewbies.',
  },
  {
    img: './images/speakers/speaker6.png',
    speakerName: 'Frank Piedu',
    speakerPortfolio: 'Microverse Alumnus',
    speakerBrief: 'Frank has seven years of experience as a Freelance Front End Developer',
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
};
