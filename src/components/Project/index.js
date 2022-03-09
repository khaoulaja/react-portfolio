import React from "react";

const Project =(props)=>{
    //   const {name, pic, description, link, repo} = props;
    const {project} = props;
    return(
        <div className="card">
            <img src={require(`../../assets/projects/${project.pic}.gif`)} className="card-img-top" alt={project.name}/>
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} target="_blank" className="btn hire-btn">Link</a>
                <a href={project.repo} target="_blank" className="btn hire-btn">Github repo</a>
            </div>
        </div>
    )

}

export default Project;