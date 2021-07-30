<template>
  <div class="v-app">
    <p class="v-app_name">Конвертер валют</p>
    <div class="v-app_liks">
      <router-link class="v-app_link" to="/">Конвертер</router-link>
      <router-link class="v-app_link" to="/v2">Курсы валют</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
.v-app {
  margin: auto;
  margin-top: 50px;
  width: 450px;
  border: 5px solid #cfc9c9;
  &_name {
    padding: 24px;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    color: #8b8a8a;
  }
  &_liks {
    display: flex;
    justify-content: space-between;
    .v-app_link {
      display: block;
      width: 50%;
      border-top: 2px solid #cfc9c9;
      border-bottom: 2px solid #cfc9c9;
      padding: 18px 24px;
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      color: #8b8a8a;
      &:hover {
        background: #8b8a8a;
        color: #fff;
      }
    }
    .v-app_link + .v-app_link {
      border-left: 2px solid #cfc9c9;
    }
  }
}
</style>
