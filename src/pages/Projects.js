import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import SEO from '../components/SEO';

const projects = [
  {
    title: 'Prevention of Blindness and Low Vision',
    description: '“Prevention of Preventable and Cure of Curable Blindness” being one of its mission statements, NAB (India) set up the National Society for the Prevention of Blindness (NSPB) in 1959.',
    image: 'images/Projects/prevention.jpg',
    link: '/projects/prevention-of-blindness'
  },
  {
    title: 'Nursery',
    description: 'This Nursery was a pioneering attempt of NAB (India) towards early intervention for blind children.',
    image: 'images/Projects/nursery.png',
    link: '/projects/nursery'
  },
  {
    title: 'Education',
    description: 'NAB (India) provided school and college going visually impaired children support services in the form of scholarships, free distribution of braillers and other assistive devices, volunteer reading services and so on.',
    image: 'images/Projects/education.jpg',
    link: '/projects/education'
  },
  {
    title: 'Talking Books',
    description: 'The Talking Book Centre of the National Association for the Blind, India has been recording and supplying books for the Visually Challenged in audio format since 1963. If the content of the book is more it is advisable to record the same in audio format in comparison with Braille Books.',
    image: 'images/Projects/talking-book.jpg',
    link: '/projects/talking-books'
  },
  {
    title: 'Braille Press',
    description: 'The Braille Press prints textbooks of all subjects – including Math and Science – for English and Marathi medium students of Class I to XII in Maharashtra. We are proud to say, the Maharashtra Government has assigned us the task of supplying textbooks for blind students under the Samagra Shiksha Abhiyan.',
    image: 'images/Projects/braille-press.png',
    link: '/projects/braille-press'
  },
  {
    title: 'Rehabilitation',
    description: 'DOR conducted Basic Rehabilitation Course for the visually challenged covering life skills and mobility and also initiated courses for employment officers and orientation & mobility instructors',
    image: 'images/Projects/rehabilitation.jpg',
    link: '/projects/rehabilitation'
  },
  {
    title: 'Vocational Training Ambernath',
    description: 'A person who loses the most precious gift of God (sight) tends to become frustrated. He needs proper counselling, guidance and training to boost up his confidence. Keeping this view in mind the NAB has taken up this challenging training programme through which it would be possible to rehabilitate this unprivileged section of the society socio-economically.',
    image: 'images/Projects/vocational-training.jpeg',
    link: '/projects/vocational-training'
  },
  {
    title: 'Employment',
    description: 'The Department plays a vital role in helping visually impaired job-seekers find suitable employment, by working closely with the candidates and liaising with companies – both in public and private sector – to give the visually impaired the opportunity to get into the work force.',
    image: 'images/Projects/employement.jpg',
    link: '/projects/employment'
  },
  {
    title: 'Advocacy',
    description: 'The various concessions and facilities available to the visually impaired today are a result of advocacy activities initiated by NAB (India) during the Seventy years of its existence',
    image: 'images/Projects/advocacy.jpeg',
    link: '/projects/advocacy'
  },
  {
    title: 'Client Service',
    description: 'Client Service Department(CSD) was established in 1994. Ever since, the Department has been providing direct and timely assistance and guidance to innumerable VI persons, to solve their day-to-day issues.',
    image: 'images/Projects/client-services.jpg',
    link: '/projects/client-service'
  },
  {
    title: 'Research Library and Information',
    description: 'In India there has been no systematic effort to conduct scientific research on blindness-related issues and to fill this void NAB (India) set up the Louis Braille Memorial Research Centre (LBMRC) in 1975.',
    image: 'images/Projects/research-library.jpeg',
    link: '/projects/research-library'
  },
  {
    title: 'Recreation',
    description: 'Hic commodo odio pharetra magni aliquet posuere aptent mus leo class urna. Eum diamlorem, netus posuere aptent mus.',
    image: 'images/Projects/recreation.jpg',
    link: '/projects/recreation'
  },
  {
    title: "Women's Empowerment",
    description: 'To focus on the special needs of blind women, NAB, India, in January 1981, established the Committee for Advancement of the Status of Blind Women (CASBW). CASBW renamed Department of Women’s Empowerment (DWE) in November 2012',
    image: 'images/Projects/women-empowerement.jpg',
    link: '/projects/womens-empowerment'
  },
  {
    title: 'State Branches',
    description: 'The National Association for the Blind, India now has 22 State and 65 District Branches working for the welfare of Blind community across the country.',
    image: 'images/Projects/state-branches.jpg',
    link: '/projects/state-branches'
  },
  {
    title: 'Perfumery College',
    description: 'NAB Perfumery College is an initiative of National Association for the Blind, a new avenue for the visually challenged persons in the Fregrance Industry. NAB, India has always pioneered new avenues for the visually challenged persons.',
    image: 'images/Projects/perfumery-college.jpg',
    link: '/projects/perfumery-college'
  },
  {
    title: 'Fund Raising Committee',
    description: 'A key issue faced by any voluntary agency is monetary resources. That it would be heavily dependent on donors to accomplish its mission was the fact NAB (India) realized right at the start, and therefore in its initial years itself set up the Finance Raising Committee (FRC)',
    image: 'images/Projects/fundraising-committee.jpeg',
    link: '/projects/fund-raising-committee'
  },
  {
    title: 'MNB Home for the Blind',
    description: 'Established on July 16, 1956, The Muncherjee Nowrojee Banajee Industrial Home for the Blind (MNB) stands as a living monument to the generosity of the late Serenbai Banajee, who graciously donated her bungalow in memory of her father.',
    image: 'images/Projects/community-based-rehab.png',
    link: '/projects/mnb-home-for-the-blind'
  },
  {
    title: 'Home for the Aging Blind, Khandala',
    description: 'Dignified Living for Visually Impaired Seniors. Established in 1970 by the National Association for the Blind (NAB) India, the Lions Home for the Aging Blind in Khandala is not just a place of shelter—it is a vibrant, nurturing community that brings hope, dignity, and empowerment to more than 75 visually impaired senior citizens.',
    image: 'images/Projects/elderly-home.jpeg',
    link: '/projects/home-for-elderly-blind'
  },
  {
    title: 'NAB – DVK Music Academy',
    description: 'India’s first music academy for visually impaired persons offering free training in vocals, instruments and percussion. Home to the Golden Melodies orchestra.',
    image: 'images/Projects/center-of-blind.png',
    link: '/projects/centre-for-blind-women'
  },
  {
    title: 'rehabilitation centre Mount Abu',
    description: 'The NAB–Phiroze & Noshir Merwanji Rehabilitation Centre for the Blind, Mount Abu is a full-fledged Basic Rehabilitation Training Centre for the newly adult blind in India, established on 1st August, 1967. Its aims are adjusting and orienting the newly blind and those who have had no institutional training.',
    image: 'images/Projects/rehab-center-mount-abu.jpg',
    link: '/projects/rehabilitation-centre-mount-abu'
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <SEO
        title="Our Projects - NAB India"
        description="Explore the wide range of projects and activities at the National Association for the Blind (NAB) India. From education and rehabilitation to advocacy and vocational training, learn how we're making a difference."
        keywords="NAB India projects, NAB India activities, education for the blind, rehabilitation services, vocational training, advocacy for visually impaired"
      />
      <h1 className="main-heading">Projects and Activities</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.link ? (
                <Link to={project.link} className="view-details-btn">View Details</Link>
              ) : (
                <button className="view-details-btn">View Details</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
