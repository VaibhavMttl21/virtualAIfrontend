import React from 'react';
import clsx from 'clsx';

interface AIHealthProps {
  text: string;
  subtext: string;
  position?: 'left' | 'right';
  className?: string; // Optional className for custom positioning
}

const DottedLine: React.FC<{ className?: string; segments?: number }> = ({
  className = '',
  segments = 15,
}) => {
  const segmentWidth = 12; // Width of each dotted segment
  const totalWidth = segments * segmentWidth; // Calculate total width based on segments

  return (
    <div className={clsx('flex items-center', className)} style={{ zIndex: 50 }}>
      <div className="h-2 w-2 rounded-full bg-white" />
      <div className="relative h-[1px]" style={{ width: totalWidth }}>
        <div className="absolute h-[1px] w-full bg-white/30" />
        <div className="absolute h-[1px] w-full">
          {[...Array(segments)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-1 bg-white/60"
              style={{
                left: `${i * segmentWidth}px`,
                zIndex: 50, // Ensure dotted segments appear above the gray card
              }}
            />
          ))}
        </div>
      </div>
      <div className="h-4 w-4 rounded-full bg-white" />
    </div>
  );
};

const AIHealthBadge: React.FC<AIHealthProps> = ({
  text,
  subtext,
  position = 'left',
  className = '',
}) => (
  <div
    className={clsx(
      'absolute flex items-center z-[40]', // Ensure badges are above the gray card but below dotted lines
      position === 'left' ? 'left-0' : 'right-0',
      className
    )}
  >
    {position === 'left' ? (
      <>
        <div className="rounded-full border border-white/20 bg-black/40 px-4 py-4">
          <div className="text-xl font-medium text-white">{text}</div>
          <div className="text-lg text-white/60">{subtext}</div>
        </div>
        <DottedLine className="ml-2" />
      </>
    ) : (
      <>
        <DottedLine className="mr-2 rotate-180" />
        <div className="rounded-full border border-white/20 bg-black/40 px-4 py-4">
          <div className="text-xl font-medium text-white">{text}</div>
          <div className="text-lg text-white/60">{subtext}</div>
        </div>
      </>
    )}
  </div>
);

const ProductDetail: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-slate-900 overflow-hidden ">
      {/* Background text */}
      <div className='translate-y-[23rem]'>
      <div className="absolute left-12 top-12 opacity-90 translate-x-48  -translate-y-[11rem]  z-30">
        <h1 className="text-9xl font-bold text-slate-700">PRODUCT</h1>
      </div>
      <div className="absolute bottom-12 right-12 opacity-90 -translate-x-[14rem] z-30">
        <h1 className="text-9xl font-bold text-slate-700">DETAIL</h1>
      </div>

      {/* Center content */}
      <div className="relative mx-auto flex h-full items-center justify-center">
        <div className="relative w-[1600px] h-[400px]">
          {/* Pink circuit card */}
          <div className="absolute left-1/2 top-32 h-[40rem] w-72 -translate-x-1/2 -translate-y-1/2 rotate-[15deg] rounded-2xl bg-pink-600 z-10">
            <div className="h-full w-full rounded-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%)] bg-[length:24px_24px]" />
          </div>

          {/* Horizontal lines starting from pink card */}
          {[...Array(5)].map((_, i) => (
            <div
            key={i}
            className="absolute h-[1px] w-full bg-teal-950 space-y-10"
            style={{
              top: `${-180 + i * 150}px`, // Start lines just below the top of the pink card
              zIndex: '0', // Ensure lines are behind the cards
            }}
            />
          ))}

          {/* Gray card */}
          <div className="absolute left-1/2 top-1/2 h-[55rem] w-[30rem] -translate-x-1/2 -translate-y-[30rem] -rotate-[290deg] rounded-2xl bg-slate-300 z-20">
            {/* Blue connectivity icon */}
            <div className="absolute left-10 top-96 translate-y-96">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400">
                <div className="h-6 w-6 rounded-full bg-blue-300/50 animate-ping" />
              </div>
            </div>
            {/* White dot */}
            <div className="absolute right-10 top-6 -translate-x-80 translate-y-16">
              <div className="h-6 w-6 rounded-full bg-white shadow-lg" />
            </div>
          </div>

          {/* AI Health badges */}
          <AIHealthBadge
            text="AI Health"
            subtext="Personalized health insights using advanced AI"
            position="left"
            className="top-10 left-10 translate-y-64 -translate-x-20"
            />
          <AIHealthBadge
            text="AI Health"
            subtext="Personalized health insights using advanced AI"
            position="right"
            className="bottom-10 right-10 translate-x-10 -translate-y-32"
            />
        </div>
      </div>
        </div>
    </div>
  );
};

export default ProductDetail;
