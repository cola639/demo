export function say() {
  console.log("hellow young girl");
}

export function getData() {
  return new Promise((resolve, reject) => {
    resolve("ok");
  });
}
