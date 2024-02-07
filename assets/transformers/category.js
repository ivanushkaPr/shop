const translatedCategoryNames = {
    pop: 'Поп',
    metall: 'Металл',
};

const categoryTransformer = Object.freeze({
    transform: function (category) {
        return {
            src: `/images/categories/${category}.jpg`,
            caption: translatedCategoryNames[category.toLowerCase()],
        };
    }
});

export default categoryTransformer;