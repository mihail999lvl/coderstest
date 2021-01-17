<template>
  <div class="login">
    <h1 class="page-title">Login</h1>
    <div class="forms">
      <div class="forms__tabs">
        <div class="forms__tabs-item" v-bind:class="{ active : tabSignInActive }" @click="toggleTab()">Sign in</div>
        <div class="forms__tabs-item" v-bind:class="{ active : !tabSignInActive }" @click="toggleTab()">Sign up</div>
      </div>
      <form v-if="tabSignInActive" class="form" id="signIn">
        <div class="form__group">
          <label>Email</label>
          <input type="email" name="email" placeholder="YOUR EMAIL">
        </div>
        <div class="form__group">
          <label>Password</label>
          <input type="password" name="password" placeholder="••••••••••••">
        </div>
        <input type="submit" class="btn btn_darkgray btn_big" value="Sign in">
      </form>
      <form v-if="!tabSignInActive" class="forms__item" id="signUp">
        <div class="form__group">
          <label>Email</label>
          <input type="email" name="email" placeholder="YOUR EMAIL">
        </div>
        <div class="form__group">
          <label>Password</label>
          <input type="password" name="password" placeholder="••••••••••••">
        </div>
        <div class="form__group">
          <label>repeat Password</label>
          <input type="password" name="password" placeholder="••••••••••••">
        </div>
        <div class="form__group form__group_checkbox">
          <label>
            <input type="checkbox" checked>
            <span>is Admin</span>
          </label>
        </div>
        <input type="submit" class="btn btn_darkgray btn_big" value="Sign up">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      tabSignInActive: true
    }
  },
  methods: {
    toggleTab () {
      this.tabSignInActive = !this.tabSignInActive
    }
  }
}
</script>
<style lang="scss">
  .forms {
    &__tabs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 35px;
      &-item {
        text-transform: uppercase;
        border: 1px solid $gray;
        width: 100%;
        font-weight: bold;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:first-child {
          border-radius: 5px 0 0 5px;
        }
        &:last-child {
          border-radius: 0 5px 5px 0;
        }
        &.active {
          background: $gray;
        }
      }
    }
  }
</style>
