import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "./lib/site";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-zen-kaku",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  verification: { google: "tHNBdDY9YbhoK-bcXwnYu8SJ1ti9i4nGN219vVIH6og" },
  title: {
    default: `${SITE_NAME}｜${SITE_TAGLINE}`,
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "エアガン・釣具・バイクウェアの買取業者を、公式確認情報にもとづいて正直に比較。ジャンル別の売り方、法規制の注意点（準空気銃は買取不可）、売る前の準備までまとめた専門買取ガイドです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${zenKaku.variable} antialiased`}>
        <Header />
        <p className="bg-paper-deep border-b border-line text-center text-[11px] text-muted py-1 px-4">
          本サイトはプロモーション（PR）を含みます。
        </p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
