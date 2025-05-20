const contactLinks = [
    { 
        description: "Visit my GitHub",
        link: "https://github.com/adakangg",
        imgSrc: "assets/github.png",
        classname: "white-bg"
    },
    { 
        description: "Connect on LinkedIn",
        link: "www.linkedin.com/in/ada-kang-9b1662366",
        imgSrc: "assets/linkedin.png",
        classname: ""
    }, 
    { 
        description: "Send me an Email",
        link: "mailto:adakangg@gmail.com",
        imgSrc: "assets/email.png",
        classname: ""
    },
    { 
        description: "Download Resume",
        link: "mailto:adakangg@gmail.com",
        imgSrc: "assets/download.png",
        classname: ""
    }
];

const projects = [
    {
        title: "PawPrint",
        type: "WEB APP",
        description: 'Full-stack pet health management app where users can track medical information, archive documents, and manage schedules',
        descriptionItems: [
            "Built the frontend using React and shadCN for a minimalist, accessible design",
            "Uses Supabase with TanStack Query for secure user authentication and efficient, real-time data functionality"
        ],
        links: [
            {
                type: "github", 
                url: "https://github.com/adakangg/paw-print"
            },
            {
                type: "site",
                text: "Hosted on Vercel",
                url: "https://paw-print-kappa.vercel.app/"
            }
        ],
        img: "assets/pawprint_screenshot.png",
        skills: ["React", "Next.js", "Typescript", "Tailwind", "TanStack Query", "Supabase", "Vercel"]   
    },
    {
        title: "AncesTree",
        type: "WEB APP",
        description: 'A genealogical tool used to structure and visualize complex family tree relations',
        descriptionItems: [
            "Leverages D3 to create dynamic and navigable tree layouts",
            "Implements custom logic for optimal node/branch arrangement and improved visual clarity"
        ], 
        links: [
            {
                type: "github",
                url: "https://adakangg.github.com/ances-tree/"
            },
            {
                type: "site",
                text: "Hosted on GitHub Pages",
                url: "https://adakangg.github.io/ances-tree/"
            }
        ],
        img: "assets/ancestree_screenshot.png",
        skills: ["D3", "HTML", "Javascript", "CSS"] 
    },
    {
        title: "ClockWise",
        type: "MOBILE APP",
        description: `Alarm Clock app used to set and manage multiple alarms across different time zones seamlessly`,
        descriptionItems: [
            "Developed with Android Studio for responsive design across all screen sizes",
            "Employs SQLite for local data storage on devices",
            "Features an interactive map built with Maplibre & GeoNames API to fetch zone data by location",
            "Includes a time zone converter to compare and calculate between zones manually",
        ],
        githubLink: "https://google.com",
        projectLink: "",
        links: [
            {
                type: "github",
                url: "https://adakangg.github.com/clock-wise/"
            }
        ],
        img: "assets/clockwise_screenshot.png",
        skills: ["Android Studio", "Java", "SQLite"] 
    }
];
 
const techStack = [ 
    {
        type: "Languages",
        skills: [
            "Javascript",
            "Typescript",
            "HTML",
            "Java",
            "CSS",
            "SQL",
            "Python"
        ]
    },
    {
        type: "Libraries / Frameworks",
        skills: [
            "React",
            "Next.js",
            "Node.js",
            "Express.js",
            "SQLite",
            "Tailwind",
            "TanStack Query" 
        ]
    },
    {
        type: "Tools",
        skills: [
            "Git/Github",
            "Android Studio",
            "Supabase",
            "D3"
        ]
    }
];

window.onload = function () { 
    setTheme();
    setSkills();    
    setContactLinks();   
    setProjects(); 
};

function setTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const moon = document.getElementById("switch-dark-img")
    const sun = document.getElementById("switch-light-img")

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        setThemeFeatures(savedTheme, toggleBtn, sun, moon) 
    } else { 
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const preferredTheme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', preferredTheme);
        setThemeFeatures(preferredTheme, toggleBtn, sun, moon) 
    } 
    
    toggleBtn.addEventListener("change", (event) => {
        if (event.target.checked) {
            setThemeFeatures("light", toggleBtn, sun, moon) 
            localStorage.setItem('theme', 'light');
        } else {
            setThemeFeatures("dark", toggleBtn, sun, moon) 
            localStorage.setItem('theme', 'dark');
        }
    }) 
}

function setThemeFeatures(theme, toggleBtn, sun, moon   ) {
    if (theme === "light") {
        toggleBtn.checked = true; 
        document.documentElement.setAttribute('data-theme', "light"); 
        moon.classList.add("hidden")
        sun.classList.remove("hidden")
    } else {
        toggleBtn.checked = false; 
        document.documentElement.setAttribute('data-theme', "dark"); 
        sun.classList.add("hidden")
        moon.classList.remove("hidden") 
    }
}

function setContactLinks() {
    const iconsRow = document.getElementById("icon-links-row");  

    contactLinks.forEach((icon) => { 
        let iconContainer = document.createElement("div"); 
        iconContainer.className = "icon-container";

        let link = document.createElement("a");
        link.href = icon.link;
        link.target = "_blank";
        
        let img = document.createElement("img");
        img.className = icon.classname;  
        img.src = icon.imgSrc;
        img.alt = icon.name;   
        iconContainer.appendChild(img);

        let text = document.createElement("span"); 
        text.textContent = icon.description;
        iconContainer.append(text)

        link.appendChild(iconContainer);
        iconsRow.appendChild(link);  
    }); 
 
}
 
function setSkills() {
    const skillsGrid = document.getElementById("skills-grid"); 
    techStack.forEach((category, index) => {
        let group = document.createElement("div"); 
        group.classList.add("skill-group", `skill-${index+1}`);

        let title = document.createElement("p"); 
        title.textContent = category.type; 
        group.append(title);  
 
        category.skills.forEach((skill) => {
            let chip = document.createElement("div");
            chip.className = "skill-chip";  
            chip.textContent = skill; 
            group.append(chip);
        }) 
        skillsGrid.appendChild(group);
    }); 
}
 
function setProjects() {
    const projectsGrid = document.getElementById("projects-grid");  
    projects.forEach((project) => { 
        let projectBox = document.createElement("div");
        projectBox.className = "project-box"; 
        projectBox.append(createProjectTitle(project)); 

        let content = document.createElement("div");
        content.className = "project-content";

        let img = document.createElement("img");
        img.className = "project-img"; 
        img.src = project.img;
        img.alt = project.title; 

        let textContent = document.createElement("div");
        textContent.className = "project-text-content";

        let description = document.createElement("div"); 
        description.className = "project-description";
        description.textContent = project.description;  

        let list = document.createElement("ul");
        project.descriptionItems.forEach((itemText) => {
            let item = document.createElement("li"); 
            item.textContent = itemText;
            list.append(item) 
        }) 
        description.append(list)
        description.append(createProjectLinks(project));
 
        textContent.append(description);  
        textContent.append(createProjectSkills(project));   
        content.append(img); 
        content.append(textContent);   
        projectBox.append(content);    
        projectsGrid.append(projectBox); 
    }) 
} 

function createProjectTitle(project) {
    let titleBox = document.createElement("div");
    titleBox.className = "project-title";
    titleBox.textContent = project.title; 
    let text = document.createElement("p"); 
    text.textContent = project.type; 
    titleBox.appendChild(text); 
    return titleBox;
} 

function createProjectLinks(project) {
    let links = document.createElement("div"); 
    links.className = "project-links";

    project.links.forEach((link) => {
        let isGithub = link.type === "github";
        let linkItem = document.createElement("div");
        linkItem.className = "link-item";
    
        let icon = document.createElement("img");
        icon.src = 'assets/link.png';  

        let url = document.createElement("a"); 
        url.href = link.url;
        url.target = "_blank";  
        url.textContent = isGithub ? "View Github repo" : ( link.text ?? "Visit local site");
    
        linkItem.append(icon);
        linkItem.append(url);
        links.append(linkItem);
    })
    return links; 
}

function createProjectSkills(project) {
    let skills = document.createElement("div");
    skills.className = "project-skills";
    project.skills.forEach((skill) => {
        let skillChip = document.createElement("div");
        skillChip.className = "skill-chip project-skill-chip";
        skillChip.textContent = skill;
        skills.append(skillChip);
    });
    return skills;
}