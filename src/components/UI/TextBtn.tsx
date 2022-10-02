import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ReactElement } from "react";

const TextBtnStyles = styled(Button)(({ theme }) => ({
  margin: "0.5rem",
  textTransform: "uppercase",
  color: "#fff"
}));

interface Props {
  children: ReactElement | ReactElement[] | string | string[];
}

export const TextBtn = (props: Props) => {
  return (
    <TextBtnStyles
      variant="contained"
      size="small"
      disabled
      style={{
        background:
          "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
      }}
    >
      {props.children}
    </TextBtnStyles>
  );
};
