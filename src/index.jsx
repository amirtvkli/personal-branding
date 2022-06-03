import { lazy, Suspense } from 'react';
// import ReactDOM from 'react-dom';
import AppRouter from './router';
import { Loading } from './app/components';


const Lazy = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => <AppRouter />,
        });
      }, 4000);
    }),
);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Lazy />
    </Suspense>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
