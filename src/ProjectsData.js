import blogr from './assets/Blogr.webp'
import todo from './assets/Todo app.webp'
import peculiarhomes from './assets/peculiarhomes.webp'
import ft from './assets/Financial Tracker.webp'
import bookmark from './assets/Bookmark.webp'
import shortly from './assets/Shortly.webp'
import AGA from './assets/Advice generator app.webp'


const ProjectData = [
    {
        id: 1,
        projectName: 'Blogr Landing Page',
        description: 'This was a project I hopped while still at the early stages of my frontend devlopmnent journey, the design was picked from a challenge by a popular frontend design guide - FrontendMentor. I ensured responsiveness on majority of devices and also learnt quite alot while on the challenge.',
        githubLink: 'https://github.com/Oluwajuwonomoyele/blogr',
        externalLink: 'https://oo-blogr.vercel.app/',
        langs: ['ReactJS', 'TailwindCSS'],
        img: blogr,
        imgStart: true,
        ariaLabelGit: 'Link to github repo for Blogr landing page',
        ariaLabelExt: 'Link to live site for Blogr landing page'
    },
    {
        id: 2,
        projectName: 'Todo App',
        description: 'This is a todo app I cooked up, it is fully responsive and includes a functionality whereby user can toogle between light and dark mode. A user can also filter between active and completed tasks.',
        githubLink: 'https://github.com/Oluwajuwonomoyele/todo-app',
        externalLink: 'https://oluwajuwonomoyele-todo-app.netlify.app/',
        langs: ['HTML', 'CSS', 'Javascript'],
        img: todo,
        imgStart: false,
        ariaLabelGit: 'Link to github repo for Todo app',
        ariaLabelExt: 'Link to live site for Todo app'
    },
    {
        id: 3,
        projectName: 'Real Estate Web App',
        description: 'This is a real estate webiste, where i implemented a filter functionality to make house search much easier and increase user experience. I learnt quite a bunch about javacript alogrithms while on this project',
        githubLink: 'https://github.com/Oluwajuwonomoyele/peculiarhomes',
        externalLink: 'https://oo-peculiarhomes.vercel.app/',
        langs: ['ReactJS', 'TailwindCSS'],
        img: peculiarhomes,
        imgStart: true,
        ariaLabelGit: 'Link to github repo for real estate web app',
        ariaLabelExt: 'Link to live site for real estate web app'
    },
    {
        id: 4,
        projectName: 'Finance Tracker App',
        description: 'This is a finance tracker app, it was a firbase project I jumped on where I used the firebase service to handle the authenication and databse of users and their finances.',
        githubLink: 'https://github.com/Oluwajuwonomoyele/peculiar-financial-tracker',
        externalLink: 'https://github.com/Oluwajuwonomoyele/peculiar-financial-tracker',
        langs: ['ReactJS', "TailwindCSS", 'Firebase'],
        img: ft,
        imgStart: false,
        ariaLabelGit: 'Link to github repo for finance tracker app',
        ariaLabelExt: 'Link to live site for finance tracker app'
    },
    {
        id: 5,
        projectName: 'Bookmark Landing Page',
        description: 'One of some of the projects I did early off in my frontend jounrey, where I learnt and implemented the tab animation and accordion functionalities.',
        githubLink: 'https://github.com/Oluwajuwonomoyele/bookmark',
        externalLink: 'https://oluwajuwonomoyele.github.io/bookmark/',
        langs: ['HTML', 'TailwindCSS', 'Javascript'],
        img: bookmark,
        imgStart: true,
        ariaLabelGit: 'Link to github repo for Bookmark landing page',
        ariaLabelExt: 'Link to live site for Bookmark landing page'
    },
    {
        id: 6,
        projectName: 'Shortly Link Shortner',
        description: "Wow!, One of my best and tasking projects yet, this app shortens any link a user inputs and also allows the user to be able to copy the shortened link. Of course, firebase for user authenication😉.",
        githubLink: 'https://github.com/Oluwajuwonomoyele/shortly',
        externalLink: 'https://oo-shortly.vercel.app/',
        langs: ['ReactJS', 'TailwindCSS', 'Firebase', 'API'],
        img: shortly,
        imgStart: false,
        ariaLabelGit: 'Link to github repo for Shortly',
        ariaLabelExt: 'Link to live site for Shortly'
    },
    {
        id: 7,
        projectName: 'Advice Generator App',
        description: 'This app consumes an API for advices whereby when a user clicks on the dice, an advice is generated randomly from the API database.',
        githubLink: 'https://github.com/Oluwajuwonomoyele/advice-generator-app',
        externalLink: 'https://oo-advice-generator-app.vercel.app/',
        langs: ['ReactJS', 'TailwindCSS', 'API'],
        img: AGA,
        imgStart: true,
        ariaLabelGit: 'Link to github repo for Advice generator app',
        ariaLabelExt: 'Link to live site for Advice generator app'
    },
]

export default ProjectData;