import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-zinc-900 py-8 border-t border-zinc-100 dark:border-zinc-800">
            <div className="container-max px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            © {new Date().getFullYear()} Khaya Dingindlela. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
