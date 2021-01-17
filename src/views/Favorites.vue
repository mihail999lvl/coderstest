<template>
  <div class="favorites">
    <h1 class="page-title">Favorites</h1>
    <div class="images" ref="masonry">
      <div class="images__item" v-for="(image, idx) in images" :key="idx">
        <img class="images__item-img" :src="image.src">
        <p class="images__item-title">{{ image.title }}</p>
        <p class="images__item-desc">{{ image.description }}</p>
        <div class="images__item-likes">
          <button class="images__item-likes-up"><img src="@/assets/img/like.svg"></button>
          <span>{{ image.qtLikes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      images: [
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image1.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image2.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image3.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image4.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image5.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image6.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image7.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image8.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image9.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image10.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image11.jpg'),
          qtLikes: 24
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image12.jpg'),
          qtLikes: 24
        }
      ]
    }
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
    }
  }
}
</script>
<style lang="scss">
  .images {
    margin: 30px auto 35px;
    position: relative;
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
