import { ChangeEvent, FC } from "react";

import ImageIcon from "@mui/icons-material/Image";

import { AddImageBtn } from "../../styles";

interface IImageBtn {
  imageHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ImageButton: FC<IImageBtn> = ({ imageHandler }) => {
  return (
    <AddImageBtn htmlFor="actual-btn">
      <input type="file" id="actual-btn" hidden onChange={imageHandler} />
      Add an Image <ImageIcon sx={{ marginLeft: "65px" }} />
    </AddImageBtn>
  );
};
