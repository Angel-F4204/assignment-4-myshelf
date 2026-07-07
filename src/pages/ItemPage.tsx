import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getItem, updateItem, type Item } from "../services/api";
import { useUiStore } from "../store/useUiStore";

function ItemPage() {
  const { id } = useParams();
  const itemId = Number(id);

  const theme = useUiStore((state) => state.theme);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["items", itemId],
    queryFn: () => getItem(itemId),
  });

  const [noteText, setNoteText] = useState("");

  const mutation = useMutation({
    mutationFn: (updates: Partial<Item>) => updateItem(itemId, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
  });

  if (isLoading) {
    return <main className="p-8">Loading item...</main>;
  }

  if (isError) {
    return <main className="p-8">Item not found.</main>;
  }

  if (!data) {
    return <main className="p-8">Not found.</main>;
  }

  const noteValue = noteText || data.note || "";

  return (
    <main
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Link to="/" className="underline">
        Back to catalog
      </Link>

      <section className="mt-6 rounded bg-white p-6 text-black shadow">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="mt-2">Creator: {data.creator}</p>
        <p>Year: {data.year}</p>
        <p>Genre: {data.genre}</p>

        <label className="mt-6 block font-bold">Status</label>
        <select
          value={data.status}
          onChange={(event) =>
            mutation.mutate({
              status: event.target.value as Item["status"],
            })
          }
          className="mt-2 rounded border px-3 py-2"
        >
          <option value="want">Want</option>
          <option value="active">Active</option>
          <option value="done">Done</option>
          <option value="dropped">Dropped</option>
        </select>

        <label className="mt-6 block font-bold">Rating</label>
        <select
          value={data.rating ?? ""}
          onChange={(event) =>
            mutation.mutate({
              rating: event.target.value ? Number(event.target.value) : null,
            })
          }
          className="mt-2 rounded border px-3 py-2"
        >
          <option value="">Not rated</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label className="mt-6 block font-bold">Note</label>
        <textarea
          value={noteValue}
          onChange={(event) => setNoteText(event.target.value)}
          className="mt-2 w-full rounded border px-3 py-2"
          rows={4}
        />

        <button
          onClick={() =>
            mutation.mutate({
              note: noteText || null,
            })
          }
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Save Note
        </button>
      </section>
    </main>
  );
}

export default ItemPage;
