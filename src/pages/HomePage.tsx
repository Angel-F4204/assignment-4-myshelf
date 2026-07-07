import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/api";
import { useUiStore } from "../store/useUiStore";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("q") ?? "";

  const theme = useUiStore((state) => state.theme);
  const density = useUiStore((state) => state.density);
  const setDensity = useUiStore((state) => state.setDensity);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  const items = data ?? [];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (isLoading) {
    return <main className="p-8">Loading catalog...</main>;
  }

  if (isError) {
    return <main className="p-8">Error loading catalog.</main>;
  }

  return (
    <main
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">GameVault</h1>
          <p className="mt-2">
            Track games you want, are playing, finished, or dropped.
          </p>
        </div>

        <select
          value={density}
          onChange={(event) =>
            setDensity(event.target.value as "compact" | "comfortable")
          }
          className="rounded border px-3 py-2 text-black"
        >
          <option value="comfortable">Comfortable</option>
          <option value="compact">Compact</option>
        </select>
      </div>

      <input
        value={searchText}
        onChange={(event) => {
          const value = event.target.value;
          if (value) {
            setSearchParams({ q: value });
          } else {
            setSearchParams({});
          }
        }}
        placeholder="Search by title..."
        className="mb-6 w-full rounded border px-4 py-2 text-black"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            to={`/items/${item.id}`}
            className={`rounded border bg-white text-black shadow ${
              density === "compact" ? "p-3" : "p-5"
            }`}
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.creator}</p>
            <p>{item.year}</p>
            <p className="capitalize">Status: {item.status}</p>
            <p>Rating: {item.rating ?? "Not rated"}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default HomePage;
