// components/ContactForm.js
import React from 'react';
import styles from '../styles/ContactForm.module.css'; // Import CSS module

const ContactForm = () => {
  function checkMandatory583330000000339005() {
    var mndFileds = new Array('Company', 'Last Name');
    var fldLangVal = new Array('Company', 'Last\x20Name');
    for (var i = 0; i < mndFileds.length; i++) {
      var fieldObj = document.forms['WebToLeads583330000000339005'][mndFileds[i]];
      if (fieldObj) {
        if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
          if (fieldObj.type == 'file') {
            alert('Please select a file to upload.');
            fieldObj.focus();
            return false;
          }
          alert(fldLangVal[i] + ' cannot be empty.');
          fieldObj.focus();
          return false;
        } else if (fieldObj.nodeName == 'SELECT') {
          if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
            alert(fldLangVal[i] + ' cannot be none.');
            fieldObj.focus();
            return false;
          }
        } else if (fieldObj.type == 'checkbox') {
          if (fieldObj.checked == false) {
            alert('Please accept  ' + fldLangVal[i]);
            fieldObj.focus();
            return false;
          }
        }
        try {
          if (fieldObj.name == 'Last Name') {
            name = fieldObj.value;
          }
        } catch (e) {}
      }
    }
    var urlparams = new URLSearchParams(window.location.search);
    if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
      var webform = document.getElementById('webform583330000000339005');
      var service = urlparams.get('service');
      var smarturlfield = document.createElement('input');
      smarturlfield.setAttribute('type', 'hidden');
      smarturlfield.setAttribute('value', service);
      smarturlfield.setAttribute('name', 'service');
      webform.appendChild(smarturlfield);
    }
    document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
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
        onSubmit='javascript:document.charset="UTF-8"; return checkMandatory583330000000339005()'
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
