import React from 'react';
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
        </div>
        
        <Container className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-bold animate-fade-in">
            <TrendingUp className="w-4 h-4 text-primary" />
            Trending on Hacker News
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
            Stay Ahead of the <br />
            <span className="text-primary italic">Tech Curve.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium">
            Discover trending Hacker News stories in real time. 
            Curated, fast, and built for the modern developer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto">
              Explore Stories
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Bookmarks
            </Button>
          </div>
        </Container>
      </section>

      {/* Stories Grid Placeholder */}
      <section className="py-20 bg-slate-900/50">
        <Container>
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-white">Latest Pulses</h2>
              <p className="text-slate-500 font-medium">Top discussions and insights right now.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <div className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-400">All Topics</div>
              <div className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-400">Show HN</div>
              <div className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-bold text-slate-400">Ask HN</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="card p-6 space-y-6 group cursor-pointer hover:border-primary/50">
                <div className="w-full aspect-video bg-slate-800 rounded-lg animate-pulse"></div>
                <div className="space-y-3">
                  <div className="h-6 bg-slate-800 rounded-md w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-slate-800 rounded-md w-full animate-pulse"></div>
                  <div className="h-4 bg-slate-800 rounded-md w-1/2 animate-pulse"></div>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 animate-pulse"></div>
                    <div className="h-3 bg-slate-800 rounded-md w-16 animate-pulse"></div>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-800 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Real-time Scraper</h3>
              <p className="text-slate-500">Blazing fast data fetching from the Hacker News API with zero latency.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Trending Insights</h3>
              <p className="text-slate-500">Smart algorithms to highlight what's truly moving the needle in tech.</p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Secure Experience</h3>
              <p className="text-slate-500">Your data and bookmarks are protected with modern security practices.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
