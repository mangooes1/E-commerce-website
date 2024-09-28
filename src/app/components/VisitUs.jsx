
import GoogleMap from './GoogleMap';

const VisitUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" id='location'>
      <h1 className="text-3xl font-bold mb-6">Visit Us at Our Store</h1>
      <div className="mb-4">
        <p className="text-lg">
          <strong>Address:</strong> Shop no.J-15,j Block,Sarafa Bazar <br />
          Laxmi Nagar,Delhi 110092

        </p>
        <p className="text-lg">
          <strong>Opening Hours:</strong>
        </p>
        <ul className="text-lg">
          <li>Mon-Sun: 10:00am - 9:00pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
      <div className="w-full lg:w-2/3">
         <GoogleMap /> 
      </div>
    </div>
  );
};

export default VisitUs;



