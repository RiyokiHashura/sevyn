import React from 'react';
import alienIcon from './alien.svg';

function App() {
  return (
    <div className="min-h-screen bg-space-black text-alien-silver overflow-hidden relative p-8">
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue/10 to-transparent"/>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMEZGOUYxMCIvPjwvc3ZnPg==')] opacity-5"/>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-6">
            <div className="relative flex items-center gap-4">
              <img src={alienIcon} alt="Alien" className="w-8 h-8 filter invert opacity-90" />
              <div className="w-2 h-2 bg-neon-green rounded-full animate-ping absolute -right-1 top-0"/>
            </div>
            <div className="text-2xl font-light tracking-wider text-white">
              REVYN<span className="text-neon-green">/</span>SCAN
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-[1px] bg-gunmetal/30"/>
            <div className="text-sm opacity-50 font-light">SOL·ZONE·01</div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {['SIGNALS', 'VOLUME', 'ACTIVITY', 'RISK'].map((label) => (
            <div key={label} className="bg-gradient-to-r from-midnight-blue/40 to-midnight-blue/20 backdrop-blur-xl rounded-lg p-4">
              <div className="text-[10px] tracking-[0.2em] text-alien-cyan mb-2">{label}</div>
              <div className="text-2xl font-light text-white">247<span className="text-neon-green">+</span></div>
            </div>
          ))}
        </div>

        {/* Main Signal Display */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Primary Signal */}
          <div className="col-span-2 bg-gradient-to-br from-midnight-blue/40 to-transparent backdrop-blur-xl rounded-2xl p-8 border border-gunmetal/20">
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="text-xs text-alien-cyan tracking-[0.2em] mb-2">DOMINANT SIGNAL</div>
                <div className="text-4xl font-light text-white mb-1">BONK<span className="text-neon-green">/</span>SOL</div>
                <div className="text-sm opacity-50">Sector 7G - High Activity</div>
              </div>
              <div className="text-right">
                <div className="text-alien-lime text-2xl font-light">+31.2%</div>
                <div className="text-sm opacity-50">24h change</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              {['VOLUME', 'MARKET CAP', 'LIQUIDITY'].map((stat) => (
                <div key={stat} className="border-l border-gunmetal/20 pl-4">
                  <div className="text-[10px] tracking-[0.2em] text-alien-cyan mb-1">{stat}</div>
                  <div className="text-xl font-light text-white">$1.2M</div>
                </div>
              ))}
            </div>
          </div>

          {/* Signal List */}
          <div className="bg-gradient-to-br from-midnight-blue/40 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-gunmetal/20">
            <div className="text-xs text-alien-cyan tracking-[0.2em] mb-6">EMERGING SIGNALS</div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group hover:bg-midnight-blue/40 p-3 rounded-xl transition-all cursor-pointer border border-transparent hover:border-gunmetal/20">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-1 h-1 bg-neon-green rounded-full"/>
                      <div className="w-1 h-1 bg-neon-green rounded-full animate-ping absolute inset-0"/>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-white">WEN</span>
                        <span className="text-alien-lime">+12.5%</span>
                      </div>
                      <div className="text-[10px] opacity-40 mt-1">Updated: 2m ago</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-alien-silver/40">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-1 h-1 bg-alien-cyan rounded-full"/>
              <div className="w-1 h-1 bg-alien-cyan rounded-full animate-ping absolute inset-0"/>
            </div>
            <span>LIVE MONITORING</span>
          </div>
          <div>SYSTEM OPTIMAL · LAST UPDATE 13s AGO</div>
        </div>
      </div>
    </div>
  );
}

export default App;
