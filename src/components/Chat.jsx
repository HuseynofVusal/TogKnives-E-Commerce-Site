import React, { useState } from "react";
import {
  ChevronRight,
  Package,
  Home,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { FcCancel } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";

const Chat = ({ setFlag}) => {
  const [expandedSections, setExpandedSections] = useState({});
  const [isBottomExpanded, setIsBottomExpanded] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuItems = [
    { id: "shipping", text: "Shipping costs, VAT & import duties" },
    { id: "delivery", text: "Delivery times and carriers" },
    { id: "trial", text: "New to TOG? Try our 30-Day Home Trial", icon: Home },
    { id: "care", text: "Need help caring for your TOG knife or board?" },
    { id: "age", text: "Age Verification Failed" },
  ];

  return (
    <div className="max-w-100 mx-auto bg-gradient-to-br relative from-orange-100 to-pink-100 min-h-[50vh] overflow-y-auto">
      {/* Header */}
      <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-b-2xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">TOG</h1>
        <h2 className="text-xl text-gray-700 mb-6">We will be back soon</h2>

        {/* Menu Items */}
        <div className="space-y-3 relative">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow-sm transition-all duration-200 hover:shadow-md relative ${
                expandedSections[item.id] ? "z-50" : "z-10"
              }`}
            >
              <button
                onClick={() => toggleSection(item.id)}
                className="w-full p-4 flex items-center justify-between text-left relative z-20"
              >
                <div className="flex items-center space-x-3">
                  {item.icon && (
                    <item.icon className="w-5 h-5 text-orange-500" />
                  )}
                  <span className="text-gray-700 text-sm font-medium">
                    {item.text}
                  </span>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                    expandedSections[item.id] ? "rotate-90" : ""
                  }`}
                />
              </button>

              {expandedSections[item.id] && (
                <div className="absolute top-full left-0 right-0 bg-white rounded-b-lg shadow-lg border-t border-gray-100 z-50 overflow-hidden">
                  <div className="px-4 py-4 text-sm text-gray-600">
                    <p>
                      This section would contain detailed information about{" "}
                      {item.text.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Track Orders Section */}
        <div className="mt-6 relative">
          <button
            onClick={() => toggleSection("orders")}
            className={`w-full bg-white rounded-lg shadow-sm p-4 flex items-center justify-between hover:shadow-md transition-all duration-200 relative ${
              expandedSections["orders"] ? "z-50" : "z-10"
            }`}
          >
            <div className="flex items-center space-x-3">
              <Package className="w-6 h-6 text-orange-500" />
              <span className="text-gray-700 font-medium">
                Track and manage my orders
              </span>
            </div>
            <ChevronRight
              className={`w-5 h-5 text-orange-500 transition-transform duration-200 ${
                expandedSections["orders"] ? "rotate-90" : ""
              }`}
            />
          </button>

          {expandedSections["orders"] && (
            <div className="absolute top-full left-0 right-0 bg-white rounded-b-lg shadow-lg z-50 overflow-hidden">
              <div className="p-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3">
                  Enter your order details to track your shipment:
                </p>
                <input
                  type="text"
                  placeholder="Order number"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm mb-2"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm mb-3"
                />
                <button className="w-full bg-orange-500 text-white py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
                  Track Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className="absolute bottom-0 left-0 right-0 max-w-sm mx-auto">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-t-2xl">
          <button
            onClick={() => setIsBottomExpanded(!isBottomExpanded)}
            className="w-full p-4 flex items-center justify-center"
          >
            <ChevronDown
              className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                isBottomExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {isBottomExpanded && (
            <div className="px-6 pb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">TOG</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">TOG</h3>
                  <p className="text-sm text-gray-600">Leave A Message</p>
                </div>
                <MessageSquare className="w-6 h-6 text-orange-500 ml-auto" />
              </div>

              <div className="space-y-3">
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Start Conversation
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  View FAQ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <GiCancel
        onClick={() => setFlag(false)}
        className="absolute text-[#976625] hover:text-black hover:rotate-90 duration-200 text-2xl top-[2%] right-[2%]"
      />
    </div>
  );
};
export default Chat;
