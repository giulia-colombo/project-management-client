import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

const ProjectListPage = () => {
    const [projects, setProjects] = useState([]);

    //this function makes a GET request using axios to the following backend endpoint: http://localhost:5005/api/projects
    const getAllProjects = () => {
        axios.get(`${API_URL}/api/projects`)
        .then((response) => setProjects(response.data))
        .catch((error) => console.log(error));
    }

    /* 
    We set this effect to run only once, after the initial render 
    by setting the empty dependency array []
    */
    useEffect(() => {
        getAllProjects();
    },[]);

    return ( 
        <div className="ProjectListPage">
            {projects.map((project) => {
                return (
                    <div className="ProjectCard card" key={project._id}>
                        <Link to={`/projects/${project._id}`}>
                            <h3>{project.title}</h3>
                        </Link>
                    </div>        
                );
            })}
        </div>
    );
}
 
export default ProjectListPage;

