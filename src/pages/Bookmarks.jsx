import React, { useState, useEffect } from 'react';
import { Bookmark, Search, Trash2 } from 'lucide-react';
import StoryCard from '../components/StoryCard';
import EmptyState from '../components/EmptyState';
import Button from '../components/Button';
import { cn } from '../utils/cn';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(savedBookmarks);
  }, []);

  const handleRemoveBookmark = (story) => {
    const updatedBookmarks = bookmarks.filter(b => b.id !== story.id);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const clearAllBookmarks = () => {
    if (window.confirm('Are you sure you want to clear all bookmarks?')) {
      setBookmarks([]);
      localStorage.setItem('bookmarks', JSON.stringify([]));
    }
  };

  const filteredBookmarks = bookmarks.filter(b => 
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            My Bookmarks
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg">
            Quickly access the stories you've saved for later.
          </p>
        </div>

        {bookmarks.length > 0 && (
          <Button 
            variant="ghost" 
            className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
            onClick={clearAllBookmarks}
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </Button>
        )}
      </div>

      {bookmarks.length > 0 ? (
        <div className="space-y-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search bookmarks..."
              className="input-field pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredBookmarks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBookmarks.map(story => (
                <StoryCard 
                  key={story.id} 
                  story={story} 
                  isBookmarked={true}
                  onBookmarkToggle={handleRemoveBookmark}
                />
              ))}
            </div>
          ) : (
            <EmptyState 
              title="No matching bookmarks" 
              description={`We couldn't find any bookmarks matching "${searchQuery}"`}
              onAction={() => setSearchQuery('')}
              actionText="Clear Search"
            />
          )}
        </div>
      ) : (
        <EmptyState 
          title="No bookmarks yet" 
          description="Stories you bookmark will appear here for quick access."
          icon={Bookmark}
          actionText="Explore Stories"
          onAction={() => window.location.href = '/'}
        />
      )}
    </div>
  );
};

export default Bookmarks;
