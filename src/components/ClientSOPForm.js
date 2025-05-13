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
      } else {
        setFormData({
          ...formData,
          [name]: checked
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
    alert('Form submitted successfully! Check console for data.');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
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
      
      {/* ... more sections would follow with the same pattern ... */}
      
      {/* SAVE BUTTON */}
      <div className="p-6 flex justify-end">
        <button 
          type="submit" 
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Save Client SOP
        </button>
      </div>
    </form>
  );
};

export default ClientSOPForm;