import React from "react";



import Layout from "../components/layout";
import Tweet from "../components/tweet";

function HomePage() {
  const [data, dataSet] = React.useState([])
  const [dataLoading, dataLoadingSet] = React.useState(true)

  React.useEffect(()=>{

    async function getData(){
      const response = await fetch("http://localhost:3000/api/tweet")
      const  data = await response.json()
      dataSet(data.statuses)
      dataLoadingSet(false)
      console.log(data)
    }
  getData()
}, [])


  return <Layout>

    {/* varsa dataloading'i göster*/}
    {dataLoading && <p>Loading</p> }

    {data.map((tweet) => {
      return <div> {tweet.id} </div>
        })
    }

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
