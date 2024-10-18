import React from "react";

export default function Referrals() {
  return (
    <div className="bg-gradient-to-r from-slate-300 via-gray-300 to-indigo-200 py-24 sm:py-32 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-extrabold text-center text-purple-600 mb-8">
          How the Referral Program Works
        </h1>

        <div className="space-y-8 text-lg text-gray-800">
          {/* Step 1 */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              1. Refer a Friend:
            </h2>
            <p className="leading-relaxed">
              When you refer a friend to join any of our courses, you are eligible for a{" "}
              <span className="font-bold text-green-600 italic">10% discount</span>{" "}
              based on the total value of your friend’s course.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              2. Get Your Discount:
            </h2>
            <p className="leading-relaxed">
              Once your friend enrolls and completes their payment, you will receive a discount equal to{" "}
              <span className="font-bold text-green-600 italic">10% of their course fee</span>{" "}
              as an Amazon voucher.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              3. Multiple Referrals:
            </h2>
            <p className="leading-relaxed">
              You can refer more than one friend, and the discounts will stack! For example, if you refer two friends, and each enrolls in a{" "}
              <span className="font-bold text-purple-600 italic">₹50,000 course</span>, you will receive{" "}
              <span className="font-bold text-green-600 italic">₹5,000 off</span> per referral, totaling{" "}
              <span className="font-bold text-green-600 italic">₹10,000</span>.
            </p>
          </div>

          {/* Step 4 - Eligibility */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              4. Eligibility:
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li className="leading-relaxed">
                <span className="font-bold">Your friend</span> must mention your referral at the time of enrollment or you should be the one sharing the details of your friend with us.
              </li>
              <li className="leading-relaxed">
                You will receive the discount once your friend’s payment is{" "}
                <span className="font-bold text-purple-600">processed</span>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
