import { Link, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getItems } from "../services/api";
import { useUiStore } from "../store/useUiStore";

const validStatuses = ["want", "active", "done", "dropped"];

function StatusPage() {
  const { status } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("q") ?? "";

  const theme = useUiStore((state) => state.theme);
  const density = useUiStore((state) => state.density);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  if (!status || !validStatuses.includes(status)) {
    return <main className="p-8">Invalid status.</main>;
  }

  if (isLoading) {
    return <main className="p-8">Loading {status} games...</main>;
  }

  if (isError) {
    return <main className="p-8">Error loading games.</main>;
  }

  const items = data ?? [];

  const filteredItems = items
    .filter((item) => item.status === status)
    .filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );

  return (
    <main
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="mb-4 text-3xl font-bold capitalize">{status} Games</h1>

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
        placeholder="Search this list..."
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
            <p>{item.genre}</p>
            <p>Rating: {item.rating ?? "Not rated"}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default StatusPage;
