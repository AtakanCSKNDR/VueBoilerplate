<template>
  <div class="login">
    <v-container class="full-height">
      <v-row class="full-height">
        <v-col :md="4" class="full-height">
          <v-card
            color="#7790b7"
            dark
            elevation="15"
            class="full-height initial-padding rounded-xl"
            style="display: flex;align-items: center;"
          >
            <v-card-text>
              <v-row class="justify-center">
                <v-col :cols="10" class="text-center">
                  <v-img
                    style="width:80%; margin:0 auto;"
                    src="@/assets/logo.png"
                  ></v-img>
                  <div class="mt-6 mb-6">Login with</div>
                  <v-btn
                    v-for="(item, index) in loginWith"
                    :key="index"
                    class="mx-2"
                    fab
                    dark
                    medium
                    :color="item.color"
                    style="font-size:24px"
                  >
                    <faIcon :icon="['fab', item.icon]" />
                  </v-btn>

                  <v-divider class="mb-6 mt-6"></v-divider>
                  <v-text-field
                    label="Email or Username"
                    placeholder="e.g. example@example.com"
                    solo
                    rounded
                    background-color="#535c81"
                  ></v-text-field>
                  <v-text-field
                    label="Password"
                    type="password"
                    placeholder="****"
                    solo
                    rounded
                    background-color="#535c81"
                  ></v-text-field>
                  <v-row class="justify-space-between">
                    <v-checkbox
                      style="margin-top:0px"
                      label="Remember Me"
                    ></v-checkbox>
                    <div>Forgot Password?</div>
                    <v-btn
                      @click="$router.push('/View')"
                      color="#5a69aa"
                      rounded
                      block
                    >
                      Login
                    </v-btn>

                    <div class="mt-6">
                      <b
                        >Don'n have an account?
                        <span
                          style="margin:0px 5px;color: #5a69aa; cursor:pointer"
                        >
                          Sing up</span
                        ></b
                      >
                    </div>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginWith: [
        { type: "facebook", color: "#4867aa", icon: "facebook" },
        { type: "facebook", color: "#161b22", icon: "github" },
        { type: "facebook", color: "#0a66c2", icon: "linkedin" },
      ],
    };
  },
};
</script>

<style scoped>
.initial-padding {
  padding: 15px;
}
.login {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 50px 0px;
  background-image: url("../assets/loginbg.png");
  background-color: #bcd1ed;
  background-size: cover;
  background-position: center;
}
.row {
  margin: 0;
}
.full-height {
  height: 100%;
}
.theme--purple .v-input__slot {
  background: #5a69aa;
}
</style>
