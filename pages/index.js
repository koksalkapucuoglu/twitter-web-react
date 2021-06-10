import React from "react";



import Layout from "../components/layout";
import Tweet from "../components/tweet";

function HomePage() {
  return <Layout>

    <Tweet name={"Köksal Kapucuoğlu"} slug={"koksall"} datetime={new Date("2021-06-02")} text={`İlk tweet ilk satır
    ikinci satır
        üçüncü satır`
    }
    />

    <Tweet name={"Köksal Kapucuoğlu"} slug={"koksall"} datetime={new Date("2021-06-02")} text={`İlk tweet ilk satır
    ikinci satır
        üçüncü satır`
    }
    />

  </Layout>;
}

export default HomePage;
