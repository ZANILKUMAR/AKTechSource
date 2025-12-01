import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
