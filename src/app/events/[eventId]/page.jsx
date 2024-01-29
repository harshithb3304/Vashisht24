
import {useRouter} from "next/navigation";
import React from 'react';
import Image from 'next/image';
import { simcardData } from '/src/app/workshops/page';

const EventDetails = ({ params }) => {
    const eventId = params.eventId;
    const event = simcardData.find((item) => item.eventId === eventId);

    return (
        <div >
            <h1 >{event.eventName}</h1>
            <Image src={event.imageSrc} alt={event.eventName} width={400} height={300}/>
            <p >{event.eventInfo}</p>

        </div>
    );
};

export async function generateStaticParams() {
    const paths = simcardData.map(event => ( { eventId: event.eventId } ));
    return  paths;
}

// export async function getStaticProps({ params }) {
//     const eventData = await fetchEventData(params.eventId);
//     return {
//         props: {
//             eventData,
//         },
//     };
// }

export default EventDetails;