import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', () => {
    const categories = ref(null);
    const parentCategories = ref(null);

    const setCategories = (categoriesData) => {
        categories.value = categoriesData;
    };

    const setParentCategories = (parentCategoriesData) => {
        parentCategories.value = parentCategoriesData;
    };

    return { categories, parentCategories, setCategories, setParentCategories };
})