"use client"
import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Import Firebase
import 'firebase/compat/database'; // Import Realtime Database if you're using it

// Initialize Firebase with your project config
firebase.initializeApp({
  databaseURL: 'https://worldwebsolutions-79b54-default-rtdb.europe-west1.firebasedatabase.app/',
  // Your other Firebase config here
});

interface FormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      // Get a reference to the Realtime Database
      const db = firebase.database();

      // Add the form data to the 'contacts' node in the Realtime Database
      await db.ref('messages').push(formData);

      // Clear the form after successful submission
      setFormData({
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
      });

      // Log success message
      console.log('Form data submitted successfully!');
    } catch (error) {
      // Log any errors
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div>
      <div className="m-10 flex flex-col-reverse md:flex-row mb-15 pb-10">
        <div className="w-full md:w-1/2 pr-0 md:pr-4 relative">
          <h1 className="text-3xl font-bold text-white-900 mb-4">Contactez Maintenant</h1>
          <h2 className="text-lg font-semibold text-gray-400 mb-8">Avez-vous des questions ? Écrivez un message</h2>

          <label className="block mb-2">
            <span className="text-sm text-gray-600">Nom</span>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="input input-bordered input-primary w-full" placeholder="Votre Nom" />
          </label>

          <label className="block mb-2">
            <span className="text-sm text-gray-600">Sujet</span>
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="input input-bordered input-primary w-full" placeholder="Le Sujet de votre message" />
          </label>

          <label className="block mb-2">
            <span className="text-sm text-gray-600">Email</span>
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} className="input input-bordered input-primary w-full" placeholder="Votre adresse Email" />
          </label>

          <label className="block mb-2">
            <span className="text-sm text-gray-600">Téléphone</span>
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="input input-bordered input-primary w-full" placeholder="Votre numéro de téléphone" />
          </label>

          <label className="block mb-12">
            <span className="text-sm text-gray-600">Message</span>
            <textarea name="message" value={formData.message} onChange={handleInputChange} className="textarea textarea-bordered textarea-accent w-full" placeholder="Votre message"></textarea>
          </label>

          <button className="btn btn-active w-full md:w-15 mt-4 md:mt-0 absolute bottom-0 md:right-0" onClick={handleSubmit}>Send The Message</button>
        </div>

        <div className="w-full md:w-1/2 pl-0 md:pl-4 relative overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 "></div>
          <img className="w-full h-full object-cover rounded-lg " src="learnen3.webp" alt="worldwebSolutions" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
