const app = Vue.createApp({
    data(){
        return {
            title:'The final empire',
            author:'Brandon Sanderson',
            age:45,
            click:1,
            showBooks:true
        }
    },
    methods:{

        changeTitle(){
            this.click++
            if((this.click)%2 == 0)
            this.title='Ikagai'
            else
            this.title='The final empire'
        }
        ,
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }

    }
})

app.mount('#app')