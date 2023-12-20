"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { UserButton, useUser } from "@clerk/nextjs";


const poppins = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

const Sidebar = () => {
  const pathname =  usePathname();

  const routes = [
    {
      href: '/',
      label: 'Chat',
      icon: '/chat.png',
      active: pathname === '/',
    },
    {
      href: '/image',
      label: 'Image Generator',
      icon: '/photo.png',
      active: pathname === '/image',
      premium: true,
    },
    {
      href: '/blog',
      label: 'Blog Writer',
      icon: '/transcript.png',
      active: pathname === '/blog',
      premium: true,
    },
    {
      href: '/email',
      label: 'Email Writer',
      icon: '/mail.png',
      active: pathname === '/email',
      premium: true,
    },
  ]

  const { user } = useUser();

  return (
    <div className="flex flex-col justify-between space-y-4 h-full py-4 text-white bg-[#111827] overflow-hidden">
      <div>
        <div className="px-3 py-2">
          <div className="flex justify-between items-center mb-14 pl-3">
            <div className="relative w-10 h-10 mr-4">
              <Image
                src="/logo.png"
                alt="logo"
                fill
              />
            </div>
            <h1 className={cn(
              "hidden md:block text-3xl font-bold",
              poppins.className
            )}>
              Genius
            </h1>
          </div>
          <div className="space-y-1">
            {routes.map((route) => (
              <div
                key={route.href}
                className={cn(
                  "group flex justify-start w-full p-3 font-semibold cursor-pointer transition hover:text-white",
                  route.active ? "text-white" : "text-zinc-500"
                )}
              >
                <div className="flex items-center flex-1">
                  <div className="relative w-8 h-8 mr-4 transition duration-150 group-hover:scale-125">
                    <Image
                      src={route.icon}
                      alt={route.label}
                      fill
                    />
                  </div>
                  <div className="truncate">
                    {route.label}
                  </div>
                </div>
                {route.premium && (
                  <Badge
                    variant="premium"
                    className="p-2 uppercase font-bold"
                  >
                    pro
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {user && (
        <div className="w-full px-3 py-2">
          <UserButton afterSignOutUrl="/sign-in" />
          <span>{user?.fullName}</span>
        </div>
      )}
    </div>
  );
}
 
export default Sidebar;
