import React from "react";

export const Newsletter = () => {
  return (
    <div className="h-96" style={{ backgroundColor: "#3F93A5" }}>
      <div className="flex flex-col items-center justify-center mb-8 h-1/2">
        <p className="my-10 text-5xl font-bold text-white">Stay in touch</p>
        <p className="w-2/5 text-center text-white">
          Get the latest blogs, events, and more directly in your inbox.
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center mt-2 g2 h-11">
          <p className="w-3/6 h-12 px-10 py-2 mr-32 text-white border-2 border-white rounded font- medium bg-inherit bg-none">
            First Name &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|
            &emsp;&emsp;Last Name &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; |
            &emsp;&emsp;Email &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          </p>
          <button
            style={{ left: " 1035px", backgroundColor: "#EDB331" }}
            type="button"
            className="absolute w-1/5 h-12 px-6 py-2 font-bold text-white rounded"
          >
            SUBSCRIBE TO NEWSLETTER
          </button>
        </div>
      </div>
    </div>
  );
};
