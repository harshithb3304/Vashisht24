// pages/Page.js
import React from "react";
import styles from "@/app/styles/events.module.css";
import Simcard from "/src/app/(components)/simcard";
import Navbar from "@/app/(components)/navbar";
import Footer from "@/app/(components)/footer";
const events = [
  {
    eventId: "robowars",
    eventName: "ROBOWARS",
    imageSrc: "/images/ball.png",
    eventInfo:
      "In the arena, futuristic robots armed with lethal weaponry engage in a relentless dance of destruction, sparks flying as the crowd roars in anticipation. In the end, only one bot stands victorious, a testament to engineering prowess and strategic brilliance.",
    eventPrize: "₹40000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "hackathon",
    eventName: "VASHISHT HACKATHON",
    imageSrc: "/images/ball.png",
    eventInfo:
      "The AutoML Studio Hackathon is a thrilling opportunity for participants to showcase their skills and creativity in developing an Automated Machine Learning Studio. The goal is to design a platform that streamlines the end-to-end process of machine learning model development, from data preprocessing to model deployment, making it accessible to both beginners and experts.",
    eventPrize: "₹40000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "droneracing",
    eventName: "DRONE RACING",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Join the Aerial Ascendance Drone Racing Challenge! Pilots will navigate custom-designed tracks, conquering checkpoints and showcasing their skills in an electrifying spectacle. With thrilling qualifiers and heart-pounding finals, only the fastest will claim victory. Prepare for high-flying excitement where every moment counts! ",
    eventPrize: "₹35000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "aquaquest",
    eventName: "AQUA QUEST",
    imageSrc: "/images/ball.png",
    eventInfo:
      "The objective of this competition is to build an ROV to complete a set of simple tasks within the given time frame. This competition focuses on instilling the very fundamental concepts of underwater robotics and tests the knowledge and ability of participants to build an ROV to tackle problems underwater. The participants are expected to use their engineering knowledge to make their ROV as robust as possible to meet the competition requirements.",
    eventPrize: "₹30000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "namo",
    eventName: "NAVNIRMANA AEROMODELLING CHALLENGE",
    imageSrc: "/images/ball.png",
    eventInfo:
      "In this event, teams from various other institutes plus the teams from our college (except members of TAD) are expected to participate in this aeromodelling competition organized by TAD club of IIITDM. The RC airplanes developed by the teams are expected to complete some tasks, on the basis of which, they are awarded points. The team which has the maximum number of points wins the competition. Prize money for the first 3 places + participation certificate to all.",
    eventPrize: "₹30000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "pitchonpitch",
    eventName: "PITCH ON PITCH",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Embark on a transformative journey with Pitch on Pitch, providing a splendid opportunity for student entrepreneurs and startups to pitch ideas, network with industry leaders, and receive valuable feedback. Shape the trajectory of budding startups, contribute to India's economic landscape, and be part of the innovation revolution. Seize this opportunity to disrupt and redefine the entrepreneurial landscape! #PitchOnPitch #InnovationRevolution",
    eventPrize: "₹30000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "ctf",
    eventName: "CTF",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Enter the heart-pounding world of Capture the Flag! Explore cybersecurity's exhilarating realm, where bugs, secrets, and mysteries await. Whether novice or pro, this event suits all, offering thrilling challenges. Race against time to uncover hidden vulnerabilities and outsmart opponents. Join us for an unforgettable cybersecurity showdown where every second counts. Ready to emerge triumphant? Register now for the adrenaline-fueled excitement of Capture the Flag!",
    eventPrize: "₹25000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "retrover",
    eventName: "RETROVER",
    imageSrc: "/images/ball.png",
    eventInfo:"Redefine limits and outsmart obstacles in our autonomous rover challenge Join this crazy arena where teams will navigate a simulated maze using autonomous UGVs or teleoperation. Solve clues, conquer obstacles, and compete for the top prize! Bring your engineering prowess and strategic thinking to this thrilling robotics event. Join in for a fun journey of teamwork and problem-solving",
    eventPrize: "₹25000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "ieee",
    eventName: "IEEE Paper presentation",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Explore cutting-edge research at our dynamic Papers Presentation Event. Join experts, ignite curiosity, and dive into the future of knowledge!",
    eventPrize: "₹15000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "asme",
    eventName: "ASME Paper presentation",
    imageSrc: "/images/ball.png",
    eventInfo:
      "ASME Technical Paper Presentation is a non-publication session scheduled for presentation at a technical session but is not published in the conference proceedings. This unique platform offers a prestigious avenue for sharing your work at a technical session, providing unparalleled exposure without being published in the conference proceedings. It requires an abstract submission for consideration. Seize the chance to captivate an audience with your insights, discoveries, and advancements in technology. Don't miss this opportunity to showcase your expertise and contribute to the cutting-edge discussions shaping the future of engineering and beyond",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "yesterday",
    eventName: "Yesterday's Tomorrow",
    imageSrc: "/images/ball.png",
    eventInfo:"Embark on a narrative journey through time with the Yesterdays Tomorrow, a captivating event at our college fest. Participants will be provided with a building block of a story, and their task is to expand upon it, crafting an entire narrative in the form of a storytelling poster. The theme of retrofuturism or timeline adds a unique twist, inviting students to weave tales that transcend eras and envision futuristic histories",
    eventPrize: "₹7000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "jetsetchic",
    eventName: "JET SET CHIC",
    imageSrc: "/images/ball.png",
    eventInfo:"Embark on a thrilling journey of creativity and problem-solving with Jet Set Chic-Unraveling Clues through the Glamour of Retro Future Elegance! a unique event that combines the excitement of a treasure hunt with the challenges of design puzzles. This event is a highlight of our college fest, offering students a chance to showcase their design acumen, analytical skills, and teamwork",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "backtothefuture",
    eventName: "BACK TO THE FUTURE",
    imageSrc: "/images/ball.png",
    eventInfo:"Unleash your creativity in Back to the future: Designing Tomorrow's classics, an engaging event at our college fest when students will transform a set of provided stationery into innovative product mock-ups. This unique challenge combines resourcefulness, design thinking, and the theme of retrofuturism or timeline. Participants will be tasked with crafting mock-ups that not only meet specified condition but also reflect a blend of past visions and futuristic aesthetics.",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "designx",
    eventName: "DESIGNX 2.0",
    imageSrc: "/images/ball.png",
    eventInfo:"Join our Aero Model design Competition! Craft a captivating retro-themed aeromodel using Fusion 360. Impress judges with historical aesthetics and functionality. Flight Tests assess performance and adherence to the chosen era. Win exciting prizes. Unleash your creativity in the sky and on the ground!",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "ctrly",
    eventName: "CTRL Y",
    imageSrc: "/images/ball.png",
    eventInfo:"Dive into the realm of innovation with CTRL-Y, where we challenge you to reimagine the future of aviation through a one of a kind retro RC plane controller! Showcase your design skills in a detailed report or dynamic PowerPoint. Live presentations are optional but encouraged for discussing unique ideas. Win an exciting cash prize as you shape the future of aviation design. Ready for the next era? Take flight now!",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "dishanav",
    eventName: "DISHA NAV",
    imageSrc: "/images/ball.png",
    eventInfo:"Welcome to DISHA NAV, a hackathon where you'll code solutions for retrofuturistic aviation challenges! Design obstacle detection systems, map routes with precision, and build networks for sharing location data in the cloud. So, are you ready to soar to new heights, rewrite the rules of flight, leave your mark on the skies and win a cash prize? Join us at DISHA NAV and let your coding skills take flight !",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },

  {
    eventId: "pilotz",
    eventName: "PILOTZ",
    imageSrc: "/images/ball.png",
    eventInfo:"Redefine remote-controlled aviation with innovative controllers for RC planes. Design the controller, emphasizing both functionality and creativity. Submit your unique controller design along with a compelling abstract outlining the electronic components and materials used. Blend functionality with artistry, break free from conventions, and join us for a day of inspiration where the sky is just the beginning!",
    eventPrize: "₹3500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },

  {
    eventId: "dishanav",
    eventName: "DISHA NAV",
    imageSrc: "/images/ball.png",
    eventInfo:"Welcome to DISHA NAV, a hackathon where you'll code solutions for retrofuturistic aviation challenges! Design obstacle detection systems, map routes with precision, and build networks for sharing location data in the cloud. So, are you ready to soar to new heights, rewrite the rules of flight, leave your mark on the skies and win a cash prize? Join us at DISHA NAV and let your coding skills take flight !",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  
  {
    eventId: "relaycoding",
    eventName: "RELAY CODING",
    imageSrc: "/images/ball.png",
    eventInfo:"Event relay coding is a thrilling team-based programming challenge that mirrors the intensity and coordination of a traditional relay race. In this dynamic competition, teams of three developers work collaboratively to tackle a coding task, with each member responsible for a designated segment of the code. However, what sets this challenge apart is the unique twist: after a predetermined interval, teammates must seamlessly transition to pick up where their predecessor left off, ensuring continuity and efficiency in code execution.",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  
  {
    eventId: "obscurelanguages",
    eventName: "OBSCURE LANGUAGES",
    imageSrc: "/images/ball.png",
    eventInfo:"Obscure Languages is a captivating event that celebrates the diversity and creativity of programming by immersing participants in the intriguing world of lesser-known artistic programming languages. In this one-of-a-kind competition, developers venture beyond the familiar realms of mainstream coding languages to explore the hidden gems of the programming landscape.",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "obscurelanguages",
    eventName: "CRYPTIC MESSAGES",
    imageSrc: "/images/ball.png",
    eventInfo:"Welcome to Cryptic Messages, where decoding secrets is the name of the game! Participants are challenged with encrypted texts, requiring coding prowess to craft algorithms for decryption. From ancient ciphers to modern encryption techniques, each solution unveils hidden messages. Join us for an unforgettable journey into cryptography, where every character holds a clue. Are you ready to unravel the enigma? Register now and prepare to decode your way to victory at Cryptic Messages!",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  // Add more simcard data as needed
];

const Page = () => {
    return (
        <main className={styles.eventsMain}>
            <Navbar/>
            <div className={styles.eventsInfo}>
                <div className={styles.eventsHeading}>EVENTS</div>
                <div className={styles.eventsContent}>
                    Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night, Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups. Limited seats – seize the chance to blend learning with entertainment!
                </div>
            </div>
            <div className={styles.cardLayout}>
                {events.map((item, index) => (
                    <Simcard key={index.eventId} item={item} />
                ))}
            </div>
            <Footer/>
        </main>
    );
};

export default Page;
export { events };
