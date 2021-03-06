function priceCheck(products, productPrices, productSold, soldPrice) {
    const productPriceMap = {};
    products.forEach((product, index) => {
        productPriceMap[product] = productPrices[index];
    });

    let errors = 0;
    for(let i = 0; i < productSold.length; i++) {
        const currentProduct = productSold[i];
        const currentProductActualPrice = productPriceMap[currentProduct];
        if(currentProductActualPrice !== soldPrice[i]) errors++;
    }
    console.log(errors);
    return errors;
}

priceCheck(["a", "b", "c"],);
