import type { Metadata } from "next";
import { SITE_URL } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "買取業者の選び方 — 3つの売り先の違い",
  description:
    "スポーツ・アウトドア用品の売り先は「ジャンル専門買取業者」「複数社一括査定」「実店舗リユースチェーン」の3タイプ。それぞれの特徴と向き不向きを中立の比較表で整理し、相見積もりの進め方を解説します。",
  alternates: { canonical: `${SITE_URL}/hikaku/` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "買取業者の選び方", item: `${SITE_URL}/hikaku/` },
  ],
};

const types = [
  {
    tag: "TYPE 01",
    name: "ジャンル専門の買取業者",
    how: "エアガンなら エアガン、釣具なら釣具と、特定ジャンルに特化して買取を行う業者です。宅配・出張・店頭など複数の方法に対応していることが多いタイプです。",
    fit: "型番やモデルで価値が決まる専門性の高い品物、生産終了モデル、カスタム品など、知識のある査定者に見てほしい品物に向きます。",
    care: "専門外のジャンルはまとめて出せないことがあります。送料・返送料・キャンセル条件は業者ごとに異なるため、依頼前に公式情報の確認が必要です。",
  },
  {
    tag: "TYPE 02",
    name: "複数社への一括査定",
    how: "1回の申し込みで複数の買取業者から査定の連絡を受けられる仕組みです。自分で1社ずつ探して依頼する手間を省けます。",
    fit: "相場感がなく、まず複数の提示額を並べて比べたい人に向きます。相見積もりを前提にした売り方と相性の良いタイプです。",
    care: "複数社から連絡が来るため、やり取りの量は増えます。参加している業者の顔ぶれや条件は仕組みごとに異なるので、申し込み前に確認しましょう。",
  },
  {
    tag: "TYPE 03",
    name: "実店舗のリユースチェーン",
    how: "総合リユース店やスポーツ用品を扱う実店舗に持ち込み、その場で査定・現金化する方法です。",
    fit: "すぐに手放したい、点数が少ない、ジャンルの違う品物をまとめて処分したいという人に向きます。対面で話しながら進められるのも利点です。",
    care: "専門性の高い品物は、ジャンル特化の業者と評価の観点が異なる場合があります。1店舗で即決せず、他のタイプと比較してから決めるのが安全です。",
  },
];

const rows = [
  { label: "品物の渡し方", values: ["宅配・出張・店頭など業者による", "査定後に選んだ業者へ", "自分で店舗に持ち込む"] },
  { label: "査定の専門性", values: ["特化ジャンルに強い傾向", "参加業者による", "総合的・幅広い傾向"] },
  { label: "現金化までの早さ", values: ["方法により日数が変わる", "比較の時間がかかる", "その場で完結しやすい"] },
  { label: "向いている品物", values: ["専門性の高い品・希少モデル", "相場感のない品・高額になりうる品", "少量・ジャンル混在の品"] },
  { label: "注意したい点", values: ["送料・返送条件の確認", "連絡量が増える", "1店舗での即決を避ける"] },
];

export default function HikakuPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "買取業者の選び方" }]} />
          <p className="eyebrow mt-8 mb-4">HOW TO CHOOSE</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            買取業者の選び方 — 売り先は大きく3つ
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            エアガン・釣具・バイクウェアなどの売り先は、「ジャンル専門の買取業者」「複数社への一括査定」「実店舗のリユースチェーン」の3タイプに分かれます。
            どれが一番良いかは品物と状況によって変わるため、まずタイプの違いを知り、1社に決め打ちせず相見積もりで比べるのが基本です。
          </p>
        </div>
      </section>

      {/* 3タイプの解説 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="head rule-safety text-2xl text-ink">3つの売り先の特徴</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {types.map((t) => (
            <div key={t.name} className="card-field p-6 flex flex-col">
              <span className="gear-tag mb-4">{t.tag}</span>
              <h3 className="head text-lg text-ink">{t.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.how}</p>
              <p className="mt-4 text-[0.85rem] leading-relaxed text-ink-soft">
                <span className="font-bold text-ink">向いている人: </span>
                {t.fit}
              </p>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-ink-soft">
                <span className="font-bold text-safety">注意点: </span>
                {t.care}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 比較表 */}
      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
          <h2 className="head rule-safety text-2xl text-ink">3タイプの比較表</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
            以下は一般的な傾向の整理です。個別の条件（費用の扱い・対応ジャンル・査定日数など）は業者・仕組みごとに異なるため、依頼前に必ず各社の公式情報で確認してください。
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="table-spec min-w-[680px]">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>ジャンル専門業者</th>
                  <th>複数社一括査定</th>
                  <th>実店舗リユースチェーン</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td className="font-bold text-ink">{r.label}</td>
                    {r.values.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 相見積もりの進め方 */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h2 className="head rule-safety text-2xl text-ink">失敗しないための基本 — 相見積もり</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            どのタイプを選ぶ場合でも共通する基本は、「1社の提示額だけで決めない」ことです。
            同じ品物でも、業者の得意ジャンルや在庫状況によって提示額は変わります。最低でも2〜3社の査定を並べてから判断してください。
          </p>
          <p>
            その場での即決を求められても、比較が終わるまで返事を保留して構いません。査定は金額の提示であり、納得できなければ断れます。
            また、エアガンのように法規制のあるジャンルは、査定に出す前に
            <a href="/airsoft/law/" className="font-bold text-safety underline">売れるもの・売れないものの確認</a>を済ませておきましょう。
          </p>
        </div>
        <div className="notice-law mt-8 max-w-3xl p-6">
          <p className="head text-base text-ink">当サイトの業者別ページは現在整備中です</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            当サイトでは、掲載する業者の情報を公式サイトなどの一次情報で確認したうえで、確認日つきで掲載する方針です。
            確認が完了していない段階で具体的な業者名を並べることはしません。業者別の詳細ページは、確認が済み次第このページから案内します。
            方針の詳細は<a href="/verification-policy/" className="font-bold text-safety underline">情報の調査・検証ポリシー</a>をご覧ください。
          </p>
        </div>
      </section>

      {/* ジャンル別ガイドへ */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="card-field p-6 md:p-8">
          <h2 className="head text-xl text-ink">ジャンル別の売り方を確認する</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink-soft">
            売り先のタイプを決めたら、ジャンルごとの準備と注意点を確認してから査定に進みましょう。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/airsoft/" className="btn-outline text-sm">エアガン・トイガン</a>
            <a href="/fishing/" className="btn-outline text-sm">釣具</a>
            <a href="/bikewear/" className="btn-outline text-sm">バイクウェア</a>
            <a href="/guide/" className="btn-safety text-sm">はじめての方へ</a>
          </div>
        </div>
      </section>
    </main>
  );
}
