import { useState, useEffect } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({
    associated: 'no',
    enrollmentNo: '',
    categoryType: '',
    category: '',
    subCategory: '',
    paperId: '',
    paperTitle: '',
    presentationMode: 'offline',
    service: '',
    name: '',
    gender: 'male',
    mobile: '',
    email: '',
    institution: '',
    city: '',
    nationality: 'national',
    country: '',
    affiliation: '',
    ieeeMember: '',
    ieeeNumber: '',
    delegateService: '',
    delegateName: ''
  })

  const [showFields, setShowFields] = useState(true)

  useEffect(() => {
    setShowFields(formData.associated === 'no')
  }, [formData.associated])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
    "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ]

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* University Association */}
        <div className="space-y-2">
          <label className="block text-gray-600">Are you currently associated with Amity University?</label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="associated"
                value="yes"
                checked={formData.associated === 'yes'}
                onChange={e => setFormData({...formData, associated: e.target.value})}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="associated"
                value="no"
                checked={formData.associated === 'no'}
                onChange={e => setFormData({...formData, associated: e.target.value})}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {formData.associated === 'yes' && (
          <div className="space-y-2">
            <label className="block text-gray-600">Enrollment No. / Teacher ID</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={formData.enrollmentNo}
                onChange={e => setFormData({...formData, enrollmentNo: e.target.value})}
                className="flex-grow p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter Enrollment No. / Teacher ID"
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Search
              </button>
            </div>
          </div>
        )}

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-gray-600">Category</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="category"
                value="delegate"
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Delegate</span>
            </label>
          </div>
        </div>

        {formData.category === 'delegate' && (
          <>
            <div className="space-y-2">
              <label className="block text-gray-600">Service</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="delegateService"
                    value="stall"
                    checked={formData.delegateService === 'stall'}
                    onChange={e => setFormData({...formData, delegateService: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Stall Boarding (Rent)</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="delegateService"
                    value="sponsorship"
                    checked={formData.delegateService === 'sponsorship'}
                    onChange={e => setFormData({...formData, delegateService: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Sponsorship</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="delegateService"
                    value="participant"
                    checked={formData.delegateService === 'participant'}
                    onChange={e => setFormData({...formData, delegateService: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Participant</span>
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                value={formData.delegateName}
                onChange={e => setFormData({...formData, delegateName: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </>
        )}

        {showFields && (
          <>
            {/* Category Type */}
            <div className="space-y-2">
              <label className="block text-gray-600">Category Type</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="categoryType"
                    value="student"
                    onChange={e => setFormData({...formData, categoryType: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Student</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="categoryType"
                    value="faculty"
                    onChange={e => setFormData({...formData, categoryType: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Faculty / Staff</span>
                </label>
              </div>
            </div>

            {/* Sub-Category */}
            <div className="space-y-2">
              <label className="block text-gray-600">Sub-Category</label>
              <select
                onChange={e => setFormData({...formData, subCategory: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">--Select Sub-Category--</option>
                <option value="sub1">Sub Category 1</option>
                <option value="sub2">Sub Category 2</option>
              </select>
            </div>

            {/* Paper ID */}
            <div className="space-y-2">
              <label className="block text-gray-600">Paper Id</label>
              <input
                type="text"
                onChange={e => setFormData({...formData, paperId: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="block text-gray-600">Service</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="stall"
                    checked={formData.service === 'stall'}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Stall Boarding (Rent)</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="sponsorship"
                    checked={formData.service === 'sponsorship'}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Sponsorship</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value="participant"
                    checked={formData.service === 'participant'}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Participant</span>
                </label>
              </div>
            </div>

            {/* Paper Title */}
            <div className="space-y-2">
              <label className="block text-gray-600">Paper Title</label>
              <input
                type="text"
                onChange={e => setFormData({...formData, paperTitle: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Paper Presentation Mode */}
            <div className="space-y-2">
              <label className="block text-gray-600">Paper Presentation Mode</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="presentationMode"
                    value="online"
                    checked={formData.presentationMode === 'online'}
                    onChange={e => setFormData({...formData, presentationMode: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Online</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="presentationMode"
                    value="offline"
                    checked={formData.presentationMode === 'offline'}
                    onChange={e => setFormData({...formData, presentationMode: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Offline</span>
                </label>
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="block text-gray-600">Gender</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={e => setFormData({...formData, gender: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={e => setFormData({...formData, gender: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            {/* Mobile No */}
            <div className="space-y-2">
              <label className="block text-gray-600">Mobile No.</label>
              <input
                type="tel"
                onChange={e => setFormData({...formData, mobile: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email ID */}
            <div className="space-y-2">
              <label className="block text-gray-600">Email ID</label>
              <input
                type="email"
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Institution */}
            <div className="space-y-2">
              <label className="block text-gray-600">Institution / Organization</label>
              <input
                type="text"
                onChange={e => setFormData({...formData, institution: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div className="space-y-2">
              <label className="block text-gray-600">City</label>
              <input
                type="text"
                onChange={e => setFormData({...formData, city: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Nationality */}
            <div className="space-y-2">
              <label className="block text-gray-600">Nationality</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="nationality"
                    value="national"
                    checked={formData.nationality === 'national'}
                    onChange={e => setFormData({...formData, nationality: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">National</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="nationality"
                    value="international"
                    checked={formData.nationality === 'international'}
                    onChange={e => setFormData({...formData, nationality: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">International</span>
                </label>
              </div>
            </div>

            {formData.nationality === 'international' && (
              <div className="space-y-2">
                <label className="block text-gray-600">Country</label>
                <select
                  value={formData.country}
                  onChange={e => setFormData({...formData, country: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Affiliation */}
            {/* <div className="space-y-2">
              <label className="block text-gray-600">Affiliation</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="affiliation"
                    value="national"
                    onChange={e => setFormData({...formData, affiliation: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">National</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="affiliation"
                    value="international"
                    onChange={e => setFormData({...formData, affiliation: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">International</span>
                </label>
              </div>
            </div> */}

            {/* IEEE Member */}
            <div className="space-y-2">
              <label className="block text-gray-600">IEEE Member</label>
              <div className="space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="ieeeMember"
                    value="yes"
                    onChange={e => setFormData({...formData, ieeeMember: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="ieeeMember"
                    value="no"
                    onChange={e => setFormData({...formData, ieeeMember: e.target.value})}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            {formData.ieeeMember === 'yes' && (
              <div className="space-y-2">
                <label className="block text-gray-600">IEEE Membership No.</label>
                <input
                  type="text"
                  value={formData.ieeeNumber}
                  onChange={e => setFormData({...formData, ieeeNumber: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter IEEE Membership No."
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </form>
  )
}