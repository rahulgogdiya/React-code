import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    //jab is ki juvat na ho to yah background me run nhi honi chahia
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <p>
      Current time : {time.toLocaleDateString()} , {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
