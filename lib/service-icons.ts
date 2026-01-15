import {
  MessageSquare,
  ShoppingCart,
  Phone,
  Calendar,
  Wrench,
  TrendingUp,
  BarChart,
} from "lucide-react"

export const serviceIconMap = {
  "message-square": MessageSquare,
  "shopping-cart": ShoppingCart,
  phone: Phone,
  calendar: Calendar,
  wrench: Wrench,
  "trending-up": TrendingUp,
  "bar-chart": BarChart,
} as const

export type ServiceIconName = keyof typeof serviceIconMap
