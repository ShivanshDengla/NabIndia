import React from 'react';
import './OfficeBearers.css';

const officeBearers = [
  { 
    name: 'Hemant Takle',
    post: 'President, NAB India',
    image: '/images/hemant-takle.png'
  },
  { 
    name: 'Dr. Vimal Kumar Dengla',
    post: 'Chairman Trustee, NAB India',
    image: '/images/vimal-dengla.png'
  },
  { 
    name: 'Harinder Kumar Malik',
    post: 'Honorary Secretary General, NAB India',
    image: '/images/harender-malik.jpg'
  },
  { 
    name: 'Dr. Arun Kumar Sharma',
    post: 'Vice President, NAB India',
    image: '/images/arun-sharma.jpeg'
  },
  { 
    name: 'Hemsingh Yadav',
    post: 'Vice President, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Dr. Shishir Kumar Das',
    post: 'Vice President, NAB India',
    image: '/images/Dr.-shishur-picture.jpeg'
  },
  { 
    name: 'Rameshwar B. Kalantri',
    post: 'Vice President, NAB India',
    image: '/images/default.png'
  },
  
  { 
    name: 'Anil Mittal',
    post: 'Honorary Secretary, NAB India',
    image: '/images/anil-mittal.jpeg'
  },
  { 
    name: 'Hemant Patil',
    post: 'Honorary Secretary, NAB India',
    image: '/images/Hemant-Patil.jpeg'
  },
  { 
    name: 'Shailendra Jain',
    post: 'Honorary Secretary, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Hari Shankar Singh',
    post: 'Honorary Treasurer, NAB India',
    image: '/images/Harikrishna.jpeg'
  },
  { 
    name: 'Ramakant T. Satam',
    post: 'Honorary Treasurer, NAB India',
    image: '/images/ramakant-satam.jpeg'
  },
  { 
    name: 'Jitendra Purohit',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Aniruddh P. Paswan',
    post: 'E.C Member, NAB India',
    image: '/images/anirudh-paswan.jpeg'
  },
  { 
    name: 'Kayamuddin Khan',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Namrata Kanodia',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Ketan Kothari',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Yasmin Singaporia',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Vijay Badrinarayan Rathi',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Anil Kumar Verma',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Jayprakash Nishad',
    post: 'E.C Member, NAB India',
    image: '/images/jayprakash.jpeg'
  },
  { 
    name: 'Vijay R. Kajrolkar',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Deepak Rawal',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Salamat Hussain',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Yusufi Kapadia',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Rananjay Singh',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Sant Bali Chaudhari',
    post: 'E.C Member, NAB India',
    image: '/images/default.png'
  },
  { 
    name: 'Pallavi Kadam',
    post: 'Ex-Officio Executive Director',
    image: '/images/Pallavi-kadam.jpeg'
  },
  { 
    name: 'Lalit Vora',
    post: 'Member of NAB Activities',
    image: '/images/default.png'
  },
  { 
    name: 'Ramesh Daswani',
    post: 'Member of NAB Activities',
    image: '/images/default.png'
  },
  { 
    name: 'Mohammed Raza',
    post: 'Member of Executive Council-Institute Members',
    image: '/images/default.png'
  },
  { 
    name: 'MD. Riyaz',
    post: 'Member of Executive Council-Institute Members',
    image: '/images/default.png'
  },
  { 
    name: 'Chimanbhai T. Patel',
    post: 'Member of Executive Council-Institute Members',
    image: '/images/default.png'
  },
  { 
    name: 'Mr Sanjay Rai',
    post: 'Member of Executive Council-Institute Members',
    image: '/images/default.png'
  },
  { 
    name: 'Tanisha Khandelwal',
    post: 'Member of Executive Council-Institute Members',
    image: '/images/default.png'
  },
  { 
    name: 'Tarkeshwar Luhar',
    post: 'Member of Executive Council-Institute Members',
    image: '/images/default.png'
  }
];

const OfficeBearers = () => {
  return (
    <section className="office-bearers" aria-labelledby="office-bearers-heading">
      <h2 id="office-bearers-heading">Chief Office Bearers</h2>
      <div className="bearers-grid">
        {officeBearers.map((bearer, index) => (
          <div key={index} className="bearer-card">
            <img src={bearer.image} alt={`${bearer.name}, ${bearer.post}`} />
            <h3>{bearer.name}</h3>
            <p className="post">{bearer.post}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfficeBearers;
