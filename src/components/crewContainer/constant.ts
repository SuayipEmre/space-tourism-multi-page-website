import { crewType } from "../../types/destinationItems";
import douglasHurley from '../../../src/assets/crew/image-douglas-hurley.png'
import markShuttleworth from '../../../src/assets/crew/image-mark-shuttleworth.png'
import victorGlover from '../../../src/assets/crew/image-victor-glover.png'
import anoushehAnsari from '../../../src/assets/crew/image-anousheh-ansari.png'

export const crew : Array<crewType> = [
    {
        id : 1,
      name: "Douglas Hurley",
      images: {
        png: douglasHurley
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        id : 2,
      name: "Mark Shuttleworth",
      images: {
        png: markShuttleworth
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        id : 3,
      name: "Victor Glover",
      images: {
        png: victorGlover
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        id : 4,
      name: "Anousheh Ansari",
      images: {
        png: anoushehAnsari
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]



