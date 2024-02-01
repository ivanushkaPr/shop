import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', () => {
    const searchQuery = ref('');

    function setSearchQuery(queryString) {

        searchQuery.value = queryString;
    }
    return { searchQuery, setSearchQuery };
})