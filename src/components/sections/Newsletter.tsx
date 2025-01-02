import React from 'react';

const NewsletterSignup: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-6 bg-slate-900 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="text-5xl font-light space-y-6 -translate-y-[2.5rem]">
          <div>
            Sign up to receive <br />
            </div>
          <div className="font-light">our latest news.</div>
        </div>
        <form className="flex items-center space-x-4 w-full md:w-auto -translate-y-[2.5rem]">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 flex-grow"
          />
          <button
            type="submit"
            className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
