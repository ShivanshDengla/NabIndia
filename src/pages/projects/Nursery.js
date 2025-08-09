import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const Nursery = () => {
  const history = (
    <>
      <p>Open to children in age-group 2½–5 years, the NAB Mata Lachmi Nursery for the Blind was launched on August 15, 1969, in the spacious premises of Mata Lachmi Trust building at Sion, Mumbai. This Nursery was a pioneering attempt of NAB (India) towards early intervention for blind children. Besides space, the donor – Her Holiness Mata Lachmi – had also offered NAB Rs.10,000 for equipment and other devices.</p>
    </>
  );

  const aimsAndObjectives = (
    <>
      <h4>Program for Multi-Disabled Visually Impaired (MDVI)</h4>
      <ul>
        <li>Early Intervention.</li>
        <li>Functional assessment.</li>
        <li>Academic Training – administering primary school curriculum to educable MDVI children, and enabling them to appear for examinations through municipal schools in the vicinity.</li>
        <li>Picnics and Outings.</li>
        <li>Intensive training in plus curriculum and gradually facilitating their inclusion in special schools or IE programs.</li>
      </ul>
      <p>Through these measures and diversified services, the Nursery has been able to substantially increase its coverage.</p>
    </>
  );

  return (
    <>
      <SEO
        title="NAB Mata Lachmi Nursery for the Blind - Early Intervention"
        description="The NAB Mata Lachmi Nursery for the Blind offers early intervention programs for visually impaired and multi-disabled children aged 2½–5, providing a foundation for their future education and development."
        keywords="NAB Nursery, early intervention for blind children, Mata Lachmi Nursery, education for visually impaired toddlers, MDVI program"
      />
      <ProjectPageLayout
        title="Nursery"
        imageUrl="/images/Projects/nursery.png"
        history={history}
        aimsAndObjectives={aimsAndObjectives}
      />
    </>
  );
};

export default Nursery;
