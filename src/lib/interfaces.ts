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
  launches: LaunchShort[];
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
  slug: string;
  pad: {
    location: {
      name: string;
    };
    latitude: string;
    longitude: string;
    map_url: string;
    name: string;
    probability: string;
  };
  mission: {
    orbit: string;
    description: string;
    type: string;
  };

  name: string;
  net: Date;
  url: string;
  launch_library_id: number;
  window_start: string;
  window_end: Date;

  rocket: {
    configuration: Rocket;
  };
}

interface LaunchShort {
  id: string;
  image: string;
  landing: string;
  landing_success: number;
  launcher: string;
  location: string;
  mission: string;
  mission_type: string;
  name: string;
  net: string;
  orbit: string;
  pad: string;
  slug: string;
  url: string;
  window_start: string;
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
  diameter: number;
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
  to_thrust: number;
  variant: string;
  launch_service_provider: {
    abbrev: string;
    name: string;
    type: string;
  };
}

export type { Event, Launch, LaunchShort, CardEvent, CardLaunch, Rocket };
