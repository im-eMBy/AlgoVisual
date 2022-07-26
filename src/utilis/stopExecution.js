export async function stopExecution(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time);
  });
}
