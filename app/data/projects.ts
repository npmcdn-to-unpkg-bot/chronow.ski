import {Project} from '../interfaces/project';

export var PROJECTS: Project[] = [
  {
    "name": "Saloon.tf",
    "codename": "saloon",
    "description": `
      <p>I was a founder and lead developer of <a href="https://saloon.tf">Saloon.tf</a>, a parimutuel betting platform, where users would place in game items as bets on competitive TF2 matches.</p>
      <p>I started the project in spring 2014 as a hobby when I was working on a Steam bot in Python, but I quickly found myself managing a popular community project with 20 team members as it provided a service users wanted filling a nice niche. When Saloon was acquired in September 2015, it has distributed over seventy thousands of dollars worth of in game items as prizes. It was a massive learning experience in software development, but I also somewhat unexpectedly learned how to manage a team and work with a large distributed group of likeminded people from all across the world.</p>
    `,
    "languages": ["Python", "HTML", "CoffeeScript", "JavaScript", "Sass", "CSS", "SQL"],
    "stack": ["Linux", "Nginx", "Pyramid", "Mako", "Steam", "Twisted", "PostgreSQL", "SQLAlchemy", "twistar", "Autobahn.ws", "WebSockets", "Grunt", "jQuery", "Bootstrap"]
  },
  {
    "name": "EVLGaming",
    "codename": "evlgaming",
    "description": `
      <p>As part of the <a href="http://evlgaming.com">EVLGaming</a> team I was responsible for creation of the backend for Battle Royale tournament's website with custom system for handling players, teams, matches, payment system (Skrill, PayPal, Steam items) and competitions. The website wasn't used during matches in the end since we failed to thoroughly test it in time and because of many players dropping at the last minute forcing us to communicate with them in-person anyways. Despite these issues tournament turned out successful and it was a great experience overall.</p>
    `,
    "languages": ["Python", "HTML", "CoffeeScript", "JavaScript", "CSS", "SQL"],
    "stack": ["Linux", "Nginx", "Pyramid", "Mako", "Steam", "PostgreSQL", "SQLAlchemy", "Grunt", "jQuery", "Bootstrap"]
  },
  {
    "name": "Sanmargar",
    "codename": "sanmargar",
    "description": `
      <p>During my internship at <a href="http://sanmargar.pl">Sanmargar Team</a> I was tasked with building a website showcasing company's data quality services. I started with creating a special transformation in Pentaho and setting up a Carte service to clean data passed on by the website. While all the data quality processes were already there, I had to tackle few challenges which required writing some blocks in JS.</p>
      <p>Then I went on to create a sleek client website for the demonstration. While I was the only person responsible for it I had to communicate with management and I got to exchange ideas with other coworkers. It was a very valuable experience that allowed me to learn the office workflow since it was my first on-site job.</p>
      <p><a href="http://dqs.sanmargar.pl">Website</a></p>
    `,
    "languages": ["Java", "Python", "HTML", "CoffeeScript", "JavaScript", "Sass", "CSS", "SQL"],
    "stack": ["Linux", "Nginx", "Pentaho", "Pyramid", "Mako", "PostgreSQL", "SQLAlchemy", "Grunt", "jQuery", "MaterializeCSS"]
  },
  {
    "name": "ETF2L",
    "codename": "etf2l",
    "description": `
      <p>As a Site Coder at <a href="http://etf2l.org">ETF2L</a> I was responsible for major redesign of the website. Besides creating a new modern WordPress theme that fit the league’s feel I designed and coded templates for many of the custom pages including leaderboards, brackets, player profiles, team profiles and many others. It was a good experience with PHP and WordPress, but it was also a somewhat daunting task when I also had to focus on school and Saloon.tf and eventually someone else took over. The theme was when I was leaving and still is in a preview state despite lacking just a few final touches.</p>
    `,
    "languages": ["PHP", "HTML", "JavaScript", "Less", "CSS"],
    "stack": ["Nginx", "HHVM", "WordPress", "Roots.io", "Socket.IO", "Grunt", "jQuery", "Bootstrap"]
  },
  {
    "name": "TF2Center",
    "codename": "tf2center",
    "description": `
      <p>I created a Steam bot in Java from ground up to accept voluntary donations for <a href="http://tf2center.com">TF2Center.com</a> website. Reading Steam website’s source code and reverse engineering allowed me to create Steam bot for accepting item donations for TF2Center.com similar to the one used by Saloon.tf, just with less functionality. It was able to emulate a web browser, saving sentry files, log in with SteamGuard code, gather received offers and filter, accept those that contained valuable items declining others and return a list of users who were eligible to receive complimentary status on the website.</p>
    `,
    "languages": ["Java"],
    "stack": ["Mechanize", "Maven", "Steam"]
  },
  {
    "name": "Tryhard Brigade",
    "codename": "tryhard",
    "description": `
      <p>As <a href="https://tryhardbrigade.com">TryhardBrigade.com</a> we provided top notch training servers with variety of mods that let players practice competitive TF2 gameplay for almost four years.</p>
      <p>I could have never expected such a success when Mateusz first approached me. We made a two-men strong team where he was responsible for PR and SRCDS configuration while I worked on Linux server configuration, website, donation bot, supervisor application, and communication with English speaking community. From servers used by me and my friends we grew to become the biggest network of its kind in Europe. Our main server was full 22 hours a day during our best times and hosted many of the best European players for more than ten ETF2L seasons.</p>
    `,
    "languages": ["Python", "C#", "PHP", "SourcePawn", "HTML", "JavaScript", "CSS"],
    "stack": ["Linux", "Apache2", "SRCDS", "SteamBot", "Steam", "Smarty", "SourceMod", "Bootstrap"]
  },
]