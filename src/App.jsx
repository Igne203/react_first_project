import "./App.css";
import Header from "./components/Header/Header.jsx";
import Card from "./components/Card/card.jsx";
import DogsCard from "./components/RoundCard/RoundCard.jsx";
import ParagraphAccordion from "./components/ParagraphAccordion/ParagraphAccordion.jsx";
import DogSlider from "./components/DogSlider/DogSlider.jsx";

function App() {
  const cats = [
    {
      name: "Murklys",
      image: "public/assets/unnamed.webp",
      toy: "Siulu kamuoliukas",
    },
    {
      name: "Rainakelis",
      image: "public/assets/smiley.jpg",
      toy: "Zaisline pele",
    },
    {
      name: "Druckis",
      image: "public/assets/fatcat.webp",
      toy: "Lazeris",
    },
    {
      name: "Rustusis",
      image: "public/assets/images.jpg",
      toy: "---",
    },
  ];

  const dogs = [
    {
      name: "Amsius",
      image: "public/assets/1.jpg",
      food: "Kaulai",
    },
    {
      name: "Iltis",
      image: "public/assets/2.jpg",
      food: "Kuciukai",
    },
    {
      name: "Ausyte",
      image: "public/assets/3.jpg",
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

      <ParagraphAccordion />

      <div className="ContainerBlock">{dogItems}</div>
      <div className="ContainerBlock"><DogSlider dogs={dogs}  /></div>

      
    </>
  );
}

export default App;
