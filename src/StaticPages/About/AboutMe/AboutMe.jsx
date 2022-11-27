import { useEffect } from 'react';
import './aboutme.scss';


function AboutMe(){
    
    useEffect(() => {
        // let header = document.querySelector(".header");
        // header.style.height = "5em";
    })
    return <div className="about-page-subsection">
        <div className="about-me-paragraph">
            <p>
                My name is Alex Casieri, and I am 23 years old. I was born and raised in Deerfield, Illinois.
                My immediate family consists of 4 people, my sister, Anabel, mother, Amy, and father, Vincent. 
                Throughout my childhood, I have always been curious about the world. I loved building things, collecting
                random objects, exploring new places, and playing sports. I began playing competitively in 3rd grade. 
                From then on, I loved the sport and played on several teams throughout middle school and high school.
                In high school, I started on my varsity basketball team as a sophomore, and played all throughout 
                my high school career. For most of my time in high school, basketball was my priority, and I did not 
                know what I wanted to study for a career. Through basketball, and maintaining good enough grades, I was able 
                to attend NYU, and get a spot on the NYU Mens basketball team, where I played for 1 year.
            </p>
            <p>
                At NYU, I met a ton of very interesting, different people from what I was used to in Deerfield.
                Freshman year was very challenging: playing a college sport, learning how to live in Manhattan, and taking 
                pre-med  =level classes (chemistry was my latest interest in High School). My last year in high school also
                sparked an interest in Psychology, which I declared my major in addition to pre-med. One of the required 
                classes for a psychology major happened to be Intro to Statistics, which I enjoyed a lot, and triggered
                a major-change to Data Science. From there, one of the first classes I took was Intro to Python. This is where 
                my passion for Computer Science began. 
            </p>
            <p>
                I loved the satisfaction that overtook me when a program finally worked and the result was correct. After taking
                a series of data science classes, I found myself learning more about the computer science industry
                than the data science industry. I did not know what I wanted to do for a career, or what careers
                were even available to data science majors. While exploring these career possibilities, I was taking
                a multitude of classes about Machine Learning, Web Design / Development, and Algorithms. This wide range of 
                skills enabled me to complete many different types of projects over the years, including the creation of 
                machine learning models, various assignments, and front-end interactive games. But, I did not know how 
                they all tied together, or if they did at all. I was able to get an internship at Epsilon, as a Software 
                Engineer Intern. It was here that I was able to create a Bot using Microsoft Teams, and JIRA. This experience
                taught me the fundamentals of software engineering, and how all of these skills could be connected.
            </p>
            <p>
                After my first internship, and after learning how it felt to make my own money, I became obsessed with 
                learning everything about computer science. I switched my major to Computer and Data Science, and needed to take 
                10 classes (40 credits) total in 2 semesters. I was determined to learn as much as possible, and gain as much
                experience as possible to start my career. In addition to the classes, I took on a part time job 
                as a tutor for an Intro to Python class: the one that got me started with CS. In addition to this, I worked as a 
                part time backend developer for a startup called DataEarn. When I wasn't working or doing homework, I was studying
                leetcode and algorithms, just in case an interview came up that I needed to be prepared for. 
            </p>
            <p>
                My experience with DataEarn helped advance my knowledge of the CS industry the most, because it gave me real-world
                experience, and I saw how the skills learned from class applied to real businesses. I also became advanced with using
                Git version control system, which is one of the most important skills developers can have. I graduated NYU with a 3.4 overall
                GPA, and a 3.6 in-major GPA. After my freshman year, my cumulative GPA was 2.7. The amount of work 
                put in to be able to raise it by almost a full point speaks for itself. For the summer after my graduation, I continued
                working as a backend developer for DataEarn. I continued to learn about the business side of tech startups, and helped advance
                the company, while also advancing my personal skills. Toward the end of that summer (2022), I was told about a front-end 
                development class called The Odin Project. I dove into that with the mindset of learning everything possible about front-end
                web development. The Odin Project was the beginning motivation for this site, as stated in the About This Site section. I am 
                currently working as a full stack software engineer for Epsilon, and continue to advance my skillset and career in every way that I can.
            </p>
        </div>
    </div>

}

export default AboutMe;
