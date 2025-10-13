import React from 'react'; // This is needed because you are using JSX for the icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PaletteIcon from '@mui/icons-material/Palette';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SpeedIcon from '@mui/icons-material/Speed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LaptopIcon from '@mui/icons-material/Laptop';
import StorageIcon from '@mui/icons-material/Storage';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const googleColors = {
    blue: '#4285F4',
    red: '#EA4335',
    yellow: '#FBBC05',
    green: '#34A853',
};

export const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
];

export const socialLinks = [
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/bonamukkala-saivenkata-reddy-31196a259', name: 'LinkedIn' },
    { icon: <GitHubIcon />, href: 'https://github.com/sai1505', name: 'GitHub' },
    { icon: <CodeIcon />, href: 'https://www.hackerrank.com/profile/22331A0519', name: 'Hackerrank' },
    { icon: <YouTubeIcon />, href: 'https://www.youtube.com/channel/UCO4joG9Po8yncku1agA1lbw', name: 'YouTube' },
];

export const quickLinks = [
    { icon: <PersonIcon sx={{ color: googleColors.blue }} />, title: 'About Me', href: '/about' },
    { icon: <FolderIcon sx={{ color: googleColors.red }} />, title: 'Projects', href: '/projects' },
    { icon: <BarChartIcon sx={{ color: googleColors.yellow }} />, title: 'Skills', href: '/skills' },
    { icon: <EmailIcon sx={{ color: googleColors.green }} />, title: 'Contact', href: '/contact' },
];

export const educationData = [
    {
        degree: 'Bachelor of Technology',
        period: '2022 - 2026',
        major: 'Computer Science and Engineering',
        institution: 'Maharaj Vijayaram Gajapathi Raj College of Engineering',
        details: 'Pursuing my Education currently.'
    },
    {
        degree: 'Central Board of Secondary Education (CBSE)',
        period: '2020 - 2022',
        major: 'Maths, Physics, Chemistry and Computers (PCMC)',
        institution: 'Narayana P.U. College',
    }
];

export const servicesData = [
    { icon: <PhoneIphoneIcon sx={{ color: googleColors.blue, fontSize: 32 }} />, title: 'App Development', description: 'Creating responsive, modern mobile apps with clean code and optimal performance.' },
    { icon: <PaletteIcon sx={{ color: googleColors.red, fontSize: 32 }} />, title: 'UI/UX Design', description: 'Designing intuitive interfaces with great user experience and visual appeal.' },
    { icon: <AllInclusiveIcon sx={{ color: googleColors.green, fontSize: 32 }} />, title: 'Tech Agnostic Solution', description: 'Engineering effective solutions for any challenge by selecting the best technology for the job, regardless of the stack.' },
    { icon: <SpeedIcon sx={{ color: googleColors.yellow, fontSize: 32 }} />, title: 'Performance Optimization', description: 'Optimizing mobile apps for speed, efficiency, and better security.' },
    { icon: <LightbulbIcon sx={{ color: googleColors.blue, fontSize: 32 }} />, title: 'Real-Time Problem Solver', description: 'Analyzing complex challenges to devise efficient and scalable algorithmic solutions.' },
    { icon: <LaptopIcon sx={{ color: googleColors.green, fontSize: 32 }} />, title: 'Full Stack Web Development', description: 'Building responsive, scalable web applications with clean architecture and seamless user experiences.' }
]

export const projectsData = [
    {
        title: 'Therapy Chatbot',
        category: 'web',
        icon: <LaptopIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: '#673ab7',
        description: 'A compassionate AI companion offering a safe space and a listening ear for when you feel depressed or lonely.',
        tags: ['HTML', 'CSS', 'JS', 'Cohere API', 'Python', 'Flask'],
        youtube: 'https://youtu.be/DUenVb8Ekqs',
        github: 'https://github.com/sai1505/DBMS_PROJECT',
    },
    {
        title: 'Tax Suthradhar',
        category: 'web',
        icon: <LaptopIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: '#878383ff',
        description: 'An AI-powered tax compliance system that analyzes ITR files to help IT employees legally save money and simplify tax management.',
        tags: ['React js', 'Express js', 'Node js', 'GroQ Models', 'Langchain', 'FastAPI', 'Firebase', 'Cloudfare-R2', 'Docling'],
        youtube: 'https://youtu.be/DUenVb8Ekqs',
        github: 'https://github.com/sai1505/TaxSuthradhar',
    },
    {
        title: 'Digitalized Finance',
        category: 'web',
        icon: <LaptopIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: 'primary.main',
        description: 'A fully responsive sample banking website with debit/credit transactions, loans, etc and a secure basic login system.',
        tags: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
        youtube: 'https://youtu.be/DUenVb8Ekqs',
        github: 'https://github.com/sai1505/DBMS_PROJECT',
    },
    {
        title: 'PDF Language Converter',
        category: 'web',
        icon: <LaptopIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: 'warning.main',
        description: 'A real-time pdf language converter that converts any pdf file from english to telugu using OCR technology.',
        tags: ['HTML', 'CSS', 'JS', 'Flask', 'Python'],
        youtube: 'https://youtu.be/Lg5nqk7HRtc',
        github: 'https://github.com/sai1505/AITTPBL',
    },
    {
        title: 'ATM System',
        category: 'web',
        icon: <LaptopIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: 'primary.main',
        description: 'A basic ATM system Application made using Java Libraries. A basic project that used created using existing UML Diagrams.',
        tags: ['Java Swing', 'Java JDBC', 'MySQL'],
        youtube: 'https://www.youtube.com/watch?v=cmcyCWY_hXM',
        github: 'https://github.com/sai1505/pblOOP',
    },
    {
        title: 'To Do List App',
        category: 'mobile',
        icon: <PhoneIphoneIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: 'error.main',
        description: 'A productivity app with creating tasks, adding tasks, deleting tasks.',
        tags: ['Android Studio', 'XML', 'Java'],
        youtube: 'https://www.youtube.com/watch?v=J9FVsxxTljs',
        github: 'https://github.com/sai1505/CodSoftAssignment01',
        apk: '/assets/To Do List.apk', // Place your APK in the public/assets folder
    },
    {
        title: 'Random Quotes App',
        category: 'mobile',
        icon: <PhoneIphoneIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: 'success.main',
        description: 'A productivity app that displays random quotes eaach day and refreshens the minds of People.',
        tags: ['Android Studio', 'XML', 'Java'],
        youtube: 'https://www.youtube.com/watch?v=_qz3sqtbVXg',
        github: 'https://github.com/sai1505/CodSoftAssignment02',
        apk: '/assets/Random Quotes.apk', // Place your APK in the public/assets folder
    },
    {
        title: 'Alarms App',
        category: 'mobile',
        icon: <PhoneIphoneIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: 'warning.main',
        description: 'A basic productivity app that shows alarms, manages alarms. The world needs planning and an attempt from my side.',
        tags: ['Android Studio', 'XML', 'Java'],
        youtube: 'https://www.youtube.com/watch?v=JvCR63nvKho',
        github: 'https://github.com/sai1505/CodSoftAssignment03',
        apk: '/assets/Alarm Clocks.apk', // Place your APK in the public/assets folder
    },
    {
        title: 'Sky Stream App',
        category: 'mobile',
        icon: <PhoneIphoneIcon sx={{ color: 'white', fontSize: 50 }} />,
        bgColor: 'orange',
        description: 'A media player that streams videos from google drive. Made even for local videos and currently no global google drive access due to google\'s restrictions.',
        tags: ['Android Studio', 'XML', 'Java', 'Google Drive APIs'],
        youtube: 'https://youtu.be/ZGev0ArJPR0',
        github: 'https://github.com/sai1505/SkyStreamwebsite',
        apk: '/assets/Sky Stream (v1.0).apk', // Place your APK in the public/assets folder
    },
];

// --- Skills Data ---
export const skillsData = [
    { name: 'App Development (Java, Kotlin, Android Studio)', level: 4 },
    { name: 'UI/UX Design', level: 4 },
    { name: 'Python', level: 4 },
    { name: 'Java', level: 4 },
    { name: 'Web Technologies (HTML, CSS, JS, ReactJS, ExpressJs, NodeJS)', level: 3 },
    { name: 'Data Structures & Algorithms', level: 3 },
    { name: 'Libraries & Frameworks (Docling, Langchain, LLMs, FastAPI)', level: 3 },
    { name: 'Databases (MySQl, CLoudfare-R2)', level: 3 },
    { name: 'Tools & IDEs (Git, GitHub, VS Code, Android Studio)', level: 4 },
    { name: 'Technical Communication', level: 4 },
    { name: 'Critical Thinking', level: 4 },
];

// --- Certifications Data ---
export const certificationsData = [
    {
        title: 'Python',
        issuer: 'NPTEL',
        date: 'Issued: October 2023',
        icon: <CodeIcon sx={{ color: 'primary.main' }} />
    },
    {
        title: 'C Programming',
        issuer: 'NPTEL',
        date: 'Issued: April 2023',
        icon: <CodeIcon sx={{ color: 'error.main' }} />
    },
    {
        title: 'Problem Solving',
        issuer: 'Hackerrank',
        date: 'Issued: July 2024',
        icon: <CodeIcon sx={{ color: 'error.main' }} />
    },
    {
        title: 'Java',
        issuer: 'Hackerrank',
        date: 'Issued: June 2024',
        icon: <CodeIcon sx={{ color: 'warning.main' }} />
    },
    {
        title: 'SQL',
        issuer: 'Hackerrank',
        date: 'Issued: September 2024',
        icon: <StorageIcon sx={{ color: 'success.main' }} />
    },
];

// --- Contact Info Data ---
export const contactInfo = [
    {
        icon: <LocationOnIcon sx={{ color: 'error.main' }} />,
        title: 'Location',
        text: 'Visakhapatnam, Andhra Pradesh, India',
    },
];
