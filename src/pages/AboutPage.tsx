import { useUiStore } from "../store/useUiStore";

function AboutPage() {
  const theme = useUiStore((state) => state.theme);

  return (
    <main
      className={`min-h-screen p-8 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="mb-4 text-3xl font-bold">About GameVault</h1>

      <p className="max-w-2xl text-lg">
        GameVault is a personal game tracker. It lets me browse a catalog of
        games, search by title, filter by playing status, open a detail page,
        update the status, add a personal note, and give each game a rating.
      </p>
    </main>
  );
}

export default AboutPage;
