import { useState } from "react";

export default function Calculater() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum1(Number(e.target.value));
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum2(Number(e.target.value));
  };

  const plus = () => setResult(num1 + num2);
  const minus = () => setResult(num1 - num2);
  const multy = () => setResult(num1 * num2);
  const div = () => setResult(num2 !== 0 ? num1 / num2 : NaN);

  return (
    <>
      <div>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
        />
        <button onClick={plus}> + </button>
        <button onClick={minus}> - </button>
        <button onClick={multy}> x </button>
        <button onClick={div}> / </button>
      </div>
      <div>
        결과: {result !== null ? result : ""}
      </div>
    </>
  );
}