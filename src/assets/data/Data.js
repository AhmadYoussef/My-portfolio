import React from 'react';

export const skills = [
    {
        id: 1,
        logoImg: "reactJs.svg",
        en: 'Good knowledge in ReactJs, React-Router, Style-Component, Style-module',
        de: 'GE Good knowledge in ReactJs, React-Router, Style-Component, Style-module'
    },
    {
        id: 2,
        logoImg: "javaScript.png",
        en: 'Good knowledge in Es5, ES6, Asynchronous JavaScript',
        de: 'Good knowledge in Es5, ES6, Asynchronous JavaScript'
    },
    {
        id: 3,
        logoImg: "sass.svg",
        en: 'Good knowledge with Latest Scss technology.',
        de: 'Good knowledge with Latest Scss technology.'
    },
    {
        id: 4,
        logoImg: "css3.svg",
        en: 'Good sense in selecting element for a design.',
        de: 'Good sense in selecting element for a design.'
    },
    {
        id: 5,
        logoImg: "html5.svg",
        en: 'Good structure for building bone of website.',
        de: 'Good structure for building bone of website.'
    },
    {
        id: 6,
        logoImg: "bootstrap.svg",
        en: 'Good knowledge in bootstrap.',
        de: 'Good knowledge in bootstrap.'
    },
    {
        id: 7,
        logoImg: "jQuery.svg",
        en: '',
        de: ''
    },

]

export const projects = [
    {
        id: 1,
        images: 'albert/1.png',
        languages: ['HTML', 'SCSS', 'JavaScript', 'ReactJs'],
    },
    {
        id: 2,
        images: 'anzzor/1.png',
        languages: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        id: 3,
        images: 'dnsh/1.png',
        languages: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'PHP'],
    },
    {
        id: 4,
        images: 'lutfi/1.png',
        languages: ['HTML', 'css', 'JavaScript', 'JQuery', 'PHP'],
    }
]


export const langData = {
    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        project: "Project",
        contact: "Contact",
        projectBtn: 'View',
        contactText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur vitae                    libero quis nihil! Rerum voluptates, voluptatibus alias ullam ad dolores, earum                      possimus ea fuga placeat aliquam molestias laudantium iusto.`,
        homeText1: () => (<><h2> Hi, <span>My name </span>is Ahmad Youssef.</h2>
            <h2> I am a Front-End Develper.</h2></>),
        homeText2: () => (<p>Feel free to download my CV <span>here:</span><br />
            <span>English</span> - <span>German</span></p>),
        aboutText: () => (<p>
            Hello, <br />
            My name Ahmad Youssef. I am currently training as a front-end developer at the DCI Digital Career Institute in Dusseldorf. I studied telecommunications in Syria and came to Germany in 2016. Since I have a great passion for programming, I wanted to evolve in this area. During this course, I did several projects for friends and clients.
                </p>),

    },
    de: {
        home: "Startseite",
        about: "Über mich",
        skills: "Programmierkenntnisse",
        project: "Projekte",
        contact: "Kontakt",
        projectBtn: "Ansicht",
        contactText: `Ge Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore consequatur vitae                    libero quis nihil! Rerum voluptates, voluptatibus alias ullam ad dolores, earum                      possimus ea fuga placeat aliquam molestias laudantium iusto.`,
        homeText1: () => (<><h2> Hi, <span>Mein Name </span>ist Ahmed Youssef.</h2>
            <h2>Ich bin Front-End-Entwickler.</h2></>),
        homeText2: () => (<p>Hier finden Sie meinen Lebenslauf:<br />
            <span>Deutsch</span> - <span>Englisch</span></p>),
        aboutText: () => (<p>
            Hallo, <br />
            ich bin Ahmad Youssef. Ich mache zur Zeit beim DCI Digital Career Institut  in Düsseldorf eine Ausbildung zum Front-End Entwickler. Ich habe in Syrien Telekommunikation  studiert und bin 2016 nach Deutschland gekommen. Da ich eine große Leidenschaft für das Programmieren habe, wollte  ich mich auf diesem Gebiet weiterentwickeln. Während dieses Kurses habe ich mehrere Projekte für Freunde und Kunden durchgeführt.
                    </p>),


    }
}