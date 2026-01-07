// Google Analytics utility functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Predefined events for your portfolio
export const trackContactFormSubmit = () => {
  event({
    action: 'submit',
    category: 'Contact',
    label: 'Contact Form',
  });
};

export const trackResumeDownload = () => {
  event({
    action: 'download',
    category: 'Resume',
    label: 'Resume PDF',
  });
};

export const trackProjectClick = (projectName: string) => {
  event({
    action: 'click',
    category: 'Project',
    label: projectName,
  });
};

export const trackSocialClick = (platform: string) => {
  event({
    action: 'click',
    category: 'Social',
    label: platform,
  });
};

export const trackSkillHover = (skillName: string) => {
  event({
    action: 'hover',
    category: 'Skill',
    label: skillName,
  });
};