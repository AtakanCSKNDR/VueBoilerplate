<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="3"
          v-for="(item, index) in data"
          :key="index"
        >
          <v-card class="mx-auto" style="margin-top:30px">
            <v-list-item three-line>
              <v-list-item-avatar
                size="100"
                :color="item.color"
                style="box-shadow: 4px 5px 5px 0px darkgrey; margin-top:-30px; font-size:40px; color:white;"
                ><faIcon :icon="item.icon"></faIcon
              ></v-list-item-avatar>
              <v-list-item-content style="text-align:right">
                <div class="overline mb-4">
                  {{ item.title }}
                </div>
                <v-list-item-title class="headline mb-1">
                  {{ item.value }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-subtitle>
                <faIcon icon="user"></faIcon>
                {{ item.description }}
              </v-list-item-subtitle>
            </v-list-item>
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
      data: [
        {
          title: "Users",
          value: "+124",
          description: "Lorem ipsum dolor sit amet",
          icon: "user",
          color: "#00cae3",
        },
        {
          title: "Post",
          value: "+1250",
          description: "Lorem ipsum dolor sit amet",
          icon: "sticky-note",
          color: "#4caf50",
        },
        {
          title: "Users",
          value: "+124",
          description: "Lorem ipsum dolor sit amet",
          icon: "user",
          color: "#fb8c00",
        },
        {
          title: "Users",
          value: "+124",
          description: "Lorem ipsum dolor sit amet",
          icon: "user",
          color: "#9c27b0",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
