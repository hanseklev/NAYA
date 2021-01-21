import React from 'react';
const { ProductProvider } = require("./src/context/productContext");

require("./src/theme/global.css")

export const wrapRootElement = ({element}) => (
    <ProductProvider>{element}</ProductProvider>
)