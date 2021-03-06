/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */
module.exports = componentOverride = {
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`]:'@simicart/sizechart/src/override/productFullDetail.js',
    [`@magento/venia-ui/lib/RootComponents/Product/product.gql.js`]:'@simicart/sizechart/src/override/productFullDetail.Gql.js'
};
