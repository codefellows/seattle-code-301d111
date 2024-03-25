import { useEffect, useState } from 'react';
import axios from 'axios';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const API = 'http://localhost:3001';
      const jobs = await axios.get(`${API}/jobs`);
      setJobs(jobs.data);
    } 
    getJobs();  
  }, []);

  return (
    <>
      {jobs.length && jobs.map((job, idx) => (
        <div key={idx}>
          <h3>Vault Tec</h3>
          <h2><a href={job.url}>{job.name}</a></h2>
          <p>{job.description}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </>
  )
}

export default Jobs;
