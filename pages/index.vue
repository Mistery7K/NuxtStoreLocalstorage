<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div v-for="(liste, index) in listes" :key="index">
        {{ liste }}
      </div>
      <v-divider class="mt-5 mb-5"></v-divider>
      <Articles />
      <v-divider class="mt-5 mb-5"></v-divider>
      <div>
        <v-text-field outlined dense v-model="text"></v-text-field>
        <v-text-field outlined dense v-model="nom"></v-text-field>
        <v-btn color="success" @click="addText">Envoyer</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import Articles from '@/components/Articles'
export default {
  data() {
    return {
      text: '',
      nom: '',
    }
  },
  computed: mapGetters({
    listes: 'listes/get',
  }),
  components: {
    Articles,
  },
  methods: {
    addText() {
      if (this.text != '') {
        this.$store.commit('articles/add', {text: this.text, nom: this.nom})  
        this.text = ''
      } else {
        console.log('Error')
      }
    },
  },
}
</script>
