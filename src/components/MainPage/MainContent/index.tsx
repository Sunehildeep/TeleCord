import React from 'react';
import Link from 'next/link';
const MainContent = () => {
  return (
    <div className='bg-purple-100'>
    <section className="max-w-4xl mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome to Telecord</h2>
      <p className="text-lg mb-8 text-center">Connect, Share, and Engage with your college community like never before.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Real-Time Messaging 📨</h3>
          <p>Send and receive messages instantly. Our real-time sockets ensure you’re always in the loop.</p>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Media Sharing 📸🎥</h3>
          <p>Upload images and videos directly in the chat. Share your moments and work seamlessly.</p>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Community Search 🔍</h3>
          <p>Find and join communities that matter to you. Our search makes it easy to connect with like-minded individuals.</p>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Instant Translation 🌐</h3>
          <p>Communicate without barriers. Select a language and have your messages translated on-the-fly.</p>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Group Details 👥</h3>
          <p>Stay informed with group details at a glance. See who’s in the chat and join the conversation.</p>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Secure Login 🔒</h3>
          <p>Sign up and log in with ease. Our integration with next-auth keeps your data safe and secure.</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">Get Started with Telecord Today!</h2>
        <p className="text-lg">Join the platform that’s redefining campus communication.</p>
        <Link href="/sign-up">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-6 transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up Now
          </button>
        </Link>
      </div>
    </section>
    </div>
  );
};

export default MainContent;
