'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { navigation, type NavItem } from '@/lib/nav';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-100/60 bg-white">
      <div className="mx-auto flex h-[84px] w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" aria-label="Dr. Lisa Gold home" className="flex items-center">
          <Image
            src="/img/lg-logo.svg"
            alt="Dr. Lisa Gold"
            width={80}
            height={80}
            priority
            className="h-14 w-14 md:h-16 md:w-16"
          />
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
            href="/shop"
            className="hidden items-center gap-2 rounded-full border border-gold-200 px-4 py-2 text-sm font-medium text-navy-500 transition hover:border-gold-400 hover:text-gold-500 md:inline-flex"
            aria-label="Cart"
          >
            <ShoppingBag size={16} />
            <span>$0.00</span>
            <span className="ml-1 rounded-full bg-teal-500 px-2 py-0.5 text-xs text-white">0</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-500 hover:bg-cream-50 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gold-100 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4">
            {navigation.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={() => setMobileOpen(false)} />
            ))}
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
        className="rounded px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-navy-500 transition hover:text-gold-500"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="relative" onMouseLeave={onClose}>
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        className={cn(
          'inline-flex items-center gap-1 rounded px-3 py-2 text-[13px] font-semibold uppercase tracking-wide text-navy-500 transition hover:text-gold-500',
          open && 'text-gold-500',
        )}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown size={14} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="absolute left-0 top-full w-64 bg-navy-500 py-2 shadow-lg">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block px-5 py-3 text-sm font-medium text-white hover:bg-navy-600 hover:text-gold-300"
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
        className="border-b border-gold-100/60 py-3 text-sm font-semibold uppercase tracking-wide text-navy-500"
      >
        {item.label}
      </Link>
    );
  }
  return (
    <div className="border-b border-gold-100/60">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-wide text-navy-500"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown size={16} className={cn('transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="pb-3 pl-4">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block py-2 text-sm font-medium text-ink-700"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
