import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-black text-slate-100 dark:text-slate-800 leading-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-bold text-slate-900 dark:text-white bg-white dark:bg-dark-bg px-4 py-2 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800">
            Page Not Found
          </p>
        </div>
      </div>
      
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-10">
        Oops! The page you're looking for doesn't exist or has been moved. 
        Let's get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/">
          <Button variant="primary" className="w-full sm:w-auto px-8">
            <Home className="w-5 h-5" />
            Go Home
          </Button>
        </Link>
        <Button 
          variant="outline" 
          className="w-full sm:w-auto px-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
