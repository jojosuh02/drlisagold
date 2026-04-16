'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigation, type NavItem } from '@/lib/nav';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gold-100 bg-cream-50/95 backdrop-blur">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Dr. Lisa Gold home">
          <span className="font-display text-xl tracking-wide text-gold-700">
            Dr. Lisa Gold
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              item={item}
              open={openDropdown === item.href}
              onToggle={() =>
                setOpenDropdown(openDropdown === item.href ? null : item.href)
              }
              onClose={() => setOpenDropdown(null)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gold-500 px-5 py-2 text-xs font-medium uppercase tracking-wider text-white hover:bg-gold-600 md:inline-flex"
          >
            Schedule a Consult
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-800 hover:bg-gold-50 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gold-100 bg-cream-50 lg:hidden">
          <nav className="container-wide flex flex-col py-4">
            {navigation.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={() => setMobileOpen(false)} />
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-medium uppercase tracking-wider text-white hover:bg-gold-600"
            >
              Schedule a Consult
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  item,
  open,
  onToggle,
  onClose,
}: {
  item: NavItem;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:text-gold-700"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative" onMouseLeave={onClose}>
      <button
        onClick={onToggle}
        onMouseEnter={() => !open && onToggle()}
        className={cn(
          'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink-700 hover:text-gold-700',
          open && 'text-gold-700',
        )}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-60 rounded-md border border-gold-100 bg-cream-50 py-2 shadow-lg">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-ink-700 hover:bg-gold-50 hover:text-gold-700"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="border-b border-gold-100/60 py-3 text-sm font-medium text-ink-800"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-gold-100/60">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-ink-800"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown size={16} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="pb-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block py-2 pl-4 text-sm text-ink-600"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
