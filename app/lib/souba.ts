// 実売相場データ。全数値はaucfan/Yahoo!オークション実ページの表示値のみ(取得日必須・まとめ売り/ジャンク/ロット除外)。
// 収集方式はbrandsell.netで確立したaucfan照合方式を踏襲。

export type SoubaRow = {
  category: string;
  count: string; // 落札件数(集計期間)
  avg: string; // 平均落札価格
  max: string; // 最高落札価格(単品)
  maxNote: string; // 最高値の品名・状態
  aucfanUrl: string;
  yahooUrl: string;
};

export type SoubaBrand = {
  slug: string;
  name: string;
  silo: "airsoft" | "fishing" | "bikewear";
  intro: string; // ブランドと相場の特徴(実データから言えることのみ)
  rows: SoubaRow[];
  fetchedAt: string;
  notes?: string; // 収集時の除外事情等
  models?: SoubaRow[]; // 型番・モデル別の実売(P3・2026-09-16追補)
  modelsIntro?: string; // 型番別データの読み方(実データから言えることのみ)
  modelsFetchedAt?: string;
};

export const SILO_LABEL: Record<SoubaBrand["silo"], string> = {
  airsoft: "エアガン・トイガン",
  fishing: "釣具",
  bikewear: "バイクウェア・ヘルメット",
};

// 検証済みブランド(15/15・2026-09-11収集・ホスト側スポットチェック照合済み)
export const SOUBA: SoubaBrand[] = [
  {
    slug: "tokyo-marui",
    name: "東京マルイ",
    silo: "airsoft",
    intro: "国内エアソフトガンで最大級の流通量を持つブランドです。直近30日の落札は電動ガンだけで2,000件超。中古市場の受け皿が厚いぶん、状態・付属品の差が価格に素直に反映されます。",
    rows: [
      { category: "電動ガン", count: "2,013件(直近30日)", avg: "22,273円", max: "141,000円", maxNote: "電動ガン EVOLT/RS FPR MK4【RSモデル】新品未開封(予備マガジン2本・Li-Poスターターセット付)", aucfanUrl: "https://aucfan.com/search1/q-~c5ecb5fea5dea5eba5a420c5c5c6b0a5aca5f3/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20%E9%9B%BB%E5%8B%95%E3%82%AC%E3%83%B3&s1=cbids&o1=d" },
      { category: "次世代電動ガン", count: "543件(直近30日)", avg: "22,743円", max: "126,478円", maxNote: "次世代電動ガン MK46 MOD.0(稼動品・中古)", aucfanUrl: "https://aucfan.com/search1/q-~c5ecb5fea5dea5eba5a420bca1c0a4c2e5c5c5c6b0a5aca5f3/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20%E6%AC%A1%E4%B8%96%E4%BB%A3%E9%9B%BB%E5%8B%95%E3%82%AC%E3%83%B3&s1=cbids&o1=d" },
      { category: "ガスブローバック", count: "1,186件(直近30日)", avg: "22,959円", max: "200,000円", maxNote: "20式5.56mm小銃 ガスブローバック(付属品あり)", aucfanUrl: "https://aucfan.com/search1/q-~c5ecb5fea5dea5eba5a420a5aca5b9a5d6a5eda1bca5d0a5c3a5af/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20%E3%82%AC%E3%82%B9%E3%83%96%E3%83%AD%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF&s1=cbids&o1=d" },
      { category: "ボルトアクション", count: "98件(直近30日)", avg: "10,857円", max: "41,800円", maxNote: "VSR-10 ボルトアクションエアライフル(中古現状品)", aucfanUrl: "https://aucfan.com/search1/q-~c5ecb5fea5dea5eba5a420a5dca5eba5c8a5a2a5afa5b7a5e7a5f3/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20%E3%83%9C%E3%83%AB%E3%83%88%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "avgはaucfan検索結果ページに表示される「ページ内平均価格」(1ページ目集計値)。最高値の選定でPTW/システマ・INOKATSU等の他社製品名羅列出品、ジャンクまとめセット(175,450円)、他社製カスタム(ネモトガンワークス百式165,000円)、パーツ出品(V10パーツ214,000円)を除外。",
    models: [
      {category: "グロック17 Gen5", count: "28件(直近30日)", avg: "18,059円", max: "61,000円", maxNote: "ガスブローバック グロック17 Gen5 カスタム・付属品多数（中古・単品出品）。これを上回る落札はGHK製セットや他モデル（G26）のため除外。落札日2026年4月7日", aucfanUrl: "https://aucfan.com/intro/q-~c5ecb5fea5dea5eba5a420a5b0a5eda5c3a5af31372067656e35/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20%E3%82%B0%E3%83%AD%E3%83%83%E3%82%AF17%20gen5/0/"},
      {category: "P90", count: "202件(直近30日)", avg: "4,374円", max: "71,000円", maxNote: "P90TR 電磁弁カスタム（中古・単品出品）。これを上回る落札はS&T製AR57・KRYTAC製のため除外。落札日2026年5月30日", aucfanUrl: "https://aucfan.com/intro/q-~c5ecb5fea5dea5eba5a420503930/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20P90/0/"},
      {category: "AKM", count: "67件(直近30日)", avg: "24,279円", max: "150,000円", maxNote: "GBB AKM KREBS ASSNECK SBRカスタム（中古・単品出品）。これを上回る落札はE&L製限定モデルのため除外。落札日2026年8月19日", aucfanUrl: "https://aucfan.com/intro/q-~c5ecb5fea5dea5eba5a420414b4d/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20AKM/0/"},
      {category: "L96", count: "55件(直近30日)", avg: "8,474円", max: "48,900円", maxNote: "L96 AWS 店舗カスタム新品（KM企画0.9Jスプリング仕様・スコープ/バイポッド付き）。法定基準内の仕様表示があるもの。落札日2026年7月1日", aucfanUrl: "https://aucfan.com/intro/q-~c5ecb5fea5dea5eba5a4204c3936/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20L96/0/"},
      {category: "M40A5", count: "36件(直近30日)", avg: "8,626円", max: "45,000円", maxNote: "M40A5 ショートカスタム（中古・単品出品）。落札日2026年4月21日", aucfanUrl: "https://aucfan.com/intro/q-~c5ecb5fea5dea5eba5a4204d34304135/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E6%9D%B1%E4%BA%AC%E3%83%9E%E3%83%AB%E3%82%A4%20M40A5/0/"},
    ],
    modelsFetchedAt: "2026年9月16日",
    modelsIntro: "検索需要の多い5モデルを個別集計しました。グロック17 Gen5・AKM（GBB）はカスタム品が上限を作り、P90・L96・M40A5は本体1万円前後の流通が厚く平均は低めです。上位の落札にはGHK・E&L・S&Tなど他社製品がキーワード混入するため、出品タイトルで東京マルイ製と確認できる単品のみを最高値に採用しています。",
  },
  {
    slug: "vfc",
    name: "VFC",
    silo: "airsoft",
    intro: "ガスブローバックライフルを軸に、平均落札価格が約4万円と高単価帯で取引されるブランドです。日本仕様(JP ver.)の限定モデルには20万円超の実売もあります。",
    rows: [
      { category: "ガスブローバック(ライフル)", count: "166件(直近30日)", avg: "39,521円", max: "222,000円", maxNote: "LAR(FAL Type III/JP ver.) DX Limited Edition 日本仕様(新品)", aucfanUrl: "https://aucfan.com/search1/q-~5646432031a5aca5b9a5d6a5eda1bca5d0a5c3a5af/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=VFC%20%E3%82%AC%E3%82%B9%E3%83%96%E3%83%AD%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF&s1=cbids&o1=d" },
      { category: "電動ガン", count: "85件(直近30日)", avg: "20,357円", max: "172,860円", maxNote: "電動ガン MK48 Mod1 DX version(JP ver.・新品)", aucfanUrl: "https://aucfan.com/search1/q-~5646432031c5c5c6b0a5aca5f3/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=VFC%20%E9%9B%BB%E5%8B%95%E3%82%AC%E3%83%B3&s1=cbids&o1=d" },
      { category: "ガスブローバック(ハンドガン・グロック系)", count: "33件(直近30日)", avg: "9,822円", max: "51,000円", maxNote: "VFC Glock 45 カスタムガスガン(セラコート塗装・ステッピング加工の単品)", aucfanUrl: "https://aucfan.com/search1/q-~5646432031a5b0a5eda5c3a5af/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=VFC%20%E3%82%B0%E3%83%AD%E3%83%83%E3%82%AF&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "電動ガン最高値は実物サーマルサイト付セット(601,000円)とトレポン等の他社名羅列出品を除外。グロック系のaucfan平均9,822円はマガジン・スライド等パーツ出品を含む表示値。VFCベースのTTIフルカスタム(195,000円・特典付き)と他社製(GHK/SRC)は最高値から除外。「VFC ハンドガン」直接検索はaucfan 5件のみのためグロック系クエリで代替。",
  },
  {
    slug: "g-and-g",
    name: "G&G",
    silo: "airsoft",
    intro: "電動ガン中心のブランドです。MG42のような大型モデルの美品には20万円超の実売がある一方、ARP9系はパーツ出品を含むため平均値は低めに出ます。",
    rows: [
      { category: "電動ガン", count: "158件(直近30日)", avg: "16,877円", max: "201,000円", maxNote: "G&G MG42 電動ガン(美品・単品)", aucfanUrl: "https://aucfan.com/search1/q-~472647202020c5c5c6b0a5aca5f3/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=G%26G%20%E9%9B%BB%E5%8B%95%E3%82%AC%E3%83%B3&s1=cbids&o1=d" },
      { category: "コンパクト電動ガン(ARP9系)", count: "48件(直近30日)", avg: "6,129円", max: "50,000円", maxNote: "ARP9 3.0 41PXカスタム品(単品)", aucfanUrl: "https://aucfan.com/search1/q-~4726472041525039/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=G%26G%20ARP9&s1=cbids&o1=d" },
      { category: "ガスガン(レバーアクション等)", count: "13件(直近30日)", avg: "21,636円", max: "68,000円", maxNote: "LevAR 7 ガスガン(スコープ・サイレンサー・ストック・バイポッド付き単品)", aucfanUrl: "https://aucfan.com/search1/q-~47264720a5aca5b9a5aca5f3/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=G%26G%20%E3%82%AC%E3%82%B9%E3%82%AC%E3%83%B3&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "ARP9系のaucfan平均6,129円はマガジン・パーツ出品を含む表示値。ガスガンはaucfan直近30日13件と標本が薄い(LevARレバーアクション系が中心)。ガスブローバック単独検索はaucfan 7件のみのため行として不採用。",
  },
  {
    slug: "ksc",
    name: "KSC",
    silo: "airsoft",
    intro: "ハンドガン系ガスブローバックの流通が中心(直近30日308件)。ZEKEキット組込品など希少カスタムの単品には10万円超の実売があります。電動ガン・MP9系は流通が薄めです。",
    rows: [
      { category: "ガスブローバック(ハンドガン中心)", count: "308件(直近30日)", avg: "13,278円", max: "115,000円", maxNote: "S&W M945コンパクト ZEKEアルミ削り出しキット組込済(希少・単品)", aucfanUrl: "https://aucfan.com/search1/q-~4b534320a5aca5b9a5d6a5eda1bca5d0a5c3a5af/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=KSC%20%E3%82%AC%E3%82%B9%E3%83%96%E3%83%AD%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF&s1=cbids&o1=d" },
      { category: "ガスブローバックSMG(MP9系)", count: "14件(直近30日)", avg: "13,422円", max: "50,000円", maxNote: "KSC/KWA製 B&T MP9 ガスブローバック(単品)", aucfanUrl: "https://aucfan.com/search1/q-~4b5343204d5039/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=KSC%20MP9&s1=cbids&o1=d" },
      { category: "電動ガン", count: "15件(直近30日)", avg: "20,543円", max: "46,400円", maxNote: "HK53A2 SFPD 電動ガン(絶版・限定品・ライトハンドガード付)", aucfanUrl: "https://aucfan.com/search1/q-~4b534320c5c5c6b0a5aca5f3/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=KSC%20%E9%9B%BB%E5%8B%95%E3%82%AC%E3%83%B3&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "ガスブローバック最高値は他社ベースのモデルガンカスタム(旭工房150,000円)と東京マルイMWSカスタムのKSC名羅列出品(142,000円)を除外。MP9系・電動ガンはaucfan直近30日14〜15件と標本が薄い。MP9系はKWA(海外版)併売が多く、KSC/KWA表記の単品を採用。",
  },
  {
    slug: "we-tech",
    name: "WE-Tech",
    silo: "airsoft",
    intro: "ガスブローバックを軸とする海外ブランドです。出品名が「WE」表記のみの場合も多く、集計はカテゴリ複合語での検索値です。SVD DXバージョンなど上位モデルには20万円の実売があります。",
    rows: [
      { category: "ガスブローバック(全般)", count: "136件(直近30日)", avg: "23,369円", max: "200,000円", maxNote: "WE/WETECH SVD ガスブローバック DXバージョン(スチールフレーム・リアルウッド・美品・オマケ付き単品)", aucfanUrl: "https://aucfan.com/search1/q-~574520a5aca5b9a5d6a5eda1bca5d0a5c3a5af/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=WE%20%E3%82%AC%E3%82%B9%E3%83%96%E3%83%AD%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF&s1=cbids&o1=d" },
      { category: "ガスブローバック(M4系ライフル)", count: "21件(直近30日)", avg: "18,340円", max: "47,000円", maxNote: "WE-Tech M4A1 V3 CO2対応化カスタム(マガジン3本付き単品)", aucfanUrl: "https://aucfan.com/search1/q-~5745204d3420a5aca5b9a5d6a5eda1bca5d0a5c3a5af/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=WE%20M4%20%E3%82%AC%E3%82%B9%E3%83%96%E3%83%AD%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF&s1=cbids&o1=d" },
      { category: "ガスブローバック(ハイキャパ系ハンドガン)", count: "11件(直近30日)", avg: "5,803円", max: "25,000円", maxNote: "WE COLT ULTIMATE COMBAT COMMANDER ハイキャパガスガン(単品)", aucfanUrl: "https://aucfan.com/search1/q-~574520a5cfa5a4a5ada5e3a5d1/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=WE%20%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%A3%E3%83%91&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "「WE」単独は一般語と衝突するため全クエリ複合語で検索。M4系最高値はLAYLAX BCM製品の羅列出品(69,999円)とランチャー付セット(49,500円)、GHK製を除外。ハイキャパ系はドラムマガジン3点セット(38,500円)とマルイとのハイブリッド品を除外。aucfan 11件と標本が薄くパーツ出品を含む平均表示値。",
  },
  {
    slug: "shimano",
    name: "シマノ",
    silo: "fishing",
    intro: "リール・ロッドとも国内最大級の流通量です(スピニングリールだけで直近30日1,224件)。ステラ系フラッグシップは中古でも15万円級の実売があります。",
    rows: [
      { category: "スピニングリール", count: "1,224件(直近30日)", avg: "30,760円", max: "149,999円", maxNote: "シマノ 25 ステラSW 25000PG(単品・新品未使用)", aucfanUrl: "https://aucfan.com/search1/q-~a5b7a5dea5ce20a5b9a5d4a5cba5f3a5b0a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%B7%E3%83%9E%E3%83%8E%20%E3%82%B9%E3%83%94%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "ベイトリール", count: "767件(直近30日)", avg: "20,558円", max: "189,980円", maxNote: "シマノ カーディフ 51SDC 左ハンドル(単品・中古・希少)", aucfanUrl: "https://aucfan.com/search1/q-~a5b7a5dea5ce20a5d9a5a4a5c8a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%B7%E3%83%9E%E3%83%8E%20%E3%83%99%E3%82%A4%E3%83%88%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "電動リール", count: "600件(直近30日)", avg: "35,348円", max: "160,000円", maxNote: "シマノ 24 ビーストマスターMD 12000(単品・未使用・タナトル8 PE10号1000m付属)", aucfanUrl: "https://aucfan.com/search1/q-~a5b7a5dea5ce20c5c5c6b0a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%B7%E3%83%9E%E3%83%8E%20%E9%9B%BB%E5%8B%95%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "ロッド", count: "900件(直近30日)", avg: "22,958円", max: "401,000円", maxNote: "シマノ スピンパワー 425AX 投げ竿(単品・中古)", aucfanUrl: "https://aucfan.com/search1/q-~a5b7a5dea5ce20a5eda5c3a5c9/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%B7%E3%83%9E%E3%83%8E%20%E3%83%AD%E3%83%83%E3%83%89&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "件数・平均はaucfan検索結果ページ表示値(ヤフオク直近30日・平均は「ページ内平均価格」)。スピニングは上位4件(大量まとめ等)を除外。電動リールはバッテリー単体とセット売りを除外しリール単品最上位を採用。",
    models: [
      {category: "ステラ", count: "300件(直近90日)", avg: "42,248円", max: "162,800円", maxNote: "26ステラ SW20000PG（新品・単品出品）。これを上回る落札は複数モデル名を羅列した出品と2台セットのため除外。落札日2026年7月24日", aucfanUrl: "https://aucfan.com/intro/q-~a5b7a5dea5ce20a5b9a5c6a5e9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B7%E3%83%9E%E3%83%8E%20%E3%82%B9%E3%83%86%E3%83%A9/0/"},
      {category: "ヴァンフォード", count: "193件(直近90日)", avg: "13,642円", max: "28,600円", maxNote: "24ヴァンフォード C3000SDH（未使用・単品出品）。これを上回る落札は複数ブランド羅列・ロッドとのセットのため除外。落札日2026年8月6日", aucfanUrl: "https://aucfan.com/intro/q-~a5b7a5dea5ce20a5f4a5a1a5f3a5d5a5a9a1bca5c9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B7%E3%83%9E%E3%83%8E%20%E3%83%B4%E3%82%A1%E3%83%B3%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89/0/"},
      {category: "ツインパワー", count: "635件(直近30日)", avg: "21,466円", max: "65,000円", maxNote: "ツインパワー SW10000PG（中古・単品出品）。落札一覧の上位はステラの出品にキーワードとして含まれるため除外して確認。落札日2026年5月25日", aucfanUrl: "https://aucfan.com/intro/q-~a5b7a5dea5ce20a5c4a5a4a5f3a5d1a5efa1bc/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%82%B7%E3%83%9E%E3%83%8E%20%E3%83%84%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AF%E3%83%BC/0/"},
    ],
    modelsFetchedAt: "2026年9月16日",
    modelsIntro: "需要の大きい3機種を個別集計しました。ステラは26ステラSWの新品が16万円台、ヴァンフォードは24モデルの未使用が2万円台後半、ツインパワーはSWの大型番手が上限です。ヤフオク落札一覧では「ステラ」の出品タイトルに他機種名が羅列されるため、型番単位で確認できる単品のみを採用しています。",
  },
  {
    slug: "daiwa",
    name: "ダイワ",
    silo: "fishing",
    intro: "シマノと並ぶ流通量で、ロッドは直近30日1,231件。廃盤コレクター品(未使用モアザン等)が相場から乖離した高値になる例があるのもダイワの特徴です。",
    rows: [
      { category: "スピニングリール", count: "1,169件(直近30日)", avg: "31,354円", max: "595,100円", maxNote: "ダイワ モアザン 3012H(単品・未使用・廃盤コレクター品)", aucfanUrl: "https://aucfan.com/search1/q-~a5c0a5a4a5ef20a5b9a5d4a5cba5f3a5b0a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%80%E3%82%A4%E3%83%AF%20%E3%82%B9%E3%83%94%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "ベイトリール", count: "710件(直近30日)", avg: "20,671円", max: "100,000円", maxNote: "DAIWA×deps DR-Z2020XH LIMITED(単品)", aucfanUrl: "https://aucfan.com/search1/q-~a5c0a5a4a5ef20a5d9a5a4a5c8a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%80%E3%82%A4%E3%83%AF%20%E3%83%99%E3%82%A4%E3%83%88%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "電動リール", count: "774件(直近30日)", avg: "33,756円", max: "419,980円", maxNote: "ダイワ マリンパワー 3000-24V(単品・中古美品)", aucfanUrl: "https://aucfan.com/search1/q-~a5c0a5a4a5ef20c5c5c6b0a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%80%E3%82%A4%E3%83%AF%20%E9%9B%BB%E5%8B%95%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "ロッド", count: "1,231件(直近30日)", avg: "20,412円", max: "251,000円", maxNote: "ダイワ 枯法師 21尺 ヘラ竿(単品・中古)", aucfanUrl: "https://aucfan.com/search1/q-~a5c0a5a4a5ef20a5eda5c3a5c9/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%80%E3%82%A4%E3%83%AF%20%E3%83%AD%E3%83%83%E3%83%89&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "件数・平均はaucfan表示値。ベイトはジャンクまとめとカテゴリ外混入を除外。スピニング最高値595,100円は未使用廃盤コレクター品の突出値(単品のためルール上採用)。",
    models: [
      {category: "セルテート", count: "338件(直近30日)", avg: "22,473円", max: "80,000円", maxNote: "SLP WORKS 24セルテート カスタムボディ LT2500-H（未使用・単品出品）。上位はソルティガ出品のキーワード混入のため除外。落札日2026年5月9日", aucfanUrl: "https://aucfan.com/intro/q-~a5c0a5a4a5ef20a5bba5eba5c6a1bca5c8/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%80%E3%82%A4%E3%83%AF%20%E3%82%BB%E3%83%AB%E3%83%86%E3%83%BC%E3%83%88/0/"},
      {category: "イグジスト", count: "210件(直近30日)", avg: "33,647円", max: "280,000円", maxNote: "ロデオクラフト×ダイワ RC 12イグジスト 2004 IOSフルチューン（中古・コラボ品）。通常モデルの上限とは限らない。落札日2026年8月25日", aucfanUrl: "https://aucfan.com/intro/q-~a5c0a5a4a5ef20a5a4a5b0a5b8a5b9a5c8/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%80%E3%82%A4%E3%83%AF%20%E3%82%A4%E3%82%B0%E3%82%B8%E3%82%B9%E3%83%88/0/"},
      {category: "ルビアス", count: "300件(直近90日)", avg: "15,620円", max: "51,000円", maxNote: "ルビアス エアリティ FC LT2500S-XH（新品・単品出品）。上位は複数モデル羅列・イグジスト出品のため除外。落札日2026年3月22日", aucfanUrl: "https://aucfan.com/intro/q-~a5c0a5a4a5ef20a5eba5d3a5a2a5b9/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch/%E3%83%80%E3%82%A4%E3%83%AF%20%E3%83%AB%E3%83%93%E3%82%A2%E3%82%B9/0/"},
    ],
    modelsFetchedAt: "2026年9月16日",
    modelsIntro: "需要の大きい3機種を個別集計しました。イグジストはコラボ・周年限定品が上限を作り、通常モデルとは相場が別です。セルテートの落札一覧はソルティガ出品のキーワード混入が多く、型番でセルテートと確認できる単品のみを採用しています。ルビアスはエアリティFCの新品・未使用が5万円前後で上限です。",
  },
  {
    slug: "gamakatsu",
    name: "がまかつ",
    silo: "fishing",
    intro: "竿専業メーカーのため磯竿・鮎竿・ヘラ竿の3カテゴリで集計しています。流通量は大手2社より少ないものの、がま磯・がま鮎の上位機は10万円超の実売が安定してあります。",
    rows: [
      { category: "磯竿", count: "142件(直近30日)", avg: "26,207円", max: "194,700円", maxNote: "がまかつ がまくえ IMPULSE 100号 5.2m あら竿(単品)", aucfanUrl: "https://aucfan.com/search1/q-~a4aca4dea4aba4c420b0eba4b6a4aa/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%81%8C%E3%81%BE%E3%81%8B%E3%81%A4%20%E7%A3%AF%E7%AB%BF&b=1&n=50&s1=cbids&o1=d" },
      { category: "鮎竿", count: "53件(直近30日)", avg: "34,796円", max: "148,000円", maxNote: "がまかつ がま鮎 パワースペシャル5 引抜荒瀬90(単品・現行モデル)", aucfanUrl: "https://aucfan.com/search1/q-~a4aca4dea4aba4c420b0ded4d0/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%81%8C%E3%81%BE%E3%81%8B%E3%81%A4%20%E9%AE%8E%E7%AB%BF&b=1&n=50&s1=cbids&o1=d" },
      { category: "ヘラ竿", count: "25件(直近30日)", avg: "33,591円", max: "249,000円", maxNote: "がまかつ がまへら 幻壮天 二十一(21尺)(単品・中古)", aucfanUrl: "https://aucfan.com/search1/q-~a4aca4dea4aba4c420a5d8a5e9d4d0/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%81%8C%E3%81%BE%E3%81%8B%E3%81%A4%20%E3%83%98%E3%83%A9%E7%AB%BF&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "竿メーカーのため磯竿/鮎竿/ヘラ竿の3カテゴリ構成。他ブランド混入(ダイワ銀影)と28本セットを除外。ヘラ竿25件・鮎竿53件と標本小さめ。",
  },
  {
    slug: "abu-garcia",
    name: "アブガルシア",
    silo: "fishing",
    intro: "旧アンバサダー系のコレクター需要が強いブランドです。「アブ」「Abu」表記のみの出品は本集計に含まれないため、実際の流通量は表の件数より多い点にご注意ください。",
    rows: [
      { category: "ベイトリール", count: "227件(直近30日)", avg: "17,932円", max: "242,011円", maxNote: "アブガルシア アンバサダー 1601C IAR 左巻き(単品・未使用)", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5d6a5aca5eba5b7a5a220a5d9a5a4a5c8a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%96%E3%82%AC%E3%83%AB%E3%82%B7%E3%82%A2%20%E3%83%99%E3%82%A4%E3%83%88%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "スピニングリール", count: "74件(直近30日)", avg: "9,773円", max: "206,000円", maxNote: "アブ カーディナル3BP パワーズファクトリー 箱付(単品・中古)", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5d6a5aca5eba5b7a5a220a5b9a5d4a5cba5f3a5b0a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%96%E3%82%AC%E3%83%AB%E3%82%B7%E3%82%A2%20%E3%82%B9%E3%83%94%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
      { category: "ロッド", count: "72件(直近30日)", avg: "4,921円", max: "45,800円", maxNote: "アブガルシア ズームスエシア ZSUC-59ML ベイトロッド(単品・中古)", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5d6a5aca5eba5b7a5a220a5eda5c3a5c9/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%96%E3%82%AC%E3%83%AB%E3%82%B7%E3%82%A2%20%E3%83%AD%E3%83%83%E3%83%89&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "旧アンバサダー等は「アブ」「Abu」表記のみの出品が多く、本集計(「アブガルシア」表記一致分)は実流通量より少なめ。ロッド上位のリール+ロッドセット4件を除外。スピニング・ロッドは母数小。",
  },
  {
    slug: "megabass",
    name: "メガバス",
    silo: "fishing",
    intro: "ルアーはセット売りと単品で相場が大きく分かれます(表は単品ベース)。ITO系コレクターリールは19件と少数ながら平均5万円超の高単価です。",
    rows: [
      { category: "ルアー", count: "591件(直近30日)", avg: "15,406円", max: "59,000円", maxNote: "Megabass ONETEN X 30th 30周年記念限定(単品)", aucfanUrl: "https://aucfan.com/search1/q-~a5e1a5aca5d0a5b920a5eba5a2a1bc/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%A1%E3%82%AC%E3%83%90%E3%82%B9%20%E3%83%AB%E3%82%A2%E3%83%BC&b=1&n=50&s1=cbids&o1=d" },
      { category: "ロッド", count: "66件(直近30日)", avg: "17,467円", max: "149,500円", maxNote: "メガバス パガーニ プレグンタ 5'5 バンブーロッド 受注生産品(単品・未使用)", aucfanUrl: "https://aucfan.com/search1/q-~a5e1a5aca5d0a5b920a5eda5c3a5c9/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%A1%E3%82%AC%E3%83%90%E3%82%B9%20%E3%83%AD%E3%83%83%E3%83%89&b=1&n=50&s1=cbids&o1=d" },
      { category: "リール", count: "19件(直近30日)", avg: "53,404円", max: "356,400円", maxNote: "メガバス モノブロック スペチアーレ ITO ギャンブラー ベイトリール 右(単品・中古)", aucfanUrl: "https://aucfan.com/search1/q-~a5e1a5aca5d0a5b920a5eaa1bca5eb/s-ya/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%A1%E3%82%AC%E3%83%90%E3%82%B9%20%E3%83%AA%E3%83%BC%E3%83%AB&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "ルアーは落札額上位16件が全てセット/まとめ/ジャンクのため除外し単品最上位を採用=単品相場とセット相場の乖離大。リールは19件と小標本だが高単価(ITO系コレクター品)。",
  },
  {
    slug: "kushitani",
    name: "クシタニ",
    silo: "bikewear",
    intro: "国産バイクウェアの定番ブランドです。レザージャケット・革ツナギの単品に安定した需要があり、未使用グローブにも4万円超の実売があります。",
    rows: [
      { category: "レザージャケット", count: "22件(直近落札分・aucfanページ内集計)", avg: "30,404円", max: "101,000円", maxNote: "クシタニ スクリプトジャケット サイズL(単品・中古/2026年5月25日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5afa5b7a5bfa5cb20a5eca5b6a1bca5b8a5e3a5b1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E3%83%AC%E3%82%B6%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88&va=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E3%83%AC%E3%82%B6%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
      { category: "レーシングスーツ(革ツナギ)", count: "11件(直近落札分・aucfanページ内集計)", avg: "55,775円", max: "242,000円", maxNote: "K-0084XX クレドスーツ L/3W MFJ公認(単品・新品同様/2026年5月10日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5afa5b7a5bfa5cb20b3d7a5c4a5caa5ae/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E9%9D%A9%E3%83%84%E3%83%8A%E3%82%AE&va=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E9%9D%A9%E3%83%84%E3%83%8A%E3%82%AE&b=1&n=50&s1=cbids&o1=d" },
      { category: "グローブ", count: "30件(直近落札分・aucfanページ内集計)", avg: "7,509円", max: "41,000円", maxNote: "KUSHITANI×KAWASAKI GPV2グローブ L カンガルー革(単品・未使用/2026年7月9日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5afa5b7a5bfa5cb20a5b0a5eda1bca5d6/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96&va=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96&b=1&n=50&s1=cbids&o1=d" },
      { category: "パンツ", count: "30件(直近落札分・aucfanページ内集計)", avg: "14,525円", max: "54,997円", maxNote: "EXPLORER JEANS W30 パンチングレザーパンツ(単品・中古/2026年5月17日落札)。上位3件のジャケット上下セット(55,000〜101,000円)はセットのため除外", aucfanUrl: "https://aucfan.com/search1/q-~a5afa5b7a5bfa5cb20a5d1a5f3a5c4/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E3%83%91%E3%83%B3%E3%83%84&va=%E3%82%AF%E3%82%B7%E3%82%BF%E3%83%8B%20%E3%83%91%E3%83%B3%E3%83%84&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "aucfanの平均・件数は無料閲覧で表示される集計ボックス(ページ内集計・最大30件)の実測値。表示平均値とページ内価格配列の再計算が全件一致することを機械照合済み。パンツはジャケット上下セット・卸まとめ売り(KG系16-22点セット)を最高値から除外",
  },
  {
    slug: "alpinestars",
    name: "アルパインスターズ",
    silo: "bikewear",
    intro: "直近の単品落札は母数が小さく、平均値は参考程度に見てください。DUCATIコラボの限定ジャケットやHRC系ツナギなど、コラボ・公認モデルに高値が付いています。",
    rows: [
      { category: "レザージャケット", count: "5件(直近落札分・aucfanページ内集計)", avg: "21,810円", max: "75,000円", maxNote: "DUCATI×alpinestars Replica Team17 世界限定350着 EU52(単品・未使用/2026年6月20日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5eba5d1a5a4a5f3a5b9a5bfa1bca5ba20a5eca5b6a1bca5b8a5e3a5b1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E3%83%AC%E3%82%B6%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88&va=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E3%83%AC%E3%82%B6%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
      { category: "レーシングスーツ(革ツナギ)", count: "3件(直近落札分・aucfanページ内集計)", avg: "66,267円", max: "112,000円", maxNote: "HRC HONDA GP PRO V2 1ピース EUR52(単品・新品未使用/2026年9月7日落札)。最上位220,000円は2着セットのため除外", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5eba5d1a5a4a5f3a5b9a5bfa1bca5ba20b3d7a5c4a5caa5ae/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E9%9D%A9%E3%83%84%E3%83%8A%E3%82%AE&va=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E9%9D%A9%E3%83%84%E3%83%8A%E3%82%AE&b=1&n=50&s1=cbids&o1=d" },
      { category: "グローブ", count: "30件(直近落札分・aucfanページ内集計)", avg: "7,201円", max: "41,976円", maxNote: "GP PRO R4 GLOVE M(単品・新品ストア出品/2026年7月2日落札)。上位2件(72,000円・56,000円)はスーツ・ブーツ・ヘルメット等とのセットのため除外", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5eba5d1a5a4a5f3a5b9a5bfa1bca5ba20a5b0a5eda1bca5d6/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96&va=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96&b=1&n=50&s1=cbids&o1=d" },
      { category: "パンツ", count: "2件(直近落札分・aucfanページ内集計)", avg: "6,495円", max: "59,000円", maxNote: "missile v3 leather pants long 本革(単品・中古/2026年9月2日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5eba5d1a5a4a5f3a5b9a5bfa1bca5ba20a5d1a5f3a5c4/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E3%83%91%E3%83%B3%E3%83%84&va=%E3%82%A2%E3%83%AB%E3%83%91%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BA%20%E3%83%91%E3%83%B3%E3%83%84&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "レザージャケット(5件)・革ツナギ(3件)・パンツ(2件)はaucfanページ内集計の母数が小さく平均値の参考性は限定的。パンツ検索結果には卸まとめ売り(KG系16-22点セット)が多数混入し全て除外。4輪レーシンググローブ(FIA公認)も検索結果に混在",
  },
  {
    slug: "dainese",
    name: "ダイネーゼ",
    silo: "bikewear",
    intro: "Ducati Corseコラボのレザージャケットに21万円の実売があるなど、コラボ・限定品が相場の上限を作るブランドです。革ツナギは母数が小さく平均は参考値です。",
    rows: [
      { category: "レザージャケット", count: "15件(直近落札分・aucfanページ内集計)", avg: "22,556円", max: "210,000円", maxNote: "Ducati Corse Tricolore レザージャケット(DAINESE製・単品・限定新品/2026年5月24日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5c0a5a4a5cda1bca5bc20a5eca5b6a1bca5b8a5e3a5b1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%80%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%BC%20%E3%83%AC%E3%82%B6%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88&va=%E3%83%80%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%BC%20%E3%83%AC%E3%82%B6%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
      { category: "レーシングスーツ(革ツナギ)", count: "2件(直近落札分・aucfanページ内集計)", avg: "173,000円", max: "300,000円", maxNote: "エディー・ローソン本人着用 当時物レーシングスーツ(単品・選手実使用の記念品的個体/2026年5月31日落札)。通常品の最高値は新品MISANO2 D-AIR MFJ公認の270,000円", aucfanUrl: "https://aucfan.com/search1/q-~a5c0a5a4a5cda1bca5bc20b3d7a5c4a5caa5ae/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%80%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%BC%20%E9%9D%A9%E3%83%84%E3%83%8A%E3%82%AE&va=%E3%83%80%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%BC%20%E9%9D%A9%E3%83%84%E3%83%8A%E3%82%AE&b=1&n=50&s1=cbids&o1=d" },
      { category: "グローブ", count: "14件(直近落札分・aucfanページ内集計)", avg: "10,089円", max: "44,000円", maxNote: "FULL METAL 7 レーシンググローブ S(単品・美品/2026年5月10日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5c0a5a4a5cda1bca5bc20a5b0a5eda1bca5d6/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%83%80%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%BC%20%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96&va=%E3%83%80%E3%82%A4%E3%83%8D%E3%83%BC%E3%82%BC%20%E3%82%B0%E3%83%AD%E3%83%BC%E3%82%BC&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "革ツナギは直近集計2件と母数極小(平均173,000円は参考値)。「ダイネーゼ ジャケット」(テキスタイル狙い)も取得したが上位がレザージャケットとほぼ重複しカテゴリ分離不能のため不採用(3カテゴリ構成)。他ブランド併記のノックス製グローブ等の紛れ出品を確認・除外",
  },
  {
    slug: "shoei",
    name: "SHOEI",
    silo: "bikewear",
    intro: "注意: ジェット型は廃番J-FORCE2系に海外コレクター需要による高騰(数十万〜130万円級)が起きており、表の平均値は現行品の実勢とは別物です。現行品の物差しにはフルフェイス・システムの行をお使いください。",
    rows: [
      { category: "フルフェイス", count: "30件(直近落札分・aucfanページ内集計)", avg: "37,486円", max: "275,000円", maxNote: "X-Fifteen Carbon L(単品・新品/2026年8月29日落札)。それ以上の価格帯(30万〜37.5万円)はジェット型J-STREAM/J-FORCE IIの誤分類出品・2点まとめのため除外", aucfanUrl: "https://aucfan.com/search1/q-~53484f454920a5d5a5eba5d5a5a7a5a4a5b9/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=SHOEI%20%E3%83%95%E3%83%AB%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9&va=SHOEI%20%E3%83%95%E3%83%AB%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9&b=1&n=50&s1=cbids&o1=d" },
      { category: "システム", count: "25件(直近落札分・aucfanページ内集計)", avg: "41,743円", max: "91,300円", maxNote: "NEOTEC3 BREEZE TC-2 L(単品・新品ストア出品/2026年8月18日落札。同額でNEOTEC3各色複数)", aucfanUrl: "https://aucfan.com/search1/q-~53484f454920a5b7a5b9a5c6a5e0a5d8a5eba5e1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=SHOEI%20%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&va=SHOEI%20%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
      { category: "ジェット", count: "30件(直近落札分・aucfanページ内集計)", avg: "124,511円", max: "1,327,890円", maxNote: "J-FORCE II ワイズギア ジェットヘルメット S(単品・中古/2026年5月7日落札)。廃番J-FORCE2系のコレクター需要高騰で50万〜130万円台が多数", aucfanUrl: "https://aucfan.com/search1/q-~53484f454920a5b8a5a7a5c3a5c8a5d8a5eba5e1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=SHOEI%20%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&va=SHOEI%20%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "ジェットは廃番J-FORCE2系の海外コレクター需要による異常高騰相場で、平均124,511円・最高132.7万円は現行品相場と乖離(現行ジェットの実勢とは別物として扱うこと推奨)。フルフェイス検索にはジェット型の誤分類出品が上位混入するため最高値は真のフルフェイス単品(X-Fifteen Carbon)を採用。ジャンク表記(73万円のJ-FORCE2ジャンク等)は最高値から除外",
  },
  {
    slug: "arai",
    name: "アライ",
    silo: "bikewear",
    intro: "注意: ジェット型は廃番SZ-Ram3系のコレクター高騰(30万〜71.5万円)を含み、平均値は現行品の実勢と乖離しています。現行品はフルフェイス・オフロードの行を参考にしてください。",
    rows: [
      { category: "フルフェイス", count: "30件(直近落札分・aucfanページ内集計)", avg: "47,541円", max: "301,000円", maxNote: "RX-7X SRCカーボン L(単品・中古/2026年5月17日落札)。上位2件(41.6万・36.8万円)はジェット型SZ-Ram3の誤分類出品のため除外", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5e9a5a420a5d5a5eba5d5a5a7a5a4a5b920a5d8a5eba5e1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%83%95%E3%83%AB%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&va=%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%83%95%E3%83%AB%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
      { category: "ジェット", count: "30件(直近落札分・aucfanページ内集計)", avg: "97,958円", max: "715,000円", maxNote: "SZ-Ram3 ジェットヘルメット(単品・中古/2026年9月8日落札)。廃番SZ-Ram3系のコレクター需要高騰で30万〜71.5万円台が多数", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5e9a5a420a5b8a5a7a5c3a5c8a5d8a5eba5e1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&va=%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
      { category: "オフロード", count: "30件(直近落札分・aucfanページ内集計)", avg: "23,847円", max: "84,000円", maxNote: "TOUR-CROSS V Ducati V5DUCストラダツア L(単品・未使用/2026年5月5日落札)", aucfanUrl: "https://aucfan.com/search1/q-~a5a2a5e9a5a420a5aaa5d5a5eda1bca5c920a5d8a5eba5e1a5c3a5c8/s-mix/", yahooUrl: "https://auctions.yahoo.co.jp/closedsearch/closedsearch?p=%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%82%AA%E3%83%95%E3%83%AD%E3%83%BC%E3%83%89%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&va=%E3%82%A2%E3%83%A9%E3%82%A4%20%E3%82%AA%E3%83%95%E3%83%AD%E3%83%BC%E3%83%89%20%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88&b=1&n=50&s1=cbids&o1=d" },
    ],
    fetchedAt: "2026年9月11日",
    notes: "全クエリに「ヘルメット」を付与しアライテント・自転車用等の同名別物を排除(取得結果は全件バイク用を目視確認)。Araiはシステムヘルメット非展開のためフルフェイス/ジェット/オフロードの3カテゴリ構成。ジェットは廃番SZ-Ram3系のコレクター高騰相場で平均97,958円は現行品相場と乖離。フルフェイス検索上位のSZ-Ram3誤分類2件は最高値から除外",
  },
];
