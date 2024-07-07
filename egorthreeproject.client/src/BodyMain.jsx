import React, { useState, useEffect } from 'react';
import ProductCategoryFilter from './ProductCategoryFilter.jsx'
// import ComponentClider from './ComponentClider.jsx'
// import ComponentSlider from './ComponentSlider.jsx';
import SlidersOptionsComponent from './SlidersOptionsComponent.jsx';

function BodyMain({ products, categories, pictures }) {

    return (
        <div>
            {/* <ComponentClider /> */}
            {/* <ComponentSlider /> */}
            <SlidersOptionsComponent />
            <ProductCategoryFilter products={products} categories={categories} pictures={pictures} />
        </div>
    )
}

export default BodyMain;