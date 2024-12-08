import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Portfolio by UaRu",
    description: "Here is the portfolio site of UaRu, a freelance illustrator.",
    image: "https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png",
  };

  return (
    <Html lang="ja">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@youalulu" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
