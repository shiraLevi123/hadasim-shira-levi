import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Form from "../components/form/Form";
import '../globals.css';

export default function FormPage() {
  return (
    <div className="page-container">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}