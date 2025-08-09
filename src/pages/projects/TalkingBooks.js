import React from 'react';
import ProjectPageLayout from '../../components/ProjectPageLayout';
import SEO from '../../components/SEO';

const TalkingBooks = () => {
  const history = (
    <p>The Talking Book Centre of the National Association for the Blind, India has been recording and supplying books for the Visually Challenged in audio format since 1963.  If the content of the book is more it is advisable to record the same in audio format in comparison with Braille Books. Text Books and support study material for Secondary, Higher Secondary, Graduation, Post-Graduation, Competitive Exams and Law College are recorded in audio and supplied to Visually Impaired members of our library.</p>
  );

  const aimsAndObjectives = (
    <>
      <p>The formal format is digital audio and is circulated in CDs, downloaded on the static devices of the Members or delivered online. Priority is generally given for textbooks prescribed by various Education Boards and Universities in Maharashtra and other States, General Knowledge and reference books recommended for Professional Courses and Competitive Examination. Books of general interest like novels, classics, biographies, travelogues and short stories are also recorded. The Centre’s three acoustically designed Studios where recording is carried out in two shifts churn out books in English and Indian languages – Hindi, Marathi and Gujarati. The Talking Book Library has the membership strength of 2,939 i.e. 2,759 Individuals and 180 Institutions. The total books collection with us is 5,711 as on 2022.</p>
      <p>Online facility was made available to our Members from November 2018. A Member who wishes to receive audio books online can now send a request through email to our Library. The Library uploads the audio book online and sends the link of that book to the registered email ID of the Member with the Library. This book can be downloaded by the Member for his use from this link.</p>
      <img src="/images/Projects/talking-book-1.jpg" alt="Talking book recording session" style={{ width: '100%', margin: '20px 0' }} />
    </>
  );

  const contactInfo = (
    <>
      <p>For more information about online facility and to become a member of the Talking Book Library contact: 9372766319 or mail to nab.india.library@gmail.com</p>
      <h4>How you can help us</h4>
      <img src="/images/Projects/talking-book-2.jpg" alt="Volunteer reading for a talking book" style={{ width: '100%', margin: '20px 0' }} />
      <ul>
        <li>If you have a good voice and inflection, you may be interested in volunteering to record at our Studios. Audition tests are scheduled on 1st, 3rd and 5th Saturdays of a month, by prior appointment on Phone – 24952913 / 24935370 / 24935365 / 24932539 / 24918528 (Extensions: 240/239). Recording is carried out in two shifts – 10 am to 1 pm and 2 pm to 5 pm. For recording a general/educational book one needs to visit the Studios at least twice or thrice a week during one of the two shifts.</li>
        <li>You may like to volunteer during your spare time to read or record for our visually challenged students at your home. For this please let us know your contact details and the languages you are fluent in, so that we can share these details with our members, who will get in touch with you directly as and when they need your assistance.</li>
        <li>For those who are residing out of Mumbai and are interested in recording books or doing any other voluntary work for the Visually Challenged, you may contact NAB, India’s Branch in your State. Click here to download State Branches List</li>
        <li>You are welcome to visit the Centre on any working Saturday between 10 am to 4 pm and observe the work being carried out. We are closed on 2nd and 4th Saturdays, Sundays, and days specified in the list. Click here to download Holiday List For further information contact us on Phone Number already mentioned in this page.</li>
        <li>For address and e-mail Click here</li>
      </ul>
      <h4>Important Information:</h4>
      <p>Members of the Library may get the downloadable link of the desired book by sending a request note to nab.india.library@gmail.com with following details:</p>
      <ul>
        <li>Name of Member</li>
        <li>g-mail account ID</li>
        <li>Membership Number</li>
        <li>Mobile Number</li>
        <li>Book Title</li>
        <li>Accession Code</li>
      </ul>
      <p>The downloadable link can be used only by authorised g-mail account holder.</p>
      <img src="/images/Projects/talking-book-3.jpg" alt="A collection of talking books" style={{ width: '100%', margin: '20px 0' }} />
      <p><a href="https://nabindia.org.in/wp-content/uploads/2024/04/All-Marathi-Books.xlsx" target="_blank" rel="noopener noreferrer">Click The link below to get the complete list of Marathi Audio Books</a></p>
      <p><a href="https://nabindia.org.in/wp-content/uploads/2024/04/All-Hindi-Books.xlsx" target="_blank" rel="noopener noreferrer">Click The link below to get the complete list of Hindi Audio Books</a></p>
      <p><a href="https://nabindia.org.in/wp-content/uploads/2024/04/All-English-Books.xlsx" target="_blank" rel="noopener noreferrer">Click The link below to get the complete list of English Audio Books</a></p>
      <p><a href="https://nabindia.org.in/wp-content/uploads/2024/04/All-Gujarathi-Books.xlsx" target="_blank" rel="noopener noreferrer">Click The link to get the complete list of Gujarathi Audio Books</a></p>
      <p><a href="https://nabindia.org.in/wp-content/uploads/2024/04/All-other-languages-Books.xlsx" target="_blank" rel="noopener noreferrer">Click The link to get the complete list of Punjabi, Kannada, Tamil and Sanskrit Audio Books</a></p>
    </>
  );

  return (
    <>
      <SEO
        title="Talking Books Library - Audio Books for the Visually Impaired"
        description="The NAB India Talking Book Centre provides a vast library of audiobooks in various languages, including textbooks, literature, and more, available online and on CD for visually impaired individuals."
        keywords="Talking books India, audiobooks for blind, NAB library, digital talking books, audio library for visually impaired"
      />
      <ProjectPageLayout
        title="Talking Books"
        imageUrl="/images/Projects/talking-book.jpg"
        history={history}
        aimsAndObjectives={aimsAndObjectives}
        contactInfo={contactInfo}
      />
    </>
  );
};

export default TalkingBooks;
