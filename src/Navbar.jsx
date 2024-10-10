// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faStar, faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="bg-gray-800 text-white h-screen w-1/6 flex flex-col">
        <ul className="flex-grow flex flex-col justify-center items-center space-y-4">
          <li className="border-b border-gray-600 w-full text-center">
            <Link to="/" className="flex items-center justify-center w-full p-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </Link>
          </li>
          <li className="border-b border-gray-600 w-full text-center">
            <Link to="/about" className="flex items-center justify-center w-full p-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> About
            </Link>
          </li>
          <li className="border-b border-gray-600 w-full text-center">
            <Link to="/experience" className="flex items-center justify-center w-full p-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Experience
            </Link>
          </li>
          <li className="border-b border-gray-600 w-full text-center">
            <Link to="/skills" className="flex items-center justify-center w-full p-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={faStar} className="mr-2" /> Skills
            </Link>
          </li>
          <li className="border-b border-gray-600 w-full text-center">
            <Link to="/interest" className="flex items-center justify-center w-full p-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={faHeart} className="mr-2" /> Interest
            </Link>
          </li>
          <li className="border-b border-gray-600 w-full text-center">
            <Link to="/awards" className="flex items-center justify-center w-full p-2 hover:bg-gray-700">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> Awards
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
