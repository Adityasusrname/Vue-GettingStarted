const app = Vue.createApp({
    data(){
        return {
            title:'The final empire',
            author:'Brandon Sanderson',
            age:45,
            click:1,
            showBooks:true,
            x:0,
            y:0,
            url:'https://www.google.com/'
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
        },
        handleEvent(e,data){
            console.log(e,e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
           
        }

    }
})

app.mount('#app')