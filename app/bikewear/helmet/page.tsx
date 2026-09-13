import type { Metadata } from "next";
import { SITE_URL } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "中古ヘルメットは売れる？— 製造年・使用年数・傷で変わる買取可否",
  description:
    "バイク用ヘルメットの売却可否を整理。メーカーが案内する交換目安、製造年の確認方法、傷・内装の状態、規格表示など査定で見られる点と、買取対象外になりやすいケースを解説します。",
  alternates: { canonical: `${SITE_URL}/bikewear/helmet/` },
};

const factors = [
  { title: "製造年と使用年数", body: "ヘルメットは衝撃吸収材が経年で劣化するため、AraiとSHOEIは公式FAQで使用（着用）開始から3年を交換の目安として案内しています（下記の一次記載を参照）。製造年はシェル内側やあごひも付近のラベルで確認できます。製造から年数が経った個体ほど評価は下がり、業者によっては買取対象外の基準を設けています。" },
  { title: "外装の傷・落下歴", body: "シェルの傷・塗装剥がれは外観評価に直結します。落下・転倒で衝撃を受けた個体は外観に傷がなくても内部の緩衝材が損傷している可能性があり、落下歴は正直に伝えてください。" },
  { title: "内装の状態・臭い", body: "内装（チークパッド・センターパッド）の汚れ・へたり・臭いは減額要因です。取り外して洗える内装は洗濯・乾燥しておくと印象が変わります。内装が交換式で純正の予備があれば一緒に出します。" },
  { title: "規格表示・付属品", body: "SG・PSC・JIS・MFJ公認などの規格ラベルが残っているか、シールド・箱・説明書・内装の予備があるかを確認します。規格ラベルが剥がされた個体は評価が難しくなります。" },
];

const sources = [
  {
    who: "Arai（アライヘルメット）",
    quote: "アライヘルメットでは、SGマーク（製品安全協会の被害者救済制度）の有効期限（ヘルメット着用開始から3年）を目安に、お買い替えをおすすめしています。",
    note: "公式サポートFAQ。起算点は「着用開始」。",
    url: "https://www.arai.co.jp/jpn/support/faq.html",
  },
  {
    who: "SHOEI",
    quote: "ご使用開始から3年を目途に交換をお勧めしております。",
    note: "公式FAQ「ヘルメットの有効期間は？」。転倒して頭を打った場合、内装のへたり、発泡スチロール内側の膨れや亀裂がある場合はその時点での交換を推奨。",
    url: "https://www.shoei.com/support/faq/common/others.html",
  },
  {
    who: "製品安全協会（SGマーク）",
    quote: "有効期間を過ぎた製品は、未使用であっても使用を控え、新しいものに買い替えてください。",
    note: "SGマークFAQ。乗車用ヘルメットの被害者救済制度の有効期限は同協会の品目資料で「購入日より3年間」。起算点は「購入日」。",
    url: "https://www.sg-mark.org/faq/",
  },
];

const cannot = [
  "落下・転倒で衝撃を受けた個体（外観に傷がなくても緩衝材が損傷している可能性）",
  "内装が取り外せず、汚れ・臭いが著しい個体",
  "シェルに割れ・深い亀裂がある個体",
  "製造から年数が経ち、業者の受け入れ基準を超えた個体（基準は業者ごとに異なる）",
];

const faqs = [
  {
    q: "製造から何年までなら売れますか？",
    a: "一律の基準はなく、業者ごとに受け入れ条件が異なります。AraiとSHOEIは使用開始から3年を交換の目安として公式FAQで案内しており、その年数を超えた個体は評価が下がるか対象外になりやすいと考えてください。持ち込む前に業者の公式情報で製造年の条件を確認するのが確実です。",
  },
  {
    q: "製造年はどこで確認できますか？",
    a: "多くのメーカーはシェル内側または内装の下、あごひも付近のラベルに製造年月を記載しています。内装を外すとラベルが見えるモデルもあります。不明な場合は型番からメーカーに問い合わせできます。",
  },
  {
    q: "傷があるヘルメットでも査定してもらえますか？",
    a: "軽微な擦り傷程度であれば査定対象とする業者が一般的ですが、落下・転倒によるものかどうかで扱いが変わります。落下歴は隠さず伝えてください。安全装備であるため、業者側も慎重に判断します。",
  },
  {
    q: "総合リユース店とバイク用品専門店、どちらに持ち込むべきですか？",
    a: "ヘルメットは製造年・規格・落下歴の判断が必要なため、バイク用品を専門に扱う業者のほうが評価の観点を持っています。総合店はバイク用品を買取対象と明記しているかが店舗ごとに分かれるため、持ち込み前に公式情報で確認してください。",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "バイクウェア・ヘルメット買取", item: `${SITE_URL}/bikewear/` },
    { "@type": "ListItem", position: 3, name: "中古ヘルメットの買取可否", item: `${SITE_URL}/bikewear/helmet/` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HelmetPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pb-16">
          <Breadcrumbs items={[{ label: "バイクウェア・ヘルメット買取", href: "/bikewear/" }, { label: "中古ヘルメットの買取可否" }]} />
          <p className="eyebrow mt-8 mb-4">BIKEWEAR — HELMET</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">中古ヘルメットは売れる？</h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            ヘルメットは安全装備であるため、バッグや時計とは異なり「製造年」と「落下歴」が買取可否そのものに関わります。このページでは、査定で見られる4つの点と、対象外になりやすいケース、持ち込む前の確認事項を整理します。
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

      <section className="border-y border-line bg-paper-deep" id="sources">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-14">
          <h2 className="head rule-safety text-2xl text-ink">「3年」の根拠 — メーカー・協会の一次記載</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            交換目安として広く知られる「3年」は、起算点が出典ごとに少しずつ異なります。当サイトが各公式ページで確認した原文（確認日2026年9月13日）は次のとおりです。
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {sources.map((src) => (
              <div key={src.who} className="card-field p-6">
                <span className="gear-tag mb-4">{src.who}</span>
                <p className="text-sm leading-relaxed text-ink">「{src.quote}」</p>
                <p className="mt-3 text-[0.78rem] leading-relaxed text-muted">{src.note}</p>
                <a href={src.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-[0.8rem] font-bold text-safety underline">
                  出典ページ
                </a>
              </div>
            ))}
          </div>
          <div className="notice-info mt-8 max-w-3xl p-6">
            <p className="font-bold text-ink mb-1">競技用途は別基準（MFJ）</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              日本モーターサイクルスポーツ協会（MFJ）は公認ヘルメットについて、2027年から「旧規格」および製造後10年を経過したヘルメットは競技会で使用できなくなると予告しています（MFJ公認ページ・確認日2026年9月13日）。レース用途の買い手にとっては、製造年と公認規格が中古価値に直結します。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <div className="max-w-3xl">
          <h2 className="head rule-safety text-2xl text-ink">買取対象外になりやすいケース</h2>
          <ul className="mt-6 max-w-3xl space-y-3">
            {cannot.map((c) => (
              <li key={c} className="flex items-baseline gap-3 text-sm leading-relaxed text-ink-soft">
                <span className="text-safety shrink-0">■</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="notice-law mt-8 max-w-3xl p-6">
            <p className="font-bold text-ink mb-1">落下歴は必ず伝えてください</p>
            <p className="text-sm leading-relaxed text-ink-soft">
              衝撃を受けたヘルメットは外観に傷がなくても保護性能が落ちている可能性があります。次に使う人の安全に関わるため、落下・転倒歴は隠さず申告するのが売り手側の基本です。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-14">
        <h2 className="head rule-safety text-2xl text-ink">相場の物差しを持ってから査定へ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          当サイトでは、SHOEI・Araiの実売相場（オークション落札の件数・平均・最高値・出典つき）を公開しています。廃番モデルのコレクター需要による高値は別枠で注記していますので、通常の中古相場と分けてご覧ください。
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/souba/shoei/" className="btn-outline text-sm">SHOEIの実売相場</a>
          <a href="/souba/arai/" className="btn-outline text-sm">Araiの実売相場</a>
          <a href="/souba/" className="btn-safety text-sm">実売相場データ一覧</a>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep">
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
        <h2 className="head rule-safety text-2xl text-ink">あわせて読みたい</h2>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="/bikewear/" className="btn-safety text-sm">バイクウェア買取ガイド</a>
          <a href="/bikewear/suit/" className="btn-outline text-sm">革ツナギの売却</a>
          <a href="/reviews/" className="btn-outline text-sm">総合リユース店の検証</a>
        </div>
      </section>
    </main>
  );
}
