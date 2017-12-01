export interface SDC {
  state: string[];
  dist: { [state: string]: string[] }[];
  city: { [city: string]: string[] }[];
}
