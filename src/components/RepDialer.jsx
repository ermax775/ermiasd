import { useState, useRef, useEffect } from 'react';

const representatives = [
  {
    name: 'Seblewongel B.',
    phone: '+251-92283700',
    avatar: '/assets/rep-seble.svg',
  },
  {
    name: 'Bethelhem Y.',
    phone: '+251-915575770',
    avatar: '/assets/rep-bet.svg',
  },
];

const RepDialer = ({ containerClass = '' }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Close panel on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className={`relative ${containerClass}`}>
      <button
        type="button"
        aria-label="Open representative dialer"
        onClick={() => setOpen((prev) => !prev)}
        className="btn w-full flex justify-center items-center gap-2"
      >
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
        Reach me via my representatives
      </button>

      {open && (
        <div
          ref={panelRef}
          className="absolute left-0 right-0 mt-2 bg-black-200 border border-black-300 rounded-lg p-4 z-50 shadow-lg transition-all ease-out duration-300"
        >
          {representatives.map((rep) => (
            <a
              key={rep.phone}
              href={`tel:${rep.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-black-300 transition-colors"
            >
              <img src={rep.avatar} alt={rep.name} className="w-8 h-8 rounded-full" />
              <div className="flex flex-col">
                <span className="text-white font-medium leading-none">{rep.name}</span>
                <span className="text-[#afb0b6] text-sm leading-none">{rep.phone}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepDialer;
