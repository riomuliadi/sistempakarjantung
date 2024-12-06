import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <div className="mt-4">
          <a href="#facebook" className="text-white mx-2">Facebook</a>
          <a href="#twitter" className="text-white mx-2">Twitter</a>
          <a href="#linkedin" className="text-white mx-2">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
