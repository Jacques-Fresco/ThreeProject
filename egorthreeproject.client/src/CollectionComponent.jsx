import React from 'react';
// import './CollectionComponent.css'
import './CollectionScc.css';

const CollectionSection = ({ children }) => {
  return (
    // <section className="collection_section">
    //   <div className="w-layout-blockcontainer container_collection radius_6 w-container">
    //     <div className="block_collection">
          
    //         <div className="mask-2 w-slider-mask">
    //           {children}
    //         </div>

    //         <div className="left_collection_arrow left-arrow_banner w-slider-arrow-left"></div>
    //         <div data-w-id="63b60c3a-924d-e863-4a96-3fe61b498e2d" className="right_collection_arrow right_arrow_banner w-slider-arrow-right"></div>
    //         <div className="slide-nav-2 w-slider-nav w-round w-num"></div>
    //       </div>
    //   </div>
    // </section>
    <div style={{maxWidth: 'calc(900px - 40px)'}}>
      <ul className="list" style={{borderRadius: '60px'}}>
        {children}
      </ul>
    </div>
  );
};

export default CollectionSection;
