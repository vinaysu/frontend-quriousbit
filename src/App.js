import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import leftImage from "./images/AI 3D Text Generator – Create Stunning 3D Text Designs.jpeg";
import { FaPlay, FaBars, FaPowerOff } from 'react-icons/fa';
import { CiSquareQuestion } from "react-icons/ci";
import { Modal, Button } from 'react-bootstrap'; // Import Modal

function App() {
  const [servers, setServers] = useState([]);
  const [selectedServer, setSelectedServer] = useState(null); // For modal data
  const [showModal, setShowModal] = useState(false); // Toggle modal

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

  const handleServerClick = (server) => {
    setSelectedServer(server);
    setShowModal(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.images}>
          {[...Array(5)].map((_, i) => (
            <img key={i} src={leftImage} className={styles.leftImage} />
          ))}
          <div className={styles.iconWrapper}><FaPlay size={24} color="white" /></div>
          <div className={styles.iconWrapper}><FaBars size={24} color="white" /></div>
        </div>
        <div className={styles.signoff}>
          <div className={styles.iconWrapper}><CiSquareQuestion size={24} color="white" /></div>
          <div className={styles.iconWrapper}><FaPowerOff size={24} color="white" /></div>
        </div>
      </div>

      <div className={styles.right}>
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

        <div className={styles.bottom}>
          <div className={styles.elementSection}>
            <table className={`table ${styles.transparentTable}`}>
              <thead>
                <tr>
                  <td> </td>
                  <th> </th>
                  <th>Server Name</th>
                  <th>Players</th>
                  <th>Ping</th>
                </tr>
              </thead>
              <tbody>
                {servers.map((server, index) => (
                  <tr className={styles.tablecolor} key={index} style={{ verticalAlign: 'middle' }} onClick={() => handleServerClick(server)}>
                    <td> </td>
                    <td style={{ width: '60px' }}>
                      <img
                        src={server.logo}
                        alt="map"
                        width="50"
                        height="50"
                        style={{ borderRadius: '5px', objectFit: 'cover' }}
                      />
                    </td>
                    <td>
                      <div
                        style={{ fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', color: 'lightblue' }}
                        
                      >
                        {server.title}
                      </div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 500 }}>
                        🇺🇸 {server.mode} &nbsp; - &nbsp;
                        {server.map.toUpperCase()} &nbsp; - &nbsp;
                        CUSTOM &nbsp; - &nbsp;
                        {server.tickrate}
                      </div>
                    </td>
                    <td style={{ fontWeight: 'bold', textAlign: 'center' }}>{server.players}</td>
                    <td style={{ fontWeight: 'bold', textAlign: 'center' }}>📶 {server.ping}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.filterSection}></div>
        </div>
      </div>

      {/* Modal Section */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Server Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedServer && (
            <>
              <img
                src={selectedServer.logo}
                alt="server"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
              />
              <p><strong>Title:</strong> {selectedServer.title}</p>
              <p><strong>Mode:</strong> {selectedServer.mode}</p>
              <p><strong>Map:</strong> {selectedServer.map}</p>
              <p><strong>Tickrate:</strong> {selectedServer.tickrate}</p>
              <p><strong>Players:</strong> {selectedServer.players}</p>
              <p><strong>Ping:</strong> {selectedServer.ping}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;


