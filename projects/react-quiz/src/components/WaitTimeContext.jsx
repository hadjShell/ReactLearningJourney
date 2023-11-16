import { createContext } from "react";
//import { TIME_ANSWER_EXPIRED } from "../data";

export const TimeContext = createContext();

// export function WaitTimeContextProvider({ children }) {
//   const [waitTime, setWaitTime] = useState(TIME_ANSWER_EXPIRED * 1000);

//   return (
//     <TimeContext.Provider value={{ waitTime, setWaitTime }}>
//       {children}
//     </TimeContext.Provider>
//   );
// }
