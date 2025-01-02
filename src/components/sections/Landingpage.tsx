import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const NavLink: React.FC<{ text: string }> = ({ text }) => (
  <div className="group flex items-center py-4 transition-all hover:border-gray-500">
    <div className="inline-block w-80 border-b border-gray-700 group-hover:border-gray-500">
      <div className="flex items-center space-x-2">
        <div className="text-xl text-gray-400 group-hover:text-white">{text}</div>
        <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-white" />
      </div>
    </div>
  </div>
);

const LandingPage: React.FC = () => (
  <div className="min-h-screen relative bg-slate-900 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 z-0">
      <div
        dir="ltr"
        className="absolute  w-[10rem] h-[10rem] bg-blue-600/80 rounded-s-full filter blur-3xl opacity-80 translate-x-[90rem] -translate-y-[20rem]"
      />
      <div
        dir="rtl"
        className="absolute right-48 w-[15rem] h-[15rem] top-32 bg-fuchsia-600/60 rounded-s-full filter blur-3xl"
      />
    </div>

    <div className="container relative z-10 mx-auto px-6 py-12">
      <div className="mb-20">
        <div className="text-pink-500 text-3xl translate-y-[8rem]">Our About Us</div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-16 text-[4rem] font-[15rem] text-white translate-x-[15rem] space-y-2 -translate-y-[1rem]">
            <div>Imaginations<br /></div>
            <div>Engineered<br /></div>
            <div>Trust Delivered.</div>
          </h1>

          <div className="space-y-2 translate-x-[15rem]">
            <NavLink text="Advertising" />
            <NavLink text="Branding" />
            <NavLink text="Digital Marketing" />
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <div className="absolute -top-8 right-0">
            <div className="rounded-full bg-purple-600 px-4 py-2 text-sm text-white -translate-x-[17rem] -translate-y-[1.5rem]">
              AI Health
            </div>
          </div>
          <div className="h-[40rem] w-[40rem] rounded-3xl bg-gray-200" />
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
