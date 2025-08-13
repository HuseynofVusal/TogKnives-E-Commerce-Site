import React, { useState } from "react";
import {
  Search,
  Lock,
  Phone,
  CreditCard,
  ShieldCheck,
  Info,
} from "lucide-react";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    emailUpdates: true,
    country: "United Kingdom",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    postcode: "",
    phone: "",
    textOffers: false,
    paymentMethod: "credit",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    nameOnCard: "",
    useShippingAsBilling: true,
    saveInfo: true,
    mobilePhone: "+44",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 !py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Express Checkout */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4 text-center">
            Express checkout
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              <span className="text-lg">shop</span>
              <span className="bg-white text-purple-600 px-2 py-1 rounded ml-1 text-sm">
                Pay
              </span>
            </button>
            <button className="flex-1 bg-yellow-400 text-blue-800 py-3 px-6 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
              PayPal
            </button>
            <button className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center">
              <span className="text-blue-500 text-xl mr-2">G</span>
              <span className="text-red-500 text-xl mr-2">o</span>
              <span className="text-yellow-500 text-xl mr-2">o</span>
              <span className="text-blue-500 text-xl mr-2">g</span>
              <span className="text-green-500 text-xl mr-2">l</span>
              <span className="text-red-500 text-xl mr-2">e</span>
              <span className="ml-2">Pay</span>
            </button>
          </div>
          <div className="text-center text-gray-500 text-sm">OR</div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">Contact</h2>
            <a
              href="#"
              className="text-orange-600 hover:text-orange-700 text-sm"
            >
              Log in
            </a>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailUpdates"
              name="emailUpdates"
              checked={formData.emailUpdates}
              onChange={handleInputChange}
              className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500"
            />
            <label
              htmlFor="emailUpdates"
              className="ml-3 text-sm text-gray-700"
            >
              Sign me up to receive email updates and news (optional)
            </label>
          </div>
        </div>

        {/* Delivery */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Delivery</h2>

          {/* Country/Region */}
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-2">
              Country/Region
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Company */}
          <div className="mb-4">
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Address */}
          <div className="mb-4 relative">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Apartment */}
          <div className="mb-4">
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={formData.apartment}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* City and Postcode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              value={formData.postcode}
              onChange={handleInputChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Phone */}
          <div className="mb-4 relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Text offers checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="textOffers"
              name="textOffers"
              checked={formData.textOffers}
              onChange={handleInputChange}
              className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500"
            />
            <label htmlFor="textOffers" className="ml-3 text-sm text-gray-700">
              Text me with news and offers
            </label>
          </div>
        </div>

        {/* Shipping Method */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Shipping method
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-600">
            Enter your shipping address to view available shipping methods.
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Payment</h2>
          <p className="text-sm text-gray-600 mb-6">
            All transactions are secure and encrypted.
          </p>

          {/* Credit Card Option */}
          <div className="border-2 border-orange-500 rounded-lg mb-4">
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-t-lg">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === "credit"}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange-600"
                />
                <label htmlFor="credit" className="ml-3 font-medium">
                  Credit card
                </label>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center">
                  ●●
                </div>
                <div className="w-8 h-5 bg-orange-500 rounded text-white text-xs flex items-center justify-center">
                  ●●
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
                <span className="text-gray-500 text-sm">+4</span>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Card Number */}
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>

              {/* Expiration and Security Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expirationDate"
                  placeholder="Expiration date (MM / YY)"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <div className="relative">
                  <input
                    type="text"
                    name="securityCode"
                    placeholder="Security code"
                    value={formData.securityCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Name on Card */}
              <input
                type="text"
                name="nameOnCard"
                placeholder="Name on card"
                value={formData.nameOnCard}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />

              {/* Use shipping address as billing */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="useShippingAsBilling"
                  name="useShippingAsBilling"
                  checked={formData.useShippingAsBilling}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500"
                />
                <label
                  htmlFor="useShippingAsBilling"
                  className="ml-3 text-sm text-gray-700"
                >
                  Use shipping address as billing address
                </label>
              </div>
            </div>
          </div>

          {/* PayPal Option */}
          <div className="border border-gray-300 rounded-lg mb-4">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange-600"
                />
                <label htmlFor="paypal" className="ml-3 font-medium">
                  PayPal
                </label>
              </div>
              <div className="text-blue-600 font-bold text-lg">PayPal</div>
            </div>
          </div>

          {/* Klarna Option */}
          <div className="border border-gray-300 rounded-lg mb-6">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="klarna"
                  name="paymentMethod"
                  value="klarna"
                  checked={formData.paymentMethod === "klarna"}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-orange-600"
                />
                <label htmlFor="klarna" className="ml-3 font-medium">
                  Klarna - Flexible payments
                </label>
              </div>
              <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded text-sm font-bold">
                Klarna
              </div>
            </div>
          </div>

          {/* Remember Me */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">Remember me</h3>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="saveInfo"
                name="saveInfo"
                checked={formData.saveInfo}
                onChange={handleInputChange}
                className="w-5 h-5 text-orange-600 border-2 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="saveInfo" className="ml-3 text-sm text-gray-700">
                Save my information for a faster checkout with a Shop account
              </label>
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="mobilePhone"
                placeholder="Mobile phone number"
                value={formData.mobilePhone}
                onChange={handleInputChange}
                className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Security notice */}
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <Lock className="w-4 h-4 mr-2" />
            <span>Secure and encrypted</span>
            <div className="ml-auto text-gray-400">shop</div>
          </div>
        </div>

        {/* Pay Now Button */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <button className="w-full bg-[#e97625] cursor-pointer text-white py-4 px-6 rounded-lg font-medium text-lg hover:bg-orange-700 transition-colors mb-4">
            Pay now
          </button>

          <p className="text-xs text-gray-600 text-center mb-6">
            Your info will be saved to a Shop account. By continuing, you agree
            to Shop's{" "}
            <a href="#" className="underline hover:text-gray-800">
              Terms of Service
            </a>{" "}
            and acknowledge the{" "}
            <a href="#" className="underline hover:text-gray-800">
              Privacy Policy
            </a>
            .
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-orange-600 hover:text-orange-700">
              Refund policy
            </a>
            <a href="#" className="text-orange-600 hover:text-orange-700">
              Privacy policy
            </a>
            <a href="#" className="text-orange-600 hover:text-orange-700">
              Terms of service
            </a>
            <a href="#" className="text-orange-600 hover:text-orange-700">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
