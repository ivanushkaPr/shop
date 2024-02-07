export const useRedirectTo = () => {
    return (category: string) => {
        const urlEncoded = encodeURI(`/catalog?refinementList[genre][0]=${category}&sortBy=products`);
        navigateTo(urlEncoded);
    }
}