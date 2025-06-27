const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-white/90 mb-4">
              Your privacy is our priority. We are committed to protecting your personal information.
            </p>
            <p className="text-lg text-white/80">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-semibold prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:first:mt-0 prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900">
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
                  <h2 className="!mt-0 !mb-4 text-blue-900">Introduction</h2>
                  <p className="!mb-0 text-blue-800">
                    Strategic Resource Initiative ("SRI," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or engage with our services. This policy applies to all users worldwide and complies with applicable privacy laws including 
                    the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other relevant regulations.
                  </p>
                </div>

                <h2>Information We Collect</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="!mt-0 !mb-4 text-primary">Personal Information</h3>
                    <p className="!mb-4">We may collect the following types of personal information:</p>
                    <ul className="space-y-2 !mb-0">
                      <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address, company name, job title</li>
                      <li><strong>Professional Information:</strong> Business interests, project details, industry sector, organization size</li>
                      <li><strong>Communication Data:</strong> Records of correspondence, meeting notes, consultation requests</li>
                      <li><strong>Technical Information:</strong> IP address, browser type, device information, operating system</li>
                      <li><strong>Usage Data:</strong> Website navigation patterns, pages visited, time spent on site, referral sources</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <h3 className="!mt-0 !mb-4 text-amber-800">Sensitive Information</h3>
                    <p className="!mb-0 text-amber-800">
                      We do not intentionally collect sensitive personal information such as government identifiers, financial account details, 
                      health information, or biometric data unless specifically required for our advisory services and with your explicit consent.
                    </p>
                  </div>
                </div>

                <h2>How We Collect Information</h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 my-6">
                  <ul className="grid md:grid-cols-3 gap-4 !mb-0">
                    <li className="bg-white rounded-lg p-4 border border-green-100">
                      <strong className="text-green-800">Direct Collection:</strong> Information you provide through contact forms, consultation requests, email communications, or phone calls
                    </li>
                    <li className="bg-white rounded-lg p-4 border border-blue-100">
                      <strong className="text-blue-800">Automatic Collection:</strong> Technical data collected through cookies, web beacons, and analytics tools
                    </li>
                    <li className="bg-white rounded-lg p-4 border border-purple-100">
                      <strong className="text-purple-800">Third-Party Sources:</strong> Publicly available business information, professional networks, referral partners
                    </li>
                  </ul>
                </div>

                <h2>Legal Basis for Processing (GDPR)</h2>
                <p>We process your personal data based on the following legal grounds:</p>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <strong className="text-indigo-800">Legitimate Interest:</strong> To provide advisory services and maintain business relationships
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <strong className="text-purple-800">Consent:</strong> Where you have given specific consent for marketing communications or cookies
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <strong className="text-green-800">Contract Performance:</strong> To fulfill our obligations under consulting agreements
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <strong className="text-orange-800">Legal Obligation:</strong> To comply with applicable laws and regulations
                  </div>
                </div>

                <h2>How We Use Your Information</h2>
                <p>We use collected information for the following purposes:</p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-6">
                  <ul className="grid md:grid-cols-2 gap-3 !mb-0">
                    <li>• Providing strategic advisory and consulting services</li>
                    <li>• Responding to inquiries and communication requests</li>
                    <li>• Developing and maintaining client relationships</li>
                    <li>• Improving our website and service offerings</li>
                    <li>• Sending relevant business communications (with consent)</li>
                    <li>• Complying with legal and regulatory requirements</li>
                    <li>• Protecting against fraud and security threats</li>
                    <li>• Conducting business analytics and market research</li>
                  </ul>
                </div>

                <h2>Information Sharing and Disclosure</h2>
                <p>We may share your information in the following circumstances:</p>
                
                <div className="space-y-6 my-8">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="!mt-0 !mb-3 text-blue-900">Service Providers</h3>
                    <p className="!mb-0 text-blue-800">
                      We engage third-party service providers for website hosting, email services, analytics, and professional services. 
                      These providers are contractually bound to protect your information and use it only for specified purposes.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="!mt-0 !mb-3 text-green-900">Business Partners</h3>
                    <p className="!mb-0 text-green-800">
                      With your consent, we may share information with strategic partners for joint projects or collaborative opportunities.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="!mt-0 !mb-3 text-amber-900">Legal Requirements</h3>
                    <p className="!mb-3 text-amber-800">We may disclose information when required by law, court order, or to:</p>
                    <ul className="!mb-0 text-amber-800">
                      <li>• Comply with legal process or government requests</li>
                      <li>• Protect our rights, property, or safety</li>
                      <li>• Investigate potential violations of our terms of service</li>
                      <li>• Prevent fraud or security threats</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="!mt-0 !mb-3 text-purple-900">Business Transfers</h3>
                    <p className="!mb-0 text-purple-800">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity, 
                      subject to the same privacy protections.
                    </p>
                  </div>
                </div>

                <h2>International Data Transfers</h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 my-6">
                  <p className="!mb-4">
                    As a global advisory firm, we may transfer your information across international borders. We ensure adequate protection through:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 !mb-0">
                    <li>• Standard Contractual Clauses approved by relevant authorities</li>
                    <li>• Adequacy decisions by competent privacy authorities</li>
                    <li>• Appropriate safeguards and security measures</li>
                    <li>• Your explicit consent where required</li>
                  </ul>
                </div>

                <h2>Data Security</h2>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200 my-6">
                  <p className="!mb-4">We implement comprehensive security measures including:</p>
                  <ul className="grid md:grid-cols-2 gap-3 !mb-0">
                    <li>• Encryption of data in transit and at rest</li>
                    <li>• Access controls and authentication protocols</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Employee training on data protection</li>
                    <li>• Incident response and breach notification procedures</li>
                    <li>• Secure hosting and backup systems</li>
                  </ul>
                </div>

                <h2>Data Retention</h2>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-6">
                  <p className="!mb-4">
                    We retain personal information only as long as necessary for the purposes outlined in this policy or as required by law. 
                    Retention periods vary based on:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 !mb-4">
                    <li>• Nature of the information and services provided</li>
                    <li>• Legal and regulatory requirements</li>
                    <li>• Business needs and legitimate interests</li>
                    <li>• Your preferences and consent</li>
                  </ul>
                  <p className="!mb-0">
                    Upon expiration of retention periods, we securely delete or anonymize personal information unless legal obligations require longer retention.
                  </p>
                </div>

                <h2>Your Privacy Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                
                <div className="space-y-6 my-8">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="!mt-0 !mb-4 text-blue-900">Universal Rights</h3>
                    <ul className="grid md:grid-cols-2 gap-3 !mb-0 text-blue-800">
                      <li><strong>Access:</strong> Request information about how we process your data</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                      <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                    <h3 className="!mt-0 !mb-4 text-indigo-900">GDPR Rights (EU Residents)</h3>
                    <ul className="space-y-2 !mb-0 text-indigo-800">
                      <li><strong>Data Portability:</strong> Request transfer of your data in a portable format</li>
                      <li><strong>Processing Restriction:</strong> Request limitation of processing</li>
                      <li><strong>Object to Processing:</strong> Object to processing based on legitimate interests</li>
                      <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                      <li><strong>Lodge Complaints:</strong> File complaints with supervisory authorities</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="!mt-0 !mb-4 text-purple-900">CCPA Rights (California Residents)</h3>
                    <ul className="grid md:grid-cols-2 gap-3 !mb-0 text-purple-800">
                      <li><strong>Know:</strong> Right to know what personal information is collected</li>
                      <li><strong>Delete:</strong> Right to delete personal information</li>
                      <li><strong>Opt-out:</strong> Right to opt-out of sale of personal information</li>
                      <li><strong>Non-discrimination:</strong> Right to non-discriminatory treatment</li>
                    </ul>
                  </div>
                </div>

                <h2>Cookies and Tracking Technologies</h2>
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 my-6">
                  <p className="!mb-4">Our website uses cookies and similar technologies for:</p>
                  <ul className="grid md:grid-cols-3 gap-4 !mb-4">
                    <li className="bg-white rounded-lg p-3 border border-amber-100">
                      <strong className="text-amber-800">Essential Cookies:</strong> Required for website functionality
                    </li>
                    <li className="bg-white rounded-lg p-3 border border-amber-100">
                      <strong className="text-amber-800">Analytics Cookies:</strong> To understand website usage patterns
                    </li>
                    <li className="bg-white rounded-lg p-3 border border-amber-100">
                      <strong className="text-amber-800">Marketing Cookies:</strong> To deliver relevant content (with consent)
                    </li>
                  </ul>
                  <p className="!mb-0 text-amber-800">
                    You can manage cookie preferences through your browser settings or our cookie consent banner. 
                    Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>

                <h2>Third-Party Services</h2>
                <div className="bg-red-50 rounded-lg p-6 border border-red-200 my-6">
                  <p className="!mb-0 text-red-800">
                    Our website may contain links to third-party services with separate privacy policies. We are not responsible for the privacy practices of these external sites.
                  </p>
                </div>

                <h2>Children's Privacy</h2>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200 my-6">
                  <p className="!mb-0 text-orange-800">
                    Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. 
                    If we become aware of such collection, we will take steps to delete the information promptly.
                  </p>
                </div>

                <h2>Updates to This Policy</h2>
                <div className="bg-teal-50 rounded-lg p-6 border border-teal-200 my-6">
                  <p className="!mb-0 text-teal-800">
                    We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
                    We will notify you of material changes through email or website notices. Your continued use of our services constitutes acceptance of the updated policy.
                  </p>
                </div>

                <h2>Contact Information</h2>
                <p>For privacy-related questions, concerns, or to exercise your rights, please contact us:</p>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mt-6 border border-primary/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="!mb-2"><strong className="text-primary">Strategic Resource Initiative</strong></p>
                      <p className="!mb-2"><strong>Email:</strong> <a href="mailto:privacy@sri-advisory.com" className="text-primary hover:underline">privacy@sri-advisory.com</a></p>
                      <p className="!mb-2"><strong>Mail:</strong> Data Protection Officer, Strategic Resource Initiative</p>
                    </div>
                    <div>
                      <p className="!mb-0"><strong>Response Time:</strong> We will respond to requests within 30 days (or as required by applicable law)</p>
                    </div>
                  </div>
                </div>

                <h2>Governing Law</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6">
                  <p className="!mb-0">
                    This Privacy Policy is governed by the laws of the jurisdiction where our primary operations are conducted, 
                    while respecting the privacy rights granted under applicable local laws including GDPR, CCPA, and other relevant regulations.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-6 mt-12">
                  <p className="text-sm !mb-0">
                    <strong>Note:</strong> This Privacy Policy is designed to comply with major international privacy regulations. 
                    However, privacy laws continue to evolve. We recommend consulting with legal counsel for specific compliance requirements in your jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 