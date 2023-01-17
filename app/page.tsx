type Props = {
  params: {
    breed: string;
  };
};

const HomePage = async ({ params: { breed } }: Props) => {
  return (
    <main>
      <span className="text-gray-500">Select a bread above</span>
    </main>
  );
};

export default HomePage;
