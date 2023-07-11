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
import CardProject from '../components/CardProject';
const projectLanguage = [
    ['Python', 'SQL'],
    ['Hadoop', 'PowerBI', 'Python'],
    ['Vue', 'SQL', 'MongoDB'],
    ['SQL', 'Excel', 'R Programming', 'Tableau'],
    ['Unity', 'C#'],
];

const projectTitle = [
    'Price Monitor for Lazada',
    'Big Data Analytics',
    'Public Transport Mapper',
    'Cyclistic Case Study',
    'Healthy O Metre',
];

const projectDescription = [
    'Alerts the user when their selected item drops to the price point chosen by them.',
    'Analyse trends for 10 major companies based on their reviews on Indeed and Glassdoor.',
    'Trip planner for public transportation in SG.',
    'Clean, analyse and present analysis done on 12 months of historic data.',
    'Fostering healthy eating habits through gamification',
]
const projectLink =[
    'https://github.com/personryan/Price-Monitor-Lazada',
    'https://github.com/personryan/ICT2107_BigDataAnalytics',
    'https://github.com/personryan/ICT2103-Public-Transport-Mapper',
    'https://github.com/personryan/DataAnalyticsCaseStudy',
    'https://github.com/personryan/ITP3111_Healthy_O_Meter',
]

export function Project() {
    const cards = [];
    var languages = ""
    for (let i = 0; i < projectTitle.length; i++) {
        //console.log(projectLanguage[i])
        languages = projectLanguage[i].join(',')
        console.log(languages)
        cards.push(
            <CardProject
                key={i}
                projectTitle={projectTitle[i]}
                projectLanguage={projectLanguage[i]}
                projectDescription={projectDescription[i]}
                projectLink = {projectLink[i]}
            />
        );
    }
    return <>{cards}</>;
}

export default Project