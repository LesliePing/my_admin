<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: false,
    };
  },
  methods: {
    ////////////刷新
    reload(item) {
      this.isRouterAlive = item;
    },
    /******************************** 刷新权限，考虑不用 ************************************/
    getRole() {
      var roleName = localStorage.getItem("account_log");
      if (roleName === null || roleName === undefined) {
        this.$router.push("/login");
      }
      if (roleName === "admin") {
        this.$store.commit("AllSituationUser", "admin");
      } else {
        this.$store.commit("AllSituationUser", "guest");
      }
    },
    reflashPermis(roleId) {
      var param = {
        roleId: roleId,
      };
      this.$api.getRoleById(param).then((res) => {
        console.log("res :>>", res);
      });
    },
  },
  mounted() {
    // this.reflashPermis(roleId)
    this.getRole(); // getRoelName--state
  },
  beforeUnmount() {
    // 清空本地缓存用户信息
    localStorage.removeItem("account_log");
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style-type: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
.el-dialog__header {
  background-color: rgb(79, 160, 253);
}
</style>
