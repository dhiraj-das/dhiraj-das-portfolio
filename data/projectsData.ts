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
]

export default projectsData
