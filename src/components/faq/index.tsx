"use client";

import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqMain: React.FC = () => {
    const faqs: FAQItem[] = [
        {
            question: "What type of news do you cover?",
            answer: "We cover a wide range of news topics including national and international news, politics, technology, health, entertainment, sports, and more."
        },
        {
            question: "How often do you update your news?",
            answer: "Our news team updates the site throughout the day to ensure you have access to the latest information."
        },
        {
            question: "Can I submit news tips or stories?",
            answer: "Absolutely! We welcome news tips from our readers. Please visit our 'Contact Us' page to submit your story ideas or tips."
        },
        {
            question: "Do I need to subscribe to access your content?",
            answer: "Most of our content is available for free. However, some in-depth articles and premium features may require a subscription."
        },
        {
            question: "How can I sign up for notifications?",
            answer: "You can sign up for notifications by clicking the bell icon on our homepage or entering your email address in the subscription box."
        },
        {
            question: "I forgot my password. What should I do?",
            answer: "Click on the 'Forgot Password?' link on the login page. Enter your email address, and we’ll send you a link to reset your password."
        },
        {
            question: "How can I advertise on your site?",
            answer: "For advertising inquiries, please visit our 'Advertise With Us' page."
        },
        {
            question: "Do you have a mobile app?",
            answer: "Yes, we have a mobile app available for both iOS and Android."
        },
    ];

    return (
        <div className="container mx-auto p-4 mb-[50px]">
            <div className='bg-[#0E1E32] py-[20px] px-[40px] mb-[50px]'>
            <h1 className="text-[42px] font-semibold text-white mb-[10px]">Frequently Asked Questions</h1>
            </div>
            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const [isOpen, setIsOpen] = useState(false);

                    const toggleAccordion = () => {
                        setIsOpen(!isOpen);
                    };

                    return (
                        <div key={index} className="border p-4 rounded-lg shadow">
                            <h2 onClick={toggleAccordion} className="cursor-pointer text-[18px] font-semibold">
                                {faq.question}
                            </h2>
                            {isOpen && <p className="mt-2">{faq.answer}</p>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default faqMain;
