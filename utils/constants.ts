import type { LucideIcon } from "lucide-react"

import {
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon
} from "lucide-react"

type Tool = {
  label: string,
  href: string,
  icon: LucideIcon,
  color: string,
  bgColor: string
}

const tools: Tool[] = [
  {
    label:'Conversation',
    href: '/conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10'
  },
  {
    label:'Music Generation',
    href: '/music',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10'
  },
  {
    label:'Image Generation',
    href: '/image',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-pink-700/10'
  },
  {
    label:'Video Generation',
    href: '/video',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10'
  },
  {
    label:'Code Generation',
    href: '/code',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10'
  },
]

export {
  tools
}
