import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-2">SkillSwap</h3>
          <p>Unlock skills, swap knowledge. Learn and grow together.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Platform</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Email: support@skillswap.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Chennai, India</p>
        </div>
      </div>
      <div className="text-center mt-10 text-sm border-t border-emerald-600 pt-4">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
