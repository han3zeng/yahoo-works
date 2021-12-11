import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Interview Assignments</h1>
      <p>This is the project that includes 3 tasks for interview process.</p>
      <p>Please click on the following links to check each task.</p>
      <ul>
        <li><Link to="/form-markup">Form and Markup</Link></li>
      </ul>
    </>
  );
}

export default Home;
