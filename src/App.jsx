import { useEffect, useState } from "react" 
import profilePic from "./assets/profile.svg"
import ancestreeScrnshot from "./assets/ancestree_scrnshot.png";
import clockwiseScrnshot from "./assets/clockwise_scrnshot.png";
import notedScrnshot from "./assets/noted_scrnshot.png";  
import { ProjectCard } from "./components/ProjectCard"; 
import { ThemeButton } from "./components/ThemeButton"; 

const techStack = [ 
  {
    type: "Languages",
    skills: ["Javascript", "Typescript", "Java", "HTML", "CSS", "SQL", "Python"],
    color: { light: "#739902", dark: "#D5FF81" }
  },
  {
    type: "Libraries / Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "SQLite", "Tailwind", "TanStack Query"],
    color: { light: "#E68600", dark: "#FFAE66" }
  },
  {
    type: "Tools",
    skills: ["Git/Github", "Android Studio", "Supabase", "D3"],
    color: { light: "#6070e7", dark: "#E0BFFF" }
  }
];

const contactLinks = [
  {  
    description: "LinkedIn",
    link: "https://linkedin.com/in/ada-kang-9b1662366",
    icon: "person"
  }, 
  {  
    description: "Email",
    link: "mailto:adakangg@gmail.com",
    icon: "mail"
  },
  {  
    description: "GitHub",
    link: "https://github.com/adakangg",
    icon: "commit"
  }
];
 
const projects = [
  {
    title: "Noted",
    type: "WEB APP",
    description: "A full-stack note-taking app that supports Markdown & rich-text editing, lofi music streaming, and pomodoro session timers", 
    descriptionItems: [
      "Implemented a dual-mode editor using Remirror that enables synchronized Markdown and WYSIWYG editing",
      "Built the frontend using React, Next.js, and Tailwind for a minimalist, accessible design",
      "Integrated Supabase with TanStack Query for secure user authentication and efficient, real-time database functionality",
      "Created an embedded media player that streams music via the SoundCloud API" 
    ],
    emojis: "📚🎧💡",
    links: [
      { text: "Hosted on Vercel", url: "https://noted-lofi.vercel.app/" },
      { text: "View Github Repo", url: "https://github.com/adakangg/noted" }
    ],
    img: notedScrnshot, 
    skills: ["React", "Next.js", "Typescript", "Tailwind", "TanStack Query", "Supabase", "Vercel"]   
  },
  {
    title: "AncesTree",
    type: "WEB APP",
    description: "A web-based family tree builder that enables users to create and visualize family trees structures", 
    descriptionItems: [
      "Built user-facing features for family member addition, modification, and removal",
      "Leveraged D3 graphing tools to create flexible and navigable tree layouts", 
      "Developed custom logic for optimal node/branch arrangement and improved visual clarity",
      "Implemented SVG zooming and panning functionality for smooth navigation of large family trees"
    ], 
    links: [
      { text: "Hosted on GitHub Pages", url: "https://adakangg.github.io/ances-tree/" },
      { text: "View Github Repo", url: "https://adakangg.github.com/ances-tree/" }
    ],
    emojis: "📜🌳🧬",
    img: ancestreeScrnshot,
    skills: ["D3", "HTML", "Javascript", "CSS"] 
  },
  {
    title: "ClockWise",
    type: "MOBILE APP",
    description: "An Android clock app used to set and manage multiple alarms across different time zones",
    descriptionItems: [
      "Developed with Android Studio for responsive, accessible design across all screen sizes",
      "Employs SQLite for local data storage on devices",
      "Features an interactive map built with Maplibre & GeoNames API to fetch zone data by location",
      "Includes a time zone converter to compare and calculate local times between zones manually",
    ],  
    emojis: "🌍✈️🕒",
    links: [{ text: "View Github Repo", url: "https://adakangg.github.com/clock-wise/"}],
    img: clockwiseScrnshot,
    skills: ["Android Studio", "Java", "SQLite"] 
  }
];

function App() { 
  const [darkMode, setDarkMode] = useState(true); 
  const [openProjectTitle, setOpenProjectTitle] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode); 
  }, [darkMode]); 

  useEffect(() => { 
    const handleClick = (e) => { // close currently open project
      if (e.target && e.target.closest && e.target.closest(".project")) return;
      setOpenProjectTitle(null);
    };   
    document.addEventListener("click", handleClick); 
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-full">  
      {/* Topbar */}
      <nav className="fixed w-full h-14 flex flex-row items-center justify-between p-3 bg-[var(--dark-background)] text-white border-b-1 border-[#1a1f25]">  
        <p className="text-2xl font-medium whitespace-nowrap"> Hey there! 👋 
          <span className="bg-[var(--primary)] text-[var(--background)] px-2 py-0.5 ml-2 rounded-md">
            I'm Ada
          </span> 
        </p>     
        <div className="flex flex-row h-full bg-[var(--dark-muted-background)] p-0.5 rounded-sm"> 
          <ThemeButton mode="Light" onClick={() => setDarkMode(false)} isSelected={!darkMode} />
          <ThemeButton mode="Dark" onClick={() => setDarkMode(true)} isSelected={darkMode} /> 
        </div> 
      </nav>     

      <div className="flex flex-col md:flex-row gap-15 lg:gap-22 h-full px-10 lg:px-25 pt-25 pb-10">  
        {/* Sidebar */}
        <div className="flex flex-col gap-15 md:w-1/5 pt-1">    
          {/* Profile */}
          <div className="flex flex-row gap-5 md:flex-col md:gap-3">
            <img src={profilePic} alt="Ada" className="w-35 h-35 bg-white rounded-xl"/> 
            <div className="flex flex-col gap-2">
              <p className="sidebar-title">ABOUT ME</p> 
              <p className="text-[0.8rem] text-[var(--muted-foreground)]">📍<i> Based in Atlanta, GA </i></p>     
              <p className="text-sm text-[var(--muted-foreground)] ml-3">
                Cat Enthusiast. 🐈 <br></br> 
                MMA/Wrestling Fan. 🥊 <br></br> 
                Software Developer. 💻 <br></br> 
                Check out some of my projects! ➡️
              </p>
            </div>
          </div>  

          {/* TechStack List */}
          <div className="flex flex-col gap-2">
            <p className="sidebar-title"> TECHNOLOGY </p> 
            <div className="flex flex-col gap-8 p-1">
              { techStack.map(tech => (
                <div key={tech.type} style={{ color: darkMode ? tech.color.dark : tech.color.light }}>
                  <p className="text-[0.8rem]"> {tech.type} </p>
                  <div className="flex flex-row flex-wrap gap-2 mt-1">
                    { tech.skills.map(skill => (
                      <div key={skill} className="chip bg-[var(--muted-background)] outline-1 outline-[var(--muted-border)]"> 
                        {skill}
                      </div> 
                    ))}
                  </div>
                </div>
              ))}
            </div> 
          </div>

          {/* Contacts List */}
          <div className="">
            <p className="sidebar-title mb-2"> CONTACT ME </p> 
            <div className="flex flex-row flex-wrap justify-between">
              { contactLinks.map(contact => (
                <a 
                  key={contact.description} 
                  href={contact.link} 
                  target="_blank"
                  className="flex flex-row items-center gap-1 cursor-pointer hover:bg-[var(--primary)] hover:text-[var(--background)] rounded-sm px-2 py-1 text-[var(--muted-foreground)] text-[0.9rem]"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: `"FILL" 0`, fontSize: "1rem" }}>
                    {contact.icon}
                  </span> 
                  {contact.description}  
                </a>
              ))}
            </div> 
          </div>
        </div>    
            
        {/* Projects Grid*/}
        <div className="flex-1">
          <div className="w-fit bg-[var(--primary)] text-2xl font-medium text-white dark:text-black px-2.5 py-1 rounded-md">
            PROJECTS
          </div>
          <div className="flex flex-row gap-6 flex-wrap mt-6">
            { projects.map(project => (
              <ProjectCard 
                key={project.title}
                project={project}
                isOpen={openProjectTitle === project.title}
                setIsOpen={setOpenProjectTitle}
              />
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;