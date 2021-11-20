<template>
  <base-card>
    <base-button
        @click="setSelectedTab('stored-resources')"
    >Stored Resources</base-button>
    <base-button
        @click="setSelectedTab('add-resource')"
    >Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import BaseButton from "../UI/BaseButton";
import BaseCard from "../UI/BaseCard";
import StoredResources from "./StoredResources";
import AddResource from "./AddResource";

export default {
  name: "TheResources",
  components: {StoredResources, AddResource, BaseButton, BaseCard},
  data(){
    return {
    selectedTab: 'stored-resources',
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
    };
  },
  provide() {
    return {
      resources: this.storedResources
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.setSelectedTab = tab;
    }
  }
}
</script>

<style scoped>

</style>