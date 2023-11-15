import { Characters, Locations } from 'pages';
import { Episodes } from 'pages/Episodes/Episodes';
import { Route, Routes } from 'react-router-dom';

export function Router() {
  return (
    <Routes>
      <Route index element={<Characters />} />
      <Route path="locations" element={<Locations />} />
      <Route path="episodes" element={<Episodes />} />
      <Route path="*" element={<>NOTFOUND</>} />
    </Routes>
  );
}
