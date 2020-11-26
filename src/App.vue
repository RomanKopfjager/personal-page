<template>
  <div class="page_wrapper">
    <Header></Header>
    <main class="main">
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import logo from '@/img/logo.svg';
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
  data: () => {
    return {
      logo: logo,
      routes: this.$router.options.routes,
      transitionName: 'slide-left',
      messageModal: false,
      menuStatus: false,
    };
  },

  methods: {
    menuLinkClick (e) {
      e.target.classList.add('animated');
      if (!this.messageModal) {
        this.messageModal = true;
      }
      e.target.addEventListener('animationend', function () {
        e.target.classList.remove('animated');
      });
      clearTimeout();
      setTimeout(() => {
        this.messageModal = false;
      }, 300);
    },

    mobileMenu () {
      const menu = document.querySelector('.header');
      if (this.menuStatus) {
        this.menuStatus = false;
        menu.classList.remove('menu_active');
      } else {
        this.menuStatus = true;
        menu.classList.add('menu_active');
      }
    },
  },

};
</script>