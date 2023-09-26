<script setup>
const languages = {
      selectedItemIndex: 1,
      items: [
        {
          text: 'English',
          url: '/images/US.png',
          abbr: 'EN'
        },
        {
          text: 'Russian',
          url: '/images/RU.png',
          abbr: 'RU',
        },
      ]
    }
;

const currency = {
  selectedItemIndex: 1,
  items: [
    {
      text: 'Доллар (USD)',
      abbr: 'USD'
    },
    {
      text: 'Рубль (RUB)',
      abbr: 'RUB'
    }
  ]
};
</script>

<template>
  <nav class="top-nav">
    <p class="top-nav__greetings">
      Добро пожаловать на Sound Market.
    </p>
    <div class="top-nav__social-menu">
      <ul class="top-nav__social-links">
        <li class="top-nav__social-link">
          Мы в соцсетях:
        </li>
        <li class="top-nav__social-link">
          <icon-twitter/>
        </li>
        <li class="top-nav__social-link">
          <icon-facebook/>
        </li>
        <li class="top-nav__social-link">
          <icon-pinterest/>
        </li>
        <li class="top-nav__social-link">
          <icon-reddit/>
        </li>
        <li class="top-nav__social-link">
          <icon-youtube/>
        </li>
        <li class="top-nav__social-link">
          <icon-instagramm/>
        </li>
        <li class="top-nav__social-link">
          <icon-divider/>
        </li>
        <li class="top-nav__social-link">
          <dropdown :options="languages" align-side="right"/>
        </li>
        <li class="top-nav__social-link">
          <dropdown :options="currency" align-side="left"/>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -1px 0px 0px rgba(255, 255, 255, 0.16) inset;
  padding: 16px 300px;
  background: $secondary-700;
  &__greetings {
    color: $gray-00;
  }

  &__social-menu {
    display: flex;
    align-items: center;
  }

  &__social-title {
    color: $gray-00;
  }

  &__social-links {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 12px
  }

  &__social-link {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>