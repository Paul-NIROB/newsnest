import React from 'react';
import { Bookmark, ExternalLink, User, Clock, MessageSquare, ThumbsUp } from 'lucide-react';
import { cn } from '../utils/cn';
import Button from './Button';

const StoryCard = ({ 
  story, 
  isBookmarked = false, 
  onBookmarkToggle,
  onVisitArticle
}) => {
  const { title, points, author, time, url, commentsCount } = story;

  return (
    <div className="card group hover:border-primary/30 hover:shadow-md overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <button 
            onClick={() => onBookmarkToggle(story)}
            className={cn(
              "p-2 rounded-full transition-all active:scale-90",
              isBookmarked 
                ? "bg-primary/10 text-primary" 
                : "bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-primary dark:hover:text-primary"
            )}
            title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          >
            <Bookmark className={cn("w-5 h-5", isBookmarked && "fill-current")} />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
          <div className="flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4" />
            <span>{points} points</span>
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span className="font-medium text-slate-700 dark:text-slate-300">{author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{time}</span>
          </div>
          {commentsCount !== undefined && (
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" />
              <span>{commentsCount} comments</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="primary" className="w-full text-sm py-2">
              Visit Article
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          {onVisitArticle && (
             <Button 
                variant="outline" 
                className="text-sm py-2 px-3"
                onClick={() => onVisitArticle(story)}
             >
               Details
             </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
