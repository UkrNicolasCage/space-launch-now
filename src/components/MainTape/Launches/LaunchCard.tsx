import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";

import styles from "./Launches.module.css";
import noImage from "../../../assets/no-img.png";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { LinkLabel } from "../../UI/LinkText";

type Props = {
  id: string;
  logo: string;
  children?: JSX.Element;
  launchName: string;
  date: string;
  rocketId: number;
};

export const LaunchCard = (props: Props) => {
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
            image={noImage}
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
