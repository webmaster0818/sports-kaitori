import { SITE_NAME, OPERATOR } from "../lib/site";

export default function Footer() {
  const cols = [
    {
      title: "ジャンル別買取ガイド",
      links: [
        { href: "/airsoft/", label: "エアガン・トイガン買取" },
        { href: "/fishing/", label: "釣具・フィッシング用品買取" },
        { href: "/bikewear/", label: "バイクウェア・ヘルメット買取" },
        { href: "/airsoft/law/", label: "エアガンの法規制と買取可否" },
        { href: "/airsoft/model-gun/", label: "モデルガンが買取できない条件" },
        { href: "/fishing/junk/", label: "折れたロッド・箱なしリールの売却" },
        { href: "/bikewear/helmet/", label: "中古ヘルメットの買取可否" },
        { href: "/bikewear/suit/", label: "革ツナギの売却" },
      ],
    },
    {
      title: "業者選び・準備",
      links: [
        { href: "/hikaku/", label: "買取業者の選び方（3つの売り先）" },
        { href: "/reviews/", label: "総合リユース店の検証" },
        { href: "/guide/", label: "はじめての買取ガイド" },
        { href: "/verification-policy/", label: "情報の調査・検証ポリシー" },
      ],
    },
    {
      title: "サイト情報",
      links: [
        { href: "/about/", label: "運営者情報" },
        { href: "/contact/", label: "お問い合わせ" },
        { href: "/privacy/", label: "プライバシーポリシー" },
        { href: "/terms/", label: "利用規約" },
      ],
    },
  ];
  return (
    <footer className="site-footer mt-20">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="head text-lg text-paper">{SITE_NAME}</p>
            <p className="mt-3 text-xs leading-relaxed text-paper/60">
              エアガン・釣具・バイクウェアの買取を、公式確認情報にもとづいて正直に比較する専門ガイドです。掲載情報には確認日を付記しています。
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold tracking-widest text-paper/80 mb-3">{c.title}</p>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <a className="footer-link" href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-paper/15 pt-6 text-center">
          <p className="text-[11px] text-paper/50">
            運営: {OPERATOR}｜本サイトは買取サービスの情報メディアであり、買取業者ではありません。広告（PR）を含みますが、報酬の有無は評価・掲載順に影響しません。
          </p>
          <p className="mt-2 text-[11px] text-paper/40">&copy; {SITE_NAME}</p>
        </div>
      </div>
    </footer>
  );
}
