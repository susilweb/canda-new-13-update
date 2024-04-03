// ContactForm.js

import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        company: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm' style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px' }}>
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8' />

            <form id='webform583330000000339005' action='https://crm.zoho.in/crm/WebToLeadForm' name='WebToLeads583330000000339005' method='POST' onSubmit={handleSubmit} acceptCharset='UTF-8'>
                <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='ad5c4e51162238d204dc5b9178c4c687f9acbe466af2e0ae9e7ee4a13ae57565' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='19c0a3b5fa3815ccfa9f3584c4d2fd8b943b9eee353c8adad5a9ba467600b3dc4139560365218aa5dbf412848aa1df65' />
                <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' value='https://canda-new-13-update.vercel.app/thank-you/' />

                <div className='zcwf_title' style={{ maxWidth: '600px', color: 'black', fontFamily: 'Arial' }}>contact us</div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor='First_Name'>First Name</label></div>
                    <div className='zcwf_col_fld'><input type='text' id='First_Name' name='firstName' value={formData.firstName} onChange={handleChange} maxLength='40' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor='Last_Name'>Last Name<span style={{ color: 'red' }}>*</span></label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Last_Name' name='lastName' value={formData.lastName} onChange={handleChange} maxLength='80' required /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor='Email'>Email</label></div>
                    <div className='zcwf_col_fld'><input type='text' ftype='email' autoComplete='false' id='Email' name='email' value={formData.email} onChange={handleChange} crmlabel='' maxLength='100' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor='Mobile'>Mobile</label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Mobile' name='mobile' value={formData.mobile} onChange={handleChange} maxLength='30' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor='Designation'>Company</label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Designation' name='company' value={formData.company} onChange={handleChange} maxLength='100' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab' style={{ fontSize: '12px', fontFamily: 'Arial' }}><label htmlFor='Description'>Description</label></div>
                    <div className='zcwf_col_fld'><textarea id='Description' name='description' value={formData.description} onChange={handleChange}></textarea></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'></div>
                    <div className='zcwf_col_fld'><input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit' /><input type='reset' className='zcwf_button' name='reset' value='Reset' title='Reset' /></div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
