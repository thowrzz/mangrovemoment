'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, MessageCircle, Sparkles, Phone } from 'lucide-react'

const WA_NUMBER = '919744201662'
const WA_MESSAGE = encodeURIComponent(
  'Hi! I would like to book the World Mangrove Day Special Kayaking offer (₹100/person) for July 26th.'
)
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`
const PHONE_URL = 'tel:+919744201662'

export function OfferPopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Check if user already closed it in this session
    const hasClosed = sessionStorage.getItem('mangrove_offer_popup_closed')
    if (!hasClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setIsDismissed(true)
    }
  }, [])

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    setIsOpen(false)
    setIsDismissed(true)
    sessionStorage.setItem('mangrove_offer_popup_closed', 'true')
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleWhatsAppClick = () => {
    window.open(WA_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Floating Trigger Button (when modal is closed) */}
      {isDismissed && !isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-24 left-4 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 px-4 py-2.5 text-xs font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/30 active:scale-95 sm:bottom-6 sm:left-6 sm:text-sm border border-emerald-400/30"
          aria-label="View July 26 Special Offer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-300"></span>
          </span>
          <Sparkles className="h-4 w-4 text-amber-300 animate-pulse" />
          <span>July 26 Special — ₹100 Kayaking!</span>
        </button>
      )}

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in">
          
          {/* Click outside backdrop */}
          <div 
            className="fixed inset-0" 
            onClick={() => handleClose()} 
            aria-hidden="true" 
          />

          {/* Poster-Sized Card Container */}
          <div 
            className="relative z-10 my-auto w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] overflow-hidden rounded-2xl bg-stone-950 border border-amber-500/30 shadow-2xl shadow-emerald-950/70 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button Floating Overlay */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white border border-white/20 backdrop-blur-md shadow-lg transition-all duration-200 hover:bg-emerald-600 hover:scale-110 active:scale-95"
              aria-label="Close offer popup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Poster Image (Clickable) */}
            <div 
              onClick={handleWhatsAppClick}
              className="group relative cursor-pointer overflow-y-auto w-full bg-stone-950"
              title="Click to Book via WhatsApp @ ₹100"
            >
              <div className="relative w-full">
                <Image
                  src="./world-mangrove-day-offer.jpg"
                  alt="World Mangrove Day Special Kayaking Offer - ₹100 per person on July 26th"
                  width={500}
                  height={1000}
                  priority
                  className="w-full h-auto object-contain block rounded-t-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              {/* Hover overlay indication */}
              <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="rounded-full bg-emerald-500/90 px-5 py-2.5 text-xs font-bold text-white shadow-xl backdrop-blur-md border border-white/20">
                  Click to Book via WhatsApp 💬
                </span>
              </div>
            </div>

            {/* Sticky Action Footer */}
            <div className="bg-gradient-to-b from-stone-900 to-stone-950 border-t border-stone-800/80 p-3.5 sm:p-4 flex flex-col gap-2.5 shrink-0">
              <button
                onClick={handleWhatsAppClick}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 px-4 py-3 text-sm sm:text-base font-extrabold text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:from-green-600 hover:to-emerald-600 hover:shadow-green-600/50 active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5 fill-white text-emerald-600 transition-transform group-hover:scale-110" />
                <span>BOOK VIA WHATSAPP @ ₹100</span>
              </button>

              <div className="flex items-center justify-between px-1 text-xs text-stone-400">
                <a
                  href={PHONE_URL}
                  className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-emerald-500" />
                  <span>+91 9744201662</span>
                </a>

                <button
                  onClick={handleClose}
                  className="hover:text-stone-200 underline underline-offset-2 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}
