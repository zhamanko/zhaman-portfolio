import { createI18n } from 'vue-i18n'
import AboutforWebBlock from './components/AboutforWebBlock.vue'

const messages = {
    en: {
        helloName: "Hello, I'm Zhaman",
        job: "a Junior Front-end developer",

        aboutTitle: "About me",
        aboutText: "My name is Zhaman, and I am a Junior Front-end Developer. I am passionate about creating beautiful and user-friendly web projects where every detail matters. I enjoy experimenting with design and bringing interesting ideas to life from start to finish. I have basic knowledge of HTML, CSS, JavaScript, Tailwind CSS, and Vue.js, and I am constantly striving to grow and learn new things. Every project for me is an opportunity to learn something new and leave my mark in the web world.",

        softTitle: "Soft skill",
        softText: "I also have basic knowledge",

        educationTitle: "Education",
        educationJunior: "Junior Specialist",
        educationBachelor: "Bachelor",
        educationCollege: " – Software Engineer, UzhNU PHFK",
        educationUniversity: " – Software Engineer, UzhNU",


        projectTitile: "My projects",
        live: "Open demo",

        aboutforwebText: "My personal portfolio website is a project created to consolidate information about me, my skills, and my projects in one modern and convenient space. The main goal of this site is not only to showcase my work but also to demonstrate my ability to create high-quality web solutions with a focus on design and user experience. During development, I used HTML, CSS, Tailwind CSS, and Vue.js, which allowed me to make the site responsive, fast, and stylish. Thanks to this, it displays correctly on different devices, features a modern minimalist interface, and provides easy navigation. This project became an excellent opportunity to demonstrate my front-end development skills as well as to implement my own ideas in creating a portfolio. In the future, I plan to expand it by adding new sections and integrating more examples of work from GitHub."
    },
    ua: {
        helloName: "Привіт, я Zhaman",
        job: "молодший Front-end розробник",

        aboutTitle: "Про мене",
        aboutText: "Мене звати Zhaman, і я — Junior Front-end розробник. Я захоплююсь створенням красивих та зручних веб-проєктів, де кожна деталь має значення. Люблю експериментувати з дизайном, а також реалізовувати цікаві ідеї від початку до кінця. Маю базові знання в HTML, CSS, JavaScript, Tailwind CSS та Vue.js, і постійно прагну розвиватися та навчатися новому. Кожен проєкт для мене — це можливість навчитися чогось нового та залишити свій слід у веб-світі.",

        softTitle: "Навички",
        softText: "Також маю базові знання",

        educationTitle: "Освіта",
        educationJunior: "Молодший спеціаліст",
        educationBachelor: "Бакалавр",
        educationCollege: " – Інженер програмного забезпечення, ДВНЗ 'УжНУ' ПГФК",
        educationUniversity: " – Інженер програмного забезпечення, ДВНЗ 'УжНУ'",


        projectTitile: "Мої проєкти",
        live: "Відкрити демо",

        aboutforwebText: "Мій персональний сайт-портфоліо — це проект, створений для того, щоб об’єднати інформацію про мене, мої навички та проекти в одному сучасному та зручному просторі. Основна мета цього сайту — не лише представити мої роботи, а й показати вміння створювати якісні веб-рішення з акцентом на дизайн та користувацький досвід. При розробці я використав HTML, CSS, Tailwind CSS та Vue.js, що дозволило зробити сайт адаптивним, швидким та стильним. Завдяки цьому він коректно відображається на різних пристроях, має сучасний мінімалістичний інтерфейс та легку навігацію. Цей проект став чудовою можливістю продемонструвати мої навички у front-end розробці, а також реалізувати власні ідеї у створенні портфоліо. У майбутньому я планую розширювати його, додаючи нові секції та інтегруючи більше прикладів робіт із GitHub."
    }
}

const savedLang = localStorage.getItem('lang') || 'ua'

const i18n = createI18n({
    locale: savedLang,
    fallbackLocale: 'en',
    messages
})

export default i18n
