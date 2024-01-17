import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import PostList from "@/components/PostList.vue";
import PostPage from "@/components/PostPage.vue";

const index = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/list', name: 'list', component: PostList},
        {path: '/page/:postId', name: 'page', component: PostPage},
    ]
})

export default index
