const ProjectDescription = ({ project }) => (
    <div className="px-3 py-1 leading-6">
        {project.description}
        <ul className="text-[0.93rem] list-disc pl-5 my-5">
            { project.descriptionItems.map(item => <li key={item} className="mb-2"> {item} </li> )}
        </ul>
        { project.links.map(link => (
            <div key={link.text} className="flex flex-row gap-1 items-center text-[var(--primary)] text-sm pl-5 mb-4">
                <span  
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: `"FILL" 0`, fontSize: "1rem" }} 
                >
                    open_in_new
                </span> 
                <a href={link.url} target="_blank" className="hover:underline"> {link.text} </a>
            </div>
        ))} 
    </div>
);

export const ProjectCard = ({ project, isOpen, setIsOpen }) => (
    <div 
        onClick={() => setIsOpen(project.title)}
        className={`project w-full ${!isOpen && "lg:w-[calc(50%-1rem)]"} h-auto px-6 py-5 rounded-sm outline-2 outline-[var(--muted-border)] bg-[var(--muted-background)] hover:bg-[var(--background)] hover:outline-[var(--primary)] cursor-pointer`}
    >
        <div className="w-full flex flex-row items-center justify-between mb-3">
            <div>
                <p className="text-[1.35rem] -mt-1"> {project.title} </p>
                <p className="text-[0.8rem] text-[var(--primary)]"> {project.type} </p>
            </div>
            <p className="text-lg"> {project.emojis} </p> 
        </div>
        <img src={project.img} className="w-full h-auto outline-1 outline-[var(--muted-border)]" /> 
        { isOpen && ( 
            <div className="flex flex-col mt-4 gap-3 text-[var(--muted-foreground)]">
                <ProjectDescription project={project} />
                <div className="flex flex-row flex-wrap gap-3">
                    { project.skills.map(skill => (
                        <div key={skill} className="chip bg-[var(--primary)] text-[var(--background)]"> 
                            {skill} 
                        </div> 
                    ))}
                </div> 
            </div>
        )}
    </div>
);