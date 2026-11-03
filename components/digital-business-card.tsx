"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2, Linkedin, Mail, Share2, UserRoundPlus } from "lucide-react";

const FRENCH_URL = "https://anisconsult.com/carte";
const ENGLISH_URL = "https://anisconsult.com/en/card";
const LINKEDIN_URL = "https://www.linkedin.com/in/anisallouachepro/";
const EMAIL = "hello@anisconsult.com";

// QR code for the permanent French card URL, including its white quiet zone.
const QR_ROWS = [
  "0000000000000000000000000000000000000",
  "0000000000000000000000000000000000000",
  "0000000000000000000000000000000000000",
  "0000000000000000000000000000000000000",
  "0000111111101101101111010011111110000",
  "0000100000101110000101010010000010000",
  "0000101110101110011010011010111010000",
  "0000101110101110101010110010111010000",
  "0000101110101111111000010010111010000",
  "0000100000100001110101110010000010000",
  "0000111111101010101010101011111110000",
  "0000000000001111011111001000000000000",
  "0000011010110001010001010010111110000",
  "0000010101000101101011001110001010000",
  "0000110001101110110001100001001110000",
  "0000001000010100011001110110100100000",
  "0000001101101010010001001011010000000",
  "0000011011000101110111001111000110000",
  "0000101110110000011110000101001110000",
  "0000010000011110000001110001000000000",
  "0000001111111010110110101010010110000",
  "0000001001000110100111001110000110000",
  "0000101111100011101111100101001110000",
  "0000011100010010101011100011010000000",
  "0000100101101010111101001111100100000",
  "0000000000001100110010011000100010000",
  "0000111111101100110011011010101110000",
  "0000100000100001001010001000100010000",
  "0000101110101101001100001111110010000",
  "0000101110100101011100001100101000000",
  "0000101110101110100001010001100010000",
  "0000100000101101111101111011000100000",
  "0000111111100001101011011100100110000",
  "0000000000000000000000000000000000000",
  "0000000000000000000000000000000000000",
  "0000000000000000000000000000000000000",
  "0000000000000000000000000000000000000",
] as const;

const translations = {
  fr: {
    shortTitle: "CARTE DE VISITE",
    subtitle: "Organisation opérationnelle · Processus · Outils métiers",
    description: "J'aide à structurer les opérations et à mettre en place des méthodes et des outils adaptés au terrain.",
    save: "Enregistrer le contact",
    share: "Partager la carte",
    copied: "Lien copié",
    qr: "Scannez pour retrouver ma carte",
    qrHelp: "Un scan, puis un clic pour enregistrer mes coordonnées.",
    contact: "Me contacter",
    website: "Découvrir mon activité",
    paris: "Paris, France",
    footer: "Coordonnées professionnelles · Sans application à installer",
    copyFallback: "Copiez le lien de ma carte :",
    qrAlt: "QR code menant à la carte professionnelle d'Anis Allouache",
  },
  en: {
    shortTitle: "DIGITAL BUSINESS CARD",
    subtitle: "Operations · Process improvement · Business tools",
    description: "I help organize day-to-day operations and develop practical workflows and tools for real-world teams.",
    save: "Save contact",
    share: "Share this card",
    copied: "Link copied",
    qr: "Scan to open my card",
    qrHelp: "Scan, then save my contact details in one tap.",
    contact: "Get in touch",
    website: "Explore my work",
    paris: "Paris, France",
    footer: "Professional contact details · No app required",
    copyFallback: "Copy my card URL:",
    qrAlt: "QR code linking to Anis Allouache's digital business card",
  },
} as const;

export function DigitalBusinessCard({ locale }: { locale: "fr" | "en" }) {
  const t = translations[locale];
  const [copied, setCopied] = useState(false);
  const currentUrl = locale === "fr" ? FRENCH_URL : ENGLISH_URL;

  async function shareCard() {
    setCopied(false);
    try {
      if (navigator.share) {
        await navigator.share({ title: "Anis Allouache", text: t.subtitle, url: currentUrl });
        return;
      }
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return;
      window.prompt(t.copyFallback, currentUrl);
    }
  }

  return (
    <main className="min-h-screen bg-[#f4f2ed] px-4 py-6 text-[#171717] sm:px-6 sm:py-12">
      <div className="mx-auto w-full max-w-[510px]">
        <div className="mb-7 flex items-center justify-between px-1">
          <Link href={locale === "fr" ? "/" : "/en"} className="text-[11px] font-bold uppercase tracking-[0.2em]">
            ANIS ALLOUACHE
          </Link>
          <nav aria-label="Language" className="flex gap-1 rounded-full border border-[#d9d7d0] bg-white/75 p-1 text-xs font-semibold">
            <Link href="/carte" aria-current={locale === "fr" ? "page" : undefined} className={locale === "fr" ? "rounded-full bg-[#171717] px-3 py-1.5 text-white" : "rounded-full px-3 py-1.5 text-[#73716c]"}>
              FR
            </Link>
            <Link href="/en/card" aria-current={locale === "en" ? "page" : undefined} className={locale === "en" ? "rounded-full bg-[#171717] px-3 py-1.5 text-white" : "rounded-full px-3 py-1.5 text-[#73716c]"}>
              EN
            </Link>
          </nav>
        </div>

        <article className="overflow-hidden rounded-[30px] border border-[#e7e4dd] bg-white shadow-[0_22px_65px_rgba(30,30,30,0.07)]">
          <div className="h-[5px] bg-[#171717]" />
          <div className="px-6 pb-8 pt-9 sm:px-9">
            <div className="flex h-16 w-16 items-center justify-center rounded-[19px] bg-[#171717] text-[22px] font-semibold tracking-[-0.06em] text-white" aria-hidden="true">
              AA
            </div>
            <p className="mt-9 text-[10px] font-bold uppercase tracking-[0.23em] text-[#74736f]">{t.shortTitle}</p>
            <h1 className="mt-3 font-display text-[37px] font-semibold leading-[1.05] tracking-[-0.055em] sm:text-[43px]">Anis Allouache</h1>
            <p className="mt-4 max-w-[370px] text-[15px] font-semibold leading-6 text-[#33332f]">{t.subtitle}</p>
            <p className="mt-3 max-w-[390px] text-sm leading-6 text-[#686761]">{t.description}</p>
            <p className="mt-4 text-xs font-medium tracking-[0.025em] text-[#8a8983]">{t.paris}</p>

            <div className="mt-8 grid gap-2.5">
              <a href="/anis-allouache.vcf" className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#171717] px-5 text-sm font-semibold text-white transition-opacity hover:opacity-85">
                <UserRoundPlus size={18} aria-hidden="true" />
                {t.save}
              </a>
              <button type="button" onClick={shareCard} className="flex min-h-[50px] items-center justify-center gap-2.5 rounded-full border border-[#dedbd3] bg-white px-5 text-sm font-semibold transition-colors hover:bg-[#f6f4f0]">
                {copied ? <Check size={18} aria-hidden="true" /> : <Share2 size={18} aria-hidden="true" />}
                {copied ? t.copied : t.share}
              </button>
            </div>

            <div className="my-8 border-t border-[#eeece7]" />

            <div className="flex flex-col items-center text-center">
              <div className="rounded-[20px] border border-[#eeece7] bg-white p-3 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label={t.qrAlt} viewBox="0 0 37 37" shapeRendering="crispEdges" className="h-[205px] w-[205px] sm:h-[215px] sm:w-[215px]">
                  <rect width="37" height="37" fill="#fff" />
                  {QR_ROWS.map((row, y) =>
                    Array.from(row).map((bit, x) =>
                      bit === "1" ? <rect key={y + "-" + x} x={x} y={y} width="1" height="1" fill="#171717" /> : null
                    )
                  )}
                </svg>
              </div>
              <p className="mt-5 text-sm font-semibold">{t.qr}</p>
              <p className="mt-1.5 max-w-[250px] text-xs leading-5 text-[#86847d]">{t.qrHelp}</p>
            </div>
          </div>
        </article>

        <div className="mt-5 overflow-hidden rounded-[24px] border border-[#e7e4dd] bg-white">
          <a href={"mailto:" + EMAIL} className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-[#faf9f6]">
            <Mail size={18} className="text-[#6d6b65]" aria-hidden="true" />
            <span className="flex-1 text-sm font-medium">{EMAIL}</span>
            <ArrowUpRight size={17} className="text-[#88867f]" aria-hidden="true" />
          </a>
          <div className="mx-5 border-t border-[#eeece7]" />
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-[#faf9f6]">
            <Linkedin size={18} className="text-[#6d6b65]" aria-hidden="true" />
            <span className="flex-1 text-sm font-medium">LinkedIn</span>
            <ArrowUpRight size={17} className="text-[#88867f]" aria-hidden="true" />
          </a>
          <div className="mx-5 border-t border-[#eeece7]" />
          <a href={locale === "fr" ? "/" : "/en"} className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-[#faf9f6]">
            <Globe2 size={18} className="text-[#6d6b65]" aria-hidden="true" />
            <span className="flex-1 text-sm font-medium">{t.website}</span>
            <ArrowUpRight size={17} className="text-[#88867f]" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-7 text-center text-[11px] text-[#89867f]">{t.footer}</p>
      </div>
    </main>
  );
}
