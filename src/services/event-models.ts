export interface Meet {
  id: string;
  name: string;
  date: Date;
  startTime: string;
  events: Event[];
}
export type EventType = "Freestyle" | "Backstroke" | "Breaststroke" | "Butterfly" | "Individual Medley" | "Freestyle Relay" | "IM Relay";
export type GenderType = "Male" | "Female";
export interface Event {
  id: string;
  distance: number;
  eventType: EventType;
  ageGroup: string;
  gender: GenderType;
  heats: Heat[];
}
export interface Heat {
  id: string;
  number: number;
  competitors: Competitor[];
}
export interface Competitor {
  id: string;
  name: string;
  club: string;
  age: number;
}