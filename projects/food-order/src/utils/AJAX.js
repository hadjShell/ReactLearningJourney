export default async function AJAX(url) {
  const response = await fetch(url);
  if(!response.ok) throw new Error(`Failed to fetch data! Error status: ${response.status}`);
  const data = await response.json();
  return data;
}