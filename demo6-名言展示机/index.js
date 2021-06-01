var quotebox = new Vue({
    el: '#quote-box',
    data: {
        quote: '',
        author: ''
    },
    methods: {
        getData: function() {
            let that = this;
            fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(function(response) {
                // console.log(response);
                return response.json();
            })
            .then(function(myJson) {
                // console.log(myJson.quotes);
                that.quote = myJson.quotes[Math.floor(Math.random()*102)].quote;
                that.author = myJson.quotes[Math.floor(Math.random()*102)].author;
            });

            document.body.style.setProperty('--main-color', this.getRandomColor());
        },
        getRandomColor: function() {
            return '#'+Math.floor(Math.random()*16777215).toString(16); 
        }
    },
    beforeMount: function() {
        // console.log('beforeMount');
        this.getData();
        document.body.style.setProperty('--main-color', this.getRandomColor());
    }
}) 

