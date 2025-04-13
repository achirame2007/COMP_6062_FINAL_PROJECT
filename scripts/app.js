const app = Vue.createApp({
    data() {
        return{
            posts:  [],
            weather: []
        }
    },
    created(){
        this.fetchdata();
        this.getWeather();
    },
    methods:
    {
        fetchdata (){
            fetch('https://comp6062.liamstewart.ca/random-user-profile'
            )
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
            fetch('https://comp6062.liamstewart.ca/weather-information?city=Toronto&province=Ontario&country=Canada')
              .then(response => {
                if (response.ok) return response.json();
                else console.log('Error fetching weather');
              })
              .then(data => {
                this.weather = data;
                console.log(weather);
              })
              .catch(error => console.log('Weather fetch failed'));
            }
    }
});

app.mount('#app');