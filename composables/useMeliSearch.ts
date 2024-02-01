import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import "instantsearch.css/themes/algolia-min.css";

export const useMeliSearch = async () => {
    const { meliSearchHost, meliSearchApiKey} = useAppConfig();
    return instantMeiliSearch(
        meliSearchHost, // Host
        meliSearchApiKey // API key
    );
}