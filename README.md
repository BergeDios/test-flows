# The Retail React App

A project template that includes an isomorphic JavaScript storefront and [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) built using [React](https://reactjs.org/) and [Express](https://expressjs.com/). It uses a modern headless architecture that enables developers to decouple front-end code from back-end systems. It leverages popular open-source libraries in the React ecosystem, such as [Chakra UI](https://chakra-ui.com/) components, [Emotion](https://emotion.sh/docs/introduction) (CSS-in-JS), [Webpack](https://webpack.js.org/), and many more.

Developers don’t have to worry about the underlying infrastructure, whether they’re developing their app locally, deploying it to a [Managed Runtime](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/mrt-overview.html) environment, or testing the app live.

## Requirements

-   Node 14
-   npm 6.14.4 or later

## Get Started

To start your web server for local development, run the following command in your project directory:

```bash
npm start
```

Now that the development server is running, you can open a browser and preview your commerce app:

-   Go to http://localhost:3000/

## Localization

See the [Localization README.md](./app/translations/README.md) for important setup instructions for localization.

## Configuration Files

The Retail React App's configuration files are located in the `app/config` folder. For more details, see [Configuration Files](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/configuration-options.html) in the documentation.

## Documentation

The full documentation for PWA Kit and Managed Runtime is hosted on the [Salesforce Developers](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/overview) portal.

### Useful Links:

-   [Get Started](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/getting-started.html)
-   [Skills for Success](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/skills-for-success.html)
-   [Set Up API Access](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/setting-up-api-access.html)
-   [Configuration Options](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/configuration-options.html)
-   [Proxy Requests](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/proxying-requests.html)
-   [Push and Deploy Bundles](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/pushing-and-deploying-bundles.html)
-   [The Retail React App](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/retail-react-app.html)
-   [Rendering](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/rendering.html)
-   [Routing](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/routing.html)
-   [Phased Headless Rollouts](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/phased-headless-rollouts.html)
-   [Launch Your Storefront](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/launching-your-storefront.html)


# FLOWS

## Purchases

- Home
- Click product img
  - Product ITO page
  - Choose product specs
  - Add to Cart button
- After this you'll be prompted to a modal where you can see the cart total.
- Then in checkout you are asked to log in or sign in as a guest.
- After this you are asked your shipping address.
- Asks what kind of shipping do you preferr.
- Payment options.
  - Review order
  - Confirm purchase

## PDP

- /product/:productId This route is accesed each time one item ii's clicked.
- ProductDetail props: - Product - Categoy - IsLoading
  data is obtained via getProps using a call to the commerce Api configured in the commerce-api folder, makes the call api.shopperProduct.getProduct(params) (gets product ID from url params)
- useEffect, einstein.sendViewProduct(), Tells the Einstein engine when a user views a product.
-
- Finally it renders everything in ProductView component.
- Also uses some product info to render the Recommended Products component.
- Variant info for choosing product variants
- AddToCart and AddToWishlist functions in buttons

## PLP

- /category/:categoryId || /search
- ProductList prop data is obtained via getProps using a call to the commerce Api configured in the commerce-api folder, makes the call api.shopperProducts.getCategory(params) to get the category prop, and the call api.shopperSearch.productSearch(params) to get the productSerchResult prop filled(array of products) (gets category ID from url params)
- Variant info for choosing product variants
- Then with a productSearchResult.map to render every item with the ProductTile component
- productSearchResult()length for pagination.
- Clicking item goes to PDP.