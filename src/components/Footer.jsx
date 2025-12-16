'use client';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-ethereal-dark py-8 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500">© {new Date().getFullYear()} Nagaraj GK. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
