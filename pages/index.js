import React from "react";
import useSWR from "swr";

import Layout from "../components/layout";
import Tweet from "../components/tweet";
import fetcher from "../lib/fetch";

function HomePage() {
  const { data, error } = useSWR("/api/tweet", fetcher);

  return (
    <Layout>
      {/* varsa dataloading'i göster*/}
      {!data && <p>Loading</p>}

      {data?.statuses.map((tweet) => {
        return <Tweet key={tweet.id} {...tweet} />;
      })}
    </Layout>
  );
}

export default HomePage;
