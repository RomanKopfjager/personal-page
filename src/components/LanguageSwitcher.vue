<template>
  <div class="header__lang__wrapper">
    <ul class="header__lang">
      <li v-bind:class="{active:index === activeItem}"
          v-for="lang, index in languages"
          :key="index"
          @click="changeLang(lang.code, index)">
        <span class="icon">{{lang.code}}</span>
        <span class="text">{{lang.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {i18n} from '../plugins/i18n';
  import IconLangEn from '@/components/icons/lang_en';
  import IconLangRu from '@/components/icons/lang_ru';

  export default {
    name: 'LanguageSwitcher',
    data: () => ({
      languages: [
        {
          code: 'en',
          text: 'English version'
        },
        {
          code: 'ru',
          text: 'Russian version'
        },
      ],
      local: i18n.locale,
      activeItem: 0,
    }),
    components: {
      IconLangEn,
      IconLangRu,
    },
    mounted() {
    },
    methods: {
      changeLang(lang, i) {
        this.activeItem = i;
        i18n.locale = lang;
      }
    }
  }
</script>