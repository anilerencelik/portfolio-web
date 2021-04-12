import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anıl Eren ÇELİK | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
  endpoint: 'https://erenportback.herokuapp.com/lgn'
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Anıl Eren ÇELİK',
  subtitle: 'I\'m the Software Developer',
  cta: 'More details',
};

// ABOUT DATA
export const aboutData = {
  img: 'wallpaper.jpg', 
  paragraphOne: 'I was born on May 14, 1999 in Tokat. I went to primary school in Tokat. I went to secondary and high school in Samsun. I am currently studying at Ege University in Izmir. I am a 3rd grade student in Computer Engineering.',
  paragraphTwo: 'I am someone who likes to learn in career expreiences, likes to follow new technologies, likes to develop side projects. I try to write pure, clean and understable code.',
  paragraphThree: 'You can review my resume if you want.',
  resume: 'https://cutt.ly/anilerencelik',
};  

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'uber.png',
    title: 'My Taxi',
    info: 'Used react-native, react, react-navigation, react-native-maps, google places autocomplete. Used aws-amplify, cognito, GraphQL, AppSync for backend.',
    info2: '',
    url: 'https://github.com/anilerencelik/rn-uber-clone',
  },
  {
    id: nanoid(),
    img: 'airbnb.png',
    title: 'My Apart',
    info: 'Used react-native, react, react-navigation, tab views and bars, maps, autocomplete, stack navigation',
    info2: '',
    url: 'https://github.com/anilerencelik/rn-airbnb-clone',
  },
  {
    id: nanoid(),
    img: 'ip.png',
    title: 'Image Processing Tool',
    info: 'Used Python. Used tkinter for GUI. Used Scikit-learn for processing. Used Matplotlib for plotting. Used OpenCV2 and numpy for file operations.',
    info2: '',
    url: 'https://github.com/anilerencelik/Image-Proccessing',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Do you have something to say?',
  btn: 'Let\'s Talk',
  email: 'anilerencelik@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:anilerencelik@gmail.com',
    },
    {
      id: nanoid(),
      name: 'globe',
      url: 'https://anilerencelik.netlify.app/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anil-eren-celik/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://www.github.com/anilerencelik/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
