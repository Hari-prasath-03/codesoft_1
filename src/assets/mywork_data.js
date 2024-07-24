import weather_app from "../assets/weather-app.svg";
import currency_converter from "../assets/currency-converter.svg";
import drum_kit from "../assets/drum kit.svg";
import portfolio from "../assets/Portfolio.svg";
import todo_list from "../assets/todo list.svg";

const mywork_data = [
  {
    w_no: 1,
    w_img: weather_app,
    p_name: "Weather Application",
    p_disc: `<p>The Weather Application is a dynamic web solution providing real-time weather updates. It features:</p>
            <ul>
            <li><span>Responsive Design:</span> Ensures optimal viewing on various devices.</li>
            <li><span>Dynamic Data Handling:</span> Efficiently manages real-time data.</li>
            <li><span>API Integration:</span> Fetches weather data from a reliable API.</li>
            <li><span>User Interaction:</span> Allows input for city-specific weather conditions.</li>
            <li><span>Error Handling:</span> Manages incorrect inputs and API errors gracefully.</li>
            </ul>`,
    t_used: `<ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>API Integration</li>
            </ul>`,
    link: "https://hariharan-webdev.github.io/weather-app/",
  },
  {
    w_no: 2,
    w_img: currency_converter,
    p_name: "Currency Converter",
    p_disc: `<p>The Currency Converter application offers seamless currency conversion with key features including:</p>
            <ul>
            <li><span>User-Friendly Interface:</span> Intuitive and responsive design.</li>
            <li><span>Real-Time Conversion:</span> Updates conversion rates dynamically.</li>
            <li><span>API Integration:</span> Fetches accurate exchange rates from a trusted API.</li>
            <li><span>Multiple Currencies:</span> Supports a wide range of currencies.</li>
            <li><span>Dynamic Data Handling:</span> Automatically updates conversion results.</li>
            </ul>`,
    t_used: `<ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>API Integration</li>
            </ul>`,
    link: "https://hariharan-webdev.github.io/currency-converter/",
  },
  {
    w_no: 3,
    w_img: drum_kit,
    p_name: "Drum Kit",
    p_disc: `<p>The Drum Kit application provides an interactive musical experience with features such as:</p>
            <ul>
            <li><span>Interactive Design:</span> Visually appealing and user-friendly interface.</li>
            <li><span>Sound Integration:</span> Links buttons and keys to specific drum sounds.</li>
            <li><span>Keyboard Event Listening:</span> Plays sounds via keyboard inputs.</li>
            <li><span>Click Event Handling:</span> Produces sounds on button clicks.</li>
            <li><span>Responsive Layout:</span> Compatible with various devices.</li>
            </ul>`,
    t_used: `<ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            </ul>`,
    link: "https://hariharan-webdev.github.io/Drum-kit/",
  },
  {
    w_no: 4,
    w_img: todo_list,
    p_name: "ToDo List",
    p_disc: `<p>The ToDo List application is an efficient task management tool featuring:</p>
            <ul>
            <li><span>Task Management:</span> Add, delete, and mark tasks as completed.</li>
            <li><span>Local Storage Integration:</span> Saves tasks persistently in the browser.</li>
            <li><span>Interactive UI:</span> Clean, responsive, and interactive design.</li>
            <li><span>Dynamic Updates:</span> Adds and removes tasks dynamically.</li>
            <li><span>User Feedback:</span> Provides visual feedback for tasks.</li>
            </ul>`,
    t_used: `<ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Local Storage</li>
            </ul>`,
    link: "https://hariharan-webdev.github.io/ToDo-list/",
  },
  {
    w_no: 5,
    w_img: portfolio,
    p_name: "Portfolio",
    p_disc: `<p>The Portfolio project showcases professional work with features including:</p>
            <ul>
            <li><span>Responsive Design:</span> Ensures a great look on all devices.</li>
            <li><span>CSS Animations:</span> Enhances user experience with subtle animations.</li>
            <li><span>Interactive Elements:</span> Adds smooth scrolling and dynamic content.</li>
            <li><span>Project Showcase:</span> Displays projects, skills, and contact information.</li>
            <li><span>Customization:</span> Easy updates for new content and styling.</li>
            </ul>`,
    t_used: `<ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>CSS Animations</li>
            <li>JavaScript</li>
            </ul>`,
    link: "https://hariharan-webdev.github.io/portfolio/",
  },
];

export default mywork_data;
