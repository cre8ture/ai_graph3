import Bio_left from "./Bio_left";
import Bio_left2 from "./Bio_left2";

import Load_imgs from "../image/load_imgs_into_pixels";
import Load_imgs3 from "../image/load_imgs2";

const InfoCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, maxWidth: "50%" }}>
        {/* <Bio_left /> */}
        <Bio_left2 />
      </div>
      <div style={{ flex: 1, maxWidth: "50%" }}>
        {/* <img src={imageSrc} alt="Image" style={{ width: "100%" }} /> */}
        <Load_imgs />
        {/* <Load_imgs3 /> */}
      </div>
    </div>
  );
};

export default InfoCard;
