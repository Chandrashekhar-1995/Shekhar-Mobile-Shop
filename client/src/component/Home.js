import { Link } from "react-router-dom";
import { CHANDRA_IMG, USER_ICON } from "../utils/constants";


const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Welcome Section */}
      <section className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">WELCOME TO SHEKHAR MOBILE SHOP</h1>
            <p className="text-lg mb-6 text-gray-600">ग्राहक की संतुष्टि ही हमारा एकमात्र लक्ष्य है।</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"><Link to="/contact">Contact Us</Link></button>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img src={CHANDRA_IMG} alt="Shekhar" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex items-center justify-center py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://www.shekharmobileshop.com/wp-content/uploads/2024/02/mobile-repairing-service-1.jpeg" alt="Image 1" className="w-full h-auto rounded-lg shadow-lg" />
                <img src="https://www.shekharmobileshop.com/wp-content/uploads/2024/02/mobile-repairing-service-2.jpeg" alt="Image 2" className="w-full h-auto rounded-lg shadow-lg" />
                <img src="https://www.shekharmobileshop.com/wp-content/uploads/2024/02/mobile-repairing-service-4.jpeg" alt="Image 3" className="w-full h-auto rounded-lg shadow-lg" />
                <img src="https://www.shekharmobileshop.com/wp-content/uploads/2024/02/Shekhar-mobile-shop-logo.jpg" alt="Image 4" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          
          <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
            <p className="text-lg mb-6 text-gray-600">
              Since <span className="font-bold text-gray-800">2012</span>, our mobile shop has been a hub for tech enthusiasts. 
              We specialize in mobile repairs, LCD TV fixes, laptop services, and computer solutions. Our skilled team ensures 
              quality and customer satisfaction. Explore our range of electronic accessories and join our tech-savvy community! 
              📱 💻 🛒
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-lg mb-6 text-gray-600">Super fast service in your doorstep</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <img src="https://www.shekharmobileshop.com/wp-content/uploads/2024/02/mobile-repairing-service-3.jpeg" alt="services" className="w-full h-auto rounded-lg shadow-lg" />
              <a href="#" className="block mt-2 text-blue-600">Service</a>
            </div>

            <div>
              <img src="https://www.shekharmobileshop.com/wp-content/uploads/2024/02/membership-3.jpeg" alt="Premium Membership" className="w-full h-auto rounded-lg shadow-lg" />
              <a href="#" className="block mt-2 text-blue-600">Premium Membership</a>
            </div>

            <div>
              <img src="https://www.shekharmobileshop.com/wp-content/uploads/2023/12/x200-frone-robotek-4-scaled-1-2048x2048.jpg" alt="Battery" className="w-full h-auto rounded-lg shadow-lg" />
              <a href="#" className="block mt-2 text-blue-600">Battery</a>
            </div>

            <div>
              <img src="https://www.shekharmobileshop.com/wp-content/uploads/2023/12/Robotek-Jio-Charger-2048x2048.jpg" alt="Charger" className="w-full h-auto rounded-lg shadow-lg" />
              <a href="#" className="block mt-2 text-blue-600">Charger</a>
            </div>
          </div>
        </div>
      </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Us</h2>
          <p className="text-lg mb-6 text-gray-600">Here are a few reasons why our customers choose us over the competition.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <img src={USER_ICON} alt="Quality" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">High Quality</h3>
              <p className="text-gray-600">We provide high-quality products and services that you can trust.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={USER_ICON} alt="Support" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Our team is here to help you anytime, day or night.</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={USER_ICON} alt="Affordable" className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Affordable Prices</h3>
              <p className="text-gray-600">We offer competitive prices on all our products and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Client Testimonials</h2>
          <p className="text-lg mb-6 text-gray-600">What our clients are saying about us.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">"Great service and very professional. My phone was fixed in no time!"</p>
              <div className="mt-4 flex items-center">
                <img src={USER_ICON} alt="Customer 1" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">John Doe</h3>
                  <p className="text-gray-600">Customer</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">"Excellent customer support. They helped me find the right accessories for my phone."</p>
              <div className="mt-4 flex items-center">
                <img src={USER_ICON} alt="Customer 2" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Jane Smith</h3>
                  <p className="text-gray-600">Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  )
}

export default Home 