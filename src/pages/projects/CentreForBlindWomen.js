import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';

const CentreForBlindWomen = () => {
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

  return (
    <ProjectPageLayout
      title="Centre For Blind Women"
      imageUrl="/images/Projects/center-of-blind.jpg"
      aimsAndObjectives={aimsAndObjectives}
    />
  );
};

export default CentreForBlindWomen;
