interface Event {
  id: number;
  description: string;
  feature_image: string | null;
  name: string;
  date: Date;
  type: {
    id: number;
    name: string;
  };
  url: string;
  video_url: string;
  launches: Launch[];
  expedition: [];
}
interface CardEvent {
  id: number;
  name: string;
  date: string;
  logo?: string;
}

interface Launch {
  id: number;
  feature_image: string;
  landing: null;
  location: string;
  mission: string;
  mission_type: string;
  name: string;
  orbit: string;
  net: Date;
  url: string;
  launch_library_id: number;
  window_start: Date;
  window_end: Date;
  status: {
    id: number;
    name: string;
  };
}

interface CardLaunch{
  id: string;
  name: string;
  date: string;
  logo?: string;

}

export type { Event, Launch, CardEvent, CardLaunch };