import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui';
import { contactConfig } from '@/config';
import { cn } from '@/utils';

interface NavItem {
  label: string;
  href: string;
  isSection?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/#products', isSection: true },
  { label: 'Why Sri Harshi', href: '/#why-us', isSection: true },
  { label: 'About Us', href: '/#about', isSection: true },
  { label: 'Contact', href: '/#contact', isSection: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.isSection) {
      if (location.pathname === '/') {
        e.preventDefault();
        const elementId = item.href.replace('/#', '');
        const targetElement = document.getElementById(elementId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', item.href);
        }
      } else {
        // Navigate to home with hash
        navigate(item.href);
      }
    }
    setMobileMenuOpen(false);
  };

  const handleEnquiryClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('enquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/enquiry');
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'glass-nav py-3.5 shadow-sm'
            : 'bg-white/70 backdrop-blur-md py-4 sm:py-5 border-b border-emerald-100/60'
        )}
      >
        <div className="container-app flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Sri Harshi Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 flex items-center justify-center shadow-brand text-white font-black text-xl transition-transform group-hover:scale-105 border border-emerald-400/30">
              🌿
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-emerald-800 transition-colors">
                  Sri Harshi
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100/90 text-emerald-800 border border-emerald-300/60 uppercase tracking-wider">
                  B2B Supply
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Wholesale Vegetables & Fruits
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={e => handleNavClick(e, item)}
                className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${contactConfig.phone}`}
              className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-emerald-700 px-3 py-2 rounded-lg hover:bg-emerald-50/70 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>{contactConfig.phone}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={handleEnquiryClick}
              rightIcon={<ArrowUpRight className="w-4 h-4" />}
              className="shadow-sm font-semibold"
            >
              Enquire Now
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden p-2.5 rounded-xl bg-white/80 border border-emerald-100 text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/60 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-emerald-950/40 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-out Menu Panel */}
          <div className="relative ml-auto w-4/5 max-w-sm h-full bg-white/95 backdrop-blur-2xl shadow-2xl border-l border-white/80 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    🌿
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Sri Harshi</h4>
                    <p className="text-[10px] text-emerald-700 font-semibold uppercase">
                      Zepto & Wholesale Vendor
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-2 py-6">
                {NAV_ITEMS.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={e => handleNavClick(e, item)}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60 mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zepto Vendor Supply Ready</span>
                </div>
                <p className="text-[11px] text-emerald-700 leading-relaxed">
                  Bulk quantities of Drumsticks, Pumpkin, Raw Banana, and Guava ready for daily
                  dispatch.
                </p>
              </div>

              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={handleEnquiryClick}
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Enquire Now
              </Button>

              <a
                href={`tel:${contactConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-600 hover:text-emerald-700"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  Call {contactConfig.person}: {contactConfig.phone}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
