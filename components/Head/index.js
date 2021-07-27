import Head from "next/head";

const HeadComponent = () => (
  <Head>
    <title>Dos Orillas</title>
    {/* <meta name="description" content='' /> */}
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    {/* <meta property="og:title" content={`Ego Test ${title ? `- ${title}` : ''}`} /> */}
    {/* <meta property="og:description" content={description ? description : "Ignacio Varni's challenge"} /> */}
    <link rel="icon" href="/assets/logo-dos-orillas.png" />
  </Head>
);

export default HeadComponent;
