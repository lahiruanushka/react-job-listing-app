import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    
    useEffect(() => {
        const fetchJob = async () => {
            
      try {
        const res = await fetch(`/api/job/${id}`);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
        }
    })
  return (
    <div>JobPage</div>
  )
}

export default JobPage