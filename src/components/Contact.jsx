import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Linkedin from './LinkedinIcon';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Send email using FormSubmit AJAX endpoint
    fetch("https://formsubmit.co/ajax/namithakv605@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Portfolio Contact Message",
        message: formData.message
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === "true" || data.success) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setStatus('idle'), 5000);
        } else {
          setStatus('error');
        }
      })
      .catch(error => {
        console.error("Error submitting contact form:", error);
        setStatus('error');
      });
  };

  return (
    <section 
      id="contact" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Get In Touch
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have an open role or a freelance project? Send a message or connect directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Quick Connect Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`p-6 rounded-2xl border ${
              darkMode 
                ? 'bg-slate-900/30 border-slate-800/80 shadow-md shadow-slate-950/20' 
                : 'bg-white border-slate-200/85 shadow-sm'
            }`}>
              <h3 className="text-lg font-bold mb-6 tracking-tight">
                Connect Directly
              </h3>
              
              <div className="space-y-5">
                {/* Email */}
                <a 
                  href="mailto:namithakv605@gmail.com"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <span className={`p-3 rounded-xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-800/50 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300' 
                      : 'bg-slate-100 text-indigo-600 group-hover:bg-indigo-50 group-hover:text-indigo-700'
                  }`}>
                    <Mail size={18} />
                  </span>
                  <div>
                    <span className={`block text-xs font-semibold uppercase tracking-wider ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Email
                    </span>
                    <span className={`text-sm font-medium transition-colors group-hover:text-indigo-500 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      namithakv605@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:+447768148686"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <span className={`p-3 rounded-xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-800/50 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300' 
                      : 'bg-slate-100 text-indigo-600 group-hover:bg-indigo-50 group-hover:text-indigo-700'
                  }`}>
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className={`block text-xs font-semibold uppercase tracking-wider ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Phone
                    </span>
                    <span className={`text-sm font-medium transition-colors group-hover:text-indigo-500 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      +44 776 814 8686
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <span className={`p-3 rounded-xl ${
                    darkMode ? 'bg-slate-800/50 text-indigo-400' : 'bg-slate-100 text-indigo-600'
                  }`}>
                    <MapPin size={18} />
                  </span>
                  <div>
                    <span className={`block text-xs font-semibold uppercase tracking-wider ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Location
                    </span>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      United Kingdom
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/namithakannoth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <span className={`p-3 rounded-xl transition-all duration-300 ${
                    darkMode 
                      ? 'bg-slate-800/50 text-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300' 
                      : 'bg-slate-100 text-indigo-600 group-hover:bg-indigo-50 group-hover:text-indigo-700'
                  }`}>
                    <Linkedin size={18} />
                  </span>
                  <div>
                    <span className={`block text-xs font-semibold uppercase tracking-wider ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      LinkedIn
                    </span>
                    <span className={`text-sm font-medium transition-colors group-hover:text-indigo-500 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      linkedin.com/in/namithakannoth
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className={`p-6 rounded-2xl border ${
              darkMode 
                ? 'bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border-indigo-500/25' 
                : 'bg-indigo-50/50 border-indigo-100'
            }`}>
              <h4 className="font-bold mb-2 text-sm tracking-tight text-indigo-400 dark:text-indigo-300">
                Looking for my CV?
              </h4>
              <p className={`text-xs mb-4 leading-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Get the print-ready PDF resume containing full history and certifications details.
              </p>
              <a
                href="/NamithaKannothVeedu.pdf"
                download="Namitha_Kannoth_Veedu_Resume.pdf"
                className="w-full text-center inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-300 rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/20"
              >
                Download Resume PDF
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className={`lg:col-span-3 p-6 sm:p-8 rounded-2xl border ${
            darkMode 
              ? 'bg-slate-900/30 border-slate-800/80 shadow-md shadow-slate-950/20' 
              : 'bg-white border-slate-200/85 shadow-sm'
          }`}>
            <h3 className="text-lg font-bold mb-6 tracking-tight">
              Send a Message
            </h3>

            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in-up">
                <CheckCircle2 size={48} className="text-emerald-500 mb-4 animate-bounce" />
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="p-4 rounded-xl text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 animate-fade-in-up">
                    Oops! Something went wrong while sending your message. Please try again or email directly to <a href="mailto:namithakv605@gmail.com" className="underline font-bold">namithakv605@gmail.com</a>.
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                        darkMode 
                          ? 'border-slate-800 bg-slate-950 text-slate-100 focus:border-indigo-500/80' 
                          : 'border-slate-200 bg-slate-50 text-slate-800 focus:border-indigo-500'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                        darkMode 
                          ? 'border-slate-800 bg-slate-950 text-slate-100 focus:border-indigo-500/80' 
                          : 'border-slate-200 bg-slate-50 text-slate-800 focus:border-indigo-500'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                      darkMode 
                        ? 'border-slate-800 bg-slate-950 text-slate-100 focus:border-indigo-500/80' 
                        : 'border-slate-200 bg-slate-50 text-slate-800 focus:border-indigo-500'
                    }`}
                    placeholder="Job Opportunity / Freelance Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 resize-none ${
                      darkMode 
                        ? 'border-slate-800 bg-slate-950 text-slate-100 focus:border-indigo-500/80' 
                        : 'border-slate-200 bg-slate-50 text-slate-800 focus:border-indigo-500'
                    }`}
                    placeholder="Hi Namitha, I'd like to discuss an opportunity..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
