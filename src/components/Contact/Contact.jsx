import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import '../../Contact.css'; 

export default function Contact() {
  const handleInputChange = (e) => {
    const label = e.target.previousElementSibling;
    if (e.target.value) {
      label.classList.add('show');
    } else {
      label.classList.remove('show');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 pt-32">
        <h1 className="text-slate-800 font-bold md:text-4xl text-3xl p-5 text-center">
          CONTACT SECTION
        </h1>
        <div className="flex flex-row items-center space-x-5 justify-center text-slate-800 text-center">
          <div className="w-24 h-1 bg-slate-800 rounded text-center"></div>
          <i className="fa-solid fa-star text-center"></i>
          <div className="w-24 h-1 bg-slate-800 rounded text-center"></div>
        </div>

        <div className="md:w-7/12 mx-auto">
          <form action="" className="p-3 mx-auto flex flex-col text-start">
            <div className="form-group">
              <label htmlFor="userName" className="form-label">
                userName :
              </label>
              <input
                type="text"
                placeholder="userName"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userAge" className="form-label">
                userAge :
              </label>
              <input
                type="text"
                placeholder="userAge"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userEmail" className="form-label">
                userEmail :
              </label>
              <input
                type="text"
                placeholder="userEmail"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="userPassword" className="form-label">
                userPassword :
              </label>
              <input
                type="password"
                placeholder="userPassword"
                className="form-input"
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="bg-teal-500 px-3 py-2 mx-2 text-white rounded">
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
