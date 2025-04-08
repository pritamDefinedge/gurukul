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
            FAQ
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
                  className="accordion-toggle group flex items-center justify-between text-left w-full text-lg font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition"
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
    question: "What does Definedge Gurukul offer?",
    answer:
      "Definedge Gurukul offers courses designed to provide you with innovative techniques and strategies for trading and investing in the stock market. Our focus is on subjects that are unique and different. You can benefit from our courses regardless of whether you are a beginner or an experienced trader. ",
  },
  {
    question: "Are all courses available only in recorded format?",
    answer:
      "Yes, the content for all Definedge Gurukul courses is available only in recorded format. But each course offers Live Q&A sessions (via periodic webinars) which you can use to get your queries resolved by the course mentors.",
  },
  {
    question: "Will I get a certificate on course completion?",
    answer:
      "Yes, there is an assignment at the end of the course. Upon completion of the assignment, you will receive a certificate.",
  },
  {
    question: "What is the duration of courses on Definedge Gurukul?",
    answer:
      "Each course has a varying duration, depending on the topic covered. Our intention is to do complete justice to the subject and the course duration has been determined accordingly. You can check the total duration for each course on the course page.",
  },
  {
    question: "What is the validity of each course?",
    answer:
      "Once you purchase a course, it is available for one year from the date of purchase, so you may watch them repeatedly and practice. You can get your queries resolved on the course through the various Q&A sessions which will be held throughout the year.",
  },
  {
    question: "Which languages are the courses available in?",
    answer:
      "Depending on the course content, some courses are available in Hindi while others are in English. The course language is mentioned in every course. ",
  },
  {
    question: "Can I get a refund for any course?",
    answer:
      "You can ask for a refund within 24 hours of purchasing the course. To know more about how we process refunds, please check our refund policy. ",
  },
];

export default EventDetails;
