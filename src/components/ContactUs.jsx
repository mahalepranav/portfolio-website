import React from 'react';
import { Phone, Email, LinkedIn } from '@mui/icons-material';

const GetInTouch = () => {
  const contactDetails = [
    { icon: <Phone style={styles.icon} />, text: '+91 72498 11801', link: 'tel:+91 72498 11801' },
    { icon: <Email style={styles.icon} />, text: 'pranavmahale735@gmail.com', link: 'mailto:pranavmahale735@gmail.com' },
    { icon: <LinkedIn style={styles.icon} />, text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/pranav-mahale' },
    // { icon: <Work style={styles.icon} />, text: 'Naukri Profile', link: 'https://www.naukri.com/mnjuser/profile?id=&altresid' },
  ];

  return (
    <div style={{backgroundColor: "rgb(238,237,243)", paddingTop: "50px"}}>
      <div >
        <p className='font text-center pt-5'>Contact</p>
      </div>
      <div class="h-divider">
        <div class="shadow"></div>
      </div>
      <div style={styles.container}>
      <h2 style={styles.heading}>Get in Touch</h2>
      <div style={styles.grid}>
        {contactDetails.map((detail, index) => (
          <div key={index} style={styles.card} >
            <a href={detail.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <p>{detail.icon}</p>
              {detail.text}
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '8px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.2s',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  icon: {
    fontSize: '36px',
    color: '#0073b1', // LinkedIn Blue
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default GetInTouch;
