<template>
    <BreadCrumbs :items="postList"/>
    <table border="2px" cellspacing="1px" class="main_table">
        <thead>
        <tr>
            <th v-for="(head , i) in headerTitle" :key="i">{{ head }}</th>
        </tr>
        </thead>
        <tbody>
        <tr @click.left="toPostPage(post.id)" @click.right.prevent="deletePost(post.id)" v-for="post in listPost"
            :key="post.id">
            <td class="table_elem">{{ post.id }}</td>
            <td class="table_elem">{{ post.title }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import {ref, onMounted} from 'vue';
    import {useRouter} from 'vue-router'
    import {apiService} from "@/components/apiService/apiService.js";
    import {Post, Routers} from "@/components/types/types";
    import BreadCrumbs from "@/components/BreadCrumbs.vue";

    export default {
        name: "PostList",
        components: {BreadCrumbs},
        setup() {
            const postList: Routers[] = [
                {
                    name: 'home',
                    href: '/',
                    ruName: 'Главная',
                    active: false,
                },
                {
                    name: 'list',
                    href: '/list',
                    ruName: 'Список постов',
                    active: true,
                },
            ]
            const headerTitle = ['Номер', 'Комментарии']
            let listPost = ref<Post[]>([]);
            const router = useRouter();
            onMounted(async () => {
                listPost.value = await apiService.postList()
            });
            const toPostPage = (postId) => {
                router.push({name: 'page', params: {postId}})
            }
            const deletePost = (postId) => {
                listPost.value = [...listPost.value].filter((obj) => {
                    return obj.id !== postId
                })
            }
            return {
                postList,
                listPost,
                headerTitle,
                toPostPage,
                deletePost
            };
        }
    }
</script>

<style scoped>

</style>
