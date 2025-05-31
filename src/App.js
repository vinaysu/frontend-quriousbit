import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import leftImage from "./images/AI 3D Text Generator – Create Stunning 3D Text Designs.jpeg"






function App() {



  const [servers, setServers] = useState([]);

  useEffect(() => {
    fetch('https://backend-quriousbit.onrender.com/api/servers')
      .then((res) => res.json())
      .then((data) => {
        setServers(data);
      })
      .catch((err) => {
        console.error('Error fetching servers:', err);
      });
  }, []);



  return (
    <div className={styles.main} >
      <div className={styles.left} >
        <div className={styles.images} >
          <img src={leftImage} className={styles.leftImage} />
          <img src={leftImage} className={styles.leftImage} />
          <img src={leftImage} className={styles.leftImage} />
          <img src={leftImage} className={styles.leftImage} />
          <img src={leftImage} className={styles.leftImage} />
          <img src={leftImage} className={styles.leftImage} />
          <img src={leftImage} className={styles.leftImage} />
        </div>
        <div className={styles.signoff} >
          <img src={leftImage} className={styles.leftImage} />
          <img src={leftImage} className={styles.leftImage} />
        </div>

      </div>
      <div className={styles.right} >
        <div className={styles.top}>
          <div className={styles.breadcrumb}>
            <span className={styles.arrow}>&lt;</span>
            <span className={styles.muted}>MULTIPLAYER</span>
            <span className={styles.separator}> / </span>
          </div>

          <h2 className={styles.title}>SERVER BROWSER</h2>

          <div className={styles.list}>
            <span className={styles.active}>SERVERS</span>
            <span className={styles.inactive}>FAVORITES</span>
            <span className={styles.inactive}>RECENT</span>
            <div className={styles.hr}></div>
          </div>
        </div>

        <div className={styles.bottom} >
          <div className={styles.elementSection} >
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Server Name</th>
                  <th>Players</th>
                  <th>Ping</th>
                </tr>
              </thead>
              <tbody>
                {servers.map((server, index) => (
                  <tr key={index} style={{ verticalAlign: 'middle' }}>
                    {/* Left-side image */}
                    <td style={{ width: '60px' }}>
                      <img
                        src={server.logo}
                        alt="map"
                        width="50"
                        height="50"
                        style={{ borderRadius: '5px', objectFit: 'cover' }}
                      />
                    </td>

                    {/* Server info */}
                    <td>
                      <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{server.title}</div>
                      <div style={{ fontSize: '0.8rem', color: '#777', fontWeight: 500 }}>
                        🇺🇸 {server.mode} &nbsp; - &nbsp;
                        {server.map.toUpperCase()} &nbsp; - &nbsp;
                        CUSTOM &nbsp; - &nbsp;
                        {server.tickrate}
                      </div>
                    </td>

                    {/* Players */}
                    <td style={{ fontWeight: 'bold', textAlign: 'center' }}>
                      {server.players}
                    </td>

                    {/* Ping */}
                    <td style={{ fontWeight: 'bold', textAlign: 'center' }}>
                      📶 {server.ping}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>


          </div>
          <div className={styles.filterSection} >

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;

