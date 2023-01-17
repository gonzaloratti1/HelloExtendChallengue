import FavoritableImage from "../../components/FavoritableImage";

type Props = {
  params: {
    breed: string;
  };
};

const BreedPage = async ({ params: { breed } }: Props) => {
  const { message: images } = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random/10`
  ).then((res) => res.json() as Promise<{ message: string[] }>);

  return (
    <section
      className="mt-4 grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}
    >
      {images.map((image) => (
        <FavoritableImage key={image} src={image} />
      ))}
    </section>
  );
};

export default BreedPage;
