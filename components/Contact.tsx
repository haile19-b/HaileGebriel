import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            LET'S WORK
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            TOGETHER
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
          Ready to bring your ideas to life? Let's discuss your project and create something amazing.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
        <form className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Full Name
            </label>
            <Input 
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Email Address
            </label>
            <Input 
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Subject
            </label>
            <Input 
              placeholder="What is this regarding?"
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label className="text-lg font-semibold text-slate-800 dark:text-white">
              Message
            </label>
            <Textarea 
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact