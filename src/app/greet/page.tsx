import type { Metadata } from "next";
import { Orbitron, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./greet.module.css";
import Embers from "./Embers";
import Moon from "./Moon";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-orbitron",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Happy Guru Pournima",
  description:
    "A Guru Pournima greeting for my teachers — the guru shloka and a note of thanks, under a rising moon.",
  robots: { index: false, follow: true },
};

export default function GreetPage() {
  return (
    <div className={`${styles.page} ${orbitron.variable} ${plusJakarta.variable}`}>
      <Embers />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.diya} aria-hidden="true">
            <div className={styles.flame}></div>
            <div className={styles.diyaBase}></div>
          </div>

          <Moon />

          <p className={styles.eyebrow}>
            आषाढ़ पूर्णिमा
            <span className={styles.en}>the full moon of the teacher</span>
          </p>

          <h1 className={styles.heroTitle}>Happy Guru Pournima</h1>

          <p className={styles.tagline}>A light, for the ones who lit ours.</p>

          <a href="#shloka" className={styles.scrollHint} aria-label="Scroll to see the guru shloka">
            <MdKeyboardArrowDown aria-hidden="true" />
          </a>
        </section>

        <section id="shloka" className={styles.shlokaSection}>
          <div className={styles.wrap}>
            <p className={styles.label}>गुरु श्लोक &middot; the guru shloka</p>
            <div className={styles.plaque}>
              <span className={styles.cornerTl} aria-hidden="true"></span>
              <span className={styles.cornerTr} aria-hidden="true"></span>
              <span className={styles.cornerBl} aria-hidden="true"></span>
              <span className={styles.cornerBr} aria-hidden="true"></span>

              <p className={styles.devanagari}>
                गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।
                <br />
                गुरुः साक्षात् परं ब्रह्म तस्मै श्री गुरवे नमः ॥
              </p>
              <p className={styles.transliteration}>
                Gurur Brahmā, Gurur Viṣṇuḥ, Gurur Devo Maheśvaraḥ,
                <br />
                Guruḥ Sākṣāt Paraṁ Brahma, Tasmai Śrī Gurave Namaḥ.
              </p>
              <p className={styles.translation}>
                The Guru is Brahma who creates understanding, Vishnu who
                sustains it, and Shiva who clears away what no longer serves.
                The Guru, truly, is the Absolute itself — and to that Guru, I
                offer my deepest reverence.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.messageSection}>
          <div className={styles.wrap}>
            <p className={styles.label}>a word of thanks</p>
            <div className={styles.message}>
              <p>
                To every teacher who ever turned a page of confusion into a
                page of understanding —
              </p>
              <p>
                Guru Pournima is the one day set aside to say what we too
                rarely say: thank you. Not only for what was taught, but for
                how it was given — the patience when we were slow, the{" "}
                <em>belief</em> when we doubted ourselves, the quiet
                correction we only understood years later.
              </p>
              <p>
                Whatever we go on to build, we build standing on ground you
                shaped first.
              </p>
              <p className={styles.bow}>Today, we bow to that.</p>
            </div>
          </div>
        </section>

        <section className={styles.closing}>
          <div className={styles.flameRow} aria-hidden="true">
            <div className={styles.miniFlame}></div>
            <div className={styles.miniFlame}></div>
            <div className={styles.miniFlame}></div>
            <div className={styles.miniFlame}></div>
            <div className={styles.miniFlame}></div>
            <div className={styles.miniFlame}></div>
            <div className={styles.miniFlame}></div>
          </div>
          <p className={styles.closingLine}>Happy Guru Pournima</p>
          <p className={styles.signature}>WITH PRANAAM &mdash; SHIVAM</p>

          <Link href="/" className={styles.backLink}>
            Back to shivamsutar.dev
          </Link>
        </section>
      </main>
    </div>
  );
}
