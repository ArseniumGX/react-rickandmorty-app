import { Characters } from 'pages';
import { Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route index element={<Characters />}></Route>
      <Route path="locations" element={<>LOCATIONS</>}></Route>
      <Route path="episodes" element={<>EPISODES</>}></Route>
      <Route path="*" element={<>NOTFOUND</>} />
    </Routes>
  );
}
