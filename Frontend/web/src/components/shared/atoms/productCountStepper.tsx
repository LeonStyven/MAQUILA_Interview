import React, { useEffect, useState } from "react";

type Props = {
  minValue?: number;
  maxValue?: number;
  /** Modo controlado (opcional): */
  value?: number;
  onChange?: (value: number) => void;
  className?: string;
};

const ProductCountStepper: React.FC<Props> = ({
  minValue = 1,
  maxValue = 99,
  value,
  onChange,
  className = "",
}) => {
  const isControlled = typeof value === "number" && typeof onChange === "function";
  const [internal, setInternal] = useState<number>(Math.max(minValue, 1));

  // Sincroniza el interno cuando pasamos de no-controlado → controlado
  useEffect(() => {
    if (isControlled) return;
    // garantiza límites
    setInternal(prev => Math.max(minValue, Math.min(maxValue, prev)));
  }, [minValue, maxValue, isControlled]);

  const current = isControlled ? (value as number) : internal;

  function setNext(next: number) {
    const clamped = Math.max(minValue, Math.min(maxValue, next));
    if (isControlled) onChange!(clamped);
    else setInternal(clamped);
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        className="px-2 py-1 border rounded disabled:opacity-50"
        onClick={() => setNext(current - 1)}
        disabled={current <= minValue}
        aria-label="Disminuir cantidad"
      >
        -
      </button>
      <span className="min-w-8 text-center">{current}</span>
      <button
        type="button"
        className="px-2 py-1 border rounded disabled:opacity-50"
        onClick={() => setNext(current + 1)}
        disabled={current >= maxValue}
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
};

export default ProductCountStepper;
