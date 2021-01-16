'use strict';

const APP_TITLE = 'Примеры работ';
const ALL_SELECTED = 'any';

const titlesOfType = {
  'code': 'Код',
  'home': 'Главная',
  'catalog': 'Каталог',
  'form': 'Форма'
};

const iconNamesOfType = {
  'code': '/img/icons/github.svg',
  'home': '/img/icons/house.svg',
  'catalog': '/img/icons/columns-gap.svg',
  'form': '/img/icons/ui-checks-grid.svg'
};

Vue.component('term-links', {
  props: ['links', 'name'],
  methods: {
    iconByType: function (type) {
      return iconNamesOfType[type];
    },
    titleByType: function (type) {
      return titlesOfType[type];
    },
  },
  template: `
  <dt class="col-sm-3">
    {{name}}
    <ul class="list-unstyled pt-2">
      <li v-for="link in links">
        <img v-bind:src="iconByType(link.category)" alt="link.category" width="16" height="16">
        <a class="fw-normal text-center" v-bind:href="link.url">{{titleByType(link.category)}}</a>
      </li>
    </ul>
  </dt>
  `
});

Vue.component('skills', {
  props: ['skills'],
  computed: {
    skillArray: function () {
      return this.skills.split(', ');
    }
  },
  template: `
  <dd class="col-sm-3">
    <span class="badge bg-secondary me-1 font-monospace" v-for="skill in skillArray">
      {{skill}}
    </span>
  </dd>
  `
});

Vue.component('thumbnails', {
  props: [
    'screenshots'
  ],
  template: `
  <dd class="col-sm-6">
    <img
      class="img-thumbnail me-1 mb-1"
      v-for="image in screenshots"
      v-bind:src="image.url"
      v-bind:alt="image.title"
      v-bind:width="image.width"
      v-bind:height="image.height"
    />
  </dd>
  `
});

Vue.component('empty-message', {
  props: [
    'show'
  ],
  template: `
  <p class="fw-normal fs-5 text-black-50 text-center text-uppercase pt-5" v-if="show">
    Ой, тут ничего нет</p>
  `
});

Vue.component('page-header', {
  props: [
    'title',
    'loading',
    'options',
    'results'
  ],
  data: function () {
    return {
      selected: ALL_SELECTED
    }
  },
  watch: {
    selected: function (newSelected, oldSelected) {
      this.$emit('select', newSelected);
    }
  },
  template: `
  <header>
    <div class="container">
      <h1 class="text-center mt-5">{{title}}</h1>
      <form>
        <div class="row pt-3">
          <div class="col-auto">
            <label class="form-label pt-2" for="skill-field">Фильтр:</label>
          </div>
          <div class="col-auto">
            <select class="form-select" name="select-skill" id="skill-field" v-model="selected" v-bind:disabled="loading">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
      </form>
      <p class="pt-3 text-muted">Результат: <b>{{results}}</b></p>
    </div>
  </header>
  `
});

Vue.component('page-footer', {
  computed: {
    currentYear: function () {
      return new Date().getFullYear();
    }
  },
  template: `
  <footer>
    <div class="container">
      <p class="text-center pt-4">
        Copyright © <a href="https://github.com/dmitry-ios">github.com/dmitry-ios</a> 2020 – {{currentYear}}</p>
    </div>
  </footer>
  `
});

new Vue({
  el: '#app',
  data: {
    title: APP_TITLE,
    isLoading: false,
    options: [],
    projects: [],
    all: []
  },
  created: function () {
    this.isLoading = true;

    fetch('../assets/data.json')
      .then(response => response.json())
      .then(data => {
        this.all = data;
        this.projects = this.all;
        this.isLoading = false;
      });

    fetch('../assets/options.json')
      .then(response => response.json())
      .then(data => {
        this.options = data;
      });
  },
  methods: {
    selectNewProjects: function (selected) {
      if (selected === ALL_SELECTED) {
        this.projects = this.all;
        return;
      }

      const currentSelected = this.options.find((item) => {
        return item.value === selected;
      });

      this.projects = this.all.filter((item, index, array) => {
        return item.skills.split(', ').includes(currentSelected.text);
      });
    }
  }
});
