import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "エアガンの法規制と買取可否 — 準空気銃とは",
  description:
    "エアガンを売る前に確認したい法規制の基礎。銃砲刀剣類所持等取締法が定める「準空気銃」は所持自体が禁止されており、買取に出せません。判断に迷う場合の考え方と相談先をFAQつきで解説します。",
  alternates: { canonical: `${SITE_URL}/airsoft/law/` },
};

const faqs = [
  {
    q: "普通に市販されているエアガンは買取に出せますか？",
    a: "はい。法令の範囲内で製造・販売されている通常の適法なエアガンやトイガンは、所持も売却も可能で、買取の対象になります。買取に出せないのは、威力が法定の基準値以上となる「準空気銃」にあたるおそれのある個体です。",
  },
  {
    q: "準空気銃とは何ですか？",
    a: "銃砲刀剣類所持等取締法第21条の3が定めるもので、圧縮した気体を使用して弾丸を発射する機能を有する銃であって空気銃に該当しないもののうち、内閣府令で定めるところにより測定した弾丸の運動エネルギーの値が、人を傷害し得るものとして内閣府令で定める値以上となるものをいいます。準空気銃は、法令に基づく職務等の例外を除き、何人も所持してはならないとされています。",
  },
  {
    q: "威力を高める改造をしたエアガンは売れますか？",
    a: "威力を高める改造により弾丸の運動エネルギーが法定の基準値以上となった個体は「準空気銃」にあたりうるものです。準空気銃は所持自体が原則禁止されているため、買取に出すことはできません。買取店側でも、この種の個体は取り扱いの対象外とされるのが通常です。",
  },
  {
    q: "改造されているかどうか分からない場合はどうすればよいですか？",
    a: "まず、自分で改造した経緯がないか、中古で入手した場合は購入経緯や前所有者によるカスタムの有無を確認してください。それでも判断がつかない場合は、買取店に持ち込む前に、警察相談専用電話（#9110）に相談するのも選択肢です。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "エアガン・トイガン買取", item: `${SITE_URL}/airsoft/` },
    { "@type": "ListItem", position: 3, name: "エアガンの法規制と買取可否", item: `${SITE_URL}/airsoft/law/` },
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

export default function AirsoftLawPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs
            items={[
              { label: "エアガン・トイガン買取", href: "/airsoft/" },
              { label: "法規制と買取可否" },
            ]}
          />
          <p className="eyebrow mt-8 mb-4">AIRSOFT — LAW</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            エアガンの法規制と買取可否
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            エアガンには銃砲刀剣類所持等取締法による規制があります。結論から言うと、通常の適法なエアガンは買取可能ですが、
            威力が法定の基準値以上となる「準空気銃」は所持自体が禁止されており、買取に出すことができません。
            このページでは、条文にもとづく規制の内容と、判断に迷ったときの対処を整理します。
          </p>
        </div>
      </section>

      {/* 結論の整理 */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">まず結論 — 売れるもの・売れないもの</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="card-field p-6">
            <span className="gear-tag mb-4">OK</span>
            <h3 className="head text-lg text-ink">通常の適法なエアガン</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              法令の範囲内で製造・販売されている市販のエアソフトガン・トイガンは、所持も売却も可能で、買取の対象になります。
              売る前の準備や査定のポイントは<a href="/airsoft/" className="font-bold text-safety underline">エアガン買取ガイド</a>にまとめています。
            </p>
          </div>
          <div className="card-field p-6 border-safety">
            <span className="gear-tag gear-tag--safety mb-4">NG</span>
            <h3 className="head text-lg text-ink">準空気銃にあたるおそれのある個体</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              威力を高める改造などにより弾丸の運動エネルギーが法定の基準値以上となった個体は「準空気銃」にあたりうるものです。
              準空気銃は所持自体が原則禁止されているため、買取に出すことができません。
            </p>
          </div>
        </div>
      </section>

      {/* 条文 */}
      <section className="border-y border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">法律は何を定めているか</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-ink-soft">
            準空気銃の規制は、銃砲刀剣類所持等取締法 第21条の3（準空気銃の所持の禁止）に定められています。条文は次のとおりです。
          </p>
          <figure className="notice-law mt-6 max-w-3xl p-6">
            <blockquote className="text-sm leading-loose text-ink-soft">
              何人も、次の各号のいずれかに該当する場合を除いては、準空気銃（圧縮した気体を使用して弾丸を発射する機能を有する銃であつて空気銃に該当しないもののうち、内閣府令で定めるところにより測定した弾丸の運動エネルギーの値が、人を傷害し得るものとして内閣府令で定める値以上となるものをいう。）を所持してはならない
            </blockquote>
            <figcaption className="mt-4 text-xs text-muted">
              銃砲刀剣類所持等取締法 第21条の3（準空気銃の所持の禁止）より。例外は法令に基づく職務等に限られます。
              出典:{" "}
              <a
                href="https://laws.e-gov.go.jp/law/333AC0000000006"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-safety underline"
              >
                e-Gov法令検索「銃砲刀剣類所持等取締法」
              </a>
              （2026年8月確認）
            </figcaption>
          </figure>
          <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-ink-soft">
            <p>
              ポイントは2つです。第一に、規制の基準は見た目や種類ではなく「弾丸の運動エネルギーの値」であること。
              基準となる具体的な値や測定方法は内閣府令で定められており、条文上は「内閣府令で定める値以上」と規定されています。
            </p>
            <p>
              第二に、禁止されているのは販売や使用だけでなく「所持」そのものであることです。
              つまり準空気銃にあたる個体は、買取店に売れるかどうか以前に、手元に置いておくこと自体が原則として認められていません。
              このため、該当するおそれのある個体を買取に出すという選択肢はありません。
            </p>
          </div>
        </div>
      </section>

      {/* 判断に迷ったら */}
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">判断に迷ったときの進め方</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="card-field p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="head text-2xl text-safety leading-none">01</span>
              <h3 className="head text-base text-ink">改造の有無を確認する</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              威力にかかわるパーツ交換や調整をした記憶がないか確認します。自分で手を入れていない購入時のままの市販品であれば、通常は適法な範囲の製品です。
            </p>
          </div>
          <div className="card-field p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="head text-2xl text-safety leading-none">02</span>
              <h3 className="head text-base text-ink">購入経緯を確認する</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              中古や譲り受けで入手した個体は、前の所有者によるカスタムの可能性があります。入手元や購入時の状態を思い出せる範囲で整理してください。
            </p>
          </div>
          <div className="card-field p-6">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="head text-2xl text-safety leading-none">03</span>
              <h3 className="head text-base text-ink">不明なら警察相談も選択肢</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              確認してもなお判断がつかない場合は、買取店に持ち込む前に、警察相談専用電話（#9110）に相談するのも選択肢です。
            </p>
          </div>
        </div>
        <div className="notice-info mt-8 max-w-3xl p-5">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">当サイトの方針: </span>
            本ページは法律相談ではなく、条文にもとづく一般的な情報の整理です。個別の該当性の判断はできません。
            記載内容の確認方法は<a href="/verification-policy/" className="font-bold text-safety underline">情報の調査・検証ポリシー</a>をご覧ください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-paper-deep">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">よくある質問</h2>
          <div className="mt-8 max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card-field p-5">
                <summary className="head cursor-pointer text-[0.95rem] text-ink">{f.q}</summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/airsoft/" className="btn-safety text-sm">エアガン買取ガイドに戻る</a>
            <a href="/airsoft/disposal/" className="btn-outline text-sm">処分方法4つの比較</a>
            <a href="/airsoft/junk/" className="btn-outline text-sm">ジャンク・改造品は売れる？</a>
            <a href="/hikaku/" className="btn-outline text-sm">買取業者の選び方を見る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
