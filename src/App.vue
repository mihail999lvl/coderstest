<template>
  <header class="header">
    <router-link class="header__logo" to="/">Project name</router-link>
    <nav class="header__nav">
      <p class="header__nav-user-mail">user@gmail.com</p>
      <router-link class="btn btn_white btn_little btn_favorites" to="/favorites">favorites</router-link>
      <router-link class="btn btn_gray btn_little" to="/upload">upload</router-link>
      <router-link class="btn btn_darkgray btn_little" to="/login">logout</router-link>
    </nav>
    <button class="header__btn-nav-mobile" :class="mobileNavIsActive ? 'header__btn-nav-mobile_close' : ''" @click="toggleNavMobile"></button>
    <nav class="header__nav_mobile" :class="mobileNavIsActive ? 'active' : ''">
      <p class="header__nav-user-mail">user@gmail.com</p>
      <router-link class="btn btn_white btn_little btn_favorites" to="/favorites">favorites</router-link>
      <router-link class="btn btn_gray btn_little" to="/upload">upload</router-link>
      <router-link class="btn btn_darkgray btn_little" to="/login">logout</router-link>
    </nav>
  </header>
  <router-view/>
</template>
<script>
export default {
  data () {
    return {
      mobileNavIsActive: false
    }
  },
  methods: {
    toggleNavMobile () {
      this.mobileNavIsActive = !this.mobileNavIsActive
    }
  }
}
</script>
<style lang="scss">
@import 'assets/styles/_main.scss';
body {
  overflow-x: hidden;
}
#app {
  font-family: 'Roboto', sans-serif;
  padding: 0 40px 140px 40px;
  font-size: 14px;
  color: $darkgray;
  overflow: hidden;
}
.header {
  height: 69px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
  font-weight: 700;
  margin-left: -40px;
  margin-right: -40px;
  padding: 0 40px 0 40px;
  &__logo {
    font-size: 24px;
    color: $black;
    text-decoration: none;
  }
  &__nav {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-user-mail {
      padding: 0 20px;
    }
    .btn {
      margin-left: 12px;
    }
    &_mobile {
      display: none;
    }
  }
  &__btn-nav-mobile {
    display: none;
  }
}
.btn {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: $darkgray;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;
  &_little {
    height: 40px;
    width: 178px;
  }
  &_middle {
    border-radius: 69px;
    font-size: 18px;
    width: 292px;
    height: 69px;
    max-width: 100%;
    font-weight: 700;
  }
  &_big {
    border-radius: 69px;
    font-size: 18px;
    width: 368px;
    height: 69px;
    max-width: 100%;
    font-weight: 700;
  }
  &_white {
    border: 1px solid $gray;
  }
  &_gray {
    background: $gray;
  }
  &_darkgray {
    background: $darkgray;
    color: $white;
    border: 0;
  }
  &_favorites {
    background-image: url("assets/img/like.svg");
    background-position: 16px center;
    background-repeat: no-repeat;
  }
}
input.btn {
  outline: none;
  box-shadow: none;
}
@media (max-width: 992px) {
  .header {
    &__btn-nav-mobile {
      background: url('assets/img/hamburger-menu-icon.svg');
      display: block;
      border: 0;
      outline: 0;
      height: 28px;
      width: 28px;
      margin-left: auto;
      cursor: pointer;
      &_close {
        background: url('assets/img/close.svg');
        background-size: cover;
      }
    }
    &__nav {
      display: none;
    }
    &__nav_mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 300px;
      width: 320px;
      padding: 30px 30px;
      background: #fff;
      position: absolute;
      top: 69px;
      right: -340px;
      transition: all 0.3s;
      box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.05);
      border: 1px solid #ccc;
      border-top: 0;
      border-right: 0;
      box-sizing: border-box;
    }
    &__nav_mobile.active {
      right: 0;
      z-index: 7;
    }
  }
}
@media (max-width: 768px) {
  #app {
    padding-left: 15px;
    padding-right: 15px;
  }
}
@media (max-width: 340px) {
  .header__nav_mobile {
    width: 100%;
    border-left: 0;
  }
}
</style>
