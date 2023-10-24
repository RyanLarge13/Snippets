import Snippet from "../components/Snippet";

const Home = () => {
  const textOne = `
  const trans = () => {
    const elem = document
    .querySelector(".fun")
    .addEventListener("click", () => console.log("ready to translate"))
  }`;
  const textTwo = `
  int main() {
  	return 0;
  }`;

  return (
    <main className="px-5 mt-20">
      <h1 className="text-4xl font-semibold">Snippets</h1>
      <p>
        Create and share with the world your inovative code and create a better
        place for developers in need of help
      </p>
      <Snippet text={textOne} language="javascript" user="RyanLarge" />
      <div className="translate-x-10 translate-y-[-50] mb-10">
        <Snippet text={textTwo} language="cpp" user="markIvely" />
      </div>
    </main>
  );
};

export default Home;
