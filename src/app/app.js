import "../styles/global.css";

import CommonLayout from "@/components/client-view/common-layout";

function MyApp({ Component, pageProps }) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  );
}

export default MyApp;
