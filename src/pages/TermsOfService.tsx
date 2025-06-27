const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Terms of Service</h1>
            <p className="text-xl text-white/90 mb-4">
              Professional advisory services with clear terms and comprehensive legal protections.
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
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-12">
                  <h2 className="!mt-0 !mb-4 text-red-900">Acceptance of Terms</h2>
                  <p className="!mb-0 text-red-800">
                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Client," or "you") 
                    and Strategic Resource Initiative ("SRI," "Company," "we," "us," or "our"). By accessing or using our website, 
                    services, or engaging with our company in any capacity, you agree to be bound by these Terms and our Privacy Policy. 
                    If you do not agree with any part of these Terms, you must not use our services.
                  </p>
                </div>

                <h2>Description of Services</h2>
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 my-6">
                  <p className="!mb-4">SRI provides strategic infrastructure advisory services including but not limited to:</p>
                  <ul className="grid md:grid-cols-2 gap-3 !mb-4">
                    <li>• Strategic consulting and advisory services</li>
                    <li>• Infrastructure project development and analysis</li>
                    <li>• Financial structuring and investment advisory</li>
                    <li>• Climate resilience and sustainability consulting</li>
                    <li>• Sector-specific expertise and guidance</li>
                    <li>• Transaction support and advisory services</li>
                  </ul>
                  <p className="!mb-0">
                    All services are provided on a professional consulting basis and are subject to separate consulting agreements 
                    that will supplement and may modify these Terms.
                  </p>
                </div>

                <h2>Eligibility and Account Requirements</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h3 className="!mt-0 !mb-4 text-green-900">Eligibility</h3>
                    <ul className="space-y-2 !mb-0 text-green-800">
                      <li>• You must be at least 18 years of age</li>
                      <li>• You must have the legal authority to enter into binding agreements</li>
                      <li>• You must represent a legitimate business entity or organization</li>
                      <li>• You must not be prohibited from receiving our services under applicable laws</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <h3 className="!mt-0 !mb-4 text-indigo-900">Account Information</h3>
                    <p className="!mb-0 text-indigo-800">
                      You agree to provide accurate, current, and complete information during registration and to update such information 
                      to maintain its accuracy. You are responsible for safeguarding any account credentials and for all activities 
                      that occur under your account.
                    </p>
                  </div>
                </div>

                <h2>Scope of Services and Professional Relationship</h2>
                
                <div className="space-y-6 my-8">
                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="!mt-0 !mb-3 text-purple-900">Advisory Nature</h3>
                    <p className="!mb-0 text-purple-800">
                      Our services are advisory in nature. We provide professional opinions, analysis, and recommendations based on our expertise. 
                      All recommendations are subject to your independent evaluation and decision-making. We do not guarantee specific outcomes or results.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <h3 className="!mt-0 !mb-3 text-orange-900">No Fiduciary Relationship</h3>
                    <p className="!mb-0 text-orange-800">
                      Unless explicitly stated in a separate written agreement, our relationship is that of independent contractor and client. 
                      No fiduciary, partnership, joint venture, or agency relationship is created by these Terms or the provision of services.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                    <h3 className="!mt-0 !mb-3 text-teal-900">Third-Party Relationships</h3>
                    <p className="!mb-0 text-teal-800">
                      We may recommend or facilitate introductions to third-party service providers. We are not responsible for the performance, 
                      actions, or omissions of such third parties, and you engage with them at your own risk.
                    </p>
                  </div>
                </div>

                <h2>Use of Website and Intellectual Property</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="!mt-0 !mb-4 text-blue-900">License to Use</h3>
                    <p className="!mb-0 text-blue-800">
                      We grant you a limited, non-exclusive, non-transferable license to access and use our website for its intended purposes. 
                      This license is revocable at any time without notice.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <h3 className="!mt-0 !mb-4 text-amber-900">Intellectual Property Rights</h3>
                    <p className="!mb-0 text-amber-800">
                      All content, materials, trademarks, and intellectual property on our website and in our services remain our exclusive property 
                      or that of our licensors. You may not use, copy, or distribute any content without our express written permission.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border border-red-200 my-6">
                  <h3 className="!mt-0 !mb-4 text-red-900">Prohibited Uses</h3>
                  <p className="!mb-4 text-red-800">You agree not to:</p>
                  <ul className="grid md:grid-cols-2 gap-3 !mb-0 text-red-800">
                    <li>• Use our website for any unlawful purpose or in violation of these Terms</li>
                    <li>• Attempt to gain unauthorized access to our systems or networks</li>
                    <li>• Interfere with or disrupt our services or servers</li>
                    <li>• Use automated systems to access our website without permission</li>
                    <li>• Copy, modify, or distribute our content without authorization</li>
                    <li>• Engage in any activity that could damage our reputation or business</li>
                  </ul>
                </div>

                <h2>Client Obligations and Responsibilities</h2>
                
                <div className="space-y-6 my-8">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="!mt-0 !mb-3 text-green-900">Information Accuracy</h3>
                    <p className="!mb-0 text-green-800">
                      You agree to provide accurate, complete, and timely information necessary for us to perform our services. 
                      You acknowledge that our advice and recommendations are based on the information you provide.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="!mt-0 !mb-3 text-blue-900">Cooperation</h3>
                    <p className="!mb-0 text-blue-800">
                      You agree to cooperate with our team and provide reasonable access to personnel, documents, and information 
                      required for service delivery.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="!mt-0 !mb-3 text-purple-900">Decision-Making Authority</h3>
                    <p className="!mb-0 text-purple-800">
                      You retain full decision-making authority regarding your business and projects. You acknowledge that you are responsible 
                      for evaluating and implementing our recommendations based on your own judgment and circumstances.
                    </p>
                  </div>
                </div>

                <h2>Payment Terms and Fees</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <h3 className="!mt-0 !mb-4 text-indigo-900">Fees</h3>
                    <p className="!mb-0 text-indigo-800">
                      Fees for our services will be specified in separate consulting agreements or statements of work. 
                      All fees are due and payable according to the terms specified in such agreements.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                    <h3 className="!mt-0 !mb-4 text-teal-900">Refund Policy</h3>
                    <p className="!mb-0 text-teal-800">
                      Refund terms, if any, will be specified in individual service agreements. Generally, fees for completed work are non-refundable.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 my-6">
                  <h3 className="!mt-0 !mb-4 text-orange-900">Payment Terms</h3>
                  <ul className="grid md:grid-cols-2 gap-3 !mb-0 text-orange-800">
                    <li>• Payment terms will be specified in individual service agreements</li>
                    <li>• Late payments may incur interest charges as permitted by law</li>
                    <li>• You are responsible for all taxes, duties, and fees related to our services</li>
                    <li>• Disputed amounts must be raised within 30 days of invoice date</li>
                  </ul>
                </div>

                <h2>Confidentiality and Non-Disclosure</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="!mt-0 !mb-4 text-purple-900">Mutual Confidentiality</h3>
                    <p className="!mb-0 text-purple-800">
                      Both parties acknowledge that they may receive confidential information during the course of our relationship. 
                      Each party agrees to maintain the confidentiality of such information and use it solely for the intended purposes.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="!mt-0 !mb-4 text-gray-900">Exceptions</h3>
                    <p className="!mb-3 text-gray-800">Confidentiality obligations do not apply to information that:</p>
                    <ul className="space-y-2 !mb-0 text-gray-800">
                      <li>• Is publicly known or becomes public through no breach of these Terms</li>
                      <li>• Is independently developed without use of confidential information</li>
                      <li>• Is required to be disclosed by law or court order</li>
                      <li>• Is approved for disclosure by the disclosing party in writing</li>
                    </ul>
                  </div>
                </div>

                <h2>Limitations of Liability and Disclaimers</h2>
                
                <div className="space-y-6 my-8">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                    <h3 className="!mt-0 !mb-4 text-red-900">Disclaimer of Warranties</h3>
                    <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                      <p className="!mb-0 text-red-900 font-semibold">
                        <strong>OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. 
                        WE DISCLAIM ALL WARRANTIES INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                        AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR MEET YOUR REQUIREMENTS.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
                    <h3 className="!mt-0 !mb-4 text-amber-900">Limitation of Liability</h3>
                    <div className="bg-amber-100 border border-amber-300 rounded-lg p-4">
                      <p className="!mb-0 text-amber-900 font-semibold">
                        <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SRI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, 
                        OR OTHER INTANGIBLE LOSSES, REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
                    <h3 className="!mt-0 !mb-4 text-orange-900">Cap on Damages</h3>
                    <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                      <p className="!mb-0 text-orange-900 font-semibold">
                        <strong>OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES 
                        SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Indemnification</h2>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                  <p className="!mb-4 text-red-800">
                    You agree to indemnify, defend, and hold harmless SRI, its officers, directors, employees, agents, and representatives 
                    from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) 
                    arising out of or relating to:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 !mb-0 text-red-800">
                    <li>• Your use of our services or website</li>
                    <li>• Your violation of these Terms</li>
                    <li>• Your violation of any third-party rights</li>
                    <li>• Any information or content you provide to us</li>
                    <li>• Your implementation of our recommendations</li>
                  </ul>
                </div>

                <h2>Force Majeure</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6">
                  <p className="!mb-0">
                    Neither party shall be liable for any failure or delay in performance due to circumstances beyond their reasonable control, 
                    including but not limited to acts of God, war, terrorism, pandemic, government actions, natural disasters, 
                    or technological failures.
                  </p>
                </div>

                <h2>Dispute Resolution</h2>
                
                <div className="space-y-6 my-8">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="!mt-0 !mb-3 text-blue-900">Informal Resolution</h3>
                    <p className="!mb-0 text-blue-800">
                      Before initiating formal proceedings, parties agree to attempt good faith resolution of disputes through direct negotiation.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                    <h3 className="!mt-0 !mb-3 text-indigo-900">Binding Arbitration</h3>
                    <p className="!mb-0 text-indigo-800">
                      Any dispute arising out of or relating to these Terms shall be resolved through binding arbitration administered by 
                      a recognized arbitration body in accordance with its commercial arbitration rules. The arbitration shall be conducted 
                      in English and the award shall be final and binding.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="!mt-0 !mb-3 text-red-900">Class Action Waiver</h3>
                    <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                      <p className="!mb-0 text-red-900 font-semibold">
                        <strong>YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS 
                        AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <h2>Termination</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="!mt-0 !mb-4 text-purple-900">Termination Rights</h3>
                    <p className="!mb-3 text-purple-800">Either party may terminate these Terms or any service agreement:</p>
                    <ul className="space-y-2 !mb-0 text-purple-800">
                      <li>• For convenience with written notice as specified in service agreements</li>
                      <li>• Immediately for material breach that remains uncured after 30 days written notice</li>
                      <li>• Immediately if the other party becomes insolvent or files for bankruptcy</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <h3 className="!mt-0 !mb-4 text-orange-900">Effect of Termination</h3>
                    <p className="!mb-0 text-orange-800">
                      Upon termination, all licenses granted to you will cease, confidentiality obligations will survive, 
                      and you must pay all outstanding fees for services rendered.
                    </p>
                  </div>
                </div>

                <h2>Governing Law and Jurisdiction</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6">
                  <p className="!mb-0">
                    These Terms shall be governed by and construed in accordance with the laws of [JURISDICTION TO BE SPECIFIED], 
                    without regard to its conflict of law principles. Any legal action not subject to arbitration shall be brought 
                    exclusively in the courts of [JURISDICTION TO BE SPECIFIED].
                  </p>
                </div>

                <h2>General Provisions</h2>
                
                <div className="grid md:grid-cols-2 gap-4 my-8">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="!mt-0 !mb-3 text-blue-900 text-lg">Entire Agreement</h3>
                    <p className="!mb-0 text-blue-800 text-sm">
                      These Terms, together with our Privacy Policy and any executed service agreements, constitute the entire agreement 
                      between the parties and supersede all prior understandings and agreements.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h3 className="!mt-0 !mb-3 text-green-900 text-lg">Amendments</h3>
                    <p className="!mb-0 text-green-800 text-sm">
                      We may modify these Terms at any time by posting updated terms on our website. Material changes will be communicated 
                      through email or website notices. Continued use after changes constitutes acceptance.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <h3 className="!mt-0 !mb-3 text-indigo-900 text-lg">Severability</h3>
                    <p className="!mb-0 text-indigo-800 text-sm">
                      If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <h3 className="!mt-0 !mb-3 text-purple-900 text-lg">Assignment</h3>
                    <p className="!mb-0 text-purple-800 text-sm">
                      We may assign these Terms or any rights hereunder without your consent. You may not assign these Terms without our prior written consent.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                    <h3 className="!mt-0 !mb-3 text-teal-900 text-lg">Waiver</h3>
                    <p className="!mb-0 text-teal-800 text-sm">
                      No waiver of any term or condition shall be deemed a continuing waiver of such term or any other term.
                    </p>
                  </div>
                </div>

                <h2>Contact Information</h2>
                <p>For questions about these Terms, please contact us:</p>
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mt-6 border border-primary/20">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="!mb-2"><strong className="text-primary">Strategic Resource Initiative</strong></p>
                      <p className="!mb-2"><strong>Email:</strong> <a href="mailto:legal@sri-advisory.com" className="text-primary hover:underline">legal@sri-advisory.com</a></p>
                      <p className="!mb-0"><strong>Mail:</strong> Legal Department, Strategic Resource Initiative</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-12">
                  <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-6">
                    <p className="text-sm !mb-0">
                      <strong>Important Notice:</strong> These Terms of Service contain important legal provisions including limitations of liability, 
                      disclaimers, and dispute resolution procedures. Please read them carefully. If you do not understand any provision, 
                      we recommend consulting with legal counsel before using our services.
                    </p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-6">
                    <p className="text-sm !mb-0">
                      <strong>Legal Disclaimer:</strong> These Terms are designed to provide comprehensive legal protection. 
                      However, specific legal requirements may vary by jurisdiction. We recommend consulting with qualified legal counsel 
                      to ensure compliance with applicable laws and regulations in your specific circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 