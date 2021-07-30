<template>
  <div class="v-1">
    <p class="v-1_info">Вводить данные можно в таком формате:</p>
    <p class="v-1_info">15 usd in rub</p>
    <div class="v-1_inner">
      <input class="v-1_input" type="text" v-model="obmen" />
      <div class="v-1_btn" @click="rashot">Расcчитать</div>
    </div>
    <div
      v-if="resalt != 0"
      class="v-1_resalt"
      :class="{ 'v-1_error': resalt == isError }"
    >
      {{ resalt }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      obmen: "",
      mas: [],
      resalt: 0,
      isError: "Данные введены не корректно, попробуйте еще раз!",
    };
  },
  computed: {
    ...mapGetters(["KYRS_VALYT"]),
  },
  mounted() {
    this.GET_KYRS_VALYT_IPA();
  },
  methods: {
    ...mapActions(["GET_KYRS_VALYT_IPA"]),
    rashot() {
      const kvv = this.KYRS_VALYT.Valute;
      let m = this.mas;
      m = this.obmen.split(" ");

      // проверка m0 на число
      // m0 - число
      if (!isNaN(parseFloat(+m[0])) && !isNaN(+m[0] - 0)) {
        // проверка m2 на "in"
        // m2 = "in"
        if (m[2] == "in") {
          // проверка на m1 = m3
          // m1 = m3
          if (m[1].toUpperCase() == m[3].toUpperCase()) {
            // соответствует ли m1 валюте из списка
            // m1 = валюте из списка
            let aaa = true;
            for (let i in kvv) {
              if (m[1].toUpperCase() == kvv[i].CharCode) {
                this.resalt = (m[0] * 1).toFixed(2);
                aaa = false;
              }
            }
            // m1 != валюте из списка
            if (aaa) {
              // m1 = "RUB" ?
              // m1 = "RUB"
              m[1].toUpperCase() == "RUB"
                ? (this.resalt = (m[0] * 1).toFixed(2))
                : // m1 != "RUB"
                  (this.resalt = this.isError);
            }
          }
          // m1 != m3
          else {
            // соответствует ли m1 валюте из списка
            // m1 = валюте из списка
            let bbb = true;
            for (let i in kvv) {
              if (m[1].toUpperCase() == kvv[i].CharCode) {
                bbb = false;
                let ttt = true;
                for (let i in kvv) {
                  if (m[3].toUpperCase() == kvv[i].CharCode) {
                    ttt = false;
                    for (let i2 in kvv)
                      if (m[1].toUpperCase() == kvv[i2].CharCode)
                        this.resalt = (
                          (m[0] * kvv[i2].Value) /
                          kvv[i].Previous
                        ).toFixed(2);
                  }
                }
                // соответствует ли m3 валюте из списка
                // m3 = валюте из списка
                if (ttt) {
                  if (m[3].toUpperCase() == "RUB") {
                    for (let i in kvv)
                      if (m[1].toUpperCase() == kvv[i].CharCode)
                        this.resalt = (m[0] * kvv[i].Value).toFixed(2);
                  }
                  // m3 != валюте из списка
                  else this.resalt = this.isError;
                }
              }
            }
            // m1 != валюте из списка
            if (bbb) {
              // m1 = "RUB" ?
              // m1 = "RUB"
              if (m[1].toUpperCase() == "RUB") {
                let ccc = true;
                for (let i in kvv) {
                  if (m[3].toUpperCase() == kvv[i].CharCode) {
                    this.resalt = (m[0] / kvv[i].Previous).toFixed(2);
                    ccc = false;
                  }
                }
                if (ccc) this.resalt = this.isError;
              }
              // m1 != "RUB"
              else this.resalt = this.isError;
            }
          }
        }
        // m2 != "in"
        else this.resalt = this.isError;
      }
      // m0 - !число
      else this.resalt = this.isError;
    },
  },
};
</script>

<style lang="scss">
.v-1 {
  padding: 24px;
  display: flex;
  flex-direction: column;
  &_info {
    font-size: 22px;
    padding-bottom: 12px;
    display: block;
    color: #5b69fb;
    text-align: center;
  }
  &_inner {
    display: flex;
    justify-content: space-between;
    .v-1_input {
      border: 1px solid #5b69fb;
      display: block;
      height: 50px;
      padding: 8px 16px;
      color: #8b8a8a;
    }
    .v-1_btn {
      border: 1px solid #5b69fb;
      height: 50px;
      padding: 10px 16px;
      background: rgb(206, 201, 201);
      font-size: 24px;
      color: #5b69fb;
      cursor: pointer;
      &:hover {
        background: #5b69fb;
        color: #fff;
      }
    }
  }
  &_resalt {
    font-size: 44px;
    padding: 24px 0 0;
    display: block;
    color: #5b69fb;
    text-align: center;
  }
  &_error {
    font-size: 22px;
    padding: 24px 0 0;
    display: block;
    color: #ff545c;
    text-align: center;
  }
}
</style>
