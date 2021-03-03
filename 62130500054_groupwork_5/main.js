
let app = Vue.createApp({

    data() {
        return {
            firstName: 'Hello, Vue3',
            lastName: 'Hello, Vue3',
            url : 'http://www.sit.kmutt.ac.th/'
        }
    },
    methods: {
        changeTitleText(){
            this.title = 'โค้ดนี้ทำงานได้ใน Vue 3'
        }
    },
})

// app.component('my-button', {
//     emits: ['whenclick'], //optional
//     template: `
//         <button @click="handleClick">Click Me!</button>
//     `,
//     methods: {
//         handleClick(){
//             this.$emit('whenclick')
//         }
//     },
// })

app.mount('#app')