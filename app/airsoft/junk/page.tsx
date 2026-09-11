import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "ジャンク・故障エアガンは売れる？— 動作不良品の売却可否と改造品の注意",
  description:
    "動かないエアガン・ジャンク品の売却可否を整理。中古市場のパーツ取り需要、査定に出す前の準備、値が付きにくいケース、威力を高める改造品(準空気銃のおそれ)が売れない理由を解説します。",
  alternates: { canonical: `${SITE_URL}/airsoft/junk/` },
};

const faqs = [
  {
    q: "動かないエアガンでも値が付くのはなぜですか？",
    a: "中古エアガン市場には、修理・カスタム用の部品を目的とした「パーツ取り」需要があるためです。特に流通量の多い人気ブランドは部品需要も厚く、動作不良でも査定対象とする業者があります。ただし取扱いは業者により異なるため、事前確認が確実です。",
  },
  {
    q: "ジャンク品を査定に出すとき、何を伝えればよいですか？",
    a: "①症状(通電しない・給弾しない・ガス漏れ等)②改造・分解歴の有無 ③付属品の有無、の3点を正直に伝えてください。症状を隠しても査定時に判明し、かえって減額や買取不可の原因になります。",
  },
  {
    q: "威力を上げる改造をしたエアガンはジャンク扱いで売れますか？",
    a: "いいえ。威力が法定の基準値以上となった個体は「準空気銃」にあたりうるもので、所持自体が原則禁止されており、ジャンク扱いでも買取・譲渡には出せません。判断に迷う場合は警察相談専用電話(#9110)に相談してください。",
  },
  {
    q: "外装カスタム(サイト・グリップ交換など)も売却に影響しますか？",
    a: "威力に関わらない外装カスタムは、準空気銃の問題とは別です。評価は業者・製品によりますが、純正パーツが残っていれば一緒に査定へ出すのがおすすめです。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "エアガン・トイガン買取", item: `${SITE_URL}/airsoft/` },
    { "@type": "ListItem", position: 3, name: "ジャンク・故障品の売却可否", item: `${SITE_URL}/airsoft/junk/` },
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

export default function AirsoftJunkPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs
            items={[
              { label: "エアガン・トイガン買取", href: "/airsoft/" },
              { label: "ジャンク・故障品の売却可否" },
            ]}
          />
          <p className="eyebrow mt-8 mb-4">AIRSOFT — JUNK</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            ジャンク・故障エアガンは売れる？
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            「動かないから捨てるしかない」と思われがちなエアガンですが、中古市場にはパーツ取り需要があり、動作不良品を査定対象とする業者もあります。このページでは、値が付くケース・付きにくいケースと、売却前に必ず確認すべき改造品の注意を整理します。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">結論 — 「ジャンク=ゼロ円」とは限らない</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="card-field p-6">
            <span className="gear-tag mb-4">値が付きやすい</span>
            <h3 className="head text-lg text-ink">人気ブランドの動作不良品</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              流通量の多いブランドは修理・カスタム部品の需要も厚く、パーツ取り前提で査定されることがあります。純正パーツ・付属品が残っているほど有利です。
            </p>
          </div>
          <div className="card-field p-6">
            <span className="gear-tag mb-4">値が付きにくい</span>
            <h3 className="head text-lg text-ink">破損が大きい・素性不明の個体</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              外装の大きな破損、主要部品の欠品、分解済みで組み上がらない状態などは需要が細ります。それでも業者により判断は分かれるため、廃棄前の査定確認は無駄になりません。
            </p>
          </div>
        </div>
        <div className="mt-8 max-w-3xl">
          <div className="card-field p-6 border-safety">
            <span className="gear-tag gear-tag--safety mb-4">売れない</span>
            <h3 className="head text-lg text-ink">威力を高める改造をした個体</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              弾丸の運動エネルギーが法定の基準値以上となった個体は「準空気銃」にあたりうるもので、所持自体が原則禁止されています(銃砲刀剣類所持等取締法 第21条の3)。ジャンク扱いでも買取・譲渡には出せません。詳しくは
              <a href="/airsoft/law/" className="font-bold text-safety underline">法規制と買取可否の解説</a>
              へ。
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">査定前の準備 — 3つだけ</h2>
          <ol className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft list-decimal pl-5">
            <li>
              <span className="font-bold text-ink">症状をメモする。</span>
              「通電しない」「給弾しない」「ガス漏れ」など、分かる範囲で症状を具体的に。査定がスムーズになり、信頼にもつながります。
            </li>
            <li>
              <span className="font-bold text-ink">改造・分解歴を正直に伝える。</span>
              隠しても査定時に判明します。威力に関わる改造の有無は、売却可否そのものに関わる最重要事項です。
            </li>
            <li>
              <span className="font-bold text-ink">付属品・純正パーツをまとめる。</span>
              箱・説明書・マガジン・交換前の純正パーツは、ジャンクでも評価の足しになります。
            </li>
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">よくある質問</h2>
        <div className="mt-6 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card-field p-5">
              <summary className="cursor-pointer head text-base text-ink">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">あわせて読みたい</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="/airsoft/" className="btn-safety text-sm">エアガン買取ガイド</a>
            <a href="/airsoft/disposal/" className="btn-outline text-sm">処分方法4つの比較</a>
            <a href="/airsoft/law/" className="btn-outline text-sm">法規制と買取可否</a>
          </div>
        </div>
      </section>
    </main>
  );
}
