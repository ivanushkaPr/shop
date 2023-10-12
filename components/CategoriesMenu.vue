<script setup>
import ChevronDownBold from "~/components/icon/ChevronDownBold.vue";

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const isOpened = ref(false);

const onResetMusicStyle = () => {
  selectedMusicStyle.value = null;
}
const toggleMenuVisibility = () => {
  isOpened.value = !isOpened.value;
}

let selectedMusicStyle = ref(null);

const onResetSinger = () => {
  selectedSinger.value = null;
  selectedBanner.value = null;
};

const onShowSingersMenu = async (singerName) => {
  onResetSinger();
  const { data } = await useFetch('/api/getSingers');
  selectedMusicStyle.value = data.value[singerName];
};

const selectedSinger = ref(null);
const selectedBanner = ref(null);

const onShowAlbumsMenu =  async (singerName) => {
  const { data: singerData } = await useFetch('api/getAlbums');
  const { data: bannerData } = await useFetch('/api/getBanners');
  selectedSinger.value = singerData.value[singerName];
  selectedBanner.value = bannerData.value[singerName];
};

</script>

<template>
<div class="categories-menu">
  <button class="categories-menu__button"
          :class="{'_menu-opened': isOpened}"
          @click="toggleMenuVisibility"
  >
    Все товары
    <chevron-down-bold class="categories-menu__icon" :class="{
      '_rotate_180deg': isOpened,
      '_color_white': isOpened
    }"/>
  </button>

  <transition name="fade">
  <div v-if="isOpened" >
    <menu-music-styles @click="onShowSingersMenu" :items="menuItems"/>
    <transition name="fade">
      <div v-if="selectedMusicStyle" @mouseleave="onResetMusicStyle" class="categories-menu__singers">
        <menu-singers :items="selectedMusicStyle" @mouseover="onShowAlbumsMenu"/>
        <transition name="fade">
          <figure v-if="selectedSinger" class="categories-menu__albums">
            <figcaption class="categories-menu__albums-headline"> Рекомендуемые альбомы </figcaption>
            <ul class="categories-menu__albums-list">
              <card-small v-for="album in selectedSinger" v-bind="album" :key="album.title" />
            </ul>
          </figure>
        </transition>
        <transition name="fade">
          <banner-small v-if="selectedBanner" v-bind="selectedBanner" />
        </transition>
      </div>
    </transition>
  </div>
  </transition>
</div>
</template>

<style lang="scss">
  .categories-menu {
    position: relative;
    &__button {
      display: flex;
      padding: 14px 24px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 2px;
      background: var(--gray-50, #F2F4F5);

      color: var(--gray-900, #191C1F);
      font-weight: 500;
      border: none;

      transition-property: all;
      transition-duration: 0.3s;
      &._menu-opened {
        background: var(--primary-500, #FA8232);
        color: var(--gray-00, #FFF);
      }
    }

    &__icon {
      stroke: #191C1F;
      transition-property: all;
      transition-duration: 0.3s;
    &._rotate_180deg {
      transform: rotate(-180deg);
    }
    &._color_white {
      stroke: white;
    }
    }

    &__list {
      position: absolute;
      top: 60px;
      width: 240px;
      padding: 12px 0px;
      border-radius: 3px;
      border: 1px solid var(--gray-100, #E4E7E9);
      background: var(--gray-00, #FFF);
      box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);
      list-style-type: none;
      margin: 0px;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      color: var(--gray-600, #5F6C72);

      &:hover {
        background: var(--gray-50, #F2F4F5);
      }
      &:hover > .categories-menu__item-icon   {
        display: block;
      }
    }
    &__item-icon {
      display: none;
    }

    &__singers {
      display: flex;
      gap: 20px;
      padding: 20px;
      position: absolute;
      left: 252px;
      top: 60px;
      border: 1px solid var(--gray-100, #E4E7E9);
      background: var(--gray-00, #FFF);
      box-shadow: 0px 8px 40px 0px rgba(0, 0, 0, 0.12);
    }

    &__singers-menu {
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: white;
      border-radius: 3px;
      box-sizing: border-box;
    }

    &__singer-item {
      min-width: 164px;
      padding: 8px 16px;
      border-radius: 3px;
      color: var(--gray-600, #5F6C72);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */

      &:hover {
        background: var(--gray-50, #F2F4F5);
        color: var(--gray-900, #191C1F);
      }
    }

    &__albums {
      margin: 0px;
    }

    &__albums-headline {
      color: var(--gray-900, #191C1F);
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-bottom: 16px;
    }

    &__albums-list {
      margin: 0px;
      list-style-type: none;
      padding: 0px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }


  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>