import { Routes as RouterRoutes, Route } from 'react-router-dom';

import { RecipeListPage } from './pages/RecipeListPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { RecipeEditPage } from './pages/RecipeEditPage';
import { RecipeNewPage } from './pages/RecipeNewPage';

export function Routes() {
  return (
    <RouterRoutes>
      <Route index element={<RecipeListPage />} />
      <Route path="/recipe/:slug" element={<RecipeDetailPage />} />
      <Route path="/recipe/:slug/edit" element={<RecipeEditPage />} />
      <Route path="/recipe/new" element={<RecipeEditPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}
