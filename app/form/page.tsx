"use client"
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

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

const ContactForm = () => {
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
      const db = firebase.database();
      await db.ref('messages').push(formData); // Pushing the form data to Firebase
      setFormData({
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
      });
      console.log('Form data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="m-10 flex flex-col-reverse md:flex-row mb-15 pb-10 bg-base-200 text-base-content">
      <div className="w-full md:w-1/2 pr-0 md:pr-4 relative bg-base-200 text-base-content">
        <h1 className="text-3xl font-bold text-white-900 mb-4 bg-base-200 text-base-content">Contact Us Now!</h1>
        <h2 className="text-lg font-semibold text-gray-400 mb-8 bg-base-200 ">What are you waiting for? No matter what you need, we will help you with it. All you need to do is reach out to us!</h2>

        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject of your message" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email Address" type="email" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="phone">Phone</Label>
          <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your Phone Number" type="text" />
        </LabelInputContainer>
        {/* <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Input name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" type="text" />
        </LabelInputContainer> */}
        <LabelInputContainer className='mb-12'>
          <Label htmlFor="message">Message</Label>
          <Input name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message" type="text" />
        </LabelInputContainer>

        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleSubmit}>Send The Message</button>
      </div>

      <div className="w-full md:w-1/2 pl-0 md:pl-4 relative overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 "></div>
        <img className="w-full h-full object-cover rounded-lg" src="learnen3.webp" alt="worldwebSolutions" />
      </div>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
