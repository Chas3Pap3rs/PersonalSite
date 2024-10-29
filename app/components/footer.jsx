import React from 'react';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-[#0d1224]/30 backdrop-blur-md z-50 shadow-lg">
            {/* Top border style for footer */}
            <div className="flex justify-center">
                <div className="w-3/4 -translate-y-[6px]"> {/* Adjusted translation for alignment */}
                    <div className="h-[0px] bg-gradient-to-r from-transparent  to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full translate-y-[.75px]"> {/* Adjusted translation for alignment */}
                    {/* Top border effect behind the footer */}
                    <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-violet-500 to-transparent -z-10" />
                </div>
            </div>

            {/* Footer content */}
            <div className="flex items-center justify-center h-[40px] py-3 uppercase">
                <p className="text-xs text-white">© 2024 chasepoulton.com - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
