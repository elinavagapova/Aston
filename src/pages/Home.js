import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';
import { ComicsList } from '../components/comicsList/СomicsList';
import { SearchInput } from '../components/searchInput/SearchInput';

export function Home() {
  return (
    <ErrorBoundary>
      <SearchInput />
      <ComicsList />
    </ErrorBoundary>
  );
}
