import { useEffect, useState } from 'react';

const useCounter = (startValue = 0, startStep = 1, autoResetTime = 0) => {
  const [count, setCount] = useState(startValue);
  const [step, setStep] = useState(startStep);

  useEffect(() => {
    if (!autoResetTime || autoResetTime <= 0) {
      return;
    }

    if (count === startValue) {
      return;
    }

    const timer = setTimeout(() => {
      setCount(startValue);
    }, autoResetTime * 1000);

    return () => clearTimeout(timer);
  }, [count, autoResetTime, startValue]);

  const inc = () => setCount((prev) => prev + step);
  const dec = () => setCount((prev) => prev - step);

  const reset = () => {
    setCount(startValue);
    setStep(startStep);
  };

  return { count, inc, dec, reset, setStep };
};

export const CounterWithoutAutoReset = () => {
  const { count, inc, dec, reset, setStep } = useCounter(5, 5, 0);

  return (
    <div>
      <h2>{count}</h2>
      <h3>🔒 Без автосброса</h3>
      <button onClick={inc}>Увеличить</button>
      <button onClick={dec}>Уменьшить</button>
      <button onClick={reset}>Сбросить</button>
      <button
        onClick={() => {
          alert('Шаг изменен на 5');
          setStep(5);
        }}
      >
        Установить шаг 5
      </button>
    </div>
  );
};

export const Counter = () => {
  const { count, inc, dec, reset, setStep } = useCounter(0, 1, 3);

  return (
    <div>
      <h2>{count}</h2>
      <h3>⏰ Автосброс через 3 сек</h3>
      <button onClick={inc}>Увеличить</button>
      <button onClick={dec}>Уменьшить</button>
      <button onClick={reset}>Сбросить</button>
      <button
        onClick={() => {
          alert('Шаг изменен на 5');
          setStep(5);
        }}
      >
        Установить шаг 5
      </button>
    </div>
  );
};

export const CounterPage = () => {
  return (
    <div>
      <Counter />
      <CounterWithoutAutoReset />
    </div>
  );
};
