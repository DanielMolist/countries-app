import { Country } from "./country.interface";
import { Region } from "./region.interface";

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries
}

export interface TermCountries {
  term: string,
  countries: Country[]
}

export interface RegionCountries {
  region?: Region;
  countries: Country[];
}
