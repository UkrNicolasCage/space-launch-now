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
  id: number;
  status: string;
  image_url: string;

  launcher_config: {
    allias: string;
    apogee: number;
    description: string;
    diametr: number;
    family: string;
    full_name: string;
    gto_capacity: number;
    launch_mass: number;
    length: number;
    leo_capacity: number;
    max_stage: number;
    min_stage: number;
    name: string;
    to_thrust: number;
    variant: string;
  };
}

export type { Event, Launch, CardEvent, CardLaunch, Rocket };
