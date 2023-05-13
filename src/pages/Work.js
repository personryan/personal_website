import { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,
} from '@chakra-ui/react';
import CardWork from '../components/CardWork';
const workSkill = [
    ['Data Analysis', 'Excel', 'Communication', 'Problem Solving'],
    ['Data Analysis', 'Excel', 'Presentation', 'Problem Solving'],
    ['Communication', 'Problem Solving'],
];

const workTitle = [
    'Finance Assistant',
    'Supply Chain Management Intern',
    'Tuition Teacher',
];
const workDuration = [
    'Aug 2020 - Mar 2021',
    'Oct 2017 - Feb 2018',
    'Jan 2021 - Current',
]
const workDescription = [
    'Assisted in payment receiveable, invoices and monthly financial analysis.',
    'Created supply chain management solutions such as inventory planner & Robotic Process Automation(RPA) solutions',
    'Taught primary school students on mathematics and science',
]
const workHighlight = [
    ['Created an Excel sheet to conduct monthly financial analysis, leading to a one-week reduction in the time for key stakeholders to receive the information',
        'Utilised Excel functions to verify invoice details which led to a notable reduction in mistakes during creation of invoices',
        'Showcased communication skills by developing a comprehensive monthly payment schedule which ensured that internal staff and clients are consistently informed about the statuses of the payment'],
    ['Demonstrated my adaptability and ability to embrace new technologies by picking up RPA within 2 weeks of joining the organisation',
        'Applied my RPA skills by developing solutions that automated reptitive tasks which resulted in a reduction of manual labour by 40%',
        'Showcased presentation skills by communicating the benefits and impact of RPA solutions clearly and concisely',
        'Created an Excel sheet that utilised excel functions to manage inventory for the client which resulted in reducing overbuying which saved costs by optimising inventory'],
    ['Demonstrated problem solving skills by employing a variety of teaching methods which resulted in an increase of the student grade from 50 to 70',
        'Showcased Communication skills by clearly explaining complex questions which resulted in the student understanding and retaining the methods that are needed to solve the question']
]

export function Work() {
    const cards = [];
    var languages = ""
    for (let i = 0; i < workTitle.length; i++) {
        //console.log(workLanguage[i])
        languages = workSkill[i].join(',')
        console.log(languages)
        cards.push(
            <CardWork
                key={i}
                workTitle={workTitle[i]}
                workSkill={workSkill[i]}
                workDescription={workDescription[i]}
                workDuration={workDuration[i]}
                workHighlight={workHighlight[i]}
            />
        );
    }
    return <>{cards}</>;
}

export default Work