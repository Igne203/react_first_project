import "./App.css";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/card.jsx";
import DogsCard from "./components/RoundCard/RoundCard.jsx";

function App() {
  const cats = [
    {
      name: "Murklys",
      image: "unnamed.webp",
      toy: "Siulu kamuoliukas",
    },
    {
      name: "Rainakelis",
      image: "smiley.jpg",
      toy: "Zaisline pele",
    },
    {
      name: "Druckis",
      image: "fatcat.webp",
      toy: "Lazeris",
    },
    {
      name: "Rustusis",
      image: "images.jpg",
      toy: "---",
    },
  ];

  const dogs = [
    {
      name: "Amsius",
      image: "1.jpg",
      food: "Kaulai",
    },
    {
      name: "Iltis",
      image: "2.jpg",
      food: "Kuciukai",
    },
    {
      name: "Ausyte",
      image: "3.jpg",
      food: "Mandarinai",
    },
  ];
  // const printCat = (cat) => {
  //   console.log("printCat:")
  //   console.log(cat.name)
  // }
  // function printThem (cat) {
  //   console.log("printThem:")
  //   console.log(cat.name)
  // }
  // const testCats = cats.map(printThem);
  // const testCats2 = cats.map(printCat);

  const cardItems = cats.map((c) => <Card key={c.name} cat={c}></Card>);
  const dogItems = dogs.map((c) => <DogsCard key={c.name} dog={c}></DogsCard>);

  return (
    <>
      <Header></Header>

      <div className="ContainerBlock">{cardItems}</div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ea odit
        dolorum, cupiditate consequuntur tempore reprehenderit voluptas,
        sapiente dolorem velit aliquid, voluptate quam perferendis reiciendis
        facilis culpa facere quae? Porro.
      </p>

      <div className="ContainerBlock">{dogItems}</div>
    </>
  );
}

export default App;
