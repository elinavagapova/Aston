import { SingleComic } from '../components/singleComic/SingleComic';
import { ErrorBoundary } from '../components/errorBoundary/ErrorBoundary';

export default function ComicPage() {
  return (
    <ErrorBoundary>
      <SingleComic />
    </ErrorBoundary>
  );
}
