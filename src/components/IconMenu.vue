<template>
  <div>
    <div class="inner">
      <div class="menu">
        <ul>
          <li
            v-for="item in icons"
            :key="item.name">
            <a :href="item.href">
              <img
                :src="item.src"
                :alt="item.name"
                width="90px" />
              <span class="name">{{ item.name }}</span>
            </a>
          </li>
          <li class="more">
            <a
              href="javascript:void(0)"
              @click="onNav">
            </a>
            <span class="name">더보기</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: {},
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    async init() {
      this.icons = await this.$fetch({
        requestName: 'directs',
      });
    },
    onNav() {
      this.$store.dispatch('navigation/onNav', 'LNB');
    }
  }
}
</script>

<style scoped lang="scss">
  .menu {
    ul {
      padding: 50px 0;
      display: flex;
      li {
        margin-right: 25px;
        &:last-child {
          margin-right: 0;
        }
        img {
          display: block;
          margin-bottom: 15px;
        }
        .name {
          display: block;
          font-size: 15px;
          text-align: center;
        }
      }
      .more {
        a {
          display: block;
          width: 90px;
          height: 90px;
          margin-bottom: 15px;
          background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.png");
          background-size: 209px;
          background-position: 0 0;
        }
      }
    }
  }
</style>