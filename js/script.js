'use strict';

const APP_TITLE = 'Примеры работ';
const ALL_SELECTED = 'any';

const titlesOfType = {
  'code': 'Код',
  'home': 'Главная',
  'catalog': 'Каталог',
  'form': 'Форма'
};

new Vue({
  el: '#app',
  data: {
    title: APP_TITLE,
    isLoading: false,
    selected: ALL_SELECTED,
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
  watch: {
    selected: function (newSelected, oldSelected) {
      this.selectNewProjects();
    }
  },
  methods: {
    titleByType: function (type) {
      return titlesOfType[type];
    },
    selectNewProjects: function () {
      if (this.selected === ALL_SELECTED) {
        this.projects = this.all;
        return;
      }

      const currentSelected = this.options.find((item) => {
        return item.value === this.selected;
      });

      this.projects = this.all.filter(function (item, index, array) {
        return item.skills.indexOf(currentSelected.text) !== -1;
      });
    }
  }
});
