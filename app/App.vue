<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125">
    <div class="wrapper">
      <HelloWorld :msg="title" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <nav>
    <RouterLink to="/">
      Go to Index
    </RouterLink>
    <RouterLink to="/user">
      Go to User
    </RouterLink>
  </nav>

  <RouterView />

  <div class="box" :style="p"></div>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { storeToRefs } from 'pinia';
import { useMainStore } from './store';
import { onMounted, reactive } from 'vue';
const mainStore = useMainStore();
const { title } = storeToRefs(mainStore);

console.log("render App");

const p = reactive({
  height: '10px'
});

onMounted(() => {
  p.height = "100px";
  console.log(p.height)
})

</script>

<style scoped>
.box {
  background-color: red;
}

header {
  line-height: 1.5;
}

nav {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
