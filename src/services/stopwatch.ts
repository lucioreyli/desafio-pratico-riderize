interface StopwatchInterface {
  interval: React.MutableRefObject<NodeJS.Timer | null>,
  setTime: (value: React.SetStateAction<number>) => void,
  modalOpened: boolean,
}

export const stopwatch = ({ interval, setTime, modalOpened }: StopwatchInterface) => {
  if (modalOpened) {
    interval.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  } else {
    clearInterval(interval.current as NodeJS.Timeout);
  }
  return () => clearInterval(interval.current as NodeJS.Timeout);
}