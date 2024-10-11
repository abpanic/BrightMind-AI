import Link from 'next/link';

const Footer = () => {
  return (
        <footer className="bg-transparent p-6">
          <div className="container mx-auto flex flex-col items-center">
            <p className="bg-gradient-to-r from-violet-600 via-green-600 to-red-600 bg-clip-text text-transparent font-semibold">
              &copy; {new Date().getFullYear()} Bright-Mind AI. All rights reserved.
            </p>
          </div>
        </footer>

  );
};

export default Footer;
