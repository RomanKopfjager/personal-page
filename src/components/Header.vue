<template>
  <header class="header">
    <div class="container">
      <div class="wrapper">
        <div class="header__logo">
          <img src="/src/img/logo.svg" alt="2x studio logo">
        </div>
        <div class="header__menu">
          <div class="header__menu__wrapper">
            <nav class="header__menu__nav">
              <router-link
                to="/"
                @click.native="mobileMenu"
              >{{ $t('menu.about') }}
              </router-link>
              <router-link
                to="/contact"
                @click.native="mobileMenu"
              >{{ $t('menu.contact') }}
              </router-link>
            </nav>
            <LanguageSwitcher></LanguageSwitcher>
            <div class="header__menu__social">
              <a href="https://www.behance.net/" target="_blank">
                <IconBehance></IconBehance>
              </a>
              <a href="https://www.linked.in/" target="_blank">
                <IconLinkeIn></IconLinkeIn>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <IconInstagram></IconInstagram>
              </a>
            </div>
          </div>
        </div>
        <div class="header__mobile">
          <div
            class="header__mobile__burger"
            @click="mobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            class="header__mobile__cross"
            @click="mobileMenu">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="not_ready__message" ref="modal">
      <div>Will be ready soon!</div>
    </div>
  </header>
</template>


<script>
import logo from '@/img/logo.svg';
import IconBehance from '@/components/icons/behance';
import IconLinkeIn from '@/components/icons/linkedin';
import IconInstagram from '@/components/icons/instagram';
import LanguageSwitcher from '@/components/LanguageSwitcher';


export default {
  components: {
    IconBehance,
    IconLinkeIn,
    IconInstagram,
    LanguageSwitcher,
  },
  data () {
    return {
      logo: logo,
      routes: this.$router.options.routes,
      show: true,
      messageModal: false,
      menuStatus: false,
      timeoutHandle: null,
      modal: this.$refs,
      modalTimeout: null,
      linkTimeout: null
    };
  },
  mounted () {

  },

  methods: {

    menuLinkClick (e) {

      if (e.target.classList.contains('disabled')) {

        e.target.classList.remove('animated');
        e.target.classList.add('animated');
      } else {

        e.target.parentElement.classList.remove('animated');
        e.target.parentElement.classList.add('animated');
      }

      // e.target.addEventListener('animationend', function () {
      //   e.target.classList.remove('animated');
      // });
      this.setLinkTimeout(e.target);

      if (!this.modal.modal.classList.contains('active')) {
        this.modal.modal.classList.remove('active');
        this.modal.modal.classList.add('active');

      }
      this.resetTimeout();
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
    }
  },
};
</script>