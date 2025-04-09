import React from "react";

const reviews = [
  {
    id: 1,
    name: "Michael Gough",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    rating: 5,
    date: "Feb. 8, 2022",
    content:
      "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
  },
  {
    id: 2,
    name: "Jese Leos",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    rating: 4,
    date: "Feb. 12, 2022",
    content: "Much appreciated! Glad you liked it ☺️",
  },
  {
    id: 3,
    name: "Bonnie Green",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    rating: 4,
    date: "Mar. 12, 2022",
    content:
      "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
  },
  {
    id: 4,
    name: "Helene Engels",
    avatar: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    rating: 5,
    date: "Jun. 23, 2022",
    content:
      "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
  },
];

const FeedBack = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Feedback Summary
        </h3>
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Feedback Summary */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center justify-center text-center md:w-1/3">
                <div className="text-5xl font-bold text-yellow-400">5.0</div>
                <div className="flex mt-2 text-yellow-400">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">56 ratings</p>
              </div>

              <div className="flex-1 space-y-4">
                {[100, 0, 0, 0, 0].map((percent, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center">
                      <div className="flex text-yellow-400">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <i
                              key={i}
                              className={`fa fa-star ${
                                i < 5 - index
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            ></i>
                          ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {percent}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add Review Notice */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Add a Review
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You must be logged in to post a review.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Reviews (20)
          </h2>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={review.avatar}
                    alt={review.name}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {review.date}
                      </p>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {review.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
