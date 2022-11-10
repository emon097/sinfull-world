import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
const Shoot = ({ recent }) => {
  return (
    <div>
      <PhotoProvider>
        <PhotoView src={recent.img}>
          <img src={recent.img} alt="" />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default Shoot;
