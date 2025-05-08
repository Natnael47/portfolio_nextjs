import MagicButton from "@/components/ui/MagicButton";
import { Github, LocateIcon, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* Background grid */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="background grid"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-radial from-black via-transparent to-black opacity-70 pointer-events-none" />
      </div>

      <div className="flex flex-col items-center text-center px-4">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<LocateIcon />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6 px-4">
        <p className="md:text-base text-sm text-white-300">
          © 2024 Adrian Hajdin. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black-400 dark:border-[#32B303F] bg-black-200 dark:bg-[#0C1224] bg-opacity-50 backdrop-blur-md transition hover:scale-105"
          >
            <Github size={20} />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black-400 dark:border-[#32B303F] bg-black-200 dark:bg-[#0C1224] bg-opacity-50 backdrop-blur-md transition hover:scale-105"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:contact@jsmastery.pro"
            aria-label="Email"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black-400 dark:border-[#32B303F] bg-black-200 dark:bg-[#0C1224] bg-opacity-50 backdrop-blur-md transition hover:scale-105"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
