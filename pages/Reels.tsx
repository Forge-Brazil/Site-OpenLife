
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, MessageCircle, Share2, Music, 
  Volume2, VolumeX, Play, Pause, 
  MoreVertical, ArrowLeft, User
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Reel {
  id: string;
  videoUrl: string;
  author: string;
  description: string;
  likes: string;
  comments: string;
  music: string;
  avatar: string;
}

const REELS_DATA: Reel[] = [
  {
    id: '1',
    videoUrl: '/video01.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '2',
    videoUrl: '/video02.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '3',
    videoUrl: '/video03.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '4',
    videoUrl: '/video04.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '5',
    videoUrl: '/video05.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '6',
    videoUrl: '/video06.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '7',
    videoUrl: '/video07.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '8',
    videoUrl: '/video08.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '9',
    videoUrl: '/video09.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
 {
    id: '10',
    videoUrl: '/video10.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
  {
    id: '11',
    videoUrl: '/video11.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
   {
    id: '12',
    videoUrl: '/video12.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
   {
    id: '13',
    videoUrl: '/video13.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
   {
    id: '14',
    videoUrl: '/video14.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
   {
    id: '15',
    videoUrl: '/video15.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
     {
    id: '16',
    videoUrl: '/video16.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
     {
    id: '17',
    videoUrl: '/video17.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
     {
    id: '18',
    videoUrl: '/video18.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  },
   {
    id: '19',
    videoUrl: '/video19.mp4',
    author: '@openlife',
    description: '',
    likes: '',
    comments: '',
    music: '',
    avatar: '/2.png'
  }
  
];

const ReelItem: React.FC<{ reel: Reel; isActive: boolean }> = ({ reel, isActive }) => {
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(e => {
          console.log("Autoplay blocked or failed", e);
          // If it failed because of no supported source, we might want to know
        });
        setPlaying(true);
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setPlaying(false);
      }
    }
  }, [isActive, reel.videoUrl]);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video error details:", e);
    setVideoError(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.error("Play failed", e));
      }
      setPlaying(!playing);
    }
  };

  return (
    <div className="relative h-full w-full bg-black flex items-center justify-center snap-start">
      {videoError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 p-6 text-center">
          <p className="text-white text-sm mb-4">Não foi possível carregar este vídeo.</p>
          <button 
            onClick={() => { setVideoError(false); if(videoRef.current) videoRef.current.load(); }}
            className="text-xs text-orange-brand underline"
          >
            Tentar novamente
          </button>
        </div>
      )}
      
      {/* Video Element */}
      <video
        ref={videoRef}
        className={`h-full w-full object-cover transition-opacity duration-300 ${videoError ? 'opacity-0' : 'opacity-100'}`}
        loop
        muted={muted}
        playsInline
        onClick={togglePlay}
        crossOrigin="anonymous"
        preload="auto"
        onError={handleVideoError}
      >
        <source src={reel.videoUrl} type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Play/Pause Indicator Overlay */}
      <AnimatePresence>
        {!playing && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-black/40 p-6 rounded-full">
              <Play size={48} className="text-white fill-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-end items-center bg-gradient-to-b from-black/60 to-transparent">
        <button onClick={() => setMuted(!muted)} className="text-white p-2 bg-black/20 rounded-full backdrop-blur-sm">
          {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Right Sidebar Actions */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-10">
        <div className="flex flex-col items-center gap-1">
          <button 
            onClick={() => setLiked(!liked)}
            className="p-3 bg-black/20 rounded-full backdrop-blur-sm transition-transform active:scale-125"
          >
            <Heart size={28} className={liked ? "text-red-500 fill-red-500" : "text-white"} />
          </button>
          <span className="text-white text-xs font-semibold">{reel.likes}</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <button className="p-3 bg-black/20 rounded-full backdrop-blur-sm">
            <MessageCircle size={28} className="text-white" />
          </button>
          <span className="text-white text-xs font-semibold">{reel.comments}</span>
        </div>

        <button className="p-3 bg-black/20 rounded-full backdrop-blur-sm">
          <Share2 size={28} className="text-white" />
        </button>

        <button className="p-3 bg-black/20 rounded-full backdrop-blur-sm">
          <MoreVertical size={28} className="text-white" />
        </button>

        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden animate-spin-slow">
          <img src={reel.avatar} alt="music" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>

      {/* Bottom Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full border border-white/50 overflow-hidden bg-purple-brand flex items-center justify-center">
            {reel.avatar ? (
              <img src={reel.avatar} alt={reel.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            ) : (
              <User className="text-white" size={20} />
            )}
          </div>
          <span className="text-white font-bold text-sm">{reel.author}</span>
          <button className="px-3 py-1 border border-white rounded-md text-xs font-bold text-white hover:bg-white hover:text-black transition-colors">
            Seguir
          </button>
        </div>

        <p className="text-white text-sm mb-3 line-clamp-2 leading-relaxed">
          {reel.description}
        </p>

        <div className="flex items-center gap-2 text-white/90">
          <Music size={14} />
          <div className="overflow-hidden w-40">
            <p className="text-xs whitespace-nowrap animate-marquee">
              {reel.music} • {reel.music}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reels: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const itemWidth = 340 + 24; // width + gap
      const index = Math.round(scrollLeft / itemWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-purple-brand mb-4">
          OpenLife <span className="text-orange-brand">Reels</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Dicas rápidas, bastidores e muito inglês em formato dinâmico. Arraste para o lado para ver mais!
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full">
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-[calc(50%-170px)] pt-16 pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REELS_DATA.map((reel, index) => (
            <motion.div 
              key={reel.id} 
              initial={false}
              animate={{ 
                y: index === activeIndex ? -40 : 0,
                scale: index === activeIndex ? 1.05 : 0.9,
                opacity: index === activeIndex ? 1 : 0.4,
                filter: index === activeIndex ? 'blur(0px)' : 'blur(2px)'
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 260, 
                damping: 20 
              }}
              className="flex-shrink-0 w-[340px] h-[600px] snap-center relative z-10"
            >
              <div className="h-full w-full rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-900 bg-black">
                <ReelItem 
                  reel={reel} 
                  isActive={index === activeIndex} 
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Navigation Hints */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none opacity-0 md:opacity-100">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <ArrowLeft size={24} />
          </div>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white rotate-180">
            <ArrowLeft size={24} />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
          <p className="text-3xl font-black text-purple-brand">10k+</p>
          <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Seguidores</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
          <p className="text-3xl font-black text-orange-brand">500+</p>
          <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Vídeos</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
          <a href="https://instagram.com/openlife_english" target="_blank" rel="noopener noreferrer" className="h-full flex items-center justify-center font-bold text-purple-brand hover:text-orange-brand transition-colors">
            Ver no Instagram →
          </a>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Reels;
