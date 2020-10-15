export const state = () => ({
  articles: [],
})

export const getters = {
  get(state) {
    return state.articles
  },
}

export const mutations = {
  add(state, items) {
    state.articles.push({
      items
    })
  },
}
