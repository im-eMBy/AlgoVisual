import { useRef, useEffect } from "react";

export function Board({ array, markedIdx, dataSize, range }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = 500 / dataSize;
    array.forEach((el, i) => {
      const height = Math.ceil((el * 200) / range);
      const start = (canvas.height - height) / 2;
      ctx.fillStyle =
        markedIdx && markedIdx.includes(i) ? "#FB8B24" : "#000000";
      ctx.fillRect(width * i, start, width, height);
    });
  }, [array, dataSize, markedIdx, range]);

  return (
    <div className="sorting__board">
      <canvas ref={canvasRef} width={500} height={250}></canvas>
    </div>
  );
}
