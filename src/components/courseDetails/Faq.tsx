import React, { useState } from "react";

const EventDetails = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 dark:text-white leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="accordion-group space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="accordion border border-gray-300 dark:border-gray-700 p-4 rounded-xl bg-white dark:bg-gray-800 transition duration-300"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="accordion-toggle group flex items-center justify-between text-left w-full text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  aria-expanded={isOpen}
                >
                  <h5>{item.question}</h5>
                  <span className="ml-4">
                    {isOpen ? (
                      <svg
                        className="w-6 h-6 transition-transform group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 transition-transform group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12H18M12 6V18"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="accordion-content mt-4 text-base text-gray-700 dark:text-gray-300 leading-6">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "Who is this course suitable for?",
    answer:
      "This course is suitable for both novice and seasoned traders. However, a very basic understanding of stock market and technical analysis is required.",
  },
  {
    question: "What specific skills will I learn from this course?",
    answer:
      "This course will guide you through the journey of noiseless trading with P&F charts. You will learn –",
  },
  {
    question: "Is prior trading experience necessary to enroll in this course?",
    answer:
      "Though this course is suitable for both beginners & seasoned traders, it would be better to have the basic prior knowledge of trading. You can refer to our eBooks on Shelf to gain knowledge about various aspects of trading.",
  },
  {
    question:
      "Are there any additional resources provided alongside the course material?",
    answer:
      "Besides the course material, there are also multiple assessments in the course that you need to complete. If you complete all the assessments satisfactorily, you will gain a Certificate of Completion at the end of the course.",
  },
  {
    question: "Is this course suitable for beginners or seasoned traders?",
    answer:
      "Yes. The course content has been curated keeping in mind the requirements of both beginners and experienced traders.",
  },
  {
    question: "What duration does the course cover?",
    answer:
      "The course contains over 30 hours of educational content by the instructor, Mr. Prashant Shah who is a pioneer in noiseless trading.",
  },
  {
    question: "Can I access the course content on multiple devices?",
    answer:
      "Yes. Once you have bought the course, you can access it on any device by simply logging in to your Definedge Gurukul account.",
  },
  {
    question: "Can I study at my own pace?",
    answer:
      "Yes. It is a self-paced course and once you have purchased it, you can complete it as per your own pace.",
  },
  {
    question: "Will I receive a certificate upon completion of the course?",
    answer:
      "Yes, it is a certification course. Once you have completed all the assessments on the course satisfactorily, you will gain a Certificate of Completion at the end of this course.",
  },
  {
    question: "How can I ask any queries that I have regarding the course?",
    answer:
      "This course has a Live Q&A. You can drop your questions and our team will do their best to answer them for you at the earliest.",
  },
  {
    question:
      "Are PRO versions of any Definedge Securities tools required for this course?",
    answer:
      "While some features mentioned in this course require PRO version of TradePoint or RZone (which is a PRO tool), most of the mentioned features are available for FREE on the basic version of TradePoint and Zone Web for Definedge Securities demat account holders. To use PRO features, you can activate your 1-month free trial of the PRO products, if you have not used it already.",
  },
];

export default EventDetails;
