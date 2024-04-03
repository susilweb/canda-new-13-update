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
    console.log(formData); // For demonstration, log form data to console
  };

  return (
    <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
      {/* Include meta and other HTML tags here */}
      <form id='webform583330000000339005' action='https://crm.zoho.in/crm/WebToLeadForm' name='WebToLeads583330000000339005' method='POST' onSubmit={handleSubmit} acceptCharset='UTF-8'>
        {/* Include input fields here */}
        <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='659b31daccca0c70473967b130eed38edab0b4b17f03cbd2c77dedec7664fdd0' />
        {/* Add other input fields */}
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
        {/* Add other input fields */}
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
