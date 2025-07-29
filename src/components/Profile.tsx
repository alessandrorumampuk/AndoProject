import { ArrowRight, Linkedin, Youtube } from 'lucide-react';
import Logo from './Logo';

const Profile = () => {
  return (
    <div className="min-h-screen bg-white p-8 flex flex-col">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-8">PROFILE</h1>
        
        {/* Profile Section */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gray-100 mb-4 overflow-hidden">
              <img 
                src="/images/Profile.png" 
                alt="Alessandro Christo Rumampuk"
                className="w-full h-full object-cover saturate-75 blur-sm scale-110"
                style={{
                  filter: 'saturate(0.97) contrast(1.06)',
                  transform: 'scale(1.05)',
                  transformOrigin: 'center',
                  transition: 'filter 0.3s ease-in-out',
                  imageRendering: 'optimizeQuality',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0) scale(1.05)',
                  WebkitFilter: 'saturate(0.8) contrast(1.1)',
                }}
              />
            </div>
            <h2 className="text-2xl font-semibold">Alessandro Christo Rumampuk</h2>
            <p className="text-gray-600 mt-4 text-center">
              Recognized as a top security researcher by <b>Google</b> and <b>Alibaba.com</b> for five consecutive years, and received letters of appreciation from the <b>University of Cambridge</b> in 2023 and <b>Harvard University</b> in 2020 for reporting security vulnerabilities.
            </p>
            <p className="text-gray-600 mt-4 text-center">
            In Indonesia, he received certificates of appreciation from government institutions and universities, including the <b>Ministry of Communication and Information Technology</b> in 2024 and the <b>National Cyber and Crypto Agency</b> in 2019.
            </p>
            <p className="text-gray-600 mt-4 text-center">
            In addition to his work in cybersecurity, he assists <b>Prof. Ben Koo, Ph.D.</b>, from <b>MIT</b>, in advancing technology development, particularly artificial intelligence, in Indonesia.
            </p>
            </div>
            {/* Skills Section */}
            <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">
                Cybersecurity | Automation | Artificial Intelligence | Cloud Computing
            </p>
          </div>
        </div>
      </div>

      {/* Recognized By Section */}
      <div className="mt-auto">
        <h1 className="text-2xl font-bold text-center mb-8">RECOGNIZED BY</h1>
        
        {/* Logos */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          <Logo>
            <img 
              src="/images/Google.png" 
              alt="Google" 
              className="max-w-[60px] max-h-12 object-contain"
            />
          </Logo>
          <Logo>
            <img 
              src="/images/Alibaba.com.png" 
              alt="Alibaba" 
              className="max-w-[70px] max-h-10 object-contain"
            />
          </Logo>
          <Logo>
            <img 
              src="/images/The University of Cambridge.png" 
              alt="University of Cambridge" 
              className="max-w-[60px] max-h-12 object-contain"
            />
          </Logo>
          <Logo>
            <img 
              src="/images/Harvard University.png" 
              alt="Harvard University" 
              className="max-w-[60px] max-h-12 object-contain"
            />
          </Logo>
        </div>

        {/* Stats */}
        <div className="text-center mb-12">
          <p className="text-base font-medium text-gray-600 mb-8">LARGEST COMPANIES & BEST UNIVERSITIES IN THE WORLD</p>
          <div className="flex justify-between items-start max-w-xl mx-auto px-4">
            {/* Left Stat */}
            <div className="text-left">
              <p className="text-3xl font-bold">100+</p>
              <p className="text-xl">ORGANIZATIONS</p>
            </div>
            
            {/* Right Stat */}
            <div className="flex flex-col items-end">
              <div className="text-left">
                <p className="text-3xl font-bold">1,000+</p>
                <p className="text-xl">REPORTED</p>
                <p className="text-xl">VULNERABILITIES</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Page Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full">
            Next Page
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-auto pt-8 pb-4">
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/alessandrorumampuk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://www.youtube.com/@alessandrorumampuk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="YouTube Channel"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
