import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const CommunityBasedRehabilitation = () => {
  const aimsAndObjectives = (
    <>
      <p>Nesciunt quaerat consequat class aliqua excepteur quos ultrices, alias eleifend litora dictum cillum a veritatis, sunt molestiae laboris convallis laboriosam aliquet bibendum vestibulum pellentesque cum adipisci. Ratione laborum, lacinia! Modi, commodo expedita incididunt eligendi voluptate dolore consequat illum cupiditate, litora egestas orci posuere molestiae deserunt ornare odio laboriosam, nibh morbi, irure magna turpis ducimus, natoque, semper parturient exercitation rerum.</p>
      <p>Aspernatur beatae consequat magnam, consectetuer eius, occaecati. Vero ex lectus quia magna class similique dapibus, ipsum, dolores tincidunt, dui similique! Sociis numquam sociosqu.</p>
      <h4>Our Main Goals</h4>
      <p>Aspernatur beatae consequat magnam, consectetuer eius, occaecati. Vero ex lectus quia magna class similique dapibus, ipsum, dolores tincidunt, dui similique! Sociis numquam sociosqu? Magna, cum exercitation possimus voluptatem, rerum nam inventore illo tempore.</p>
      <ul>
        <li>Porta tempora facilisi, hac.</li>
        <li>Beatae hac ultrices, nisi emper beatae.</li>
        <li>Incididunt vel inci dunticot.</li>
        <li>Porta tempora facilisi, hacit quisque.</li>
        <li>Porta tempora facilisi, hac.</li>
        <li>Incididunt vel inci dunticot ipsum.</li>
      </ul>
    </>
  );

  const contactInfo = (
    <>
        <h4>More Campaign</h4>
        <h5>Send Child to School</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h5>Fund Raising for Poor</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h5>Food for Needy People</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h4>Raise Hand for Charity</h4>
        <p>Hic commodo odio pharetra magni aliquet posuere aptent mus leo class urna.</p>
    </>
  );

  return (
    <ProjectPageLayout
      title="Community Based Rehabilitation"
      imageUrl="/images/Projects/community-based-rehab.png"
      aimsAndObjectives={aimsAndObjectives}
      contactInfo={contactInfo}
    />
  );
};

export default CommunityBasedRehabilitation;
