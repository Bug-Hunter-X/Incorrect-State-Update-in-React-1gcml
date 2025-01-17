```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Use the setter function
    setCount(count => count + 1);
    console.log(count); // This will now update the UI
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Increment</button>
    </div>
  );
}
```