import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const Qzone = () => {
  return (
    <div className="bg-light p-2 mb-5">
      <h4 className="mb-3">Q-zone</h4>
      <div className="">
        <img className="img-fluid mb-3" src={qzone1} alt="" />
        <img className="img-fluid mb-3" src={qzone2} alt="" />
        <img className="img-fluid mb-3" src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
