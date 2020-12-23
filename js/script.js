'use strict';

new Vue({
  el: '#app',
  data: {
    title: 'Примеры работ',
    projects: [
      {
        name: 'Сайт Uber Еда',
        skills: 'HTML, SCSS, JavaScript',
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
        skills: 'HTML, SCSS, JavaScript',
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
        skills: 'HTML, SCSS, JavaScript',
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
        skills: 'Преимущественно JavaScript, готовая разметка и стили',
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
        skills: 'HTML, Less, JavaScript',
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
        skills: 'HTML, CSS, JavaScript',
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
        skills: 'HTML, Less, JavaScript, немного jQuery',
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
        skills: 'HTML, CSS',
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
        skills: 'Преимущественно JavaScript, готовая верстка',
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
        skills: 'HTML, CSS, JavaScript',
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
        skills: 'HTML, CSS',
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
        skills: 'HTML, CSS',
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
  }
});
