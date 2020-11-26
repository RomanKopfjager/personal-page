<template>
  <div class="about">
    <div class="container">
      <div
        v-for="item in items"
        :key="item"
        class="about__item"
      >
        <div class="about__item__content">
          <div class="about__item__title">
            <h2>We believe</h2>
          </div>
          <div class="about__item__description">
            <p>We believe in our clients’ business. Their ideas are
              unique and our goal is to demonstrate this uniqueness
              to the world.
            </p>
            <p>Our team is full of pride for every project we’ve been
              working at. There is nothing more valuable than your trust.</p>
          </div>
        </div>
        <div class="about__item__img">
          <picture>
            <img src="/dist/src/img/nature.gif" alt="Gif">
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
  data () {
    return {
      items: 4
    };
  },
  methods: {}
};
</script>