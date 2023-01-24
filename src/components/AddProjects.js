import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:5005";

const AddProject = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    return (
        <div className="AddProject">
            <h3>Add Project</h3>

            <form>
                <label>Title:
                    <input 
                    type="text" 
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>Description:
                    <input 
                    type="text" 
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
            </form>
        </div>
    );
}
 
export default AddProject;