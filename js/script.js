'use strict';

new Vue({
  el: '#app',
  data: {
    title: 'Примеры работ',
    selected: 'any',
    options: [
      { text: 'Все', value: 'any'},
      { text: 'HTML', value: 'html'},
      { text: 'CSS', value: 'css'},
      { text: 'SCSS', value: 'scss'},
      { text: 'Less', value: 'less'},
      { text: 'Bootstrap', value: 'bootstrap'},
      { text: 'JavaScript', value: 'javascript'},
      { text: 'jQuery', value: 'jquery'},
      { text: 'Vue.js', value: 'vuejs'},
    ],
    projects: [],
    all: [
      {
        name: 'Сайт Uber Еда',
        skills: 'HTML, SCSS, JavaScript'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/uber-eats'
          },
          {
            category: 'home',
            url: 'https://naughty-minsky-37325f.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/uber-eats-desktop.png',
            title: 'uber-eats десктопный',
            width: 200,
            height: 155
          },
          {
            url: 'img/thumbnails/uber-eats-tablet.png',
            title: 'uber-eats планшетный',
            width: 100,
            height: 67
          },
          {
            url: 'img/thumbnails/uber-eats-mobile.png',
            title: 'uber-eats мобильный',
            width: 50,
            height: 90
          }
        ]
      },
      {
        name: 'Путешествие по Европе',
        skills: 'HTML, SCSS, JavaScript'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/euro-trip'
          },
          {
            category: 'home',
            url: 'https://focused-mcclintock-729c5f.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/euro-trip-desktop.png',
            title: 'euro-trip десктопный',
            width: 200,
            height: 131
          },
          {
            url: 'img/thumbnails/euro-trip-tablet.png',
            title: 'euro-trip планшетный',
            width: 100,
            height: 67
          },
          {
            url: 'img/thumbnails/euro-trip-mobile.png',
            title: 'euro-trip мобильный',
            width: 50,
            height: 80
          }
        ]
      },
      {
        name: 'IP Address Tracker',
        skills: 'HTML, SCSS, JavaScript'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/IP-Address-Tracker'
          },
          {
            category: 'home',
            url: 'https://musing-newton-2daf03.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/ip-address-tracker-desktop.png',
            title: 'ip-address-tracker десктопный',
            width: 200,
            height: 86
          },
          {
            url: 'img/thumbnails/ip-address-tracker-tablet.png',
            title: 'ip-address-tracker планшетный',
            width: 100,
            height: 111
          },
          {
            url: 'img/thumbnails/ip-address-tracker-mobile.png',
            title: 'ip-address-tracker мобильный',
            width: 50,
            height: 110
          }
        ]
      },
      {
        name: 'Кексобукинг',
        skills: 'Преимущественно JavaScript, готовая разметка и стили'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/1483875-keksobooking-21'
          },
          {
            category: 'home',
            url: 'https://compassionate-austin-7a0844.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/keksobooking-desktop.png',
            title: 'keksobooking десктопный',
            width: 200,
            height: 86
          }
        ]
      },
      {
        name: 'Кэт энерджи',
        skills: 'HTML, Less, JavaScript'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/1483875-cat-energy-20'
          },
          {
            category: 'home',
            url: 'https://nifty-agnesi-d1bbc6.netlify.app/'
          },
          {
            category: 'catalog',
            url: 'https://nifty-agnesi-d1bbc6.netlify.app/catalog.html'
          },
          {
            category: 'form',
            url: 'https://nifty-agnesi-d1bbc6.netlify.app/form.html'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/cat-energy-desktop.png',
            title: 'cat-energy десктопный',
            width: 200,
            height: 98
          },
          {
            url: 'img/thumbnails/cat-energy-tablet.png',
            title: 'cat-energy планшетный',
            width: 100,
            height: 92
          },
          {
            url: 'img/thumbnails/cat-energy-mobile.png',
            title: 'cat-energy мобильный',
            width: 50,
            height: 110
          }
        ]
      },
      {
        name: 'Нёрдс',
        skills: 'HTML, CSS, JavaScript'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/1483875-nerds-28'
          },
          {
            category: 'home',
            url: 'https://boring-jennings-6c9769.netlify.app/'
          },
          {
            category: 'catalog',
            url: 'https://boring-jennings-6c9769.netlify.app/catalog.html'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/nerds-desktop.png',
            title: 'nerds десктопный',
            width: 200,
            height: 98
          }
        ]
      },
      {
        name: 'Transhub 24',
        skills: 'HTML, Less, JavaScript, немного jQuery'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/Transhub24'
          },
          {
            category: 'home',
            url: 'https://compassionate-lumiere-28ffc2.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/transhub-24-desktop.png',
            title: 'transhub-24 десктопный',
            width: 200,
            height: 98
          },
          {
            url: 'img/thumbnails/transhub-24-tablet.png',
            title: 'transhub-24 планшетный',
            width: 100,
            height: 92
          },
          {
            url: 'img/thumbnails/transhub-24-mobile.png',
            title: 'transhub-24 мобильный',
            width: 50,
            height: 110
          }
        ]
      },
      {
        name: 'Седона',
        skills: 'HTML, CSS'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/sedona'
          },
          {
            category: 'home',
            url: 'https://inspiring-mahavira-ed0a4e.netlify.app/'
          },
          {
            category: 'catalog',
            url: 'https://inspiring-mahavira-ed0a4e.netlify.app/catalog.html'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/sedona-desktop.png',
            title: 'sedona десктопный',
            width: 200,
            height: 98
          }
        ]
      },
      {
        name: 'Код и Магия',
        skills: 'Преимущественно JavaScript, готовая верстка'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/1483875-code-and-magick-21'
          },
          {
            category: 'home',
            url: 'https://clever-wozniak-bbc709.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/code-and-magick-desktop.png',
            title: 'code-and-magick десктопный',
            width: 200,
            height: 98
          }
        ]
      },
      {
        name: 'Meeting Ended Modal',
        skills: 'HTML, CSS, JavaScript'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/template-example/tree/master/MeetingEndedModal'
          },
          {
            category: 'home',
            url: 'https://jovial-curran-1fdece.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/meeting-ended-modal-desktop.png',
            title: 'meeting-ended-modal десктопный',
            width: 200,
            height: 98
          }
        ]
      },
      {
        name: 'Sign In Modal',
        skills: 'HTML, CSS'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/template-example/tree/master/SignIn'
          },
          {
            category: 'home',
            url: 'https://focused-khorana-6c2795.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/sign-in-modal-desktop.png',
            title: 'sign-in-modal десктопный',
            width: 200,
            height: 98
          }
        ]
      },
      {
        name: 'The Great Keksby',
        skills: 'HTML, CSS'.split(', '),
        links: [
          {
            category: 'code',
            url: 'https://github.com/dmitry-ios/the-great-keksby'
          },
          {
            category: 'home',
            url: 'https://sleepy-ramanujan-ebf175.netlify.app/'
          },
        ],
        screenshots: [
          {
            url: 'img/thumbnails/great-keksby-desktop.png',
            title: 'great-keksby десктопный',
            width: 200,
            height: 98
          }
        ]
      }
    ]
  },
  created: function () {
    this.projects = this.all;
  },
  watch: {
    selected: function (newSelected, oldSelected) {
      this.selectNewProjects();
    }
  },
  methods: {
    titleByType: function (type) {
      switch (type) {
        case 'code':
          return 'Код';
        case 'home':
          return 'Главная';
        case 'catalog':
          return 'Каталог';
        case 'form':
          return 'Форма';
        default:
          return 'Ссылка';
      }
    },
    selectNewProjects: function () {
      if (this.selected === 'any') {
        this.projects = this.all;
        return;
      }

      const currentSelected = this.options.find((item) => {
        return item.value === this.selected;
      });

      this.projects = this.all.filter(function (item, index, array) {
        return item.skills.join(',').indexOf(currentSelected.text) !== -1;
      });
    }
  }
});
