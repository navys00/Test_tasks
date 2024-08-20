import { requestUsers, requestUsersWithError, User, Query } from "./api";
import "./styles.css";
import { Index2 } from "./index2";
import Requirements from "./Requirements"

// Примеры вызова функций, в консоли можно увидеть возвращаемые результаты
requestUsers({ name: "", age: "", limit: 4, offset: 0 }).then(console.log);
requestUsersWithError({ name: "", age: "", limit: 4, offset: 0 }).catch(
  console.error
);

export default function App() {
  return <Index2 />;
  // return <Requirements />
}
