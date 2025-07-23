export default function Loading() {

    console.log("Loading component is rendering");
    return (<div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Loading Product Details...</h1>
      <p>Please wait while we fetch the product information.</p>
    </div>
    </div>);
}
