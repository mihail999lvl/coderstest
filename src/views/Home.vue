<template>
  <div class="home">
    <div class="images" ref="masonry">
      <div class="images__item" v-for="(image, idx) in images" :key="idx">
        <img class="images__item-img" :src="image.src">
        <p class="images__item-title">{{ image.title }}</p>
        <p class="images__item-desc">{{ image.description }}</p>
        <div class="images__item-likes">
          <button class="images__item-likes-up" @click="toggleLike(image)"><img src="@/assets/img/like.svg"></button>
          <span>{{ image.qtLikes != 0 ? image.qtLikes : '' }}</span>
        </div>
      </div>
    </div>
    <button class="btn btn_darkgray btn_middle btn-load-more" @click="loadMore">Load more</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      qtItems: 20
    }
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
      const qtLikes = image.isMyFavorite ? image.qtLikes - 1 : image.qtLikes + 1
      const isMyFavorite = !image.isMyFavorite
      this.$store.commit('toggleLikeImage', { id: id, qtLikes: qtLikes, isMyFavorite: isMyFavorite })
    },
    loadMore () {
      this.qtItems = this.qtItems + 20
      console.log('this.qtItems', this.qtItems)
      this.runMasonry()
    }
  },
  computed: {
    images () {
      return this.$store.getters.getImages.slice(0, this.qtItems)
    }
  },
  mounted () {
    this.$nextTick(this.runMasonry)
    console.log(this.$route.name)
    let self = this // eslint-disable-line
    function handleScroll () {
      if (document.querySelector('.images') !== null) {
        let imagesFooter = document.querySelector('.images').offsetHeight // eslint-disable-line
        let scroll = document.documentElement.scrollTop // eslint-disable-line
        if (scroll + 300 > imagesFooter) {
          self.loadMore()
        }
      }
    }
    window.addEventListener('scroll', function () {
      handleScroll()
    })
  }
}
</script>
<style lang="scss">
  .images {
    margin: 30px auto 35px;
    position: relative;
    transition: all 0.3s;
    &__item {
      width: 289px;
      // margin-right: 21.2px;
      margin-bottom: 30px;
      color: $black;
      &-img {
        width: 100%;
        margin-bottom: 15px;
      }
      &-title {
        font-size: 18px;
        margin-bottom: 20px;
        font-weight: 700;
      }
      &-desc {
        font-size: 16px;
        line-height: 18.75px;
        margin-bottom: 18px;
      }
      &-likes {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &-up {
          margin-right: 8.69px;
          border: 0;
          background: 0;
          padding: 0;
          cursor: pointer;
          line-height: 1;
          img {
            display: block;
          }
          &:focus {
            outline: none;
          }
        }
        span {
          font-weight: 700;
        }
      }
    }
  }
  .btn-load-more {
    margin: 0 auto;
  }
</style>
