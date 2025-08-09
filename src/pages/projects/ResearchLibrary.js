import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const ResearchLibrary = () => {
  const history = (
    <p>In India there has been no systematic effort to conduct scientific research on blindness-related issues and to fill this void NAB (India) set up the Louis Braille Memorial Research Centre (LBMRC) in 1975.</p>
  );

  const aimsAndObjectives = (
    <>
      <p>LBMRC took up many research projects and has also brought out quite a few useful publications. These research projects have enabled policy framers to gaze into the issues of blindness and resulted in substantial change at the policy level. Important among the projects are: Enumeration of the Blind in Bombay (1990), Study of NAB Community Based Rehabilitation Programme for the Rural Blind (1999), Study of NAB (India)’s Institution-based Urban Rehabilitation Programme (2003) etc.</p>
      <p>LBMRC is also engaged in two major activities – a professional library and publication of NAB (India).</p>
      
      <h4>Library</h4>
      <p>LBMRC houses a specialized Library having a rich collection of around 5,000 books and periodicals, besides reports, articles etc., on various aspects pertaining to blindness and blind welfare. It regularly receives many professional journals and magazines from within India and overseas.</p>
      <p>This Library was started in 1979 with a modest collection of books received by way of gifts and donations. In fact, when NAB initiated work for the blind in India, the volunteers who so readily assisted NAB in furthering the cause of the blind, were not trained in the specialized work they were required to do. So, to prepare them for this work, NAB (India) in the early fifties, started a library of books pertaining to blindness/blind welfare, with a gift of six sets (each of 25) of books donated by the American Foundation for Overseas Blind. Later, in December 1960 with generous help from the Lions Club of Bombay, the NAB Lions Blind Welfare Library was set up. In 1982 this library was transferred to LBMRC which also by then had built up its own collection.</p>
      <p>The LBMRC Library has both lending and reference services. Its clientele mostly comprise of professionals and research scholars. Membership of the library is open to individuals/institutions, enrolled as life/ordinary members. Individuals/Institutions from outside Mumbai can also join. This is a very unique service provided by the library, not easily available elsewhere in the country. Computerization of the library is currently underway.</p>

      <h4>Events</h4>
      <p>The Centre has organized some important events and has played a crucial role in programs organized by NAB (India). To mention a few:</p>
      <ul>
        <li><strong>National Seminar on the Role of Science & Technology in the Service of the Blind, December 19, 1981,</strong> aimed at encouraging study and research projects designed to facilitate practical participation of disabled persons in daily life. LBMRC brought out a report of this seminar in 1982.</li>
        <li><strong>Seminar on No Barriers: Thoughtful Environment for the Blind, February 12, 1992,</strong> to draw attention of civic and transport authorities, architects, builders, bank officials and the general public towards the need for creating a inclusive and accessible environment for the visually challenged. LBMRC published the report of this Seminar titled – “Seminar on No Barriers: Thoughtful Environment for the Blind, February 12, 1992 – Post Conference Report”.</li>
        <li>LBMRC provided considerable administrative support and actively participated in <strong>Vision ’98: National Conference on Low Vision</strong> organized by NAB (India) in April 1998. The post conference report was prepared by the Centre.</li>
        <li><strong>National Conference on Science & Technology (2003)</strong> organized by NAB (India) under the aegis of LBMRC intended to review the developments and role of science and technology in the service of the visually challenged; assess the relevance of the recommendations made at the earlier Seminar organized by LBMRC in 1981; and examine the extent to which the relevant recommendations were implemented; and identify the gaps. An exhibition of latest technological devices and daily living aids for the blind and those with low vision, was also organized alongside the Conference. LBMRC has prepared the Post Conference Report of this event.</li>
        <li><strong>Braille Reading Competition:</strong> On the occasion of Bi-Centenary of Louis Braille, NAB (India) organized a national-level Braille Reading Competition during Dec 2008. LBMRC offered administrative support to this event.</li>
        <li>LBMRC was also actively instrumental in designing the publicity material used during the <strong>Diamond Jubilee Celebrations of NAB (India)</strong> in 2012.</li>
      </ul>

      <h4>Magazine and Newsletter</h4>
      <p>LBMRC brings out NAB (India)’s official publications – “Blind Welfare” and “NABINDIA Newsletter”, and the Annual Report of NAB (India).</p>
    </>
  );

  const contactInfo = (
    <>
      <p><a href="#">Library Membership Rules</a></p>
      <p><a href="#">Library Membership Form</a></p>
      <p><a href="#">Blind Welfare Subscription Form</a></p>
      <p><a href="#">Publications Of NAB India</a></p>
    </>
  );

  return (
    <>
      <SEO
        title="Louis Braille Memorial Research Centre - NAB India"
        description="Explore the Louis Braille Memorial Research Centre (LBMRC) at NAB India, a hub for research on blindness-related issues, housing a specialized library and publishing key literature."
        keywords="Louis Braille Memorial Research Centre, LBMRC, research on blindness, blind welfare library, NAB India publications, Vision '98"
      />
      <ProjectPageLayout
        title="Research Library and Information"
        imageUrl="/images/Projects/research-library.jpeg"
        history={history}
        aimsAndObjectives={aimsAndObjectives}
        contactInfo={contactInfo}
      />
    </>
  );
};

export default ResearchLibrary;
