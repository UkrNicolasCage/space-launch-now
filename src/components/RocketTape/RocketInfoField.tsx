import { Skeleton, Typography } from "@mui/material";
import { useAppSelector } from "../../store";

interface Props {
  children: string|number;
}

export const RocketInfoFiled = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  const result = isLoading ? (
    <Skeleton  width="4.5rem" style={{textAlign:"center", margin:"0 auto"}}/>
  ) : (
    <Typography variant="h6">{props.children}</Typography>
  );

  return result;
};
