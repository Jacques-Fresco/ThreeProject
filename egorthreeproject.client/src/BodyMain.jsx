import React, { useState, useEffect } from 'react';
import ProductCategoryFilter from './ProductCategoryFilter.jsx'
import ComponentClider from './ComponentClider.jsx'

function BodyMain({ products, categories, pictures }) {

    return (
        <div>
            <ComponentClider />
            <ProductCategoryFilter products={products} categories={categories} pictures={pictures} />
        </div>
    )
}

export default BodyMain;