"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import {client} from "../client"
import { ConnectButton } from "thirdweb/react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-inter flex flex-col">
      {/* Top Text with Glow */}
      <div className="absolute top-8 left-0 right-0 text-center">
        <p className="text-sm tracking-wider glow-text">DEPLOY. AUTOMATE. EVOLVE</p>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Logo Background */}
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-light_upscaled-removebg-preview-D3mP20GTn1WbcPdLX2qLDFhPdxKFoQ.png"
            alt="Axicov Logo"
            width={600}
            height={600}
            className="opacity-40"
          />
        </motion.div>

        {/* Main Text with Dim Effect and Glow */}
        <div className="relative z-10">
          <div className="absolute inset-0 bg-black opacity-30 blur-md"></div>
          <h1 className="text-[120px] font-bold tracking-wider relative z-20 glow-text-large">AXICOV</h1>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <ConnectButton client={client} />
      </div>
    </div>
  )
}