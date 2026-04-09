"use client";

import { StarsBackgroundDemo } from "@/components/demo-components-backgrounds-stars";
import { AI_TAGS, AVATARS, LOGOS, ROLES, SLOTS } from "@/lib/data";
import {
  GoldTitle,
  GrayTitle,
  SectionHeading,
  SectionLabel,
} from "@/components/reusables";
import { Bot, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

/* SAFE fallback instead of CodeDemo */
function SafeCodeDemo() {
  return (
    <div className="w-full max-w-md bg-[#141417] border border-white/10 rounded-xl overflow-hidden">
      <div className="h-9 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="p-4 font-mono text-sm text-blue-400">
        npx shadcn@latest add @animate-ui/components-animate-code
      </div>
    </div>
  );
}

function MockUI({ rows = 3 }) {
  const widths = ["w-4/5", "w-3/5", "w-2/5", "w-4/5", "w-1/2"];
  const colors = [
    "bg-white/5",
    "bg-white/5",
    "bg-amber-400/15",
    "bg-white/5",
    "bg-white/5",
  ];

  return (
    <div className="mt-5 rounded-xl bg-[#141417] border border-white/10 overflow-hidden">
      <div className="h-9 bg-white/5 border-b border-white/10 flex items-center px-3.5 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <span className="w-2 h-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full ${widths[i]} ${colors[i]}`}
          />
        ))}
      </div>
    </div>
  );
}

function BentoCard({ icon, title, desc, children, className = "" }) {
  return (
    <div className={`relative bg-[#0f0f11] border border-white/10 hover:border-amber-400/20 rounded-2xl p-9 ${className}`}>
      <span className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-xl mb-5">
        {icon}
      </span>
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-sm text-stone-400">{desc}</p>
      {children}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-black overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen grid lg:grid-cols-5 px-6 pt-32 pb-20">
        <StarsBackgroundDemo />

        <div className="lg:col-span-3 flex flex-col items-center text-center">
          <Badge variant="gold">Powered by AI — Now in Beta</Badge>

          <h1 className="text-5xl lg:text-7xl mt-6">
            <GrayTitle>Ace your next interview</GrayTitle>
            <GoldTitle>with real experts</GoldTitle>
          </h1>

          <p className="text-stone-400 max-w-xl mt-6">
            Book 1:1 mock interviews with senior engineers.
          </p>

          <div className="flex gap-4 mt-10">
            <Link href="/onboarding">
              <Button>Get started</Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline">Browse →</Button>
            </Link>
          </div>

          <div className="flex items-center gap-3 mt-10">
            {AVATARS.map((av, i) => (
              <Image key={i} src={av.src} alt="" width={32} height={32} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center mt-10">
          <SafeCodeDemo />
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-14 border-y border-white/10 text-center">
        <p className="text-stone-500 mb-6">Top companies</p>
        <div className="flex justify-center gap-10">
          {LOGOS.map((l) => (
            <Image key={l.alt} src={l.src} alt={l.alt} width={40} height={40} />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <SectionHeading gray="Everything you need" gold="in one place" />

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <BentoCard icon={<Bot />} title="AI Questions" desc="Smart interview questions">
            <div className="flex gap-2 mt-4">
              {AI_TAGS.map((t) => (
                <Badge key={t.label}>{t.label}</Badge>
              ))}
            </div>
          </BentoCard>

          <BentoCard icon={<Wallet />} title="Credits" desc="Simple credit system" />
        </div>
      </section>

      {/* ROLES */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <SectionHeading gray="Built for both" gold="candidates & interviewers" />

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {ROLES.map((role) => (
            <div key={role.label} className="p-6 border border-white/10 rounded-xl">
              <h3 className="text-xl mb-2">{role.title}</h3>
              <p className="text-stone-400">{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl mb-4">
          <GrayTitle>Your next interview</GrayTitle>
          <GoldTitle>starts here</GoldTitle>
        </h2>

        <div className="flex justify-center gap-4 mt-6">
          <Button>Get started</Button>
          <Button variant="outline">Browse →</Button>
        </div>
      </section>

    </div>
  );
}