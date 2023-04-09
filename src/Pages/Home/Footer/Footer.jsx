import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>BookTracker</h1>
        <p className='py-4'>Questions or issues? Contact us anytime for 24/7 support. Our team is here to assist you with your reading journey</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Technologies</li>
            <li className='py-2 text-sm'>Tools</li>
            <li className='py-2 text-sm'>Services</li>
            <li className='py-2 text-sm'>Innovations</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Feedback</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>Help</li>
            <li className='py-2 text-sm'>Support</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Clients</li>
            <li className='py-2 text-sm'>History</li>
            <li className='py-2 text-sm'>News</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Copyright</li>
            <li className='py-2 text-sm'>Disclaimers</li>
            <li className='py-2 text-sm'>Regulations</li>
            <li className='py-2 text-sm'>Patents</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;