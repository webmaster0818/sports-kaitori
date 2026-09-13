import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "革ツナギ(レーシングスーツ)は売れる？— サイズ・年式・公認表示で変わる査定",
  description:
    "革ツナギ・レーシングスーツの売却可否を整理。サイズ表記の控え方、製造年式とモデルの確認、MFJ公認表示、転倒痕・プロテクターの状態など査定で見られる点と、売る前の準備を解説します。",
  alternates: { canonical: `${SITE_URL}/bikewear/suit/` },
};

const factors = [
  { title: "サイズ表記", body: "革ツナギは体型に合わせて選ばれるため、サイズが合う買い手がいるかどうかで需要が決まります。内側タグのサイズ表記（メーカー独自サイズを含む）と、可能なら身長・体重の目安を控えておきます。オーダー品は汎用サイズより買い手が限られます。" },
  { title: "モデル・年式", body: "同じブランドでも現行モデルとひと世代前では評価が変わります。内側タグの品番・製造年、購入時期を控えておくと、実売相場データとの照合がしやすくなります。" },
  { title: "公認表示・規格", body: "サーキット走行用に求められるMFJ公認の表示が残っているかは、レース用途の買い手にとって重要です。公認マークには規格別の使用期限があり（下記参照）、旧規格は2026年末で競技使用不可になります。公認ワッペン・ラベルが剥がれていないか、どの規格かを確認しておきます。" },
  { title: "転倒痕・革の状態・プロテクター", body: "転倒による擦過痕・縫い目のほつれ・革のひび割れは減額要因です。肩・肘・膝のプロテクター、脊椎パッド、スライダーが揃っているか、交換式なら予備があるかを確認します。" },
];

const prep = [
  { title: "汚れを落として陰干しする", body: "革用クリーナーで軽く汚れを落とし、直射日光を避けて乾かします。強い洗剤や熱での乾燥は革を傷めます。" },
  { title: "プロテクター・スライダー・付属品を揃える", body: "取り外したプロテクター、交換用スライダー、購入時の保存袋・ハンガーがあれば一緒に出します。" },
  { title: "サイズ・品番・年式を控える", body: "内側タグの情報を写真に撮っておくと、宅配買取の申込みや相見積もりで何度も確認する手間が省けます。" },
  { title: "転倒歴を正直に伝える", body: "擦過痕は査定時に判明します。転倒歴とその部位を先に伝えたほうが、減額後のやり取りがスムーズです。" },
];

const faqs = [
  {
    q: "オーダーメイドの革ツナギは売れますか？",
    a: "査定対象とする業者はありますが、サイズが特定の体型向けのため汎用サイズより買い手が限られ、評価は控えめになりやすいと考えてください。ブランド・状態・公認表示の有無で判断が分かれます。",
  },
  {
    q: "転倒して擦過痕がある革ツナギは売れますか？",
    a: "軽微な擦過痕であれば査定対象とする業者が一般的です。縫い目のほつれ・革の破れ・プロテクターの損傷がある場合は評価が下がります。部位と程度を正直に伝えてください。",
  },
  {
    q: "古いモデルでも需要はありますか？",
    a: "レース用途では現行の公認表示が重視されますが、ストリート用途やブランドのファン向けにはひと世代前のモデルにも需要があります。当サイトのクシタニ・アルパインスターズ・ダイネーゼの実売相場で、年式別の落札例を確認してください。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "バイクウェア・ヘルメット買取", item: `${SITE_URL}/bikewear/` },
    { "@type": "ListItem", position: 3, name: "革ツナギの売却", item: `${SITE_URL}/bikewear/suit/` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function SuitPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "バイクウェア・ヘルメット買取", href: "/bikewear/" }, { label: "革ツナギの売却" }]} />
          <p className="eyebrow mt-8 mb-4">BIKEWEAR — RACING SUIT</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">革ツナギ（レーシングスーツ）は売れる？</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            革ツナギは高額なぶん中古需要もありますが、「サイズが合う買い手がいるか」「公認表示が残っているか」「転倒痕があるか」で評価が大きく変わる品目です。査定で見られる4つの点と、売る前の準備を整理します。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">査定で見られる4つの点</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {factors.map((f, i) => (
            <div key={f.title} className="card-field p-6">
              <span className="gear-tag mb-4">POINT {String(i + 1).padStart(2, "0")}</span>
              <h3 className="head text-lg text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">売る前の準備 — 4つ</h2>
          <ol className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft list-decimal pl-5">
            {prep.map((p) => (
              <li key={p.title}>
                <span className="font-bold text-ink">{p.title}。</span>
                {p.body}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">MFJ公認スーツの「使用期限」が中古価値に関わります</h2>
        <div className="notice-info mt-6 max-w-3xl p-6">
          <p className="text-sm leading-relaxed text-ink-soft">
            日本モーターサイクルスポーツ協会（MFJ）は公認ページで「MFJ公認マークが貼付されているレーシングスーツは、使用期限まで使用可能です。使用期限が過ぎた製品は、競技会では使用できません」と案内しています。同協会の公認スーツ資料（2025年12月2日現在）では、規格別の使用期限を 2022規格＝2036年12月31日／2017規格＝2031年12月31日／無印の旧規格＝2026年12月31日 としています（当サイト確認日2026年9月13日）。
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            つまり旧規格の公認スーツは2026年末で競技使用ができなくなり、レース用途の買い手にとっての価値が変わります。公認マークの規格表示（■・◆・無印）を確認し、査定時に伝えておくと評価の食い違いを避けられます。
          </p>
          <a href="https://www.mfj.or.jp/authorized/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[0.8rem] font-bold text-safety underline">MFJ公認ページ（出典）</a>
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">相場の物差しを持ってから査定へ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          当サイトでは、クシタニ・アルパインスターズ・ダイネーゼの実売相場（オークション落札の件数・平均・最高値・出典つき）を公開しています。出典ページで同じモデル・近いサイズの落札例を確認すると、査定額の妥当性を判断しやすくなります。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/souba/kushitani/" className="btn-outline text-sm">クシタニの実売相場</a>
          <a href="/souba/alpinestars/" className="btn-outline text-sm">アルパインスターズの実売相場</a>
          <a href="/souba/dainese/" className="btn-outline text-sm">ダイネーゼの実売相場</a>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div>
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
        <h2 className="head rule-safety text-2xl text-ink">あわせて読みたい</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/bikewear/" className="btn-safety text-sm">バイクウェア買取ガイド</a>
          <a href="/bikewear/helmet/" className="btn-outline text-sm">中古ヘルメットの買取可否</a>
          <a href="/reviews/" className="btn-outline text-sm">総合リユース店の検証</a>
        </div>
      </section>
    </main>
  );
}
