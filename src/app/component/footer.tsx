"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const socialIcons = [
    {
      name: "Linkedin",
      src: "/linkedin.svg",
    },
    {
      name: "Youtube",
      src: "/youtube.svg",
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
    },
  ];

  return (
    <footer className="pt-20">
      <div className="max-w-screen-xl mx-auto">

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col lg:flex-row gap-16 lg:px-0 px-7 divide-y-2 divide-zinc-600 lg:divide-y-0"
        >
          <div className="flex flex-col gap-4 lg:w-[30%]">
            <div className="flex items-center">
              <Image
                src="/humo.png"
                alt="humo-logo"
                height={60}
                width={60}
                className="mt-1"
              />
              <span className="text-2xl font-semibold">Irfan BlogDev</span>
            </div>

            <p className=" text-slate-600">
              Innovation in Future: Envisioning the potential of groundbreaking ideas to redefine industries, improve lives, and create sustainable progress.
            </p>

            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <Image
                  src={social.src}
                  key={social.name}
                  alt={social.name}
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">Innovation Sectors</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Artificial Intelligence
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Renewable Energy
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Biotechnology
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Space Exploration
            </li>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">Tech Enthusiasts</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Developers
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Innovators
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Researchers
            </li>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">Our Services</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Collaborative Projects
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Funding Solutions
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Networking Opportunities
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Knowledge Sharing
            </li>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold ">About Us</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Mission
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Blog
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              FAQ
            </li>
          </div>
        </motion.div>

        <div className="flex justify-between pt-16 pb-6 px-7 sm:flex-row flex-col gap-y-2">
          <p>&copy; 2024 Irfan BlogDev. All rights reserved.</p>
          <div className="flex gap-2">
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Privacy Policy
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Terms Of Use
            </li>
          </div>
        </div>

      </div>
    </footer>
  );
}
