import React from 'react';
import { useLocation } from 'react-router-dom';

function ProjectBoard() {
  const location = useLocation();
  const { projectId } = location.state || {};

  return (
    <div>
      <h1>Project Board</h1>
      {projectId && <p>Project ID: {projectId}</p>}
    </div>
  );
}

export default ProjectBoard;