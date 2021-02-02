<template>
  <div>
    <v-container>
      <v-row>
        <v-col :cols="12" class="text-right">
          <v-btn color="success" small @click="$router.push('/Users/New')"
            >Add New</v-btn
          >
        </v-col>
        <v-col :cols="12">
          <v-simple-table fixed-header max-height="800px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Surname
                  </th>
                  <th class="text-left">
                    Email
                  </th>
                  <th class="text-right">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.username }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    <v-btn class="mx-2" fab x-small>
                      <faIcon icon="edit" />
                    </v-btn>
                    <v-btn
                      class="mx-2"
                      fab
                      dark
                      x-small
                      color="error"
                      @click="deleteData(index, item.id)"
                    >
                      <faIcon icon="trash" />
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
      Kullanıcı silme işlemi başarılı.
    </v-alert>
  </div>
</template>

<script>
import { BASE_GET_METHOD, BASE_DELETE_METHOD } from "@/store/actions.type";
export default {
  components: {},
  data() {
    return {
      data: [],
      alert: false,
    };
  },
  methods: {
    deleteData(index, id) {
      this.$store.dispatch(BASE_DELETE_METHOD, id).then(() => {
        this.data.splice(index, 1);
        this.alert = true;
      });
    },
    getData() {
      this.$store
        .dispatch(BASE_GET_METHOD)
        .then(() => {
          this.data = this.$store.getters.getData;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
th:last-child,
td:last-child {
  text-align: right;
}
.alert {
  position: fixed;
  right: 40px;
  top: 100px;
}
</style>
