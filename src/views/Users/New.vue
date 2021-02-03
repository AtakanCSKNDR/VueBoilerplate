<template>
  <div>
    <v-container>
      <v-row>
        <v-col :cols="12">
          <v-card-title style="padding:0;" class="mb-6 justify-space-between">
            {{$t('pages.base.addnew')}}
         
          </v-card-title>

          <v-form ref="form" v-model="valid" lazy-validation>
            <v-row>
              <v-col :md="6">
                <v-text-field
                  v-model="form.name"
                  :label="$t('pages.base.name')"
                  solo
                  dense
                ></v-text-field>
              </v-col>
              <v-col :md="6">
                <v-text-field
                  v-model="form.email"
                  label="E-mail"
                  solo
                  dense
                ></v-text-field>
              </v-col>
              <v-col :md="6"
                ><v-text-field
                  v-model="form.username"
                  :label="$t('pages.base.username')"
                  solo
                  dense
                ></v-text-field
              ></v-col>
              <v-col :md="6">
                <v-text-field
                  v-model="form.phone"
                  :label="$t('pages.base.phone')"
                  solo
                  dense
                ></v-text-field>
              </v-col>
              <v-col :md="6">
                <v-text-field
                  v-model="form.website"
                  :label="$t('pages.base.website')"
                  solo
                  dense
                ></v-text-field>
              </v-col>
              <v-col :md="6">
                <v-checkbox v-model="checkbox" dense label="Do you agree?">
                </v-checkbox>
              </v-col>
            </v-row>

            <v-btn color="success" class="mr-4" small @click="createUser">
              {{$t('pages.base.adduser')}}
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-alert
      type="success"
      class="alert"
      transition="scale-transition"
      v-model="alert"
      dismissible
    >
      {{$t('pages.base.notify.addsuccess')}}
    </v-alert>
  </div>
</template>

<script>
import { BASE_POST_METHOD } from "@/store/actions.type";
export default {
  data() {
    return {
      alert: false,
      form: {
        name: null,
        email: null,
        phone: null,
        username: null,
        website: null,
      },
    };
  },
  methods: {
    createUser() {
      let request = {
        name: this.form.name,
        username: this.form.email,
        email: this.form.email,
        phone: this.form.phone,
        website: this.form.website,
      };

      this.$store.dispatch(BASE_POST_METHOD, request).then(() => {
        this.alert = true;
      });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.alert {
  position: fixed;
  right: 40px;
  top: 100px;
}
</style>
