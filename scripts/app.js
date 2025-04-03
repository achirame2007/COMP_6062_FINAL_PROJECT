const app = Vue.createApp({
    data() {
        return{
            posts:  [] 
        }
    },
    created(){
        this.fetchdata();
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
        }
    }
});

app.mount('#app');