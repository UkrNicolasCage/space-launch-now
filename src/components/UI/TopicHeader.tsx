import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const HeaderContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    marginBottom: "0.5rem",
  },
}));

interface Props {
  children: React.ReactElement | string;
}

const HeaderText = styled(Typography)(({ theme }) => ({

  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));

const TopicHeader = (props: Props) => {
  return (
    <HeaderContainer>
      <HeaderText variant="h2" textTransform="capitalize">
        {props.children}
      </HeaderText>
    </HeaderContainer>
  );
};

export {HeaderText, TopicHeader}