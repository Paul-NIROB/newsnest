import React, { useState, useEffect } from 'react';
import { Filter, RefreshCw, SortAsc, LayoutGrid, List } from 'lucide-react';
import StoryCard from '../components/StoryCard';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';
import { MOCK_STORIES } from '../api/mockData';
import { cn } from '../utils/cn';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid');
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    const fetchStories = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStories(MOCK_STORIES);
      setLoading(false);
    };

    fetchStories();
    
    // Load bookmarks from localStorage
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(savedBookmarks);
  }, []);

  const handleBookmarkToggle = (story) => {
    const isBookmarked = bookmarks.some(b => b.id === story.id);
    let updatedBookmarks;
    
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter(b => b.id !== story.id);
    } else {
      updatedBookmarks = [...bookmarks, story];
    }
    
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Top Stories
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg">
            Stay updated with the latest trends and discussions from Hacker News.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button 
              onClick={() => setViewMode('grid')}
              className={cn(
                "p-2 rounded-md transition-all",
                viewMode === 'grid' ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-500"
              )}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={cn(
                "p-2 rounded-md transition-all",
                viewMode === 'list' ? "bg-white dark:bg-slate-700 shadow-sm text-primary" : "text-slate-500"
              )}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
          
          <Button variant="outline" className="text-sm">
            <SortAsc className="w-4 h-4" />
            Sort
          </Button>
          
          <Button variant="outline" className="text-sm">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Main Content */}
      {loading ? (
        <Loader />
      ) : stories.length > 0 ? (
        <div className={cn(
          "grid gap-6",
          viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
        )}>
          {stories.map(story => (
            <StoryCard 
              key={story.id} 
              story={story} 
              isBookmarked={bookmarks.some(b => b.id === story.id)}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ))}
        </div>
      ) : (
        <EmptyState 
          title="No stories found" 
          description="Try refreshing the page or check back later." 
          actionText="Refresh"
          onAction={() => window.location.reload()}
        />
      )}

      {/* Pagination Placeholder */}
      {!loading && stories.length > 0 && (
        <div className="flex items-center justify-center gap-4 py-10">
          <Button variant="outline" disabled>Previous</Button>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <button 
                key={i}
                className={cn(
                  "w-10 h-10 rounded-lg font-medium transition-all",
                  i === 1 ? "bg-primary text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                {i}
              </button>
            ))}
          </div>
          <Button variant="outline">Next</Button>
        </div>
      )}
    </div>
  );
};

export default Home;
