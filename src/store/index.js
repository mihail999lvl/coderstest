import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      images: [
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image1.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 1
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image2.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 2
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image3.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 3
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image4.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 4
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image5.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 5
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image6.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 6
        },
        {
          title: 'Lorem ipsum7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image7.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 7
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image8.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 8
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image9.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 9
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image10.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 10
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image11.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 11
        },
        {
          title: 'Lorem ipsum',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          src: require('@/assets/img/image12.jpg'),
          qtLikes: 24,
          isMyFavorite: false,
          id: 12
        }
      ]
    }
  },
  getters: {
    getImages (state) {
      return state.images
    },
    getImagesFavorite (state) {
      return state.images.filter(item => item.isMyFavorite)
    },
    getImagesMore (state) {
      return state.images
    }
  },
  mutations: {
    toggleLikeImage (state, dataImage) {
      // state.images = dataLike
      console.log('dataLike', dataImage)
      state.images.forEach(item => {
        if (item.id === dataImage.id) {
          item.qtLikes = dataImage.qtLikes
          item.isMyFavorite = dataImage.isMyFavorite
        }
      })
    },
    imagesIncrease (state, images) {
      state.images = images
    }
  },
  actions: {
  },
  modules: {
  }
})
