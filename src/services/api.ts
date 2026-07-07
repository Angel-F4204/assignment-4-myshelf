const API_URL = "http://localhost:3001/items";

export type Item = {
  id: number;
  title: string;
  creator: string;
  year: number;
  genre: string;
  status: "want" | "active" | "done" | "dropped";
  rating: number | null;
  note: string | null;
};

export async function getItems(): Promise<Item[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }

  return response.json();
}

export async function getItem(id: number): Promise<Item> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch item");
  }

  return response.json();
}

export async function updateItem(
  id: number,
  updates: Partial<Item>,
): Promise<Item> {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update item");
  }

  return response.json();
}
