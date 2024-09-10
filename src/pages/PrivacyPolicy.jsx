import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full px-8 py-12 bg-white text-black mt-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500">
          Effective Date: September 10, 2024
        </p>

        <p className="mt-4">
          At Endpoint ("we", "our", "us"), protecting your privacy is a
          priority. This Privacy Policy outlines how we collect, use, disclose,
          and safeguard your information when you visit our website [insert
          website URL] (the "Site"). It also details your choices regarding your
          personal data. By using the Site, you consent to the practices
          described in this policy.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p className="mt-4">
            We collect both personal and non-personal information from visitors
            to the Site. Personal information includes your name, email address,
            and other contact details you may provide when you communicate with
            us or subscribe to our services. Non-personal information includes
            browser type, IP address, operating system, and web pages visited.
            This data is automatically collected when you access the Site and
            helps us improve the platform.
          </p>
          <p className="mt-4">
            We may also collect information through cookies and tracking
            technologies to customize content and analyze user behavior. You can
            disable cookies through browser settings, though this may affect
            certain features of the Site.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p className="mt-4">
            The information we collect is used to operate and maintain the Site,
            provide services, and improve user experience. Personal information
            may be used to respond to inquiries, fulfill requests, or provide
            updates. If you've subscribed to our newsletters, you may receive
            marketing communications. You can opt out at any time.
          </p>
          <p className="mt-4">
            Non-personal data helps us analyze usage trends and improve Site
            performance. This information is used to optimize the Site and align
            services with user preferences.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            3. Sharing Your Information
          </h2>
          <p className="mt-4">
            We do not sell or rent your personal information. However, we may
            share information with third-party service providers who help manage
            the Site or provide customer support. These providers are
            contractually obligated to protect your data.
          </p>
          <p className="mt-4">
            In compliance with the law, we may disclose your information to
            legal authorities or as part of business transactions, such as
            mergers or acquisitions.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">4. Data Retention</h2>
          <p className="mt-4">
            We retain personal information as long as necessary for the purposes
            outlined in this policy or as required by law. Once data is no
            longer needed, it is securely deleted or anonymized.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">5. Security</h2>
          <p className="mt-4">
            We take appropriate measures to protect your personal information
            through encryption, access controls, and system monitoring. However,
            no method of transmission or storage is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">6. Your Privacy Rights</h2>
          <p className="mt-4">
            Depending on your location, you may have rights such as accessing,
            correcting, or deleting your personal information, or objecting to
            its processing. To exercise these rights, contact us at [insert
            contact email].
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
          <p className="mt-4">
            Our Site may contain links to third-party websites. These sites have
            their own privacy policies, and we encourage you to review them. We
            are not responsible for how third-party websites handle your
            information.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            8. Changes to This Privacy Policy
          </h2>
          <p className="mt-4">
            We may update this policy periodically. When we do, we will update
            the "Effective Date" at the top of the page. For significant
            changes, we may notify you through email or a notice on the
            homepage. Please review this policy periodically to stay informed.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p className="mt-4">
            If you have questions about this Privacy Policy, you can contact us
            at:
          </p>
          <ul className="mt-4 ml-4 list-disc">
            <li>Email: contact@tryendpoint.com</li>
            <li>Address: 8 The Green, Dover, DE 19901, USA</li>
            <li>Phone: +1 (256) 677-4331</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
