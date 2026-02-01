import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';




const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };


// service_yp4dk45
// template_vahite2
// rofgI82PaoGVUxZV9


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

      'service_yp4dk45',
      'template_vahite2',
   
        {
          from_name: form.name,
          to_name: 'Ermias D.A',
          from_email: form.email,
          subject: form.subject,
          to_email: 'ermiasdejene866@gmail.com',
          message: form.message,
        },
        // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        'rofgI82PaoGVUxZV9'
       
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="contact-section c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="contact-frame relative min-h-screen flex items-center justify-center flex-col overflow-hidden">
        <img
          src="/assets/terminal.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          aria-hidden
        />

        <div className="contact-container relative z-10 w-full max-w-xl overflow-hidden">
          <h3 className="head-text break-words">Let&apos;s talk</h3>
          <p className="contact-intro text-base sm:text-lg text-white-600 mt-3 break-words">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 sm:mt-12 flex flex-col space-y-5 sm:space-y-7">
            <label className="space-y-2 sm:space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-2 sm:space-y-3">
              <span className="field-label">Your Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>



            <label className="space-y-2 sm:space-y-3">
              <span className="field-label">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Requesting for a Personal Website Development"
              />
            </label>




            <label className="space-y-2 sm:space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input field-textarea resize-y min-h-[100px] max-h-[200px] sm:min-h-[120px] sm:max-h-[240px]"
                placeholder="Share your thoughts or inquiries here..."
              />
            </label>

            <button className="field-btn w-full sm:w-auto" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="" className="field-btn_arrow" aria-hidden />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;