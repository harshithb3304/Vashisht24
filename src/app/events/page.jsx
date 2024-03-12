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
    imageSrc: "/images/1.jpg",
    imageSrc2: "/images/2.jpg",
    eventInfo:
      "In the arena, futuristic robots armed with lethal weaponry engage in a relentless dance of destruction, sparks flying as the crowd roars in anticipation. In the end, only one bot stands victorious, a testament to engineering prowess and strategic brilliance.",
    eventPrize: "₹40000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/robowars-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-876409",
  },
  {
    eventId: "hackathon",
    eventName: "VASHISHT HACKATHON",
    imageSrc: "/images/3.jpg",
    imageSrc2: "/images/4.jpg",
    eventInfo:
      "The AutoML Studio Hackathon is a thrilling opportunity for participants to showcase their skills and creativity in developing an Automated Machine Learning Studio. The goal is to design a platform that streamlines the end-to-end process of machine learning model development, from data preprocessing to model deployment, making it accessible to both beginners and experts.",
    eventPrize: "₹40000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/hackathons/hackathon-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm--877136",
  },
  {
    eventId: "droneracing",
    eventName: "DRONE RACING",
    imageSrc: "/images/5.jpg",
    imageSrc2: "/images/6.jpg",
    eventInfo:
      "Join the Aerial Ascendance Drone Racing Challenge! Pilots will navigate custom-designed tracks, conquering checkpoints and showcasing their skills in an electrifying spectacle. With thrilling qualifiers and heart-pounding finals, only the fastest will claim victory. Prepare for high-flying excitement where every moment counts! ",
    eventPrize: "₹35000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/events/drone-racing-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-k-893690",
  },
  {
    eventId: "aquaquest",
    eventName: "AQUA QUEST",
    imageSrc: "/images/7.jpg",
    imageSrc2: "/images/8.jpg",
    eventInfo:
      "The objective of this competition is to build an ROV to complete a set of simple tasks within the given time frame. This competition focuses on instilling the very fundamental concepts of underwater robotics and tests the knowledge and ability of participants to build an ROV to tackle problems underwater. The participants are expected to use their engineering knowledge to make their ROV as robust as possible to meet the competition requirements.",
    eventPrize: "₹30000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/aquaquest-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitd-877161",
  },
  {
    eventId: "namo",
    eventName: "Nexus Aero Modelling Olympiad",
    imageSrc: "/images/9.jpg",
    imageSrc2: "/images/10.jpg",
    eventInfo:
      "In this event, teams from various other institutes plus the teams from our college (except members of TAD) are expected to participate in this aeromodelling competition organized by TAD club of IIITDM. The RC airplanes developed by the teams are expected to complete some tasks, on the basis of which, they are awarded points. The team which has the maximum number of points wins the competition. Prize money for the first 3 places + participation certificate to all.",
    eventPrize: "₹30000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/namo-aero-modelling-odyssey-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-m-876987",
  },
  {
    eventId: "pitchonpitch",
    eventName: "PITCH ON PITCH",
    imageSrc: "/images/11.jpg",
    imageSrc2: "/images/12.jpg",
    eventInfo:
      "Embark on a transformative journey with Pitch on Pitch, providing a splendid opportunity for student entrepreneurs and startups to pitch ideas, network with industry leaders, and receive valuable feedback. Shape the trajectory of budding startups, contribute to India's economic landscape, and be part of the innovation revolution. Seize this opportunity to disrupt and redefine the entrepreneurial landscape! #PitchOnPitch #InnovationRevolution",
    eventPrize: "₹30000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/pitch-on-pitch-an-innovation-challenge-vashisht-2024-nexusaeon-indian-institute-of-information-technology-d-882102",
  },
  {
    eventId: "ctf",
    eventName: "CTF",
    imageSrc: "/images/13.jpg",
    imageSrc2: "/images/14.jpg",
    eventInfo:
      "Enter the heart-pounding world of Capture the Flag! Explore cybersecurity's exhilarating realm, where bugs, secrets, and mysteries await. Whether novice or pro, this event suits all, offering thrilling challenges. Race against time to uncover hidden vulnerabilities and outsmart opponents. Join us for an unforgettable cybersecurity showdown where every second counts. Ready to emerge triumphant? Register now for the adrenaline-fueled excitement of Capture the Flag!",
    eventPrize: "₹25000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/hackathons/capture-the-flag-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing--881786",
  },
  {
    eventId: "retrover",
    eventName: "RETROVER",
    imageSrc: "/images/15.jpg",
    imageSrc2: "/images/16.jpg",
    eventInfo:
      "Redefine limits and outsmart obstacles in our autonomous rover challenge Join this crazy arena where teams will navigate a simulated maze using autonomous UGVs or teleoperation. Solve clues, conquer obstacles, and compete for the top prize! Bring your engineering prowess and strategic thinking to this thrilling robotics event. Join in for a fun journey of teamwork and problem-solving",
    eventPrize: "₹25000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/retrover-challenge-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufactur-899032",
  },
  {
    eventId: "ieee",
    eventName: "IEEE Paper presentation",
    imageSrc: "/images/17.jpg",
    imageSrc2: "/images/18.jpg",
    eventInfo:
      "Explore cutting-edge research at our dynamic Papers Presentation Event. Join experts, ignite curiosity, and dive into the future of knowledge!",
    eventPrize: "₹15000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/ieee-paper-presentation-competition-vashisht-2024-nexusaeon-indian-institute-of-information-technology-desi-877177",
  },
  {
    eventId: "asme",
    eventName: "ASME Paper presentation",
    imageSrc: "/images/19.jpg",
    imageSrc2: "/images/20.jpg",
    eventInfo:
      "ASME Technical Paper Presentation is a non-publication session scheduled for presentation at a technical session but is not published in the conference proceedings. This unique platform offers a prestigious avenue for sharing your work at a technical session, providing unparalleled exposure without being published in the conference proceedings. It requires an abstract submission for consideration. Seize the chance to captivate an audience with your insights, discoveries, and advancements in technology. Don't miss this opportunity to showcase your expertise and contribute to the cutting-edge discussions shaping the future of engineering and beyond",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "https://unstop.com/competitions/asme-technical-paper-presentation-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-913232?utm_campaign=site-emails&utm_medium=d2c-automated&utm_source=woah-public-mode-activated-for-asme-technical-paper-presentation",
  },
  {
    eventId: "yesterday",
    eventName: "Yesterday's Tomorrow",
    imageSrc: "/images/21.jpg",
    imageSrc2: "/images/22.jpg",
    eventInfo:
      "Embark on a narrative journey through time with the Yesterdays Tomorrow, a captivating event at our college fest. Participants will be provided with a building block of a story, and their task is to expand upon it, crafting an entire narrative in the form of a storytelling poster. The theme of retrofuturism or timeline adds a unique twist, inviting students to weave tales that transcend eras and envision futuristic histories",
    eventPrize: "₹7000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/yesterdays-tomorrow-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufactu-883263",
  },
  {
    eventId: "jetsetchic",
    eventName: "JET SET CHIC",
    imageSrc: "/images/23.jpg",
    imageSrc2: "/images/73.jpg",
    eventInfo:
      "Embark on a thrilling journey of creativity and problem-solving with Jet Set Chic-Unraveling Clues through the Glamour of Retro Future Elegance! a unique event that combines the excitement of a treasure hunt with the challenges of design puzzles. This event is a highlight of our college fest, offering students a chance to showcase their design acumen, analytical skills, and teamwork",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/yesterdays-tomorrow-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufactu-883263",
  },
  {
    eventId: "backtothefuture",
    eventName: "BACK TO THE FUTURE",
    imageSrc: "/images/25.jpg",
    imageSrc2: "/images/26.jpg",
    eventInfo:
      "Unleash your creativity in Back to the future: Designing Tomorrow's classics, an engaging event at our college fest when students will transform a set of provided stationery into innovative product mock-ups. This unique challenge combines resourcefulness, design thinking, and the theme of retrofuturism or timeline. Participants will be tasked with crafting mock-ups that not only meet specified condition but also reflect a blend of past visions and futuristic aesthetics.",
    eventPrize: "₹10000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/back-to-the-future-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufactur-883258",
  },
  {
    eventId: "designx",
    eventName: "DESIGNX 2.0",
    imageSrc: "/images/33.jpg",
    imageSrc2: "/images/34.jpg",
    eventInfo:
      "Join our Aero Model design Competition! Craft a captivating retro-themed aeromodel using Fusion 360. Impress judges with historical aesthetics and functionality. Flight Tests assess performance and adherence to the chosen era. Win exciting prizes. Unleash your creativity in the sky and on the ground!",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/events/designx-20-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kan-880343",
  },
  {
    eventId: "ctrly",
    eventName: "CTRL Y",
    imageSrc: "/images/35.jpg",
    imageSrc2: "/images/36.jpg",
    eventInfo:
      "Dive into the realm of innovation with CTRL-Y, where we challenge you to reimagine the future of aviation through a one of a kind retro RC plane controller! Showcase your design skills in a detailed report or dynamic PowerPoint. Live presentations are optional but encouraged for discussing unique ideas. Win an exciting cash prize as you shape the future of aviation design. Ready for the next era? Take flight now!",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/ctrl-y-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-880429",
  },
  {
    eventId: "dishanav",
    eventName: "DISHA NAV",
    imageSrc: "/images/37.jpg",
    imageSrc2: "/images/38.jpg",
    eventInfo:
      "Welcome to DISHA NAV, a hackathon where you'll code solutions for retrofuturistic aviation challenges! Design obstacle detection systems, map routes with precision, and build networks for sharing location data in the cloud. So, are you ready to soar to new heights, rewrite the rules of flight, leave your mark on the skies and win a cash prize? Join us at DISHA NAV and let your coding skills take flight !",
    eventPrize: "₹8000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/disha-nav-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitd-880449",
  },

  {
    eventId: "pilotz",
    eventName: "PILOTZ",
    imageSrc: "/images/39.jpg",
    imageSrc2: "/images/40.jpg",
    eventInfo:
      "Redefine remote-controlled aviation with innovative controllers for RC planes. Design the controller, emphasizing both functionality and creativity. Submit your unique controller design along with a compelling abstract outlining the electronic components and materials used. Blend functionality with artistry, break free from conventions, and join us for a day of inspiration where the sky is just the beginning!",
    eventPrize: "₹3500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "https://unstop.com/competitions/disha-nav-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitd-880449",
  },

  {
    eventId: "relaycoding",
    eventName: "RELAY CODING",
    imageSrc: "/images/41.jpg",
    imageSrc2: "/images/42.jpg",
    eventInfo:
      "Event relay coding is a thrilling team-based programming challenge that mirrors the intensity and coordination of a traditional relay race. In this dynamic competition, teams of three developers work collaboratively to tackle a coding task, with each member responsible for a designated segment of the code. However, what sets this challenge apart is the unique twist: after a predetermined interval, teammates must seamlessly transition to pick up where their predecessor left off, ensuring continuity and efficiency in code execution.",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/hackathons/relay-coding-contest-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufactur-882365",
  },

  {
    eventId: "obscurelanguages",
    eventName: "OBSCURE LANGUAGES",
    imageSrc: "/images/43.jpg",
    imageSrc2: "/images/44.jpg",
    eventInfo:
      "Obscure Languages is a captivating event that celebrates the diversity and creativity of programming by immersing participants in the intriguing world of lesser-known artistic programming languages. In this one-of-a-kind competition, developers venture beyond the familiar realms of mainstream coding languages to explore the hidden gems of the programming landscape.",
    eventPrize: "₹5000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/hackathons/obscure-languages-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-882358",
  },

  {
    eventId: "RE-CODE_THE_PAST",
    eventName: "RE - CODE THE PAST",
    imageSrc: "/images/47.jpg",
    imageSrc2: "/images/48.jpg",
    eventInfo:
      "'Recode the Past' is an exhilarating journey through the annals of web history, inviting participants to breathe new life into vintage website screenshots with their coding prowess. In this captivating event, developers are tasked with the thrilling challenge of recreating iconic snapshots from the internet's bygone eras, transporting viewers back in time with pixel-perfect precision and modern-day finesse.",
    eventPrize: "₹5,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "https://unstop.com/hackathons/re-code-the-past-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepuram-882013",
  },
  {
    eventId: "BUG_HUNT",
    eventName: "BUG HUNT",
    imageSrc: "/images/49.jpg",
    imageSrc2: "/images/50.jpg",
    eventInfo:
      "Get ready to flex those debugging muscles! Join our bug-hunting extravaganza where you'll dive into repositories filled with code glitches across c, c++ and python. Find and squash those bugs to earn points and climb your way to victory. Think you have what it takes? Let the bug hunt begin!",
    eventPrize: "₹3,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/bug-hunt-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-881965",
  },
  {
    eventId: "CAD_DESIGN",
    eventName: "CAD DESIGN",
    imageSrc: "/images/51.jpg",
    imageSrc2: "/images/52.jpg",
    eventInfo:
      "The participants are expected to do the CAD design for the given problem statement. The event is conducted in two rounds. The first round comprises online competition and the shortlisted participants are expected to do CAD design on site in round two.",
    eventPrize: "₹4,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/p/cad-design-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheep-899714",
  },
  {
    eventId: "DATA_SCIENCE_HACKATHON",
    eventName: "DATA SCIENCE HACKATHON",
    imageSrc: "/images/53.jpg",
    imageSrc2: "/images/54.jpg",
    eventInfo:
      "Embark on a thrilling journey of data exploration in our 'Discovering Drive: Unraveling Patterns in ADAS Data' challenge! Dive into the world of advanced driver assistance systems, analyze intricate patterns, and reshape the future of driving. Join us to accelerate innovation in automotive technology!",
    eventPrize: "₹8,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/p/data-science-hackathon-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iii-900393",
  },
  {
    eventId: "BRIDGE_BUILDING",
    eventName: "BRIDGE BUILDING",
    imageSrc: "/images/55.jpg",
    imageSrc2: "/images/56.jpg",
    eventInfo:
      "Welcome to the Ice Bridge Challenge! Construct the sturdiest bridge using ice cream sticks, testing your creativity and engineering skills. Design, build, and fortify a bridge capable of holding our specified payload, all while keeping cool under pressure. Join us for a thrilling adventure in innovation and teamwork! ",
    eventPrize: "₹ 4,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/p/cad-design-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheep-899714",
  },
  {
    eventId: "STAR_TREK_RALLY-RC_CHALLENGE",
    eventName: "STAR TREK RALLY - RC CHALLENGE",
    imageSrc: "/images/57.jpg",
    imageSrc2: "/images/58.jpg",
    eventInfo:
      "Imagine if we landed on MaRS and raced futuristic RC cars. Race like a Jedi, WIN like a Martian Champion! Engage in high-speed thrills, navigate otherworldly terrain, and boldly go where no racer has gone before. Join us for a cosmic race like no other!",
    eventPrize: "₹10,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "https://unstop.com/events/startrek-rally-rc-challenge-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufac-905693",
  },
  {
    eventId: "LOGIC_LOOM",
    eventName: "LOGIC LOOM",
    imageSrc: "/images/61.jpg",
    imageSrc2: "/images/62.jpg",
    eventInfo:
      "Get ready for a thrilling 2-hour competition where 2-member teams choose between MATLAB (M) and Verilog (V), attempting both sets within a 24-hour submission window. Winners claim victory based on the highest points, with efficiency as the tiebreaker for those on par. Unleash your logic prowess and let the weaving of brilliance begin! ",
    eventPrize: "₹10,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/hackathons/logic-loom-a-verimatrix-hackathon-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-a-893552",
  },
  {
    eventId: "ELECROCRAFT",
    eventName: "ELECROCRAFT",
    imageSrc: "/images/63.jpg",
    imageSrc2: "/images/64.jpg",
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
    imageSrc: "/images/65.jpg",
    imageSrc2: "/images/66.jpg",
    eventInfo:
      "Embark on an exhilarating journey into the world of machine learning at our hackathon! Picture yourself surrounded by a vibrant community of like-minded peers, all eager to dive deep into the realm of AI. The hackathon will be divided into three tracks: Junior, Senior, and Open for All, catering to participants with diverse skill sets. Whether you're new to machine learning, an experienced junior or senior, or an enthusiast from any academic background, this hackathon provides an opportunity to address real-world challenges using ML. Participate and compete for substantial prizes and showcase your proficiency in the field.",
    eventPrize: "₹8,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "https://unstop.com/hackathons/machine-learning-hackathon-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manu-907563",
  },
  {
    eventId: "MONKEY_HEIST",
    eventName: "MONKEY HEIST",
    imageSrc: "/images/67.jpg",
    imageSrc2: "/images/68.jpg",
    eventInfo:
      "Experience the pulse-pounding excitement of MonkeyHeist, a cutting-edge robotics competition where innovation and agility take center stage. Engage in lightning-speed bot navigation across a variety of challenging tracks designed for both junior and seasoned participants. This high-stakes event combines technical prowess and creativity, pushing teams to showcase their innovations. With a substantial prize pool, winners not only earn bragging rights but also enjoy a rewarding distribution reflecting their dedication. Join us for a thrilling showcase where technology meets acrobatics, and only the most agile bots swing their way to victory!",
    eventPrize: "₹10,000",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/p/monkey-heist-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kanche-882789",
  },
  {
    eventId: "SYNERGY_SHUFFLE",
    eventName: "SYNERGY SHUFFLE",
    imageSrc: "/images/69.jpg",
    imageSrc2: "/images/70.jpg",
    eventInfo:
      "Gear up for a mind-bending journey at the Synergy Shuffle: a retro-futuristic showdown of wit! Begin with an online quiz of nostalgic trivia. Victors advance to an on-campus final, trading synergy-imbued cards for strategic advantage. Hone negotiation skills and embrace unexpected collaborations for victory. Dive into this exhilarating blend of knowledge and skill, where past, present, and future collide in a dazzling display of retrofusion brilliance. Ready to answer the call?",
    eventPrize: "₹6,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/competitions/synergy-shuffle-a-stock-market-challenge-vashisht-2024-nexusaeon-indian-institute-of-information-technology-883045",
  },
  {
    eventId: "MARKVISTA",
    eventName: "MARKVISTA",
    imageSrc: "/images/71.jpg",
    imageSrc2: "/images/72.jpg",
    eventInfo:
      "In this competition, participants step into the role of a Chief Marketing Officer, tasked with crafting a comprehensive marketing strategy for an assigned brand. With a specific region and budget, teams must devise a campaign encompassing Digital, Event, Product, and Brand Management Marketing. The challenge involves creating a customer persona to maximize ROI and elevate the brand's market potential.",
    eventPrize: "₹6,500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink:
      "https://unstop.com/p/markvista-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kancheepu-898677",
  },
  {
    eventId: "CEREBRAL_CIRCUITRY",
    eventName: "CEREBRAL CIRCUITRY",
    imageSrc: "/images/29.jpg",
    imageSrc2: "/images/30.jpg",
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
    imageSrc: "/images/31.jpg",
    imageSrc2: "/images/32.jpg",
    eventInfo:
      "Join Sci Quest: the ultimate science quiz challenge! Test your knowledge, compete, and uncover the mysteries of the universe in a thrilling quest for victory.",
    eventPrize: "₹3500",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "https://unstop.com/quiz/sciquest-vashisht-2024-nexusaeon-indian-institute-of-information-technology-design-and-manufacturing-iiitdm-kanchee-904815",
  },
  {
    eventId: "ROBOKAGE",
    eventName: "ROBOKAGE",
    imageSrc: "/images/59.jpg",
    imageSrc2: "/images/60.jpg",
    eventInfo:
      "The event will consist of Hardware and software taks where participants will get to choose a sequence of tasks, whose accomplishment will secure points in a given period of time. The maximum number of points secured will be the proclaimed winner of the event",
    eventPrize: "300",
    eventDate: "16th February 2024",
    eventTime: "10:00 PM",
    eventLink: "https://unstop.com/competitions/robokage-a-quest-for-the-hardware-king-vashisht-2024-nexusaeon-indian-institute-of-information-technology-d-905768",
  },
];

const Page = () => {
  return (
    <main className={styles.eventsMain}>
      <Navbar />
      <div className={styles.eventsInfo}>
        <div className={styles.eventsHeading}>EVENTS</div>
        <div className={styles.eventsContent}>
        Join the action-packed lineup! Get your pass to participate in 50+ events at Vashisht 2024 and compete for over 5L in prizes.
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
