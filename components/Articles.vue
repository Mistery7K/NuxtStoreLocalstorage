<template>
  <client-only>
    <v-container>
      <v-card v-for="(article, index) in articles" :key="index">
        <span>{{ article.items.nom }} {{ article.items.text }}</span>
      </v-card>
      <v-btn @click="test">fds</v-btn>
    </v-container>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      articles: 'articles/get',
    }),
  },
  methods: {
    test() {
      console.log(this.articles)
    },
  },
}
</script>
