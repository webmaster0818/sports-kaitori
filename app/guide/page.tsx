import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "../lib/site";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "はじめての買取ガイド",
  description:
    "スポーツ・アウトドア用品を初めて売る人向けの共通ガイド。申込から入金までの流れ、宅配・出張・店頭買取の違い、高く売るための準備5点、本人確認やトラブル回避の基本を一般論で解説します。",
  alternates: { canonical: `${SITE_URL}/guide/` },
};

const faqs = [
  {
    q: "買取を申し込んだら必ず売らないといけませんか？",
    a: "いいえ。査定はあくまで金額の提示であり、納得できなければ断って構いません。ただし、断った場合の返送料などキャンセル時の条件は業者ごとに異なるため、申し込む前にキャンセル規定を確認しておくのが基本です。",
  },
  {
    q: "買取のとき本人確認は必要ですか？",
    a: "古物営業法にもとづき、買取時には本人確認書類の提示が求められるのが一般的です。必要な書類や確認の方法（対面・宅配での違いなど）は業者ごとに案内されるため、申込時の案内に従って準備してください。",
  },
  {
    q: "高く売るために最低限やっておくことはありますか？",
    a: "常識の範囲での清掃、付属品を揃えること、関連する品物をまとめて出すこと、需要のあるシーズンを意識すること、そして複数社への相見積もりの5点が基本です。特別な技術は必要ありません。",
  },
  {
    q: "宅配・出張・店頭のどれを選べばよいですか？",
    a: "決まった正解はなく、品物の量・サイズ・急ぎ具合で選ぶのが一般的です。少量なら店頭、多量・大型なら出張、近くに店舗がなければ宅配が候補になります。どの方法でも「1社で即決しない」という基本は共通です。",
  },
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "はじめての買取ガイド",
      item: `${SITE_URL}/guide/`,
    },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const flow = [
  {
    step: "01",
    title: "申込",
    body: "業者の窓口から買取を申し込みます。品物の種類・点数・希望する買取方法（宅配・出張・店頭）を伝えるのが一般的です。この段階でキャンセル規定と費用の扱いを確認しておきます。",
  },
  {
    step: "02",
    title: "査定",
    body: "品物の状態・型番・付属品などをもとに査定額が提示されます。宅配なら到着後、出張・店頭ならその場で査定されるのが一般的な流れです。金額の根拠は遠慮なく質問して構いません。",
  },
  {
    step: "03",
    title: "承諾",
    body: "提示された査定額に納得できたら承諾します。納得できなければ断って構いません。承諾前に、減額の可能性やキャンセル時の条件をあらためて確認しておくと安心です。",
  },
  {
    step: "04",
    title: "入金",
    body: "承諾後、指定した方法で支払いを受け取ります。店頭ではその場での支払い、宅配・出張では振込が用いられるのが一般的です。入金時期の目安は承諾前に確認しておきましょう。",
  },
];

const methodRows = [
  { label: "品物の移動", values: ["業者へ発送する", "自宅から動かさない", "自分で持ち込む"] },
  { label: "査定の立ち会い", values: ["立ち会えない", "その場で立ち会える", "その場で立ち会える"] },
  { label: "現金化までの早さ", values: ["発送・査定の日数がかかる", "早い傾向", "早い傾向"] },
  { label: "向いている量・サイズ", values: ["中量・持ち運びにくい距離", "多量・大型の品物", "少量"] },
  {
    label: "注意したい点",
    values: ["送料・返送料の条件確認", "訪問購入のルール確認", "持ち込める量の制約"],
  },
];

const preps = [
  {
    title: "清掃する",
    body: "常識の範囲で汚れやほこりを落とします。状態が正しく評価されやすくなるうえ、査定側の印象も変わります。無理な分解や本格的な補修までは不要です。",
  },
  {
    title: "付属品を揃える",
    body: "外箱・保証書・袋・交換パーツなど、購入時の付属品はできるだけ揃えます。揃っているほうが評価されやすいのが一般的な傾向です。",
  },
  {
    title: "まとめ売りにする",
    body: "同じジャンルの品物は一式まとめて出すほうが手間が少なく、単品では扱われにくい小物も一緒に確認してもらえます。",
  },
  {
    title: "シーズンを意識する",
    body: "需要が高まる時期の少し前に売るという考え方があります。急ぎでなければ、品物のジャンルごとの需要期を意識してタイミングを選びましょう。",
  },
  {
    title: "相見積もりを取る",
    body: "1社の査定額だけでは妥当性を判断できません。2〜3社に査定を依頼して比較するのが、後悔しない売却のいちばんの基本です。",
  },
];

const genres = [
  {
    href: "/airsoft/",
    title: "エアガン・トイガン買取ガイド",
    note: "法規制（準空気銃）の確認が必須のジャンルです。",
  },
  {
    href: "/fishing/",
    title: "釣具・フィッシング用品買取ガイド",
    note: "型番と付属品で査定が決まりやすいジャンルです。",
  },
  {
    href: "/bikewear/",
    title: "バイクウェア・ヘルメット買取ガイド",
    note: "サイズ・年式・規格表示がポイントのジャンルです。",
  },
];

export default function GuidePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-5 pt-8 pb-12 md:pt-10 md:pb-16">
          <Breadcrumbs items={[{ label: "はじめての買取ガイド" }]} />
          <p className="eyebrow mt-8 mb-4">BEGINNER&apos;S GUIDE</p>
          <h1 className="head text-3xl md:text-4xl leading-snug text-ink">
            はじめての買取ガイド
          </h1>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-loose text-ink-soft">
            買取を初めて利用するときに迷いやすいのは、「どういう流れで進むのか」「どの方法で売るのか」「何を準備すればよいのか」の3点です。このページでは、エアガン・釣具・バイクウェアに共通する売却の基本を、順番どおりに整理します。
          </p>
        </div>
      </section>

      {/* 買取の流れ */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="head rule-safety text-2xl text-ink">買取の流れ — 4ステップ</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {flow.map((f) => (
            <div key={f.step} className="card-field p-6">
              <div className="flex items-baseline gap-4">
                <span className="head text-2xl text-safety leading-none">{f.step}</span>
                <h3 className="head text-lg text-ink">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="notice-info mt-8 p-6 max-w-3xl">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="font-bold text-ink">本人確認について：</span>
            古物営業法にもとづき、買取時には本人確認書類の提示が求められるのが一般的です。必要な書類や確認方法は業者・買取方法ごとに異なるため、申込時の案内に従って準備してください。
          </p>
        </div>
      </section>

      {/* 3方式の違い */}
      <section className="bg-paper-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="head rule-safety text-2xl text-ink">宅配・出張・店頭買取の違い</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            以下は一般的な傾向の整理です。個別の条件（費用の扱い・対応エリア・査定日数など）は業者ごとに異なるため、依頼前に必ず各社の公式情報で確認してください。
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="table-spec min-w-[640px]">
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>宅配買取</th>
                  <th>出張買取</th>
                  <th>店頭買取</th>
                </tr>
              </thead>
              <tbody>
                {methodRows.map((r) => (
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

      {/* 高く売る準備5点 */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="head rule-safety text-2xl text-ink">高く売るための準備 — 5つの基本</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {preps.map((p) => (
            <div key={p.title} className="card-field p-6">
              <h3 className="head text-lg text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* トラブル回避 */}
      <section className="bg-paper-deep border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="head rule-safety text-2xl text-ink">トラブルを避けるための基本</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 max-w-4xl">
            <div className="card-field p-6">
              <h3 className="head text-lg text-ink">査定額の根拠を確認する</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                提示された金額に対して「どの点が評価され、どの点で減額されたのか」を質問して構いません。根拠の説明があいまいなまま即決を迫られたら、返事を保留して他社と比較しましょう。
              </p>
            </div>
            <div className="card-field p-6">
              <h3 className="head text-lg text-ink">キャンセル規定を事前に確認する</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                査定後に断った場合の返送料や手数料の扱いは業者ごとに異なります。申込前にキャンセル時の条件を確認しておくことで、「断りにくいから売る」という状況を避けられます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="head rule-safety text-2xl text-ink">よくある質問</h2>
        <div className="mt-8 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card-field p-5">
              <summary className="head cursor-pointer text-[0.95rem] text-ink">{f.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ジャンル別ガイドへ */}
      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="head rule-safety text-2xl text-ink">ジャンル別ガイドへ</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
          {SITE_NAME}では、ジャンルごとの売れるもの・査定ポイント・準備を個別ガイドで解説しています。エアガンは
          <a href="/airsoft/law/" className="font-bold text-safety underline">法規制と買取可否</a>
          の確認が特に重要です。
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {genres.map((g) => (
            <a key={g.href} href={g.href} className="card-field block p-6">
              <h3 className="head text-lg text-ink">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{g.note}</p>
              <span className="mt-4 inline-block text-sm font-bold text-safety">読む →</span>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/hikaku/" className="btn-safety">業者の選び方を見る</a>
          <a href="/contact/" className="btn-outline">お問い合わせ</a>
        </div>
      </section>
    </main>
  );
}
