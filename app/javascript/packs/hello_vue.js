import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    data: {
      messages: [],
      search: '',
      allstores: ''
    },
    methods: {
      onclick: function() {
        axios
        .get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=3854ab4b6c3a3a8d2a4c72c8f35951cc&freeword='+this.search)
        .then(function(response) {
        this.messages = response.data.rest;
        this.allstores = '全　' + response.data.total_hit_count + '件';
        }.bind(this))
      }
    }
  })
})
