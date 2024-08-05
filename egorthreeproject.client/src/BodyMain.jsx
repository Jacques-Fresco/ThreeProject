import React, { useState, useEffect } from 'react';
import ProductCategoryFilter from './ProductCategoryFilter.jsx'
// import ComponentClider from './ComponentClider.jsx'
// import ComponentSlider from './ComponentSlider.jsx';
import SlidersOptionsComponent from './SlidersOptionsComponent.jsx';
import CompaniesSection from './CompaniesSection.jsx';
import ImageSlider  from './ImageSlider.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import AboutComponent from './AboutComponent.jsx'


function BodyMain({ products, categories, pictures }) {

    return (
        <div>
            {/* <ComponentClider /> */}
            {/* <ComponentSlider /> */}
            <SlidersOptionsComponent />
            <ProductCategoryFilter products={products} categories={categories} pictures={pictures} />
            <AboutComponent />
            {/* <CompaniesSection /> */}
            {/* <ImageSlider /> */}
            {/* <ProjectsSection /> */}
        </div>
    )
}

export default BodyMain;