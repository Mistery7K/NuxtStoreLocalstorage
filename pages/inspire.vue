<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div v-for="(article, index) in articles" :key="index">
        {{ article.text }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
    articles: 'articles/get',
  }),
  }
}
</script>
