import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';
import { ComicsList } from '../components/comicsList/СomicsList';

export function Home() {
  return (
    <ErrorBoundary>
      <ComicsList />
    </ErrorBoundary>
  );
}
