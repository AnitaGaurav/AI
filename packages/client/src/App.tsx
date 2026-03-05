import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
   const [message, setMessage] = useState('');
   const [count, setCount] = useState(0);

   useEffect(() => {
      fetch('/api/hello')
         .then((res) => res.json())
         .then((data) => setMessage(data.message));
   }, []);

   useEffect(() => {
      console.log('Effect runs');
      return () => console.log('Cleanup runs');
   }, []);
   return (
      <div className="p-4">
         <p className="font-bold text-2xl">{message}</p>
         <p>{count}</p>

         <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
   );
}

export default App;
