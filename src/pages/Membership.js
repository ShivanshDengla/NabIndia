// MEMBERSHIP PAGE TEMPORARILY DISABLED
/*
import React, { useState, useRef, useEffect } from 'react';
import SEO from '../components/SEO';
import { memberNames } from './memberNames';
import './Membership.css';

const Membership = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    memberName: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef(null);

  // Member names are imported from ./memberNames.js

  const filteredMembers = memberNames.filter(member =>
    member.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMemberSelect = (member) => {
    setFormData(prev => ({
      ...prev,
      memberName: member
    }));
    setSearchTerm(member);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use fetch with proper headers to avoid CORS issues
      const formDataToSend = new FormData();
      formDataToSend.append('email', formData.email);
      formDataToSend.append('mobile', formData.mobile);
      formDataToSend.append('memberName', formData.memberName);
      formDataToSend.append('timestamp', new Date().toISOString());

      const response = await fetch('https://script.google.com/macros/s/AKfycbx-mlAwieuFFCetfjMDc9gliKgdwv6qiEln5nssJeNYdEJGSRInSybztXspSP0gZnJOdw/exec', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // This bypasses CORS issues
      });

      // Since we use no-cors, we can't read the response, but the data should be sent
      alert('Thank you for your membership registration! We will contact you soon.');
      setFormData({ email: '', mobile: '', memberName: '' });
      setSearchTerm('');
      
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Membership Registration | NAB India"
        description="Join the National Association for the Blind India as a member. Register for membership and be part of our mission to empower the visually impaired."
        keywords="NAB India membership, join NAB, blind association membership, visually impaired support"
      />
      <div className="membership-page">
        <div className="membership-container">
          <div className="membership-header">
            <h1>Membership Registration</h1>
            <p>Join the National Association for the Blind India and be part of our mission to empower the visually impaired community.</p>
          </div>

          <div className="membership-form-container">
            <form className="membership-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="memberName">Select Your Name *</label>
                <div className="custom-dropdown" ref={dropdownRef}>
                  <input
                    type="text"
                    id="memberName"
                    name="memberName"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(true)}
                    required
                    placeholder="Type to search your name from 4000+ members"
                    autoComplete="off"
                  />
                  <div className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      {filteredMembers.length > 0 ? (
                        filteredMembers.slice(0, 50).map((member, index) => (
                          <div
                            key={index}
                            className="dropdown-item"
                            onClick={() => handleMemberSelect(member)}
                          >
                            {member}
                          </div>
                        ))
                      ) : (
                        <div className="dropdown-item no-results">No members found</div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Register for Membership'}
              </button>
            </form>

            <div className="membership-info">
              <h3>Why Join NAB India?</h3>
              <ul>
                <li>Be part of a supportive community working towards empowerment</li>
                <li>Access to exclusive programs and activities</li>
                <li>Stay updated with latest developments and opportunities</li>
                <li>Contribute to meaningful social change</li>
                <li>Network with like-minded individuals and organizations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
*/
