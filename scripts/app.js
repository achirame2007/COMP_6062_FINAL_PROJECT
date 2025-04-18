const app = Vue.createApp({
    data() {
        return{
            posts:  [],
            weather: [],
            city: 'London',
            province: 'Ontario',
            country: 'Canada',
            word:'',
            define: []
        }
    },
    created(){
        this.fetchdata();
        this.getWeather();
    },
    methods:
    {
        fetchdata (){
            fetch('https://comp6062.liamstewart.ca/random-user-profile')
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                else{
                    console.log('An Error Occured: Please try again');
                }
            })
            .then(data => {
                this.posts = data;
            })
            .catch(error =>{
                console.log('Total Failure');
            });
        },

        getWeather() {
            let city = this.city ?? 'London';
            let province = this.province ?? 'Ontario';
            let country = this.country ?? 'Canada';

            if(city == '' || province == ''|| country =='')
            {
                return this.weather = {message: "Please fill all fields"};
            }
            else
            {
            fetch('https://comp6062.liamstewart.ca/weather-information?city=' + city  + '&province=' + province + '&country=' + country)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log('Error...Please try again.');
                }
            })
            .then(data => {
                this.weather = data;
            })
              .catch(error => {
                console.log('Weather fetch failed');
              });
            }},
        
        getdefination(){
            let word = this.word ?? '';
            if(word == '')
            {
                return this.define = {message:"Please Enter the word"};
            }
            else
            {
            fetch('https://comp6062.liamstewart.ca/define?word=' + word)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                else {
                    console.log('An Error Occured');
                }
            })
            .catch(error => console.log('No word found'));
            }
        }
    }
});

app.mount('#app');