export default async function AJAX(url, config) {
  if (config.method === "GET") {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Failed to fetch data! Error status: ${response.status}`);
    const data = await response.json();
    return data;
  }
  if (config.method === "PUT") {
    const response = await fetch(url, config);
    if (!response.ok) throw new Error("Failed to update user data!");
    const data = await response.json();
    return data.message;
  }
}
