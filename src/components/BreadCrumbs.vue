<template>
    <span v-for="(matched, idx) in items" :key="idx">
        <router-link :class="{'active-list':!matched.active}" :to="matched.href">
        {{ matched.ruName }}
        </router-link>

        <span v-if="idx != Object.keys(items).length - 1"> / </span>
        </span>
    <router-view></router-view>
</template>

<script>

    export default {
        props: {
            items: {type: Array, default: []}
        },
        name: "BreadCrumbs",
        setup(props) {
            return {
                items: props.items
            };
        }
    };
</script>
<style lang="scss" scoped>
    .active-list {
        text-decoration: underline;
    }
</style>
