<template>
  <div class="contacts">
    <div class="container">
      <div class="wrapper">
        <div class="contacts__content">
          <div class="contacts__title">
            <h1>{{ $t('contact.title') }}</h1>
          </div>
          <div
            v-for="(item, index) in $t('contact.items')"
            :key="index"
            class="contacts__description"
          >
            <div class="contacts__description__title">
              <h4>{{ item.title }}</h4>
            </div>
            <div class="contacts__description__text">
              <p>{{ item.description }}</p>
            </div>
            <div class="contacts__description__link">
              <a :href="`mailto:${item.email}`">
                <span>{{ item.email }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11.828" height="11.828" viewBox="0 0 11.828 11.828">
                  <g id="стрелочка" transform="translate(1.414 1.414)">
                    <path id="стрелочка-2" data-name="стрелочка" d="M5010.012,1879.807h7.489v7.009"
                          transform="translate(-5008.501 -1879.807)" fill="none" stroke="#fff" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="2"/>
                    <path id="стрелочка-3" data-name="стрелочка" d="M5020.8,1879.807l-9,9"
                          transform="translate(-5011.801 -1879.807)" fill="none" stroke="#fff" stroke-linecap="round"
                          stroke-width="2"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div class="contacts__social">
            <a href="https://www.behance.net/"
               target="_blank"
            >
              <IconBehance/>
            </a>
            <a href="https://www.linked.in/"
               target="_blank"
            >
              <IconLinkedIn/>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
            >
              <IconInstagram/>
            </a>
          </div>
        </div>
        <ContactAnimation/>
      </div>
    </div>
  </div>
</template>

<script>
import ContactAnimation from '@/components/ContactAnimation';
import IconBehance from '@/components/icons/behance';
import IconLinkedIn from '@/components/icons/linkedin';
import IconInstagram from '@/components/icons/instagram';

export default {
  name: 'AppContact',
  components: {
    ContactAnimation,
    IconBehance,
    IconLinkedIn,
    IconInstagram,
  },
  data () {
    return {
      count: 0
    };
  },
  mounted () {
    console.log(this.count++);
  },
  methods: {},
};
</script>