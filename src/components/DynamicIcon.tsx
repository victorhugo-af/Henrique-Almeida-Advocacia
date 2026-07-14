import React from "react";
import {
  UserCheck,
  Clock,
  TrendingUp,
  FileCheck,
  Activity,
  Heart,
  ShieldAlert,
  MonitorCheck,
  Award,
  Workflow,
  MessageCircleHeart,
  CalendarDays,
  Users,
  Scale,
  Star,
  Shield,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Check,
  Calendar,
  Sparkles,
  MessageCircle,
  Map,
  ChevronRight,
  Sparkle
} from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
  key?: React.Key;
}

export default function DynamicIcon({ name, className = "", size }: DynamicIconProps) {
  const icons: { [key: string]: React.ComponentType<any> } = {
    UserCheck,
    Clock,
    TrendingUp,
    FileCheck,
    Activity,
    Heart,
    ShieldAlert,
    MonitorCheck,
    Award,
    Workflow,
    MessageCircleHeart,
    CalendarDays,
    Users,
    Scale,
    Star,
    Shield,
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    Menu,
    X,
    ArrowRight,
    Check,
    Calendar,
    Sparkles,
    MessageCircle,
    Map,
    ChevronRight,
    Sparkle
  };

  const IconComponent = icons[name];
  if (!IconComponent) {
    return <Scale className={className} size={size} />; // Fallback icon
  }

  return <IconComponent className={className} size={size} />;
}
