import { Link } from "react-router-dom";

export default function CompanyLicensePage() {
    return (
      <div className="container mx-auto py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">License Agreement</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Welcome to the Impect Academy ecommerce platform. By using our services or selling products through our platform,
              you agree to the following licensing terms:
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Intellectual Property Rights</h2>
            <p>
              Impect Academy and its related logos, graphics, and other intellectual property are the exclusive property of
              Impect Academy Inc. and are protected by copyright, trademark, and other intellectual property laws. You may not
              use, copy, or distribute any of Impect Academy's intellectual property without prior written permission.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Permitted Uses</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                You may use the Impect Academy platform to sell your own products, subject to the terms of this agreement and any
                additional policies or guidelines provided by Impect Academy.
              </li>
              <li>
                You may use Impect Academy's branding and marketing materials to promote your products, but only in the manner
                and to the extent expressly authorized by Impect Academy.
              </li>
              <li>
                You may not modify, adapt, or create derivative works of the Impect Academy platform or any of its components
                without Impect Academy's prior written consent.
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Prohibited Uses</h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>
                You may not use the Impect Academy platform to sell any illegal, counterfeit, or otherwise prohibited products.
              </li>
              <li>
                You may not attempt to reverse engineer, decompile, or otherwise access the source code of the Impect Academy
                platform.
              </li>
              <li>You may not use the Impect Academy platform to engage in any unlawful or fraudulent activities.</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Fees and Commissions</h2>
            <p>
              Impect Academy charges a commission on all sales made through the platform. The current commission rate is 15%, but
              this is subject to change at Impect Academy's discretion. You are responsible for collecting and remitting any
              applicable sales taxes or other fees related to your sales.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>
              If you have any questions or concerns about the Impect Academy license agreement, please don't hesitate to contact
              us at{" "}
              <Link to="/contact" className="text-blue-500 hover:underline">
                support@Impect Academy.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    )
  }