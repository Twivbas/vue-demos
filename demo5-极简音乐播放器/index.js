var player = new Vue({
    el: '#player',
    data: {
        query: '',
        musicList: [],
        musicURL: '',
        musicCover: '',
        hotComments: [],
        isPlaying: '',
        isShow: '', //遮罩
        mvUrl: ''
    },
    methods: {
        getData: function () {
            let that = this;
            axios.get('https://autumnfish.cn/search?keywords='+this.query)
            .then(function (response) {
                console.log(response.data.result.songs);
                that.musicList = response.data.result.songs;
            }, function (err) {
                console.log(err);
            });
        },
        getMusicInf: function (musicId) {
            // console.log(musicId);
            let that = this;
            //获取音乐网址
            axios.get('https://autumnfish.cn/song/url?id='+musicId)
            .then(function (response) {
                // console.log(response.data.data[0].url);
                that.musicURL = response.data.data[0].url;
            }, function (err) {
                console.log(err);
            });
            //获取音乐封面
            axios.get('https://autumnfish.cn/song/detail?ids='+musicId)
            .then(function (response) {
                // console.log(response.data.songs[0].al.picUrl);
                that.musicCover = response.data.songs[0].al.picUrl;
            }, function (err) {});
            //获取音乐评论
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+musicId)
            .then(function (response) {
                console.log(response.data.hotComments);
                that.hotComments = response.data.hotComments;
            }, function (err) {});
        },
        play: function () {
            this.isPlaying = true;
        },
        pause: function () {
            this.isPlaying = false;
        },
        playMv: function (mvid) {
            let that = this;
            axios.get('https:autumnfish.cn/mv/url?id='+mvid)
            .then(function (response) {
                console.log(response.data.data.url);
                that.mvUrl = response.data.data.url;
                that.isShow = true;
            }, function (err) {});
        },
        hide: function () {
            this.isShow = false;
            this.mvUrl = '';
        }
    }
});