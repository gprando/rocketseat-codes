import React, { useState, useEffect } from 'react';

import Header from './components/Header';

import './App.css';

import api from './services/api';

function App() {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response)
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `frontend com react ${Date.now()}`,
      owner: "gabriel prando"
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}> Adicionar projeto</button>
    </>
  )
}

export default App;