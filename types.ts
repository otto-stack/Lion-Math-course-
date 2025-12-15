import React from 'react';

export type ViewState = 
  | 'home' 
  | 'brochure' 
  | 'comparison' 
  | 'materials' 
  | 'enrollment';

export interface NavLinkItem {
  name: string;
  id: string;
  isPage: boolean;
}

export interface Course {
    title: string;
    subtitle: string;
    desc: string;
    tags: string[];
    price: string;
    featured?: boolean;
}

export interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    desc: React.ReactNode;
    image?: string;
    hasImage: boolean;
    link?: boolean;
}