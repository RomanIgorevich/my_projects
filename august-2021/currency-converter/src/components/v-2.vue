<template>
  <div class="v-2">
    <p class="v-2_title">
      Ориентировочный курс валют на
    </p>
    <p class="v-2_title">
      {{ $store.state.vremja }}
    </p>
    <div class="v-2_tab_inner">
      <table class="v-2_tab">
        <thead>
          <tr>
            <th></th>
            <th>Покупка</th>
            <th>Продажа</th>
          </tr>
        </thead>
        <tr v-for="index of KYRS_VALYT.Valute" :key="index">
          <td>RUB/{{ index.CharCode }}</td>
          <td>
            {{ index.Value }}
          </td>
          <td>
            {{ index.Previous }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["KYRS_VALYT"]),
  },
  mounted() {
    this.GET_KYRS_VALYT_IPA();
  },
  methods: {
    ...mapActions(["GET_KYRS_VALYT_IPA"]),
  },
};
</script>

<style lang="scss">
.v-2 {
  padding: 24px;
  display: flex;
  flex-direction: column;
  &_title {
    font-size: 22px;
    padding: 0 0 12px;
    display: block;
    color: #8b8a8a;
    text-align: center;
  }
  &_tab_inner {
    height: 300px;
    width: 394px;
    margin: auto;
    overflow: auto;
    .v-2_tab {
      display: block;
      overflow: auto;
      border: 2px solid #cfc9c9;
      max-height: 300px;
      border-collapse: separate !important;
      font-size: 18px !important;
      color: #8b8a8a;
      th {
        width: 40%;
      }
      td {
        width: 30%;
      }
      th,
      td {
        border: 1px solid #cfc9c9;
        padding: 10px 15px !important;
        text-align: center !important;
      }
      thead th {
        top: 0px;
        background: #fff;
        position: sticky;
      }
    }
  }
}
</style>
