import { Meet } from "./event-models";

const DB_NAME = "SwimMeetsDB";
const MEET_STORE_NAME = "SwimMeets";

// export function getMeet(): Meet[] {
  
// }

export function getMeet(id: string): Meet {
  return {
    id: "MT123",
    name: "Andover Summer Open",
    date: new Date(),
    startTime: "6pm",
    events: [
      {
        id: "EV123",
        distance: 100,
        eventType: "Freestyle",
        ageGroup: "U14",
        gender: "Male",
        heats: [
          {
            id: "HT-1-1",
            number: 1,
            competitors: []
          },
          {
            id: "HT-1-2",
            number: 2,
            competitors: []
          },
          {
            id: "HT-1-3",
            number: 3,
            competitors: []
          }
        ]
      },
      {
        id: "EV124",
        distance: 100,
        eventType: "Freestyle",
        ageGroup: "U14",
        gender: "Female",
        heats: [
          {
            id: "HT2-1",
            number: 1,
            competitors: []
          },
          {
            id: "HT2-2",
            number: 2,
            competitors: []
          }
        ]
      },
    ]
  }
}

export function saveMeet() {
  
}