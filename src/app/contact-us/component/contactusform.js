// 'use client';

// import { useState } from 'react';

// const initialState = {
//   firstName: '',
//   lastName: '',
//   companyName: '',
//   email: '',
//   phone: '',
//   jobTitle: '',
//   country: '',
//   category: '',
// };

// const ContactUsForm = () => {
//   const [formData, setFormData] = useState(initialState);
//   const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     setMessage('');

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         setStatus('success');
//         setMessage('Your message has been sent! We will get back to you shortly.');
//         setFormData(initialState);
//       } else {
//         setStatus('error');
//         setMessage(data.message || 'Something went wrong. Please try again.');
//       }
//     } catch (err) {
//       setStatus('error');
//       setMessage('Network error. Please try again.');
//     }
//   };

//   return (
//     <div className='leadGenFrame'>
//       <h2 className='mb_24'>Connect with Sam Tech, by completing the form below</h2>

//       {status === 'success' && (
//         <div style={{ padding: '12px 16px', background: '#d1fae5', color: '#065f46', borderRadius: '8px', marginBottom: '20px' }}>
//           ✅ {message}
//         </div>
//       )}
//       {status === 'error' && (
//         <div style={{ padding: '12px 16px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '20px' }}>
//           ❌ {message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div className='row'>
//           <div className='col-lg-6'>
//             <div className="mb_24">
//               <input placeholder='First name' type="text" name="firstName"
//                 value={formData.firstName} onChange={handleChange}
//                 className="mainInput" required />
//             </div>
//           </div>
//           <div className='col-lg-6'>
//             <div className="mb_24">
//               <input placeholder='Last name' type="text" name="lastName"
//                 value={formData.lastName} onChange={handleChange}
//                 className="mainInput" />
//             </div>
//           </div>
//         </div>

//         <div className='row'>
//           <div className='col-lg-6'>
//             <div className="mb_24">
//               <input placeholder='Company name' type="text" name="companyName"
//                 value={formData.companyName} onChange={handleChange}
//                 className="mainInput" />
//             </div>
//           </div>
//           <div className='col-lg-6'>
//             <div className="mb_24">
//               <input placeholder='Email Address' type="email" name="email"
//                 value={formData.email} onChange={handleChange}
//                 className="mainInput" required />
//             </div>
//           </div>
//         </div>

//         <div className='row'>
//           <div className='col-lg-6'>
//             <div className="mb_24">
//               <input placeholder='Phone Number' type="text" name="phone"
//                 value={formData.phone} onChange={handleChange}
//                 className="mainInput" />
//             </div>
//           </div>
//           <div className='col-lg-6'>
//             <div className="mb_24">
//               <select className="mainInput" name="category"
//                 value={formData.category} onChange={handleChange}>
//                 <option value="">Select Category</option>
//                 <option value="General Inquiry">General Inquiry</option>
//                 <option value="Technical Support">Technical Support</option>
//                 <option value="Sales">Sales</option>
//                 <option value="Partnership">Partnership</option>
//               </select>
//             </div>
//           </div>
       
//         </div>

//         <div className='row'>
//           <div className='col-lg-6'>
//             <div className="mb_24">
//               <input placeholder='Country' type="text" name="country"
//                 value={formData.country} onChange={handleChange}
//                 className="mainInput" />
//             </div>
//           </div>
//              {/* <div className='col-lg-6'>
//             <div className="mb_24">
//               <input placeholder='Job Title' type="text" name="jobTitle"
//                 value={formData.jobTitle} onChange={handleChange}
//                 className="mainInput" />
//             </div>
//           </div> */}
//         </div>

//         <button type="submit" className="mainbtn" disabled={status === 'loading'}>
//           {status === 'loading' ? 'Sending...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactUsForm;

'use client';

import { useState } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  companyName: '',
  websiteUrl: '',
  country: '',
  howDidYouFindUs: '',
  subject: '',
  message: '',
  // agreeToTerms: false,
};

const ContactUsForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // [name]: type === 'checkbox' ? checked : value 
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!formData.agreeToTerms) {
    //   setStatus('error');
    //   setMessage('Please agree to the Terms and Conditions and Privacy Policy.');
    //   return;
    // }
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Your message has been sent! We will get back to you shortly.');
        setFormData(initialState);
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className='leadGenFrame'>
      <h2 className='mb_8'>Reach Us Quickly</h2>
      <hr style={{ marginBottom: '16px' }} />
      <p className='fontSize14 fontWeight400 mb_24' style={{ color: '#444' }}>
        Please let us know if you have a question, want to leave a comment, or would like further information about our services.
      </p>

      {status === 'success' && (
        <div style={{ padding: '12px 16px', background: '#d1fae5', color: '#065f46', borderRadius: '8px', marginBottom: '20px' }}>
          ✅ {message}
        </div>
      )}
      {status === 'error' && (
        <div style={{ padding: '12px 16px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '20px' }}>
          ❌ {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        {/* Row 1: First Name + Last Name */}
        <div className='row'>
          <div className='col-lg-6'>
            <div className="mb_24">
              <input placeholder='First Name' type="text" name="firstName"
                value={formData.firstName} onChange={handleChange}
                className="mainInput" required />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="mb_24">
              <input placeholder='Last Name' type="text" name="lastName"
                value={formData.lastName} onChange={handleChange}
                className="mainInput" />
            </div>
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className='row'>
          <div className='col-lg-6'>
            <div className="mb_24">
              <input placeholder='Email Address' type="email" name="email"
                value={formData.email} onChange={handleChange}
                className="mainInput" required />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="mb_24">
              <input placeholder='Phone Number' type="text" name="phone"
                value={formData.phone} onChange={handleChange}
                className="mainInput" />
            </div>
          </div>
        </div>

        {/* Row 3: Company Name + Website URL */}
        <div className='row'>
          <div className='col-lg-6'>
            <div className="mb_24">
              <input placeholder='Company Name' type="text" name="companyName"
                value={formData.companyName} onChange={handleChange}
                className="mainInput" />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="mb_24">
              <input placeholder='Website URL' type="text" name="websiteUrl"
                value={formData.websiteUrl} onChange={handleChange}
                className="mainInput" />
            </div>
          </div>
        </div>

        {/* Row 4: Country + How did you find us */}
        <div className='row'>
          <div className='col-lg-6'>
            <div className="mb_24">
              <select className="mainInput" name="country"
                value={formData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="UAE">UAE</option>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className="mb_24">
              <select className="mainInput" name="howDidYouFindUs"
                value={formData.howDidYouFindUs} onChange={handleChange}>
                <option value="">- How did you find us? -</option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 5: Subject */}
        <div className='row'>
          <div className='col-12'>
            <div className="mb_24">
              <input placeholder='Subject' type="text" name="subject"
                value={formData.subject} onChange={handleChange}
                className="mainInput" />
            </div>
          </div>
        </div>

        {/* Row 6: Message */}
        <div className='row'>
          <div className='col-12'>
            <div className="mb_24">
              <textarea
                placeholder='How may we help you?'
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mainInput"
                rows={5}
                style={{ resize: 'vertical', width: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* Checkbox */}
        {/* <div className='row'>
          <div className='col-12'>
            <div className="mb_24" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <input
                type="checkbox"
                name="agreeToTerms"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                style={{ marginTop: '3px', cursor: 'pointer' }}
              />
              <label htmlFor="agreeToTerms" style={{ fontSize: '14px', cursor: 'pointer' }}>
                I have read and agree to the{' '}
                <a href="/terms-and-conditions" style={{ color: '#e00000', fontWeight: '600' }}>Terms and Conditions</a>
                {' '}and{' '}
                <a href="/privacy-policy" style={{ color: '#e00000', fontWeight: '600' }}>Privacy Policy</a>
              </label>
            </div>
          </div>
        </div> */}

        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="mainbtn" disabled={status === 'loading'}
            style={{ minWidth: '160px' }}>
            {status === 'loading' ? 'Sending...' : 'Submit'}
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactUsForm;