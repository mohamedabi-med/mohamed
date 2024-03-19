// FrontendComponent.tsx
import { useEffect, useState } from 'react';

const FrontendComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/getData')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data && (
        <p>Data: {data}</p>
      )}
    </div>
  );
};

export default FrontendComponent;
