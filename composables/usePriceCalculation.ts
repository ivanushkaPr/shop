export const usePriceCalculation = () => {
    function toClientValue(price: number) {
        return price / 100;
    }

    function toOriginalValue(price: number) {
        return price * 100;
    }

    return {
        toClientValue,
        toOriginalValue,
    }
}