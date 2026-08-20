import React from 'react'
import { Mail, MessageCircle, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-blue-100 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Developed by <span className="text-blue-400">Jawad Ali</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Building simple, reliable digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
          <a
            href="mailto:jawadalichd4@gmail.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail size={17} className="text-blue-400" aria-hidden="true" />
            jawadalichd4@gmail.com
          </a>
          <a
            href="tel:+923117457206"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone size={17} className="text-blue-400" aria-hidden="true" />
            +92 311 7457206
          </a>
          <a
            href="https://wa.me/923117457206"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <MessageCircle size={17} className="text-blue-400" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-7xl px-6 py-4 text-center text-xs text-slate-500 sm:px-8 lg:px-10 lg:text-left">
          &copy; 2026 Jawad Ali. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer