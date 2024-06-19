import { useSelector } from "react-redux";
import { useGetChampionByNameQuery } from "../champApi";

export default function Champion({ championName }) {
  const { data, isLoading, isError } = useGetChampionByNameQuery(championName);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Not found!</h1>;
  }

  if (!data || !data.data[championName]) {
    return null;
  }

  const champion = data.data[championName];

  return (
    <>
      <h2>{champion.name}</h2>
      <h4>{champion.title}</h4>
      <h4>{champion.tags}</h4>
      <h4>{champion.lore}</h4>
      <img
        height={300}
        src={`https://ddragon.leagueoflegends.com/cdn/14.12.1/img/champion/${championName}.png`}
        alt=""
      />
      <div className="tips">
        <p className="allytips">
          <strong>Ally tips:</strong> {champion.allytips}
        </p>
        <p className="enemytips">
          <strong>Enemy tips:</strong> {champion.enemytips}
        </p>
      </div>
    </>
  );
}
