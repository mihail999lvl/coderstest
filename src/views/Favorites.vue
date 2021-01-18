<template>
  <div class="favorites">
    <h1 class="page-title">Favorites</h1>
    <div class="images" ref="masonry">
      <div class="images__item" v-for="(image, idx) in images" :key="idx">
        <img class="images__item-img" :src="image.src">
        <p class="images__item-title">{{ image.title }}</p>
        <p class="images__item-desc">{{ image.description }}</p>
        <div class="images__item-likes">
          <button class="images__item-likes-up" @click="toggleLike(image)"><img src="@/assets/img/like.svg"></button>
          <span>{{ image.qtLikes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  data () {
    return {}
  },
  mounted () {
    this.$nextTick(this.runMasonry)
  },
  methods: {
    runMasonry () {
      this.$nextTick(() => {
        /* eslint-disable */
        this.masonry = new Masonry(this.$refs.masonry, { // eslint-disable-line no-use-before-define
          /* eslint-enable */
          itemSelector: '.images__item',
          fitWidth: true,
          gutter: 21.2
        })
      })
    },
    toggleLike (image) {
      const id = image.id
      const qtLikes = image.qtLikes - 1
      const isMyFavorite = !image.isMyFavorite
      this.$store.commit('toggleLikeImage', { id: id, qtLikes: qtLikes, isMyFavorite: isMyFavorite })
      this.runMasonry()
    }
  },
  computed: {
    images () {
      return this.$store.getters.getImagesFavorite
    }
  }
}
</script>
<style lang="scss">
</style>
