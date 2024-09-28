import Footer from "./Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can contact us by clicking the 'Buy Now' button to message us on WhatsApp, by reaching out on Instagram, giving us a call, or visiting our store in person.",
    },
    {
      question: "What are your delivery options?",
      answer:
        "Our delivery options include standard shipping, express shipping, and in-store pickup. Depending on your location, we also offer delivery for local orders. Let us know your preference, and we'll ensure a smooth delivery experience!",
    },
    {
      question: "How do I return an item?",
      answer:
        " Contact us at @gmail.com with your order number to initiate a return.Once we receive your return, we'll process a refund to your original payment method within 7  busniess days.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Credit/Debit Cards: Visa, MasterCard, RuPay,UPI: Google Pay, PhonePe, Paytm Cash on Delivery (COD): Available for select locations Choose your preferred payment method at checkout for a smooth shopping experience.",
    },
    {
      question: "What is your returns and exchange Policy?",
      answer:
        "Returns and exchange are accepted within 7 days of delivery.Items must be unwashed,and in orginial condition with tags attached.We cover shipping costs for exchanges due to defects or incorrect items.Final sale items and gift cards cannot be returned or exchanged.",
    },
    {
      question: "How much time it takes to receive an order?",
      answer:
        "Orders usually arrive within 7 to 10 business days, depending on your location. We will keep you updated on your order's status throughout the process.",
    },
  ];

  return (
    <>

      <div className="max-w-6xl mx-auto py-12 px-4" id="about">
        <h2 className="text-3xl font-bold text-center mb-5">About Us</h2>
        <p className=" text-center mb-5">
          {" "}
          Welcome to Stitch & Glow, where we believe in the beauty of handmade
          fashion. We are committed to preserving traditional techniques while
          embracing modern design trends, resulting in a stunning fusion of the
          old and the new.Explore our collectin to find pieces that match
                your style, perfect for special occasions or enhancing your
                everyday wardrobe.
        </p>{" "}
        <p className=" text-center mb-20">
          {" "}
          Join us in celebrating the art of artisanal fashion.
        </p>
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
