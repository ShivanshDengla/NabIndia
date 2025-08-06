import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const WomensEmpowerment = () => {
  const history = (
    <p>To focus on the special needs of blind women, NAB, India, in January 1981, established the Committee for Advancement of the Status of Blind Women (CASBW). CASBW renamed Department of Women’s Empowerment (DWE) in November 2012, primarily aims at socio-economic empowerment and mainstreaming of blind women, besides ensuring them rehabilitation and welfare services and capacitating them to play a more pro-active role in the society.</p>
  );

  const aimsAndObjectives = (
    <>
      <ul>
        <li>Financial support for education, self-employment, medical requirements, house-repair and social rehabilitation</li>
        <li>Basic counselling, domiciliary and referral service for educational, marital, legal and family-related issues</li>
        <li>Sponsorships for computer education, sports and excursions</li>
        <li>Short-term training programs</li>
        <li>Pre-marital counselling workshops for visually impaired  women and men of marriageable age</li>
        <li>Life skills development program</li>
        <li>Training in craft and enhancing culinary skills</li>
        <li>Medical camps and health-care programs</li>
        <li>Talent competitions</li>
        <li>Personality development programs</li>
      </ul>

      <h4>Major Ongoing Projects:</h4>
      <h5>DWE TRAINING CENTRE:</h5>
      <p>Aimed at offering training and earning opportunity to blind women on “earn while you learn” basis, the Department set up in 1988 a Training Centre at NAB (India)’s Rustom Alpaiwalla Complex at Cotton Green, Mumbai. This Centre has been successful in socio-economic rehabilitation of hundreds of blind women in Maharashtra.</p>
      <p>The Centre’s Rakhi and Diwali Festival Projects are a major source of income for blind women. Products like decorative wax and gel candles, dry flowers, photo frames, tea-light holders and jute bags made by these women, are ideal as corporate gifts and have always been in great demand at exhibitions in which the Department participates.</p>
      <p>The Centre’s trainees are also helped to form self-help groups, to encourage greater economic self-reliance.</p>

      <h5>Bulk Orders:</h5>
      <p>The Department undertakes bulk order from corporates individual for Torans, Diyas, Clove stand etc. It also provides gift Boxes with Torans & Diyas etc. so for we have successfully completed lacs of orders from esteemed organisation such as Air India, Reliance, BPCL, Asus India etc.</p>

      <h5>HOSTEL FOR BLIND WORKING WOMEN AND COLLEGE GIRLS:</h5>
      <p>In April 2006, with a generous donation from Mrs. Vatsala Joshi and Mrs. Damayanti Joshi, the Department started the Smt. Vatsala Joshi & Smt. Damayanti Joshi Hostel for Blind Working Women and College Girls, at the NAB Kaka Patil Centre for the Blind at Andheri, Mumbai. This first of its kind service introduced by NAB (India), provides affordable residential facility to 14 blind women pursuing education/employment in Mumbai.</p>
      
      <h5>NAB-PBK (Reay Road)</h5>
      <p>The department started on an experimental basis a canteen at Reay Road office, with the objective to train visually impaired women in food preparation and kitchen management. Tea-coffee, breakfast and lunch are served on all working days and when need arises, on non –working days too.</p>

      <h5>NEELUM KHURSHED KANGA AWARDS</h5>
      <p>Each year, the Department honors blind women achievers who attain distinction in academics, sports or their chosen professions like medicine, physiotherapy, teaching, computer science, astrology, mountaineering and so on. These awards, instituted in 1983 in the memory of Mrs. Neelum Khurshed Kanga – a fund-raiser par excellence and an ardent supporter of NAB (India) and the visually challenged – have so far been presented to visually challenged women.</p>

      <h5>RECREATIONAL ACTIVITIES</h5>
      <p>Women’s oriented program is a traditional event celebrated in India where get-togethers are organized by women for women. Such functions give women the opportunity to meet and spend good time with each other in a pleasant environment. Understanding the potential of this occasion in facilitating blind women to socialize, interact and share and resolve their problems, the Department arranges Haldi Kumkum program every year for its trainees and staff.</p>
    </>
  );

  return (
    <ProjectPageLayout
      title="Women's Empowerment"
      imageUrl="/images/Projects/women-empowerement.jpg"
      history={history}
      aimsAndObjectives={aimsAndObjectives}
    />
  );
};

export default WomensEmpowerment;
