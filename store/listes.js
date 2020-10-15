export const state = () => ({
    list: [
        'Article 1',
        'Articless 2',
        'Articlessss 3',
    ]
})

export const getters = {
    get (state) {
      return state.list
    }
}