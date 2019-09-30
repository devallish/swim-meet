export interface MeetModel {
  id: string;
  name: string;
  date: Date;
  startTime: string;
  events: EventModel[];
}
export type EventType = "Freestyle" | "Backstroke" | "Breaststroke" | "Butterfly" | "Individual Medley" | "Freestyle Relay" | "IM Relay";
export type GenderType = "Male" | "Female";
export interface EventModel {
  id: string;
  distance: number;
  eventType: EventType;
  ageGroup: string;
  gender: GenderType;
  heats: HeatModel[];
}
export interface HeatModel {
  id: string;
  number: number;
  lanes: HeatLaneModel[];
}
export interface HeatLaneModel {
  laneNumber: number;
  competitorId: string;
  result: string;
  position: number;
}

export interface CompetitorModel {
  id: string;
  clubId: string;
  name: string;  
  age: number;
}
export interface ClubModel {
  id: string;
  name: string;
  shortName: string;
}