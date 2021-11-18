<template>
    <ul>
        <learning-resources
            v-for="res in storedResources"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"
        ></learning-resources>

    </ul>
</template>

<script>

import LearningResources from './components/learning-resources/LearningResources';

export default {
    name: "App",
    components: {
        LearningResources,
    },
    data: () => ({
        storedResources: [
            {
            id: 'official-guide',
            title: 'Official Guide',
            description: 'The official Vue.js documentation.',
            link: 'https://vue.js.org'
            },
            {
            id: 'google',
            title: 'Google',
            description: 'The official google.com documentation.',
            link: 'https://google.com'
            },
        ],
    }),
}
</script>

<style scoped>

</style>