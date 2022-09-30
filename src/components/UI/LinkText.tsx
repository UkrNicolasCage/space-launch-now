import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface Props {
  children?: React.ReactElement | string | string[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const LinkText = styled(Box)(({ theme }) => ({
  "&:hover": {
    textDecoration: "underline 5px solid" ,
    cursor: "pointer",
  },
}));

export const LinkLabel = (props: Props) => {
  
  return (
    <LinkText component="span" onClick={props.onClick}>
      {props.children}
    </LinkText>
  );
}
