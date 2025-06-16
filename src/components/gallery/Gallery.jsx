import React from "react";
import "./gallery.css";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import item4 from "../../assets/item4.png";
import item5 from "../../assets/item5.png"; 
import item6 from "../../assets/item6.png"; 
import item7 from "../../assets/item7.png";

const Gallery = () => {
  return (
    <section className="gallery-section container" id="gallery">
      <h2> 📸 Gallery</h2>
      <div className="gallery-container">

        <div className="gallery-item1">
            <img  src={item1} alt="Gallery Item" className="gallery-img1" />
        </div>
        
        <div className="gallery-item2">
          <div className="item-2-a item-small"> 
            <img  src={item2} alt="Gallery Item" className="gallery-img" />
          </div>
          <div className="item-2-b item-small">
            <img  src={item3} alt="Gallery Item" className="gallery-img" />
          </div>
          <div className="item-2-c item-lrg lrg1">
            <img  src={item4} alt="Gallery Item" className="gallery-img" />
          </div>
        </div>
        
        <div className="gallery-item3">
           <div className="item-3-a item-lrg lrg2">
            <img  src={item5} alt="Gallery Item" className="gallery-img" />
           </div>
          <div className="item-3-b item-small">
            <img  src={item6} alt="Gallery Item" className="gallery-img" />
          </div>
          <div className="item-3-c item-small">
            <img  src={item7} alt="Gallery Item" className="gallery-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
