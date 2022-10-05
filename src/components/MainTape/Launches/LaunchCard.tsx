import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";

import noImage from "../../../assets/no-img.png";
import { useNavigate } from "react-router-dom";
import { memo, MouseEvent } from "react";
import { LinkLabel } from "../../UI/LinkText";

type Props = {
  id: string;
  logo: string|null;
  children?: JSX.Element;
  launchName: string;
  date: string;
  rocketId: number;
};

const LaunchCard = (props: Props) => {
  const navigate = useNavigate();

  const selectLaunchHandler = (event: MouseEvent<HTMLDivElement>) => {
    navigate("/launch/" + props.id);
  };

  const selectRocketHandler = (event: MouseEvent<HTMLDivElement>) => {
    navigate("/rocket/" + props.rocketId);
  };
  const Date = styled(Button)(({ theme }) => ({
    left: "50%",
    transform: "translate(-50%, -50%)",
  }));

  const [rocketName, launchName] = props.launchName.split("|");
  return (
    <Grid item key={props.id} width="580px">
      <Card key={props.id}>
        <Box onClick={selectLaunchHandler}>
          <CardMedia
            component="img"
            height={324}
            image={props.logo === null? noImage: props.logo}
          />
          <Date
            variant="contained"
            size="small"
            disabled
            style={{
              background:
                "linear-gradient(93.72deg, rgb(142, 45, 226) 9.41%, rgb(74, 0, 224) 86.1%)",
            }}
          >
            {props.date}
          </Date>
        </Box>

        <Typography variant="h3" textAlign="center">
          <LinkLabel onClick={selectRocketHandler}>{rocketName}</LinkLabel>
          <LinkLabel onClick={selectLaunchHandler}>|{launchName}</LinkLabel>
        </Typography>
      </Card>
    </Grid>
  );
};

export default memo(LaunchCard);