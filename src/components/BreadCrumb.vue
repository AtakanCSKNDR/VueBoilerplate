<template>
  <v-breadcrumbs :items="breadCrumbRoute">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item @click="$router.push(item.path)">
        {{ item.name.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  props: ["breadCrumbRoute"],
};
</script>

<style lang="scss" scoped></style>
