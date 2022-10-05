import { RecentEvents } from "../RecentEvents/RecentEvents";
import  EventInfo  from "./EventInfo";
import { Tape } from "../Layout/Tape";
import { Skeleton } from "@mui/material";
import { MediaContainerTop } from "../Layout/MediaContainer";
import YouTube from "react-youtube";
import { useAppSelector } from "../../store";
import { getURLParameter } from "../../helpers/getUrlParam";
import { memo } from "react";

interface Props {
  data: {
    video: string;
    launchName: string;
    date: string;
    destination: string;
    mission: string;
    description: string;
    img: string;
  };
}

const EventTape = (props: Props) => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const {video} = props.data;
  let videoId = "";
  
   if (video !== undefined) {
     videoId = video === null ? "" : getURLParameter(video as string, "v");
   }
  return (
    <Tape>
      <MediaContainerTop>
        {isLoading || videoId === "" ? (
          <Skeleton height="100%" variant="rectangular"></Skeleton>
        ) : (
          <YouTube videoId={videoId} style={{ overflow: "hidden" }} />
        )}
        
      </MediaContainerTop>
      <EventInfo data={props.data} />
      <RecentEvents />
    </Tape>
  );
};

export default memo(EventTape);