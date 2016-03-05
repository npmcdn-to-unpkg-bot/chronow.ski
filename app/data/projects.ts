import {Project} from '../interfaces/project';

export var PROJECTS: Project[] = [
  {
    "name": "Saloon.tf",
    "codename": "saloon",
    "description": `
      <p>I was the founder and lead developer of <a href="https://saloon.tf">Saloon.tf</a>, a parimutuel betting platform, where users would place in game items as bets on competitive TF2 matches.</p>
      <p>I started the project in spring 2014 as a hobby, but I quickly found myself managing a popular community project with 20 team members as it provided a service users wanted filling a nice niche. When Saloon was acquired in September 2015, it has distributed over seventy thousands of dollars worth of in game items as prizes. It was a massive learning experience in software development, but I also somewhat unexpectedly learned how to manage a team and work with a large distributed group of likeminded people from all across the world.</p>
    `,
    "languages": ["Python", "HTML", "CoffeScript", "JavaScript", "Sass", "CSS", "SQL"],
    "frameworks": ["Pyramid", "Twisted", "PostgreSQL", "SQLAlchemy", "twistar", "jQuery", "Bootstrap"]
  },
  {
    "name": "EVLGaming",
    "codename": "evlgaming",
    "description": `
      <p>As part of the <a href="http://evlgaming.com">EVLGaming</a> team I was responsible for creation of the Battle Royale tournament's website with custom system for handling players, teams, matches, payment system (Skrill, PayPal, Steam) and competitions. The website wasn't used besides signups in the end since we failed to thoroughly test it in time and because of many players dropping at the last minute forcing us to communicate with them anyways. Despite issues tournament turned out successful and it was a great experience overall.</p>
    `,
    "languages": ["Python", "HTML", "CoffeScript", "JavaScript", "CSS"],
    "frameworks": ["SQLAlchemy", "jQuery", "Bootstrap"]
  },
  {
    "name": "Sanmargar",
    "codename": "sanmargar",
    "description": `
      <p>During my internship at <a href="http://sanmargar.pl">Sanmargar Team</a> I was tasked with building a website showcasing company's data quality services. I started with creating a special transformation in Pentaho and setting up a Carte service to clean data passed on by the website. While all the data quality processes were already there, I had to tackle few challenges which required writing some blocks in JS.</p>
      <p>Then I went on to create a sleek client website for the demonstration. While I was the only person responsible for it I had to communicate with management and I got to exchange ideas with other coworkers. It was a very valuable experience that allowed me to learn the office workflow since it was my first on-site job.</p>
      <p><a href="http://dqs.sanmargar.pl">Website</a></p>
    `,
    "languages": ["Java", "Python", "HTML", "CoffeScript", "JavaScript", "Sass", "CSS", "SQL"],
    "frameworks": ["Pentaho", "Pyramid", "PostgreSQL", "SQLAlchemy", "jQuery", "MaterializeCSS"]
  },
]