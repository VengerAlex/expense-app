import { FC } from "react";
import { AddImageBtn } from "../../styles";
import ImageIcon from "@mui/icons-material/Image";

interface IImageBtn {}
export const ImageButton: FC<IImageBtn> = () => {
  return (
    <AddImageBtn htmlFor="actual-btn">
      <input type="file" id="actual-btn" hidden />
      Add an Image <ImageIcon sx={{ marginLeft: "65px" }} />
    </AddImageBtn>
  );
};
