import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Company: '',
    'Last Name': ''
    // Add other form fields here
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new URLSearchParams(new FormData(form)).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        // Handle successful form submission
        console.log('Form submitted successfully');
        // Reset form fields
        form.reset();
      })
      .catch(error => {
        // Handle form submission error
        console.error('Form submission error:', error);
      });
  };

  return (
    <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
      <form id='webform583330000000339005' action='https://crm.zoho.in/crm/WebToLeadForm' name='WebToLeads583330000000339005' method='POST' onSubmit={handleSubmit} acceptCharset='UTF-8'>
        <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='659b31daccca0c70473967b130eed38edab0b4b17f03cbd2c77dedec7664fdd0' />
        <input type='hidden' name='zc_gad' id='zc_gad' value='' />
        <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='a055472592c0ec7bb3c2d3a72c9dce78262a67da270f19b8193c3a7ededd4a4d63a61322c97ffbabefcaff26cf324c51' />
        <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
        <input type='text' style={{ display: 'none' }} name='returnURL' value='null' />
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
            <label htmlFor='Company'>Company<span style={{ color: 'red' }}>*</span></label>
          </div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Company' name='Company' value={formData.Company} onChange={handleChange} maxLength='200' />
            <div className='zcwf_col_help'></div>
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}>
            <label htmlFor='Last_Name'>Last Name<span style={{ color: 'red' }}>*</span></label>
          </div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Last_Name' name='Last Name' value={formData['Last Name']} onChange={handleChange} maxLength='80' />
            <div className='zcwf_col_help'></div>
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab'></div>
          <div className='zcwf_col_fld'>
            <input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit' />
            <input type='reset' className='zcwf_button' name='reset' value='Reset' title='Reset' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
