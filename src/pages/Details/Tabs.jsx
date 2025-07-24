import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("information");

  const tabData = {
    information: [
      `Long 10" / 25cm cutting edge for larger cakes and loaves`,
      `New thicker 2.2mm TOG steel contains 4 metals`,
      `ACUTO 440 core hardened to HRC 59±1`,
      `Unique tip design allows cutting through crust onto board`,
      `Rounded tip for spreading butter, jam etc.`,
      `46 scalloped serrations for clean cutting, durability and sharpenability`,
      `Lifetime guarantee`,
      `Worldwide delivery`,
    ],
    delivery: [
      `Depending on your location either DPD, Royal Mail or Fed-Ex will deliver your order. We use DEVLND
                    Fulfilment to ship our products, so this will appear on any messages from DPD, Royal Mail or Fed-EX
                    - e.g. "Your parcel from DEVLND Fulfilment is due to be delivered today.`,
    ],
    trial: [
      `30-day home trial available`,
      `Return for a full refund if not satisfied`,
      `No questions asked return policy`,
    ],
  };

  const tabs = [
    { key: "information", label: "Information" },
    { key: "delivery", label: "Delivery" },
    { key: "trial", label: "30 Day Home Trial" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Tab buttons */}
      <div className="flex border-b border-gray-300 text-sm font-semibold text-[#776c65]">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`py-2 px-4 relative cursor-pointer ${
              activeTab === tab.key ? "text-[#e97625]" : ""
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e97625]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4 text-sm text-[#776c65]">
        <ul className="list-disc pl-5 space-y-2">
          {tabData[activeTab].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
