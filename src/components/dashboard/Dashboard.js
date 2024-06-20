import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    {
      name: "Małgorzata",
      surname: "Kowalska",
      content: "Nauczyciel matematyki",
      image:
        "https://img.myloview.pl/obrazy/nerd-nauczyciel-matematyki-700-38237926.jpg",
    },
    {
      name: "Krzysztof",
      surname: "Laskowski",
      content: "Nauczyciel języka polskiego",
      image:
        "https://i.pinimg.com/564x/73/6c/77/736c7758a7d1183f202443fd7f15662a.jpghttps://i.pinimg.com/564x/dd/7e/34/dd7e340a71d02a0c46336f95c5827553.jpg",
    },
    {
      name: "Katarzyna",
      surname: "Skrzynecka",
      content: "Nauczyciel historii",
      image:
        "https://i.pinimg.com/564x/40/9b/fd/409bfda92f7ef6d91907d1fbd2dc0d8f.jpg",
    },
    {
      name: "Jakub",
      surname: "Trąbka",
      content: "Nauczyciel biologi",
      image:
        "https://i.pinimg.com/736x/23/c7/fa/23c7fa1450b5146e9ad1c10f29557b94.jpg",
    },
    {
      name: "Wiktoria",
      surname: "Młynarska",
      content: "Nauczyciel chemi",
      image:
        "https://i.pinimg.com/564x/f0/a8/63/f0a86345f6f441ca355c2da77272712d.jpg",
    },
    {
      name: "Kacper",
      surname: "Makłowicz",
      content: "Nauczyciel fizyki",
      image:
        "https://i.pinimg.com/564x/ef/8f/b6/ef8fb69402a3b1a3be78d75065fc8267.jpg",
    },
    {
      name: "Monika",
      surname: "Sokołowska",
      content: "Nauczyciel muzyki",
      image:
        "https://i.pinimg.com/564x/3d/b2/8f/3db28f9307a7c262384325c2ade6bbf3.jpg",
    },
    {
      name: "Mateusz",
      surname: "Pszczoła",
      content: "Nauczyciel języka angielskiego",
      image:
        "https://i.pinimg.com/564x/87/00/53/870053bd4b96ada9767d664afd02e435.jpg",
    },
    {
      name: "Aneta",
      surname: "Kolosa",
      content: "Nauczyciel języka rosyjskiego",
      image:
        "https://i.pinimg.com/564x/e9/cf/0e/e9cf0e255efde7c5f0a33a2c15a19d8b.jpg",
    },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        );
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;
