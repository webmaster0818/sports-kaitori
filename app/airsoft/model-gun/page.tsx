import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "モデルガンが買取できない条件 — 金属製・模造拳銃の規制と売却可否",
  description:
    "モデルガンの売却可否を整理。金属製モデルガンに関する銃刀法の規制(模造拳銃・模擬銃器)、規制対応の目印、買取対象外になりやすいケース、査定前の確認事項を一次情報に基づいて解説します。",
  alternates: { canonical: `${SITE_URL}/airsoft/model-gun/` },
};

const cases = [
  {
    tag: "売却できる可能性",
    title: "規制に適合した市販の金属製・樹脂製モデルガン",
    body: "国内メーカーが法規制に適合させて販売している製品（発火式・無可動を含む）は、中古市場で取引されています。箱・説明書・カートリッジなど付属品が揃っているほど評価されやすい傾向です。",
  },
  {
    tag: "売却できる可能性",
    title: "廃番・旧モデルのコレクター品",
    body: "生産終了したモデルガンにはコレクター需要があり、状態の良い個体は高値の落札例もあります。ただし規制前の製品には次項の要件に触れるものがあるため、売却前の確認が必須です。",
  },
  {
    tag: "売れない",
    title: "規制対象となる「模造拳銃」に該当するもの",
    body: "金属製で、拳銃に著しく類似する形態を有し、法令が定める措置（着色や構造上の措置）が施されていないものは、所持自体が禁止されています。業者の方針以前に売却できません。",
  },
  {
    tag: "売れない",
    title: "改造・加工で規制の目印を失ったもの",
    body: "規制に適合させるための着色や構造を削り取る・塗り替えるなどの改造をした個体は、適合品として扱えなくなります。改造歴のある個体は査定に出せないと考えてください。",
  },
];

const checks = [
  { title: "金属製か樹脂製かを確認する", body: "規制の要件は主に金属製のものが対象です。樹脂製（プラスチック製）モデルガンは要件が異なります。製品の表記・説明書で材質を確認します。" },
  { title: "規制対応の目印が残っているか確認する", body: "国内で販売された規制適合の金属製モデルガンには、法令が定める着色や構造上の措置が施されています。塗り替え・削り取りがないかを確認します。" },
  { title: "改造・分解歴を正直に伝える", body: "威力に関する改造はエアガンの問題ですが、モデルガンでは規制の目印に関わる加工が売却可否に直結します。隠しても査定時に判明します。" },
  { title: "判断に迷ったら警察相談へ", body: "個体が規制に該当するかどうかの判断に迷う場合は、警察相談専用電話（#9110）に相談してください。当サイトは個別の判定はできません。" },
];

const faqs = [
  {
    q: "モデルガンとエアガンは規制が違うのですか？",
    a: "はい。エアガン（エアソフトガン）は弾丸の威力が法定の基準値以上になると「準空気銃」として規制されます。モデルガンは弾を発射しない代わりに、金属製で拳銃に著しく類似する形態のものが「模造拳銃」として規制されます。それぞれ根拠となる条文が異なります。",
  },
  {
    q: "古い金属製モデルガンを親族から引き継ぎました。売れますか？",
    a: "規制適合の措置が施された製品であれば取引の対象になり得ますが、規制前の製品や改造された個体は所持自体が問題になる場合があります。まず材質と規制対応の目印を確認し、判断に迷う場合は警察相談専用電話（#9110）に相談してください。",
  },
  {
    q: "総合リユース店でモデルガンは売れますか？",
    a: "モデルガンを買取対象と公式に明記している総合店は限られ、店舗ごとに扱いが分かれます。当サイトの総合リユース店の検証ページで、各社の公式記載を確認してから持ち込んでください。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "エアガン・トイガン買取", item: `${SITE_URL}/airsoft/` },
    { "@type": "ListItem", position: 3, name: "モデルガンが買取できない条件", item: `${SITE_URL}/airsoft/model-gun/` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ModelGunPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "エアガン・トイガン買取", href: "/airsoft/" }, { label: "モデルガンが買取できない条件" }]} />
          <p className="eyebrow mt-8 mb-4">AIRSOFT — MODEL GUN</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">モデルガンが買取できない条件</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            モデルガンは弾を発射しないため「エアガンより自由に売れる」と思われがちですが、金属製のものには銃刀法上の規制（模造拳銃）があり、該当する個体は所持自体が禁止されています。このページでは、売却できる可能性のあるもの・売れないものの線引きと、査定前の確認事項を整理します。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">結論 — 線引きは「金属製×形態×規制対応の措置」</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <div key={c.title} className="card-field p-6">
              <span className={c.tag === "売れない" ? "gear-tag gear-tag--safety mb-4" : "gear-tag mb-4"}>{c.tag}</span>
              <h3 className="head text-lg text-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep" id="law">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">根拠となる法令</h2>
          <div className="notice-law mt-6 max-w-3xl p-6">
            <p className="font-bold text-ink mb-2">銃砲刀剣類所持等取締法 第22条の2（模造拳銃の所持の禁止）</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              「何人も、模造拳銃（金属で作られ、かつ、拳銃に著しく類似する形態を有する物で内閣府令で定めるものをいう。）を所持してはならない。ただし、事業場の所在地を管轄する都道府県公安委員会に届け出て輸出のための模造拳銃の製造又は輸出を業とする者（使用人を含む。）が、その製造又は輸出に係るものを業務のため所持する場合は、この限りでない。」
            </p>
          </div>
          <div className="notice-law mt-4 max-w-3xl p-6">
            <p className="font-bold text-ink mb-2">同法 第22条の3（販売目的の模擬銃器の所持の禁止）</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              「何人も、販売の目的で、模擬銃器（金属で作られ、かつ、拳銃、小銃、機関銃又は猟銃に類似する形態及び撃発装置に相当する装置を有する物で、銃砲に改造することが著しく困難なものとして内閣府令で定めるもの以外のものをいう。）を所持してはならない。」
            </p>
            <p className="mt-3 text-[0.8rem] leading-relaxed text-ink-soft">
              第22条の2は「所持そのもの」、第22条の3は「販売目的の所持」の禁止で要件が異なります。買取業者は販売目的で所持する立場になるため、第22条の3の観点からも受け入れを判断します。「著しく類似」等の具体要件は内閣府令（同法施行規則）の定めによります。
            </p>
          </div>
          <p className="mt-4 max-w-3xl text-[0.8rem] text-muted">
            出典: 銃砲刀剣類所持等取締法（昭和33年法律第6号・令和7年9月1日施行版）
            <a href="https://laws.e-gov.go.jp/law/333AC0000000006" target="_blank" rel="noopener noreferrer" className="underline">e-Gov法令検索</a>
            の条文をe-Gov法令APIで2026年9月13日に取得・照合。当サイトは条文を紹介するもので、個別の個体が該当するかの判定はできません。エアガンの威力規制（準空気銃・第21条の3）については
            <a href="/airsoft/law/" className="font-bold text-safety underline">法規制と買取可否の解説</a>
            をご覧ください。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">総合リユース店が公開している受け入れ基準の例</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          ハードオフグループは宅配買取サイトの「買取できない品物」で、ガン類について「0.98J（ジュール）を超える威力のあるもの」「主要部分が金属で作られているもの」「パワーソースがカートリッジ（薬きょう）になっているもの」「銃砲刀剣類所持等取締法第2条に規定する『拳銃』に該当するもの」「金属モデルガンで色のはがれたもの・銃口のふさがっていないもの」「プラスチックモデルガンで銃口が鉄板等で仕切られていないもの」をグループとして取扱不可と公表しています（当サイト確認日2026年9月13日）。上の線引きが、実際の店舗基準として運用されている例です。各社の公式記載は
          <a href="/reviews/" className="font-bold text-safety underline">総合リユース店の検証</a>
          で確認できます。
        </p>
      </section>

      <section className="border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">査定前の確認 — 4つ</h2>
        <ol className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft list-decimal pl-5">
          {checks.map((c) => (
            <li key={c.title}>
              <span className="font-bold text-ink">{c.title}。</span>
              {c.body}
            </li>
          ))}
        </ol>
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
          <a href="/airsoft/law/" className="btn-safety text-sm">エアガンの法規制と買取可否</a>
          <a href="/airsoft/junk/" className="btn-outline text-sm">ジャンク・故障品の売却可否</a>
          <a href="/reviews/" className="btn-outline text-sm">総合リユース店の検証</a>
        </div>
      </section>
    </main>
  );
}
