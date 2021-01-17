<template>
  <div class="upload">
    <h1 class="page-title">Upload your image</h1>
    <div class="forms">
      <form class="form" id="upload">
        <div class="form__group form__group_image-loader">
          <label>Upload image</label>
          <img v-show="src" :src="src" :class="src ? 'isLoaded' : ''" @click="onModal">
          <input type="file" name="file" placeholder="choose file" @change="upload" accept="image/*">
        </div>
        <div class="form__group">
          <label>Title</label>
          <input type="text" name="password" placeholder="IMAGE TITLE">
        </div>
        <div class="form__group">
          <label>Description</label>
          <input type="text" name="password" placeholder="IMAGE DESCRIPTION">
        </div>
        <input type="submit" class="btn btn_darkgray btn_big" value="Upload">
      </form>
    </div>
    <div class="overlay">
      <div class="modal" v-if="src">
        <img :src="src">
        <span class="modal__close" @click="closeModal">&times;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      file: null,
      content: null
    }
  },
  methods: {
    selectImage (file) {
      this.file = file
      const reader = new FileReader()
      reader.onload = this.onImageLoad
      reader.readAsDataURL(file)
    },
    upload (e) {
      e.preventDefault()
      this.selectImage(e.target.files[0])
    },
    onImageLoad (e) {
      this.content = e.target.result
      // Dispatch new event with image content
      // this.$emit('image-changed', this.content)
    },
    onModal () {
      document.querySelector('.overlay').classList.add('active')
    },
    closeModal () {
      document.querySelector('.overlay').classList.remove('active')
    }
  },
  computed: {
    src () {
      if (this.content) {
        return this.content
      }
      return false
    }
  }
}
</script>
<style lang="scss">
.page-title {
  font-size: 34px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: $black;
  margin-top: 40px;
  line-height: 1;
  margin-bottom: 70px;
}
.forms {
  width: 368px;
  max-width: 100%;
  margin: 0 auto;
}
.form {
  &__group {
    margin-bottom: 20px;
    label {
      display: block;
      text-transform: uppercase;
      text-align: center;
      line-height: 1;
      margin-bottom: 14px;
      font-weight: bold;
    }
    input {
      width: 100%;
      height: 55px;
      border-radius: 5px 0 0 5px;
      border: 1px solid $gray;
      font: 12px Roboto;
      text-align: center;
      font-weight: bold;
      box-sizing: border-box;
      padding: 0 5px;
      &:focus {
        outline: none;
      }
    }
    input.reg::placeholder {
      color: gray;
    }
    &_checkbox {
      margin-bottom: 40px;
      label {
        display: inline-block;
        margin-bottom: 0;
        width: auto;
        cursor: pointer;
      }
      input[type="checkbox"] {
        display: none;
      }
      span {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 60px;
        position: relative;
      }
      span:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        width: 40px;
        height: 40px;
        border-radius: 5px 0 0 5px;
        background: $gray;
      }
      input[type="checkbox"]:checked + span:before {
        content: '';
        background: url('../assets/img/check.svg') no-repeat center center $gray;
      }
    }
  }
  input.btn {
    margin-top: 35px;
  }
}
.form__group_image-loader {
  img {
    max-width: 100%;
    display: block;
    margin: 30px auto 18px;
    cursor: pointer;
  }
  input {
    position: relative;
    overflow: hidden;
  }
  input:after {
    content:'choose file';
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: $gray;
    color: $white;
    cursor: pointer;
  }
  .isLoaded + input:after {
    content: ''
  }
}
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  transition: all 0.3s;
  &.active {
    visibility: visible;
    opacity: 1;
    z-index: 9;
  }
}
.modal {
  display: inline-block;
  position: relative;
  img {
    max-height: calc(100vh - 50px);
    max-width: calc(100vw - 50px);
  }
  &__close {
    position: absolute;
    right: -20px;
    top: -20px;
    font-size: 24px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 30px;
    font-weight: bold;
    background: #f5f5f5;
    color: #000000;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
