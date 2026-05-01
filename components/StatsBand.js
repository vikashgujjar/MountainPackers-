'use client';
import React, { useEffect, useState } from 'react';

const StatsBand = () => {
  const [stats, setStats] = useState({
    stat1: 17,
    stat2: 750,
    stat3: 35,
    stat4: 80
  });

  // Simplified animation logic
  useEffect(() => {
    // In a real app, you'd use a library or more complex intersection observer
  }, []);

  return (
    <div className="mp-sband">
      <div className="container">
        <div className="mp-sband-grid">
          <div className="mp-sbi">
            <span className="mp-sbi-ico"><i className="fa fa-calendar"></i></span>
            <div className="mp-sbi-txt">
              <span className="mp-sbi-num"><span>{stats.stat1}</span>+</span>
              <span className="mp-sbi-lbl">Years Experience</span>
            </div>
          </div>
          <div className="mp-sbi">
            <span className="mp-sbi-ico"><i className="fa fa-truck"></i></span>
            <div className="mp-sbi-txt">
              <span className="mp-sbi-num"><span>{stats.stat2}</span>+</span>
              <span className="mp-sbi-lbl">Vehicles</span>
            </div>
          </div>
          <div className="mp-sbi">
            <span className="mp-sbi-ico"><i className="fa fa-users"></i></span>
            <div className="mp-sbi-txt">
              <span className="mp-sbi-num"><span>{stats.stat3}</span>K+</span>
              <span className="mp-sbi-lbl">Happy Clients</span>
            </div>
          </div>
          <div className="mp-sbi">
            <span className="mp-sbi-ico"><i className="fa fa-thumbs-o-up"></i></span>
            <div className="mp-sbi-txt">
              <span className="mp-sbi-num"><span>{stats.stat4}</span>K+</span>
              <span className="mp-sbi-lbl">Projects Done</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBand;
