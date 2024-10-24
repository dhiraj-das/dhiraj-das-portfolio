interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Restaurant Order Analysis',
    description: `An analysis on restaurant orders conducted by using MySQL 
    to analyze order data and identify the most and least popular menu items 
    and types of cuisine`,
    imgSrc: '/static/images/restaurant-order-sql.png',
    href: '/blog/restaurant-order-analysis',
  },
  {
    title: 'HR Survey Analysis',
    description: `An analysis of HR survey response data from ~1,500 city employees 
    in Washington state using MS Excel to visualize the response data and derive actionable insights`,
    imgSrc: '/static/images/HR-survey-feature.jpg',
    href: '/blog/hr-survey-analysis',
  },
]

export default projectsData
