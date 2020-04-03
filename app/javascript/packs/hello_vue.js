import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    data: {
      messages: [],
      search: '',
      allstores: '',
    },
    methods: {
      onclick: function() {
        axios
        .get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=3854ab4b6c3a3a8d2a4c72c8f35951cc&freeword='+this.search)
        .then(function(response) {
        this.messages = response.data.rest;
        this.allstores = '全　' + response.data.total_hit_count + '件';
        }.bind(this));
      },
      mapclick: function(index) {
        var center = {
          lat: Number(this.messages[index].latitude), // 緯度
          lng: Number(this.messages[index].longitude) // 経度
        };
        var Options = {
        zoom: 15,      //地図の縮尺値
        center: center,    //地図の中心座標
        mapTypeId: 'roadmap'   //地図の種類
        };
        var mapindex = document.getElementById(index);
        mapindex.style.height = "400px";
        mapindex.style.width = "600px";
        var map = new google.maps.Map(document.getElementById(index), Options);
        var marker = new google.maps.Marker({ 
          position: center,
          map: map
        });
      }
    },
    // mounted: function() {
    //   axios
    //     .get('https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=3854ab4b6c3a3a8d2a4c72c8f35951cc&freeword=武蔵家')
    //     .then(function(response) {
    //     this.messages = response.data.rest;
    //     this.allstores = '全　' + response.data.total_hit_count + '件';
    //     }.bind(this))
    // }
  })
})
