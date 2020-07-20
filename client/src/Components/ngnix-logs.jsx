import React from 'react';
import axios from "axios";


const NgnixLogs = () => {
  const logs = [ ];

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get("/auth/ngnix-logs", null, config);
        logs = logs.push(res.data)
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
        <button type="submit"  onClick={(e) => onSubmit(e)} onclassName="btn btn-primary btn-block">
        Get Logs
      </button>
      {logs.map(data => (
        <p>{data}</p>
      ))}
    </div>
  );
}

export default NgnixLogs;