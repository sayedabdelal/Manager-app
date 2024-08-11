import Button from "./Button.jsx"
export default function ProjectSideBar({onStartAddProject, projects, onSelectProject, selectProjectId}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="text-xl font-bold text-stone-500 my-4">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Projects</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                    if (project.id === selectProjectId) {
                        cssClass += " bg-stone-800 text-stone-200"
                    } else {
                        cssClass += " text-stone-400"
                    }
                    return (
                        <li key={project.id}>
                        <button className={cssClass} onClick={()=> onSelectProject(project.id)}>{project.title}</button>
                        
                    </li>
                    )
                }
                   
                )}
            </ul>
        </aside>
    )
} 