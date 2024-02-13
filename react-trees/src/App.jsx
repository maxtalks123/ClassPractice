import TreeCard from "./Components/TreeCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Button from "./Components/Button";

export default function App() {
  return (
    <div>
      <Header />
      <h1>Cool Trees!</h1>
      <TreeCard
        TreeName="Baobab"
        location="Across Africa"
        imgLink="https://media.cntraveller.com/photos/611bf4e3628f4910ed102938/master/w_1600%2Cc_limit/gettyimages-1281090177.jpg"
        Button={<Button message="You pressed this button" />}
      />
      <TreeCard
        TreeName="Juniper"
        location="Arizona"
        imgLink="https://media.cntraveller.com/photos/611bf4e2f6bd8f17556db944/master/w_1600%2Cc_limit/gettyimages-994569360.jpg"
        Button={<Button message="Not this one!!" />}
      />
      <Footer />
    </div>
  );
}
