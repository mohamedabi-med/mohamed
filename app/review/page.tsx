"use client"
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";

firebase.initializeApp({
  databaseURL: 'https://worldwebsolutions-79b54-default-rtdb.europe-west1.firebasedatabase.app/',
  // Your other Firebase config here
});

interface ReviewData {
  name: string;
  email: string;
  review: string;
}

const ReviewForm = () => {
  const [reviewData, setReviewData] = useState<ReviewData>({
    name: '',
    email: '',
    review: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const db = firebase.database();
      await db.ref('reviews').push(reviewData); // Pushing the review data to Firebase
      setReviewData({
        name: '',
        email: '',
        review: ''
      });
      console.log('Review data submitted successfully!');
    } catch (error) {
      console.error('Error submitting review data:', error);
    }
  };

  return (
    <div className="m-10 flex flex-col-reverse md:flex-row mb-15 pb-10">
      <div className="w-full md:w-1/2 pr-0 md:pr-4 relative">
        <h1 className="text-3xl font-bold text-white-900 mb-4">Leave a Review!</h1>
        <h2 className="text-lg font-semibold text-gray-400 mb-8">We would love to hear your feedback. Please leave your review below.</h2>

        <LabelInputContainer>
          <Label htmlFor="name">Name</Label>
          <Input name="name" value={reviewData.name} onChange={handleInputChange} placeholder="Your Name" type="text" />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input name="email" value={reviewData.email} onChange={handleInputChange} placeholder="Your Email Address" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className='mb-12'>
          <Label htmlFor="review">Review</Label>
          <Input name="review" value={reviewData.review} onChange={handleInputChange} placeholder="Your Review" type="text" />
        </LabelInputContainer>

        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={handleSubmit}>Submit Review</button>
      </div>

      <div className="w-full md:w-1/2 pl-0 md:pl-4 relative overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-60 "></div>
        <img className="w-full h-full object-cover rounded-lg" src="review.jpeg" alt="worldwebSolutions" />
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

export default ReviewForm;
