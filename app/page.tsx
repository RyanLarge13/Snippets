import Snippet from "../components/Snippet";

const Home = () => {
  const textOne = `
  const helloSnipz = (stringAddition) => {
    const string = "Hello Snipz!" + stringAddition;
    console.log(string);
  };
  
  helloSnipz(" This is awesome!");
  `;

  return (
    <main className="px-5 mt-20 lg:px-40">
      <div className="max-w-[400px]">
      <h1 className="text-4xl font-semibold mb-2">Enrich Developers With Your Best Code Snipz</h1>
      <p>
        Create and share with the world your inovative code and build a better
        place for developers in need of help
      </p>
      </div>
      <Snippet text={textOne} language="javascript" user="RyanLarge" />
    </main>
  );
};

export default Home;
