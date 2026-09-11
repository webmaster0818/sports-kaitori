import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "エアガンの処分方法4つを比較 — 売る・譲る・捨てる前に確認すること",
  description:
    "使わなくなったエアガンの処分方法(買取・フリマ・譲渡・廃棄)を比較。廃棄する場合の注意、準空気銃にあたるおそれのある個体の扱い、ガスガン・バッテリーの処分で確認すべきことを整理します。",
  alternates: { canonical: `${SITE_URL}/airsoft/disposal/` },
};

const faqs = [
  {
    q: "エアガンは普通ゴミとして捨てられますか？",
    a: "分別区分は自治体ごとに異なります。金属パーツ・プラスチック・バッテリーなど複数素材で構成されるため、お住まいの自治体の分別案内で「おもちゃ(玩具)」「金属含有製品」等の扱いを確認してから出してください。外観が実銃に似ているため、袋から見えない形で出すなど誤解を避ける配慮も現実的に重要です。",
  },
  {
    q: "ガスガンのガス缶やバッテリーはどう処分しますか？",
    a: "ガス缶(フロンガス・CO2カートリッジ)やリポバッテリーは、通常ゴミと分別が異なるのが一般的です。ガス缶は中身の残量がある状態での廃棄が禁止されている自治体が多く、バッテリーは回収拠点への持ち込みを求められる場合があります。必ず自治体の案内と製品の表示に従ってください。",
  },
  {
    q: "動かないエアガンでも買取に出せますか？",
    a: "業者により異なりますが、中古エアガン市場にはパーツ取り需要があるため、動作不良品(ジャンク)を査定対象とする業者もあります。詳しくはジャンク・改造品の売却可否の記事で解説しています。",
  },
  {
    q: "改造して威力を上げたエアガンはどう処分すればよいですか？",
    a: "威力が法定の基準値以上となった個体は「準空気銃」にあたりうるもので、所持自体が原則禁止されており、買取・譲渡には出せません。自己判断で放置・譲渡せず、警察相談専用電話(#9110)に相談してください。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "エアガン・トイガン買取", item: `${SITE_URL}/airsoft/` },
    { "@type": "ListItem", position: 3, name: "エアガンの処分方法", item: `${SITE_URL}/airsoft/disposal/` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const METHODS = [
  {
    tag: "推奨",
    title: "買取に出す",
    body: "人気ブランドの適法な個体なら、最も手間と金銭のバランスが良い方法です。箱・説明書・付属品が揃っているほど有利。動作不良でもパーツ取り需要で値が付く場合があります。",
    note: "向いている人: 東京マルイ・VFCなど人気ブランドを持っている/複数まとめて手放したい",
  },
  {
    tag: "高値狙い",
    title: "フリマ・オークションで自分で売る",
    body: "相場次第では買取より高く売れる可能性がありますが、出品・梱包・発送・トラブル対応をすべて自分で行う必要があります。各プラットフォームの出品ルール(エアガンの取扱規定)の確認が前提です。",
    note: "向いている人: 手間を許容でき、相場を自分で調べられる人",
  },
  {
    tag: "無償",
    title: "知人に譲る",
    body: "手軽ですが、威力を高める改造をした個体は準空気銃にあたるおそれがあり、譲渡もできません。譲る前に改造の有無を必ず確認してください。18歳未満への譲渡は年齢制限のある製品区分に注意が必要です。",
    note: "向いている人: 状態や経緯を説明できる相手が身近にいる人",
  },
  {
    tag: "最終手段",
    title: "廃棄する",
    body: "自治体の分別案内に従って処分します。ガス缶・バッテリーは別分別が一般的。まだ動く適法な個体をそのまま捨てるのは金銭面でもったいないため、まず査定に出してみる価値があります。",
    note: "向いている人: 値が付かないことを確認済みの人",
  },
];

export default function AirsoftDisposalPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs
            items={[
              { label: "エアガン・トイガン買取", href: "/airsoft/" },
              { label: "処分方法" },
            ]}
          />
          <p className="eyebrow mt-8 mb-4">AIRSOFT — DISPOSAL</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            エアガンの処分方法 — 売る・譲る・捨てる前に
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            使わなくなったエアガンの手放し方は、買取・フリマ・譲渡・廃棄の4つに整理できます。どれを選ぶ場合でも、先に確認すべきなのは「その個体が適法な状態か」。威力を高める改造をした個体は準空気銃にあたるおそれがあり、売ることも譲ることもできません。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">処分前の確認 — 適法な状態か</h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
          市販の適法なエアガン・トイガンは所持も売却も可能です。一方、威力を高める改造により弾丸の運動エネルギーが法定の基準値以上となった個体は「準空気銃」にあたりうるもので、所持自体が原則禁止されています(銃砲刀剣類所持等取締法 第21条の3)。この場合、買取・フリマ・譲渡のいずれにも出せません。改造の有無が分からない場合の考え方は
          <a href="/airsoft/law/" className="font-bold text-safety underline">法規制と買取可否の解説</a>
          をご覧ください。判断に迷う場合は警察相談専用電話(#9110)へ。
        </p>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">4つの処分方法の比較</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {METHODS.map((m) => (
              <div key={m.title} className="card-field p-6">
                <span className="gear-tag mb-4">{m.tag}</span>
                <h3 className="head text-lg text-ink">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.body}</p>
                <p className="mt-3 text-xs text-muted">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">廃棄する場合の注意</h2>
        <ul className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <li>
            <span className="font-bold text-ink">分別は自治体の案内で確認する。</span>
            エアガンは金属・プラスチック・電子部品の複合製品で、分別区分は自治体ごとに異なります。
          </li>
          <li>
            <span className="font-bold text-ink">ガス缶・バッテリーは別扱いが一般的。</span>
            ガスの残った缶の廃棄を禁止する自治体が多く、リポバッテリーは回収拠点持ち込みを求められる場合があります。製品表示と自治体の案内に従ってください。
          </li>
          <li>
            <span className="font-bold text-ink">見た目への配慮。</span>
            外観が実銃に似ているため、中身が見えない袋に入れる等、収集時の誤解を避ける出し方が現実的です。
          </li>
        </ul>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">よくある質問</h2>
          <div className="mt-6 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card-field p-5">
                <summary className="cursor-pointer head text-base text-ink">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">まず「売れるか」を確かめるのが損しない順序</h2>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft mb-8">
          廃棄はいつでもできます。適法な個体なら、実売相場を物差しに査定へ出してみてから判断しても遅くありません。
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/airsoft/" className="btn-safety text-sm">エアガン買取ガイド</a>
          <a href="/airsoft/junk/" className="btn-outline text-sm">ジャンク・改造品は売れる？</a>
          <a href="/airsoft/law/" className="btn-outline text-sm">法規制と買取可否</a>
        </div>
      </section>
    </main>
  );
}
