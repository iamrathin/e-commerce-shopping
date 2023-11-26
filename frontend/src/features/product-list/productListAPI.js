// A mock function to mimic making an async request for data
export function fetchProductList(amount = 1) {
  return new Promise(async (resolve) => {
    const resposne = await fetch("http://localhost:8080");
    const data = await resposne.json();
    resolve({ data });
  });
}
