"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { formSchema } from "./constants";

import { MessageSquare } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Heading from "@/components/heading";
import LoadingState from "@/components/loading-state";
import EmptyState from "@/components/empty-state";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";

import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const DashboardConversationPage = () => {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt
      }
      const newMessages = [...messages, userMessage];

      const res = await axios.post('/api/conversation', {
        messages: newMessages,
      });

      setMessages((current) => [
        ...current,
        userMessage,
        res.data,
      ])

      form.reset();
    } catch (error) {
      toast.error("Something went wrong...");
    } finally {
      // TODO:
    }
  }

  return (
    <>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              className="grid grid-cols-12 gap-2 w-full p-4 px-3 md:px-6 border rounded-lg focus-within:shadow-sm"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        disabled={isLoading}
                        placeholder="Ask me anything! 🪄"
                        {...field}
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isLoading}
                size="icon"
                className="w-full col-span-12 lg:col-span-2"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="flex justify-center items-center w-full p-8 rounded-lg bg-muted">
              <LoadingState />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <EmptyState description="No conversation here." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={`${index} - ${message.content}`}
                className={cn(
                  "flex items-start gap-x-8 w-full p-8 rounded-lg",
                  message.role === 'user' ? "border border-black/10 bg-white" : "bg-muted",
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar /> }
                <p className="text-sm">
                  {message.content as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default DashboardConversationPage;
