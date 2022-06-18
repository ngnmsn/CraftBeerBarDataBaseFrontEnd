import { Station } from "./station"
import { Bar } from "./bar";

export interface ResponseGetStations {
    stations: Station[];
}

export interface ResponseGetBarList {
    barList: Bar[];
}