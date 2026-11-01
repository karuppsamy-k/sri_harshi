import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Package } from 'lucide-react';
import { Button } from '@/components/ui';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="section-padding flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="container-app max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl mx-auto mb-6">
          🌿
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">404</h1>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Page Not Found</h2>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          The page or produce catalog item you are looking for does not exist or may have been
          relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <Button variant="primary" leftIcon={<Home className="w-4 h-4" />}>
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="secondary" leftIcon={<Package className="w-4 h-4" />}>
              Wholesale Catalog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
