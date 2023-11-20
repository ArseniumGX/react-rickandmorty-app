import { Characters, Locations, Episodes, Character } from 'pages';
import { Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route index element={<Characters />} />
      <Route path="locations" element={<Locations />} />
      <Route path="episodes" element={<Episodes />} />
      <Route path="character/:characterId" element={<Character />} />
      <Route path="*" element={<>NOTFOUND</>} />
    </Routes>
  );
}
