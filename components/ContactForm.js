// components/ContactForm.js
import React from 'react';
import styles from '../styles/ContactForm.module.css'; // Import CSS module

const ContactForm = () => {
    function checkMandatory583330000000339005() {
        var mndFileds = ['Company', 'Last Name']; // List of mandatory fields
        var fldLangVal = ['Company', 'Last\x20Name']; // Display names of mandatory fields
    
        for (var i = 0; i < mndFileds.length; i++) {
            var fieldObj = document.forms['WebToLeads583330000000339005'][mndFileds[i]]; // Select the field element by its name
    
            if (fieldObj) {
                if (((fieldObj.value).trim()).length == 0) { // Check if the field is empty
                    alert(fldLangVal[i] + ' cannot be empty.');
                    fieldObj.focus();
                    return false;
                }
            } else {
                console.error('Field ' + mndFileds[i] + ' not found.'); // Log an error if the field is not found
                return false;
            }
        }
    
        // If all fields are filled, disable the submit button to prevent multiple submissions
        var submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit');
        if (submitBtn) {
            submitBtn.setAttribute('disabled', true);
        } else {
            console.error('Submit button not found.');
        }
    }
    

  function tooltipShow583330000000339005(el) {
    var tooltip = el.nextElementSibling;
    var tooltipDisplay = tooltip.style.display;
    if (tooltipDisplay == 'none') {
      var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
      for (var i = 0; i < allTooltip.length; i++) {
        allTooltip[i].style.display = 'none';
      }
      tooltip.style.display = 'block';
    } else {
      tooltip.style.display = 'none';
    }
  }

  return (
    <div id='crmWebToEntityForm' className={`${styles.crmWebToEntityForm} ${styles.zcwf_lblLeft}`}>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='content-type' content='text/html;charset=UTF-8' />

      <form
  id='webform583330000000339005'
  action='https://crm.zoho.in/crm/WebToLeadForm'
  name='WebToLeads583330000000339005'
  method='POST'
  onSubmit={(event) => {
    event.preventDefault(); // Prevent default form submission
    checkMandatory583330000000339005(); // Call your form validation function
  }}
  acceptCharset='UTF-8'
>
        <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='301390302ac5208fa9c9d258747757f5410edba55580cadaf090cd53cfaa1cba' />
        <input type='hidden' name='zc_gad' id='zc_gad' value='' />
        <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='91c9cb0353618abac9c19863620775ef36911c41096cd10529d54bc8f30e515106c89f9d2ad10417c9ee0b46566b7a78' />
        <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
        <input type='text' style={{ display: 'none' }} name='returnURL' value='https://canda-new-13-update.vercel.app/thank-you/' />
        {/* Do not remove this code. */}
        <div className='zcwf_title'>contact us</div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab'>
            <label htmlFor='Company'>
              Company<span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Company' name='Company' maxLength='200' />
            <div className='zcwf_col_help'></div>
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab'>
            <label htmlFor='Last_Name'>
              Last Name<span style={{ color: 'red' }}>*</span>
            </label>
          </div>
          <div className='zcwf_col_fld'>
            <input type='text' id='Last_Name' name='Last Name' maxLength='80' />
            <div className='zcwf_col_help'></div>
          </div>
        </div>
        <div className='zcwf_row'>
          <div className='zcwf_col_lab'></div>
          <div className='zcwf_col_fld'>
            <input type='submit' id='formsubmit' className={`formsubmit ${styles.zcwf_button}`} value='Submit' title='Submit' />
            <input type='reset' className={styles.zcwf_button} name='reset' value='Reset' title='Reset' />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
