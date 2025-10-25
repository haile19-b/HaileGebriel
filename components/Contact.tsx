'use client'

import { useForm } from 'react-hook-form';
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
import { UserFeedBack } from "@/config/Zod";
import z from "zod";

type FormSubmissionValues = z.infer<typeof UserFeedBack>;



function Contact() {

  const { register, handleSubmit,reset, formState: { errors, isSubmitting } } = useForm<FormSubmissionValues>({
    resolver: zodResolver(UserFeedBack),
    defaultValues: {
      Name: "",
      Email: "",
      Subject: "",
      Message: ""
    }
  });
  
  const onFormSubmitted = async (data: FormSubmissionValues) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        body: JSON.stringify({
          name: data.Name,
          email: data.Email,
          subject: data.Subject,
          message: data.Message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        reset(); 
      } else {
        alert('Failed to send message');
      }
    } catch (error:any) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LET&#39;S WORK
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            TOGETHER
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
          Ready to bring your ideas to life? Let&#39;s discuss your project and create something amazing.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
        <form 
        onSubmit={handleSubmit(onFormSubmitted)}
        className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Full Name
            </label>
            <Input 
              placeholder="Enter your full name"
              id="full_name"
              {...register('Name')}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
              {errors.Name && (
                <span className='text-sm text-red-500 dark:text-red-400 mt-1 block'>
                  {errors.Name.message}
                </span>
              )}
              </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Email Address
            </label>
            <Input 
              type="email"
              placeholder="Enter your email address"
              id="email"
              {...register('Email')}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
            {errors.Email && (
                <span className='text-sm text-red-500 dark:text-red-400 mt-1 block'>
                  {errors.Email.message}
                </span>
              )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Subject
            </label>
            <Input 
              placeholder="What is this regarding?"
              id="subject"
              {...register('Subject')}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
            {errors.Subject && (
                <span className='text-sm text-red-500 dark:text-red-400 mt-1 block'>
                  {errors.Subject.message}
                </span>
              )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Message
            </label>
            <Textarea 
              placeholder="Tell me about your project..."
              rows={5}
              id="message"
              {...register('Message')}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
            />
            {errors.Message && (
                <span className='text-sm text-red-500 dark:text-red-400 mt-1 block'>
                  {errors.Message.message}
                </span>
              )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
            disabled = {isSubmitting}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              {isSubmitting ? "Submitting..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact