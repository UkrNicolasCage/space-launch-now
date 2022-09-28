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
  location: string;
  mission: string;
  mission_type: string;
  name: string;
  net: Date;
  url: string;
  launch_library_id: number;
  window_start: Date;
  window_end: Date;

  rocket: {
    configuration: {
      id: number;
    };
  };
}

interface CardLaunch {
  id: string;
  name: string;
  date: string;
  logo?: string;
  rocketId: number;
}

interface Rocket {
  alias: string;
  apogee: number;
  description: string;
  diametr: number;
  family: string;
  full_name: string;
  gto_capacity: string;
  id: number;
  launch_mass: number;
  length: number;
  maiden_flight: string | null;
  image: string;
  leo_capacity: number;
  max_stage: number | null;
  min_stage: number | null;
  name: string;
  to_thurst: number;
  variant: string;
  launch_service_provider: {
    abbrev: string;
    name: string;
    type: string;
  };
}

export type { Event, Launch, CardEvent, CardLaunch, Rocket };
