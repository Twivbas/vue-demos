var app = new Vue({
    el: '#app',
    data: {
        city: '',
        weatherList: []
    },
    methods: {
        getData: function () {
            var that = this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
            .then(function (response) {
                console.log(response.data.data.forecast);
                that.weatherList = response.data.data.forecast;
            }, function (err) {})
        },
        changeCity: function (city) {
            this.city = city;
            this.getData();
        }
    }
})