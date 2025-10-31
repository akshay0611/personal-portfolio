import { allCertificates } from './constants/Certificate';
import { allEducation } from './constants/Education';
import { allExperiences } from './constants/Experiences';
import { allOthers } from './constants/Others';
import { allProjects } from './constants/Projects';
import {
	AchievementProps,
	CertificateProps,
	EducationProps,
	ExperienceProps,
	OtherProps,
	ProjectProps,
	STORY_TYPES,
} from './developerStory';

export interface singleDeveloperStoryDataProps {
	id: string;
	storyType: STORY_TYPES; 
	data:
		| EducationProps
		| AchievementProps
		| CertificateProps
		| ExperienceProps
		| OtherProps
		| ProjectProps;
}

export interface DeveloperStoryDataProps
	extends Array<singleDeveloperStoryDataProps> {}

export const developerStoryData: DeveloperStoryDataProps = [
	{
		id: 'exp-cliniq',
		storyType: 'experience',
		data: allExperiences.cliniq,
	},

	{
		id: 'exp-gssoc',
		storyType: 'experience',
		data: allExperiences.gssoc,
	},

	{
		id: 'exp-octanet',
		storyType: 'experience',
		data: allExperiences.octanet,
	},

	{
		id: 'exp-prodigyInfoTech',
		storyType: 'experience',
		data: allExperiences.prodigyInfoTech,
	},
	{
		id: 'exp-shadowFox',
		storyType: 'experience',
		data: allExperiences.shadowFox,
    },	

	{
		id: 'exp-cyberSecurityIntern',
		storyType: 'experience',
		data: allExperiences.cyberSecurityIntern,
},
	{
		id: 'edu-selfTaught',
		storyType: 'education',
		data: allEducation.selfTaught,
	},

	{
		id: 'edu-holyfaith',
		storyType: 'education',
		data: allEducation.holyfaith,
	},
	{
		id: 'edu-asianSchool',
		storyType: 'education',
		data: allEducation.asianSchool,
	},

	{
		id: 'project-ai-text-summarizer',
		storyType: 'project',
		data: allProjects.aiTextSummarizer,
	},	

	{
		id: 'project-finpulse',
		storyType: 'project',
		data: allProjects.finPulse,
    },

	{
		id: 'project-imprintwords',
		storyType: 'project',
		data: allProjects.imprintWords,
    },

	{
		id: 'project-healwell',
		storyType: 'project',
		data: allProjects.healWell,
    },
	{
		id: 'project-tanjoreDegreeCoffee',
		storyType: 'project',
		data: allProjects.tanjoreDegreeCoffee,
	},
	{
		id: 'project-finTrack',
		storyType: 'project',
		data: allProjects.finTrack,
	},		

	{
		id: 'project-portfolio-website',
		storyType: 'project',
		data: allProjects.portfolioWebsite,
	},
		
	{
		id: 'cert-microsoftAdvertisingCert',
		storyType: 'certificate',
		data: allCertificates.microsoftAdvertisingCert,
	},	
	{
		id: 'cert-digitalMarketingFundamentalsCert',
		storyType: 'certificate',
		data: allCertificates.digitalMarketingFundamentalsCert,
	},	
	{
		id: 'cert-sqlBasicCert',
		storyType: 'certificate',
		data: allCertificates.sqlBasicCert,
	},
	{
		id: 'cert-sqlIntermediateCert',
		storyType: 'certificate',
		data: allCertificates.sqlIntermediateCert,
	},
	{
		id: 'cert-enterpriseDesignThinkingCert',
		storyType: 'certificate',
		data: allCertificates.enterpriseDesignThinkingCert,
	},
	{
		id: 'cert-enterpriseDesignThinkingCoCreatorCert',
		storyType: 'certificate',
		data: allCertificates.enterpriseDesignThinkingCoCreatorCert,
	},
	{
		id: 'cert-enterpriseDesignThinkingTeamEssentialsForAICert',
		storyType: 'certificate',
		data: allCertificates.enterpriseDesignThinkingTeamEssentialsForAICert,
	},
	{
		id: 'cert-cybersecurityfoundationCert',
		storyType: 'certificate',
		data: allCertificates.cybersecurityfoundationCert,
	},
	{
		id: 'cert-artificialIntelligenceFundamentalsCert',
		storyType: 'certificate',
		data: allCertificates.artificialIntelligenceFundamentalsCert,
	},
	{
		id: 'cert-postmanAPIFundamentalsCert',
		storyType: 'certificate',
		data: allCertificates.postmanAPIFundamentalsCert,
	},
	{
		id: 'cert-goldmanSachsJobSimulationCert',
		storyType: 'certificate',
		data: allCertificates.goldmanSachsJobSimulationCert,
	  },

	{
		id: 'cert-generativeAIEducatorsCert',
		storyType: 'certificate',
		data: allCertificates.generativeAIEducatorsCert,
	},

	{
		id: 'cert-genAI101PiecesCert',
		storyType: 'certificate',
		data: allCertificates.genAI101PiecesCert,
	},

	{
		"id": "cert-neo4jCertifiedProfessional",
		"storyType": "certificate",
		"data": allCertificates.neo4jCertification
	},

	{
		"id": "cert-googleCloudFundamentalsCoreInfrastructure",
		"storyType": "certificate",
		"data": allCertificates.googleCloudFundamentalsBadge
	},

	{
		id: 'cert-oracleCertifiedFoundationsAssociate',
		storyType: 'certificate',
		data: allCertificates.oracleCertifiedFoundationsAssociate,
	},
	
	
	
	

];