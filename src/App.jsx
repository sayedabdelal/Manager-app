import { useState } from 'react';
import ProjectSideBar from './component/ProjectSideBar.jsx';
import NewProjects from './component/NewProjects.jsx';
import NoProjectSelected from './component/NoProjectSelected.jsx';
import SelectProject from './component/SelectProject.jsx';


function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTasks (text) {
    setProjectState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        id: taskId

      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    })

  }
  
  function handleDeleteTasks(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id ),
      };
    });
  }
  

  function handleStartProjectAdd() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleDeletProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        )
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]

      };
    })
  }
  
  const selectedProject = projectState.projects.find(project => project.id ===  projectState.selectedProjectId);

  let content = <SelectProject project={selectedProject} onDeletTask={handleDeleteTasks} onAddTask={handleAddTasks} onDel={handleDeletProject} tasks={projectState.tasks}/>
  if (projectState.selectedProjectId === null) {
    content = <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartProjectAdd}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar 
        onStartAddProject={handleStartProjectAdd}
        projects = {projectState.projects}
        onSelectProject = {handleSelectProject}
        selectProjectId = {projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
