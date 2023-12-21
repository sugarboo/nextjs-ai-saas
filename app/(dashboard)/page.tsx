"use client";

import { useRouter } from "next/navigation";

import { tools } from "@/constants";
import { cn } from "@/lib/utils";

import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const DashboardPage = () => {
  const router = useRouter();

  const toPage = (href: string) => {
    router.push(href);
  }

  return (
    <div>
      <div className="space-y-4 mb-8">
        <h2 className="text-center text-2xl md:text-4xl font-bold">
          Explore the Power of AI
        </h2>
        <p className="text-center text-sm md:text-lg text-muted-foreground font-light">
          Chat with Genius - Experience the Power of AI
        </p>
      </div>
      <div className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="flex justify-between items-center p-4 border-black/5 transition cursor-pointer hover:shadow-md"
            onClick={() => toPage(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div
                className={cn(
                  "w-fit p-2 rounded-md",
                  tool.bgColor,
                )}
              >
                <tool.icon
                  className={cn(
                    "w-8 h-8",
                    tool.color,
                  )}
                />
              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
 
export default DashboardPage;
