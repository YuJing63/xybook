import VueRouter from 'vue-router'
import Login from '../components/login'
import Book from '../components/book'
import CreateBook from '../components/CreateBook.vue'
import BookContent from '../components/BookContent'
import CreateContent from '../components/CreateContent'
export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'login',
            component:Login
        },
        {
            name:'bookshow',
            path:"/booklist",
            component:Book
        },
        {
            name:'newbook',
            path:"/newbook",
            component:CreateBook
        },
        {
            name:'bookcontent',
            path:"/bookcontent",
            component:BookContent
        },
        {
            name:'createcontent',
            path:"/createcontent",
            component:CreateContent
        }
    ]
})