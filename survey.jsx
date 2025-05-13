import React, { useState } from 'react';

const ClientSOPForm = () => {
  const [formData, setFormData] = useState({
    firmType: '',
    caseTypes: [],
    requestTypes: [],
    otherRequestTypes: '',
    sendPaperworkFirstCase: '',
    needApprovalAmendments: '',
    needEfileForAmendments: '',
    efileRequirements: {
      anyAndAllChanges: false,
      facilityAddress: false,
      facilityName: false,
      patientInformation: false,
      scope: false
    },
    otherEfileRequirements: '',
    mailPaperworkWithEmail: '',
    useCertifiedMail: '',
    useHITECH: '',
    hipaaPreference: '',
    hipaaUpdatePreference: '',
    // Certificate/Affidavits fields
    seekCertificateEveryRequest: '',
    notarySignatureRequired: '',
    certificateFollowUpCount: '',
    monthlyHardcopyBatch: '',
    // Demand Letters fields
    motionToCompelFrequency: '',
    daysToComply: '',
    daysToWaitAfterCompliance: '',
    demandLetterPermissionRequired: '',
    sendDemandLetterCertifiedMail: '',
    canCloseAfterDemandLetter: '',
    // No Records fields
    canCloseOnANRCNR: '',
    anrFollowUpCount: '',
    // Billing/Invoices fields
    invoiceApprovalThreshold: '',
    invoiceEmailAddresses: '',
    invoiceStaff1: '',
    invoiceStaff2: '',
    invoiceStaff3: '',
    weeklyInvoicesBatchesOnTuesday: '',
    alternativeInvoiceSchedule: '',
    paymentMethod: '',
    // Records fields
    radiologyAmbra: false,
    radiologyRADDisc: false,
    radiologyZIPFile: false,
    radiologyReports: false,
    recordsOCRd: '',
    recordsBatesStamped: '',
    chronologicalOrdering: '',
    chronologicalOrganizationPreference: '',
    // Attorney Digital Signatures fields
    keepDigitalSignatures: '',
    askPermissionForDigitalSignature: '',
    // Firm File Numbers fields
    firmFileNumbersProcess: '',
    // Additional Information fields
    useAddressInSignatureBlock: '',
    monthlyReportPreference: '',
    efileNotificationPreference: '',
    requestNotificationPreference: '',
    typicalScope: '',
    ddInformationPreference: '',
    ddModificationHandling: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name.startsWith('efileRequirements.')) {
        const field = name.split('.')[1];
        setFormData({
          ...formData,
          efileRequirements: {
            ...formData.efileRequirements,
            [field]: checked
          }
        });
      } else if (name === 'caseTypes' || name === 'requestTypes') {
        const updatedArray = checked 
          ? [...formData[name], value]
          : formData[name].filter(item => item !== value);
        
        setFormData({
          ...formData,
          [name]: updatedArray
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle special case for "Any and all changes" checkbox
  const handleEfileAnyAllChanges = (e) => {
    const { checked } = e.target;
    
    if (checked) {
      // If "Any and all changes" is checked, uncheck and disable other options
      setFormData({
        ...formData,
        efileRequirements: {
          anyAndAllChanges: true,
          facilityAddress: false,
          facilityName: false,
          patientInformation: false,
          scope: false
        }
      });
    } else {
      setFormData({
        ...formData,
        efileRequirements: {
          ...formData.efileRequirements,
          anyAndAllChanges: false
        }
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-blue-700 text-white">
        <h2 className="text-xl font-bold">Client Operational Preferences (SOPs)</h2>
      </div>
      
      {/* FIRM DETAILS SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">FIRM TYPE</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Firm Type
          </label>
          <select 
            name="firmType"
            value={formData.firmType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Firm Type</option>
            <option value="Plaintiff">Plaintiff</option>
            <option value="Defense">Defense</option>
          </select>
        </div>
        
        {formData.firmType === 'Plaintiff' && (
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              What types of cases will iCopy be receiving?
            </label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="caseTypes"
                  value="Pre-Litigation"
                  checked={formData.caseTypes.includes('Pre-Litigation')}
                  onChange={handleChange}
                  className="mr-2"
                />
                Pre-Litigation
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="caseTypes"
                  value="Litigation"
                  checked={formData.caseTypes.includes('Litigation')}
                  onChange={handleChange}
                  className="mr-2"
                />
                Litigation
              </label>
            </div>
          </div>
        )}
      </div>
      
      {/* REQUEST TYPES SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">TYPES OF REQUESTS</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            What types of requests will you mainly be sending?
          </label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="requestTypes"
                value="Authorizations w/ Signed HIPAAs"
                checked={formData.requestTypes.includes('Authorizations w/ Signed HIPAAs')}
                onChange={handleChange}
                className="mr-2"
              />
              Authorizations w/ Signed HIPAAs
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="requestTypes"
                value="State Subpoenas"
                checked={formData.requestTypes.includes('State Subpoenas')}
                onChange={handleChange}
                className="mr-2"
              />
              State Subpoenas
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="requestTypes"
                value="Federal Subpoenas"
                checked={formData.requestTypes.includes('Federal Subpoenas')}
                onChange={handleChange}
                className="mr-2"
              />
              Federal Subpoenas
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="requestTypes"
                value="RPDs"
                checked={formData.requestTypes.includes('RPDs')}
                onChange={handleChange}
                className="mr-2"
              />
              RPDs
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Other (Specify):
          </label>
          <input 
            type="text" 
            name="otherRequestTypes"
            value={formData.otherRequestTypes}
            onChange={handleChange}
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
      </div>
      
      {/* PAPERWORK SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">PAPERWORK</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Are we able to send you the paperwork for the first case placed for approval and then drop off approvals for future orders?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="sendPaperworkFirstCase"
                value="Yes"
                checked={formData.sendPaperworkFirstCase === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="sendPaperworkFirstCase"
                value="No"
                checked={formData.sendPaperworkFirstCase === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Do we need your approval for amendments to the paperwork?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="needApprovalAmendments"
                value="Yes"
                checked={formData.needApprovalAmendments === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="needApprovalAmendments"
                value="No"
                checked={formData.needApprovalAmendments === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Do you need a new notice/E-File to file with the courts for amendmended paperwork?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="needEfileForAmendments"
                value="Yes"
                checked={formData.needEfileForAmendments === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="needEfileForAmendments"
                value="No"
                checked={formData.needEfileForAmendments === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        {formData.needEfileForAmendments === 'Yes' && (
          <div className="ml-6 mb-4 border-l-2 border-blue-200 pl-4">
            <div className="mb-2">
              <label className="flex items-center font-semibold text-blue-600">
                <input 
                  type="checkbox" 
                  name="efileRequirements.anyAndAllChanges"
                  checked={formData.efileRequirements.anyAndAllChanges}
                  onChange={handleEfileAnyAllChanges}
                  className="mr-2"
                />
                Any and all changes to the paperwork require a new E-File
              </label>
            </div>
            
            {!formData.efileRequirements.anyAndAllChanges && (
              <>
                <div className="mb-2 ml-6">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="efileRequirements.facilityAddress"
                      checked={formData.efileRequirements.facilityAddress}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Only the <span className="text-blue-600 font-semibold">facility address</span> being changed requires a new E-File
                  </label>
                </div>
                <div className="mb-2 ml-6">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="efileRequirements.facilityName"
                      checked={formData.efileRequirements.facilityName}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Only the <span className="text-blue-600 font-semibold">facility name</span> being changed requires a new E-File
                  </label>
                </div>
                <div className="mb-2 ml-6">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="efileRequirements.patientInformation"
                      checked={formData.efileRequirements.patientInformation}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Only <span className="text-blue-600 font-semibold">patient information</span> being changed requires a new E-File
                  </label>
                </div>
                <div className="mb-2 ml-6">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      name="efileRequirements.scope"
                      checked={formData.efileRequirements.scope}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Only <span className="text-blue-600 font-semibold">the scope</span> being changed requires a new E-File
                  </label>
                </div>
              </>
            )}
            
            <div className="mt-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Other (Specify):
              </label>
              <input 
                type="text" 
                name="otherEfileRequirements"
                value={formData.otherEfileRequirements}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-gray-100"
              />
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            If we have a fax/email address for a facility, would you like us to mail the paperwork as well?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="mailPaperworkWithEmail"
                value="Yes"
                checked={formData.mailPaperworkWithEmail === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="mailPaperworkWithEmail"
                value="No"
                checked={formData.mailPaperworkWithEmail === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like to mail your requests via certified mail? <span className="text-red-600 font-normal">*Cost is $9/request</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="useCertifiedMail"
                value="Yes"
                checked={formData.useCertifiedMail === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="useCertifiedMail"
                value="No"
                checked={formData.useCertifiedMail === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      </div>
      
      {/* HIPAAs SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">HIPAAs</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like us to use HITECH when applicable?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="useHITECH"
                value="Yes"
                checked={formData.useHITECH === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="useHITECH"
                value="No"
                checked={formData.useHITECH === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            When we are sending a request to a facility we know requires a HIPAA, and we don't have one yet from you, would you prefer us:
          </label>
          <select 
            name="hipaaPreference"
            value={formData.hipaaPreference}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Preference</option>
            <option value="Wait for your HIPAA">Wait for your HIPAA</option>
            <option value="Proceed without HIPAA">Proceed without HIPAA</option>
            <option value="Contact for instructions">Contact for instructions</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            If a HIPAA needs to be updated with a date range, date signed, etc. would you like us to ask you before making those changes, or just inform you?
          </label>
          <select 
            name="hipaaUpdatePreference"
            value={formData.hipaaUpdatePreference}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Preference</option>
            <option value="Ask before changes">Ask before making changes</option>
            <option value="Just inform">Just inform me</option>
          </select>
        </div>
      </div>
      
      {/* CERTIFICATES OF COMPLETENESS/AFFIDAVITS SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">CERTIFICATES OF COMPLETENESS/AFFIDAVITS</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Do we need to be seeking a completed certificate/affidavits for every request?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="seekCertificateEveryRequest"
                value="Yes"
                checked={formData.seekCertificateEveryRequest === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="seekCertificateEveryRequest"
                value="No"
                checked={formData.seekCertificateEveryRequest === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Does it need to be signed by a notary to be considered 'completed'?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="notarySignatureRequired"
                value="Yes"
                checked={formData.notarySignatureRequired === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="notarySignatureRequired"
                value="No"
                checked={formData.notarySignatureRequired === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How many times should we follow up for a missing certificate/affidavits before invoicing it, closing it, and tagging you in a note informing you?
          </label>
          <select 
            name="certificateFollowUpCount"
            value={formData.certificateFollowUpCount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Follow-up Count</option>
            <option value="1">1 time</option>
            <option value="2">2 times</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
            <option value="Other">Other</option>
          </select>
          <p className="mt-2 text-sm text-gray-600">
            (CAN REOPEN AT ANYTIME FREE OF CHARGE IF YOU WISH TO PURSUE THE AFFIDAVIT DOWN THE LINE)
          </p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like a monthly batch of hardcopy certificates/affidavits mailed to your office?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="monthlyHardcopyBatch"
                value="Yes"
                checked={formData.monthlyHardcopyBatch === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="monthlyHardcopyBatch"
                value="No"
                checked={formData.monthlyHardcopyBatch === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      </div>
      
      {/* DEMAND LETTERS SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">DEMAND LETTERS</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How often does your firm file Motions to Compel against facilities for non-compliance?
          </label>
          <select 
            name="motionToCompelFrequency"
            value={formData.motionToCompelFrequency}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Frequency</option>
            <option value="Never">Never*</option>
            <option value="Rarely">Rarely*</option>
            <option value="Sometimes">Sometimes*</option>
            <option value="Frequently">Frequently*</option>
            <option value="Always">Always*</option>
          </select>
          <p className="mt-1 text-sm text-gray-500 italic">* These are example values - customize as needed</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How many days would you like listed on the Demand Letter allowing the facility to comply?
          </label>
          <input 
            type="number" 
            name="daysToComply"
            value={formData.daysToComply}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            How many days past the compliance date would you like us to wait before sending a demand letter to the facility?
          </label>
          <input 
            type="number" 
            name="daysToWaitAfterCompliance"
            value={formData.daysToWaitAfterCompliance}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border rounded"
          />
          <p className="mt-1 text-sm text-gray-600">*Compliance due date on paperwork is 30 days</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Do we need to ask your permission to send a demand letter?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="demandLetterPermissionRequired"
                value="Yes"
                checked={formData.demandLetterPermissionRequired === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="demandLetterPermissionRequired"
                value="No"
                checked={formData.demandLetterPermissionRequired === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like us to send demand letters via certified mail?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="sendDemandLetterCertifiedMail"
                value="Yes"
                checked={formData.sendDemandLetterCertifiedMail === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="sendDemandLetterCertifiedMail"
                value="No"
                checked={formData.sendDemandLetterCertifiedMail === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
          <p className="mt-1 text-sm text-red-600">*Cost is $9.00 **Will send with copy of request</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Once a demand letter has been sent, and the facility is still unresponsive/haven't sent us the records, can we invoice, close, inform you?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="canCloseAfterDemandLetter"
                value="Yes"
                checked={formData.canCloseAfterDemandLetter === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="canCloseAfterDemandLetter"
                value="No"
                checked={formData.canCloseAfterDemandLetter === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            (CAN REOPEN AT ANYTIME FREE OF CHARGE IF YOU WISH TO PURSUE THE AFFIDAVIT DOWN THE LINE)
          </p>
        </div>
      </div>
      
      {/* NO RECORDS SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">NO RECORDS</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            When we receive an ANR/CNR, can we invoice, close, inform you?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="canCloseOnANRCNR"
                value="Yes"
                checked={formData.canCloseOnANRCNR === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="canCloseOnANRCNR"
                value="No"
                checked={formData.canCloseOnANRCNR === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            (CAN REOPEN AT ANYTIME FREE OF CHARGE IF YOU WISH TO PURSUE THE AFFIDAVIT DOWN THE LINE)
          </p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Upon receiving an ANR/CNR that is not completed/is missing notary, how many times would you like us to follow up to obtain it before we close it and inform you?
          </label>
          <select 
            name="anrFollowUpCount"
            value={formData.anrFollowUpCount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Follow-up Count</option>
            <option value="1">1 time</option>
            <option value="2">2 times</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      {/* BILLING/INVOICES SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">BILLING/INVOICES</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Invoice approval threshold amount:
          </label>
          <input 
            type="text" 
            name="invoiceApprovalThreshold"
            value={formData.invoiceApprovalThreshold || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter amount"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            What are the email addresses of who we are sending the invoices to?
          </label>
          <input 
            type="text" 
            name="invoiceEmailAddresses"
            value={formData.invoiceEmailAddresses || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-2"
            placeholder="Enter email addresses"
          />
          
          <div className="ml-6 mt-2">
            <div className="mb-2">
              <label className="block text-gray-700">Staff #1:</label>
              <input 
                type="email" 
                name="invoiceStaff1"
                value={formData.invoiceStaff1 || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Staff #2:</label>
              <input 
                type="email" 
                name="invoiceStaff2"
                value={formData.invoiceStaff2 || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700">Staff #3:</label>
              <input 
                type="email" 
                name="invoiceStaff3"
                value={formData.invoiceStaff3 || ''}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter email"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Are weekly batches of invoices on Tuesdays okay?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="weeklyInvoicesBatchesOnTuesday"
                value="Yes"
                checked={formData.weeklyInvoicesBatchesOnTuesday === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="weeklyInvoicesBatchesOnTuesday"
                value="No"
                checked={formData.weeklyInvoicesBatchesOnTuesday === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="ml-6 mb-4">
          <label className="block text-gray-700 italic mb-2">
            If no, when should they be sent?
          </label>
          <input 
            type="text" 
            name="alternativeInvoiceSchedule"
            value={formData.alternativeInvoiceSchedule || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter preferred schedule"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Will you be paying by ACH, CC, or check?
          </label>
          <select 
            name="paymentMethod"
            value={formData.paymentMethod || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Payment Method</option>
            <option value="ACH">ACH</option>
            <option value="CC">Credit Card (CC)</option>
            <option value="Check">Check</option>
          </select>
          <p className="mt-2 text-sm text-red-600">
            **CC has 3% Convenience Fee, CC and ACH require a form to be filled out and we will always ask ahead of charging a CC or bank account, we will never charge it without asking.
          </p>
        </div>
      </div>
      
      {/* RECORDS SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">RECORDS</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like to recieve radiology via hardcopy disc, ZIP file, or using our integration with Ambra?
          </label>
          <div className="flex flex-col gap-2 mt-3">
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="radiologyAmbra"
                  checked={formData.radiologyAmbra || false}
                  onChange={(e) => setFormData({...formData, radiologyAmbra: e.target.checked})}
                  className="mr-2"
                />
                Ambra
              </label>
              <span className="text-gray-700">$5/Study</span>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="radiologyRADDisc"
                  checked={formData.radiologyRADDisc || false}
                  onChange={(e) => setFormData({...formData, radiologyRADDisc: e.target.checked})}
                  className="mr-2"
                />
                RAD Disc
              </label>
              <span className="text-gray-700">$40/Disc</span>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="radiologyZIPFile"
                  checked={formData.radiologyZIPFile || false}
                  onChange={(e) => setFormData({...formData, radiologyZIPFile: e.target.checked})}
                  className="mr-2"
                />
                ZIP File
              </label>
              <span className="text-gray-700">$20/ZIP File</span>
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="radiologyReports"
                  checked={formData.radiologyReports || false}
                  onChange={(e) => setFormData({...formData, radiologyReports: e.target.checked})}
                  className="mr-2"
                />
                Radiology Reports
              </label>
              <span className="text-gray-700"></span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like your records OCR'd?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="recordsOCRd"
                value="Yes"
                checked={formData.recordsOCRd === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="recordsOCRd"
                value="No"
                checked={formData.recordsOCRd === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like your records bates stamped?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="recordsBatesStamped"
                value="Yes"
                checked={formData.recordsBatesStamped === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="recordsBatesStamped"
                value="No"
                checked={formData.recordsBatesStamped === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like Chronological Ordering?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="chronologicalOrdering"
                value="Yes"
                checked={formData.chronologicalOrdering === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="chronologicalOrdering"
                value="No"
                checked={formData.chronologicalOrdering === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
          <p className="mt-1 text-sm text-gray-700">$45/HR, $22.50/30 Min.</p>
        </div>
        
        <div className="ml-6 mb-4">
          <label className="block text-gray-700 italic mb-2">
            If yes, how would you like them organized?
          </label>
          <input 
            type="text" 
            name="chronologicalOrganizationPreference"
            value={formData.chronologicalOrganizationPreference || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Describe preferred organization"
          />
        </div>
      </div>
      
      {/* ATTORNEY DIGITAL SIGNATURES SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">ATTORNEY DIGITAL SIGNATURES</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like us to keep a copy of the attorney's digital signatures to add to required documents?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="keepDigitalSignatures"
                value="Yes"
                checked={formData.keepDigitalSignatures === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="keepDigitalSignatures"
                value="No"
                checked={formData.keepDigitalSignatures === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="ml-6 mb-4">
          <label className="block text-gray-700 italic mb-2">
            If yes, would you like us to ask you for permission to use the digital signature before we do?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="askPermissionForDigitalSignature"
                value="Yes"
                checked={formData.askPermissionForDigitalSignature === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="askPermissionForDigitalSignature"
                value="No"
                checked={formData.askPermissionForDigitalSignature === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
      </div>
      
      {/* FIRM FILE NUMBERS SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">FIRM FILE NUMBERS</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Does your firm use Firm File Numbers for sorting cases? What is your internal process for keeping cases organziied?
          </label>
          <textarea 
            name="firmFileNumbersProcess"
            value={formData.firmFileNumbersProcess || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="Describe your process"
          ></textarea>
        </div>
      </div>
      
      {/* ADDITIONAL INFORMATION SECTION */}
      <div className="p-6 border-b">
        <h3 className="text-lg font-bold text-blue-700 mb-4">ADDITIONAL INFORMATION</h3>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Can the address in your signature block be used in our LOR?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="useAddressInSignatureBlock"
                value="Yes"
                checked={formData.useAddressInSignatureBlock === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="useAddressInSignatureBlock"
                value="No"
                checked={formData.useAddressInSignatureBlock === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like a monthly report showing all of your cases/requests and giving a brief update?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="monthlyReportPreference"
                value="Yes"
                checked={formData.monthlyReportPreference === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="monthlyReportPreference"
                value="No"
                checked={formData.monthlyReportPreference === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like the a copy of the E-FILE/notice to be emailed to you on the day of mailing or live on the portal?
          </label>
          <select 
            name="efileNotificationPreference"
            value={formData.efileNotificationPreference || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Preference</option>
            <option value="Email">Email me a copy*</option>
            <option value="Portal">View on portal*</option>
            <option value="Both">Both email and portal*</option>
            <option value="Neither">Neither*</option>
          </select>
          <p className="mt-1 text-sm text-gray-500 italic">* These are example values - customize as needed</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Would you like a copy of the requests to be emailed to you on the day of mailing or live on the portal?
          </label>
          <select 
            name="requestNotificationPreference"
            value={formData.requestNotificationPreference || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Preference</option>
            <option value="Email">Email me a copy*</option>
            <option value="Portal">View on portal*</option>
            <option value="Both">Both email and portal*</option>
            <option value="Neither">Neither*</option>
          </select>
          <p className="mt-1 text-sm text-gray-500 italic">* These are example values - customize as needed</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            What will your typical scope be for the records?
          </label>
          <textarea 
            name="typicalScope"
            value={formData.typicalScope || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="Describe typical scope"
          ></textarea>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Can DD information/changes live on the portal or would you like to be sent a DD email for every case?
          </label>
          <select 
            name="ddInformationPreference"
            value={formData.ddInformationPreference || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Preference</option>
            <option value="Portal">On the portal*</option>
            <option value="Email">Email for every case*</option>
          </select>
          <p className="mt-1 text-sm text-gray-500 italic">* These are example values - customize as needed</p>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            When we anticipate your response regarding a modification to DD, would you prefer us to suspend the entire case until we receive an answer or proceed with the other requests and only hold the ones we are awaiting your response on?
          </label>
          <select 
            name="ddModificationHandling"
            value={formData.ddModificationHandling || ''}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Preference</option>
            <option value="Suspend">Suspend entire case*</option>
            <option value="Proceed">Proceed with other requests*</option>
          </select>
          <p className="mt-1 text-sm text-gray-500 italic">* These are example values - customize as needed</p>
        </div>
      </div>
      
      {/* SAVE BUTTON */}
      <div className="p-6 flex justify-end">
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Save Client SOP
        </button>
      </div>
    </div>
  );
};

export default ClientSOPForm;