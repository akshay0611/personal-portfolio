import { allExperiences } from '../../utils/constants/Experiences';
import { singleDeveloperStoryDataProps } from '../../utils/developerStory';

export const featuredStory: singleDeveloperStoryDataProps[] = [
    {
        id: 'exp-gssoc',
        storyType: 'experience',
        data: allExperiences.gssoc,
    },
    {
        id: 'exp-cliniq',
        storyType: 'experience',
        data: allExperiences.cliniq,
    },
    {
        id: 'exp-cyberSecurityIntern',
        storyType: 'experience',
        data: allExperiences.cyberSecurityIntern,
    },
];
