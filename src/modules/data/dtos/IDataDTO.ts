import { ObjectID } from "typeorm";

export interface IDataDTO {
  id?: ObjectID;
  brightness: string;
  humidity: string;
  temperature: string;
  valve: boolean;
  heater: boolean;
  lamp: boolean;
  sensorsStatus:string;
}