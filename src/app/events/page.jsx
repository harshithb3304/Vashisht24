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
    eventInfo:
      "Redefine limits and outsmart obstacles in our autonomous rover challenge Join this crazy arena where teams will navigate a simulated maze using autonomous UGVs or teleoperation. Solve clues, conquer obstacles, and compete for the top prize! Bring your engineering prowess and strategic thinking to this thrilling robotics event. Join in for a fun journey of teamwork and problem-solving",
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
    eventInfo:
      "Embark on a narrative journey through time with the Yesterdays Tomorrow, a captivating event at our college fest. Participants will be provided with a building block of a story, and their task is to expand upon it, crafting an entire narrative in the form of a storytelling poster. The theme of retrofuturism or timeline adds a unique twist, inviting students to weave tales that transcend eras and envision futuristic histories",
    eventPrize: "₹7000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "jetsetchic",
    eventName: "JET SET CHIC",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Embark on a thrilling journey of creativity and problem-solving with Jet Set Chic-Unraveling Clues through the Glamour of Retro Future Elegance! a unique event that combines the excitement of a treasure hunt with the challenges of design puzzles. This event is a highlight of our college fest, offering students a chance to showcase their design acumen, analytical skills, and teamwork",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "backtothefuture",
    eventName: "BACK TO THE FUTURE",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Unleash your creativity in Back to the future: Designing Tomorrow's classics, an engaging event at our college fest when students will transform a set of provided stationery into innovative product mock-ups. This unique challenge combines resourcefulness, design thinking, and the theme of retrofuturism or timeline. Participants will be tasked with crafting mock-ups that not only meet specified condition but also reflect a blend of past visions and futuristic aesthetics.",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "designx",
    eventName: "DESIGNX 2.0",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Join our Aero Model design Competition! Craft a captivating retro-themed aeromodel using Fusion 360. Impress judges with historical aesthetics and functionality. Flight Tests assess performance and adherence to the chosen era. Win exciting prizes. Unleash your creativity in the sky and on the ground!",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "ctrly",
    eventName: "CTRL Y",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Dive into the realm of innovation with CTRL-Y, where we challenge you to reimagine the future of aviation through a one of a kind retro RC plane controller! Showcase your design skills in a detailed report or dynamic PowerPoint. Live presentations are optional but encouraged for discussing unique ideas. Win an exciting cash prize as you shape the future of aviation design. Ready for the next era? Take flight now!",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "dishanav",
    eventName: "DISHA NAV",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Welcome to DISHA NAV, a hackathon where you'll code solutions for retrofuturistic aviation challenges! Design obstacle detection systems, map routes with precision, and build networks for sharing location data in the cloud. So, are you ready to soar to new heights, rewrite the rules of flight, leave your mark on the skies and win a cash prize? Join us at DISHA NAV and let your coding skills take flight !",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },

  {
    eventId: "pilotz",
    eventName: "PILOTZ",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Redefine remote-controlled aviation with innovative controllers for RC planes. Design the controller, emphasizing both functionality and creativity. Submit your unique controller design along with a compelling abstract outlining the electronic components and materials used. Blend functionality with artistry, break free from conventions, and join us for a day of inspiration where the sky is just the beginning!",
    eventPrize: "₹3500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },

  {
    eventId: "dishanav",
    eventName: "DISHA NAV",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Welcome to DISHA NAV, a hackathon where you'll code solutions for retrofuturistic aviation challenges! Design obstacle detection systems, map routes with precision, and build networks for sharing location data in the cloud. So, are you ready to soar to new heights, rewrite the rules of flight, leave your mark on the skies and win a cash prize? Join us at DISHA NAV and let your coding skills take flight !",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },

  {
    eventId: "relaycoding",
    eventName: "RELAY CODING",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Event relay coding is a thrilling team-based programming challenge that mirrors the intensity and coordination of a traditional relay race. In this dynamic competition, teams of three developers work collaboratively to tackle a coding task, with each member responsible for a designated segment of the code. However, what sets this challenge apart is the unique twist: after a predetermined interval, teammates must seamlessly transition to pick up where their predecessor left off, ensuring continuity and efficiency in code execution.",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },

  {
    eventId: "obscurelanguages",
    eventName: "OBSCURE LANGUAGES",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Obscure Languages is a captivating event that celebrates the diversity and creativity of programming by immersing participants in the intriguing world of lesser-known artistic programming languages. In this one-of-a-kind competition, developers venture beyond the familiar realms of mainstream coding languages to explore the hidden gems of the programming landscape.",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "obscurelanguages",
    eventName: "CRYPTIC MESSAGES",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Welcome to Cryptic Messages, where decoding secrets is the name of the game! Participants are challenged with encrypted texts, requiring coding prowess to craft algorithms for decryption. From ancient ciphers to modern encryption techniques, each solution unveils hidden messages. Join us for an unforgettable journey into cryptography, where every character holds a clue. Are you ready to unravel the enigma? Register now and prepare to decode your way to victory at Cryptic Messages!",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "RE-CODE_THE_PAST",
    eventName: "RE - CODE THE PAST",
    imageSrc: "/images/ball.png",
    eventInfo:
      "'Recode the Past' is an exhilarating journey through the annals of web history, inviting participants to breathe new life into vintage website screenshots with their coding prowess. In this captivating event, developers are tasked with the thrilling challenge of recreating iconic snapshots from the internet's bygone eras, transporting viewers back in time with pixel-perfect precision and modern-day finesse.",
    eventPrize: "₹5,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "BUG_HUNT",
    eventName: "BUG HUNT",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Get ready to flex those debugging muscles! Join our bug-hunting extravaganza where you'll dive into repositories filled with code glitches across c, c++ and python. Find and squash those bugs to earn points and climb your way to victory. Think you have what it takes? Let the bug hunt begin!",
    eventPrize: "₹3,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "CAD_DESIGN",
    eventName: "CAD DESIGN",
    imageSrc: "/images/ball.png",
    eventInfo:
      "The participants are expected to do the CAD design for the given problem statement. The event is conducted in two rounds. The first round comprises online competition and the shortlisted participants are expected to do CAD design on site in round two.",
    eventPrize: "₹4,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "DATA_SCIENCE_HACKATHON",
    eventName: "DATA SCIENCE HACKATHON",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Embark on a thrilling journey of data exploration in our 'Discovering Drive: Unraveling Patterns in ADAS Data' challenge! Dive into the world of advanced driver assistance systems, analyze intricate patterns, and reshape the future of driving. Join us to accelerate innovation in automotive technology!",
    eventPrize: "₹8,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "BRIDGE_BUILDING",
    eventName: "BRIDGE BUILDING",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Welcome to the Ice Bridge Challenge! Construct the sturdiest bridge using ice cream sticks, testing your creativity and engineering skills. Design, build, and fortify a bridge capable of holding our specified payload, all while keeping cool under pressure. Join us for a thrilling adventure in innovation and teamwork! ",
    eventPrize: "₹ 4,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "STAR_TREK_RALLY-RC_CHALLENGE",
    eventName: "STAR TREK RALLY - RC CHALLENGE",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Imagine if we landed on MaRS and raced futuristic RC cars. Race like a Jedi, WIN like a Martian Champion! Engage in high-speed thrills, navigate otherworldly terrain, and boldly go where no racer has gone before. Join us for a cosmic race like no other!",
    eventPrize: "₹10,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "LOGIC_LOOM",
    eventName: "LOGIC LOOM",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Get ready for a thrilling 2-hour competition where 2-member teams choose between MATLAB (M) and Verilog (V), attempting both sets within a 24-hour submission window. Winners claim victory based on the highest points, with efficiency as the tiebreaker for those on par. Unleash your logic prowess and let the weaving of brilliance begin! ",
    eventPrize: "₹10,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "ELECROCRAFT",
    eventName: "ELECROCRAFT",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Welcome to ELECROCRAFT, where creativity sparks through soldering! First-year students learn on prototyping boards, choosing, designing, and soldering circuits. They evaluate performance and share projects, fostering creativity and problem-solving. Get ready to wield your soldering iron and unleash imagination with ELECROCRAFT!",
    eventPrize: "₹8,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "ML_HACKATHON",
    eventName: "ML HACKATHON",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Embark on an exhilarating journey into the world of machine learning at our hackathon! Picture yourself surrounded by a vibrant community of like-minded peers, all eager to dive deep into the realm of AI. The hackathon will be divided into three tracks: Junior, Senior, and Open for All, catering to participants with diverse skill sets. Whether you're new to machine learning, an experienced junior or senior, or an enthusiast from any academic background, this hackathon provides an opportunity to address real-world challenges using ML. Participate and compete for substantial prizes and showcase your proficiency in the field.",
    eventPrize: "₹8,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "MONKEY_HEIST",
    eventName: "MONKEY HEIST",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Experience the pulse-pounding excitement of MonkeyHeist, a cutting-edge robotics competition where innovation and agility take center stage. Engage in lightning-speed bot navigation across a variety of challenging tracks designed for both junior and seasoned participants. This high-stakes event combines technical prowess and creativity, pushing teams to showcase their innovations. With a substantial prize pool, winners not only earn bragging rights but also enjoy a rewarding distribution reflecting their dedication. Join us for a thrilling showcase where technology meets acrobatics, and only the most agile bots swing their way to victory!",
    eventPrize: "₹10,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "SYNERGY_SHUFFLE",
    eventName: "SYNERGY SHUFFLE",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Gear up for a mind-bending journey at the Synergy Shuffle: a retro-futuristic showdown of wit! Begin with an online quiz of nostalgic trivia. Victors advance to an on-campus final, trading synergy-imbued cards for strategic advantage. Hone negotiation skills and embrace unexpected collaborations for victory. Dive into this exhilarating blend of knowledge and skill, where past, present, and future collide in a dazzling display of retrofusion brilliance. Ready to answer the call?",
    eventPrize: "₹6,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "MARKVISTA",
    eventName: "MARKVISTA",
    imageSrc: "/images/ball.png",
    eventInfo:
      "In this competition, participants step into the role of a Chief Marketing Officer, tasked with crafting a comprehensive marketing strategy for an assigned brand. With a specific region and budget, teams must devise a campaign encompassing Digital, Event, Product, and Brand Management Marketing. The challenge involves creating a customer persona to maximize ROI and elevate the brand's market potential.",
    eventPrize: "₹6,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "CEREBRAL_CIRCUITRY",
    eventName: "CEREBRAL CIRCUITRY",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Embark on the 'Cerebral Circuitry' challenge! Dive into Arduino coding, spark innovation, and conquer electronics with us!",
    eventPrize: "₹5,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
  {
    eventId: "SCI-QUEST",
    eventName: "SCI - QUEST",
    imageSrc: "/images/ball.png",
    eventInfo:
      "Join Sci Quest: the ultimate science quiz challenge! Test your knowledge, compete, and uncover the mysteries of the universe in a thrilling quest for victory.",
    eventPrize: "₹300",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "/",
  },
];
for (let i = 0; i < events.length; i++) {
  // Update the imageSrc property by adding the corresponding number
  events[i].imageSrc = `/images/${i * 2 + 1}.jpg`;
}

for (let i = 0; i < events.length; i++) {
  // Update the imageSrc2 property by adding the corresponding number
  events[i].imageSrc2 = `/images/${i * 2 + 2}.jpg`;
}
const Page = () => {
  return (
    <main className={styles.eventsMain}>
      <Navbar />
      <div className={styles.eventsInfo}>
        <div className={styles.eventsHeading}>EVENTS</div>
        <div className={styles.eventsContent}>
          Book a Workshop at Vashisht 24 and unlock FREE access to EDM Night,
          Robowars, Guest Lectures, Exhibitions, Summits, and Gaming setups.
          Limited seats – seize the chance to blend learning with entertainment!
        </div>
      </div>
      <div className={styles.cardLayout}>
        {events.map((item, index) => (
          <Simcard key={index.eventId} item={item} />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Page;
export { events };
