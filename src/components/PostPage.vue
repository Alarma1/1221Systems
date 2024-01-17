<template>
    <BreadCrumbs :items="postPage"/>
    <div>
        <h1>Заголовок поста: <span class="post_title">{{postData.title}}</span></h1>
        <p>Тело поста: {{postData.body}}</p>
        <h2>Блок «об авторе»</h2>
        <div class="about_author">
            <p>Имя пользователя: {{authorData.name}}</p>
            <p>Email: <a :href="'mailto:'+authorData.email">{{authorData.email}}</a></p>
            <p>Телефон: <a :href="'tel:'+authorData.phone">{{authorData.phone}}</a></p>
            <p>Вебсайт: <a target="_blank" :href="'http://'+authorData.website">{{authorData.website}}</a></p>
        </div>
    </div>
</template>

<script lang="ts">
    import {computed, onMounted, ref} from "vue";
    import {useRoute} from 'vue-router';
    import {apiService} from "@/components/apiService/apiService.js";
    import {Post, Routers, User} from "@/components/types/types";
    import BreadCrumbs from "@/components/BreadCrumbs.vue";

    export default {
        name: "PostPage",
        components: {BreadCrumbs},
        setup() {
            const route = useRoute()
            const postId = computed(() => route.params.postId)
            let postData = ref(<Post>{});
            let authorData = ref(<User>{});
            const postPage: Routers[] = [
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
                    active: false,
                },
                {
                    name: 'page',
                    href: '/page/' + postId.value,
                    ruName: 'Пост №' + postId.value,
                    active: true,
                },]

            onMounted(async () => {
                postData.value = await apiService.postBody(postId.value)
                authorData.value = await apiService.aboutAuthor(postData.value.userId);
            });

            return {
                postPage,
                postData,
                authorData
            };
        }
    }
</script>

<style lang="scss" scoped>
    .post_title {
        font-weight: 600;
    }
    .about_author {
        margin-left: 58px;
    }
</style>
