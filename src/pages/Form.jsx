import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { storage } from "../appwrite";
import { ID } from 'appwrite';

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
    title: '',
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
    delegateName: '',
    // middleName: '',
    firstName: '',
    lastName: '',
    amount: '',
    state:''
  });

  const [showFields, setShowFields] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [idFile, setIdFile] = useState(null); 
  const [studentUpload, setStudentUpload] = useState(false);

  useEffect(() => {
    setShowFields(formData.associated === 'no');
  }, [formData.associated]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let requiredFields;
    if (formData.associated === 'yes') {
      requiredFields = ['enrollmentNo', 'categoryType'];
    } else {
      requiredFields = [
        'categoryType',
        'paperId',
        'paperTitle',
        // 'presentationMode',
        'firstName',
        // 'middleName',
        'lastName',
        'gender',
        'mobile',
        'email',
        'institution',
        'city',
        'nationality',
        'ieeeMember',
        'amount',
        'state'
      ];
    }

    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      toast.error(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.mobile)) {
      toast.error("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }

    if (formData.associated === 'no') {
      if (formData.nationality === 'international' && !formData.country) {
        toast.error('Please select a country for international participants');
        setIsSubmitting(false);
        return;
      }
      
      if (formData.categoryType === "Research Scholar/ UG/PG Student" && !studentUpload) {
        toast.error('Please upload your Student ID');
        setIsSubmitting(false);
        return;
      }


      if (formData.ieeeMember === 'yes' && !isUploaded) {
        toast.error('Please upload your IEEE Membership document');
        setIsSubmitting(false);
        return;
      }
    }

    try {
      const docRef = await addDoc(collection(db, "formSubmissions"), {
        ...formData,
        createdAt: new Date(),
      });

      toast.success("Form submitted successfully!");
      if (docRef.id !== "") {
        if (formData.nationality === 'national') {
          
          navigate('/fee');
        } else if (formData.nationality === 'international') {
         
          if (docRef.id !== "") {
            window.location.href = "https://wise.com/pay/me/rahuls1014";
          }
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    //pdf
  const handleFileChange = (event) => {
    setPdfFile(event.target.files[0]);
    setUploadError(null);
  };


  const handleUpload = async () => {
    if (!pdfFile) {
      setUploadError("Please select a PDF file first.");
      return;
    }

    setUploading(true);
    setUploadError(null);

    const bucketId = import.meta.env.VITE_REACT_APPWRITE_BUCKET_ID;
    try {
      const response = await storage.createFile(
        bucketId,
        ID.unique(),
        pdfFile
      );
      setIsUploaded(true);
      toast.success("PDF document uploaded successfully!");
    } catch (error) {
      console.error("Error uploading PDF:", error);
      setUploadError(error.message);
    } finally {
      setUploading(false);
    }
  };

  // ID 
  const handleIdFileChange = (event) => {
    setIdFile(event.target.files[0]);
    setUploadError(null);
  };
 
  const handleIdUpload = async () => {
    if (!idFile) {
      setUploadError("Please select an ID image first.");
      return;
    }

    setUploading(true);
    setUploadError(null);

    const bucketId = import.meta.env.VITE_REACT_APPWRITE_BUCKET_ID;
    try {
      const response = await storage.createFile(
        bucketId,
        ID.unique(),
        idFile
      );
      setStudentUpload(true)
      toast.success("ID Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading ID image:", error);
      setUploadError(error.message);
    } finally {
      setUploading(false);
    }
  };

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
  ];

  return (
    <div>

<div className="mt-10 bg-yellow-300">
  <div className="overflow-hidden">
    <div className="whitespace-nowrap animate-marquee-forward flex">
      <p className="text-red-600 text-lg font-semibold inline-block mr-32">
        After registration, please fill out the Google form: 
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHh4NZD4xjlet-cRtAvMqONx8rlsIMC_6Nt2RwWei-n-ds9w/viewform?usp=dialog" 
          className="text-blue-600 hover:underline ml-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>
      <p className="text-red-600 text-lg font-semibold inline-block mr-32">
        After registration, please fill out the Google form: 
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHh4NZD4xjlet-cRtAvMqONx8rlsIMC_6Nt2RwWei-n-ds9w/viewform?usp=dialog" 
          className="text-blue-600 hover:underline ml-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>
      <p className="text-red-600 text-lg font-semibold inline-block mr-32">
        After registration, please fill out the Google form: 
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfHh4NZD4xjlet-cRtAvMqONx8rlsIMC_6Nt2RwWei-n-ds9w/viewform?usp=dialog" 
          className="text-blue-600 hover:underline ml-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>
    </div>
  </div>
</div>
      <h1 className="text-3xl flex justify-center font-bold mt-4">
        Registration Form
      </h1>

      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nationality */}
          <div className="space-y-2">
            <label className="block text-gray-600">Nationality</label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="nationality"
                  value="national"
                  checked={formData.nationality === "national"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      nationality: e.target.value,
                    })
                  }
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">National</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="nationality"
                  value="international"
                  checked={formData.nationality === "international"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      nationality: e.target.value,
                    })
                  }
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">International</span>
              </label>
            </div>
          </div>

          {formData.nationality === "international" && (
            <div className="space-y-2">
              <label className="block text-gray-600">Country</label>
              <select
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
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
          {/* University Association */}
          <div className="space-y-2">
            <label className="block text-gray-600">
              Are you currently associated with AKGEC?
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="associated"
                  value="yes"
                  checked={formData.associated === "yes"}
                  onChange={(e) =>
                    setFormData({ ...formData, associated: e.target.value })
                  }
                  className="form-radio text-blue-600"
                  // onClick={!formData.associated}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="associated"
                  value="no"
                  checked={formData.associated === "no"}
                  onChange={(e) =>
                    setFormData({ ...formData, associated: e.target.value })
                  }
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {formData.associated === "yes" && (
            <div className="space-y-2">
              <label className="block text-gray-600">
                Enrollment No. / Teacher ID
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={formData.enrollmentNo}
                  onChange={(e) =>
                    setFormData({ ...formData, enrollmentNo: e.target.value })
                  }
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

         

          {showFields && (
            <>
              {/* Sub-Category
              <div className="space-y-2">
                <label className="block text-gray-600">Category-type</label>
                <select
                  onChange={(e) =>
                    setFormData({ ...formData, categoryType: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {
                    formData.nationality === "national" && (
                      <>
                      <option value="">--Select Category--</option>
                      <option value="Academician/Industry Participant/Others">
                        Academician/Industry Participant/Others
                      </option>
                      <option value="Research Scholar/ UG/PG Student">Research Scholar/ UG/PG Student</option>
                      <option value="Attendee">Attendee</option>
                      <option value="Non Presenting Author">Non Presenting Author</option>
                      </>
                    )
                  }
                  {
                    formData.nationality === "international" && (
                      <>
                      <option value="">--Select Category--</option>
                      <option value="Academician/Industry Participant/Others">Academician/Industry Participant/Others</option>
                      </>
                    )
                  }
                </select>
              </div> */}

              {/* Sub-Category */}
<div className="space-y-2">
  <label className="block text-gray-600">Category-type</label>
  <select
    onChange={(e) =>
      setFormData({ ...formData, categoryType: e.target.value })
    }
    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  >
    {formData.nationality === "national" && (
      <>
        <option value="">--Select Category--</option>
        <option value="Academician/Industry Participant/Others">
          Academician/Industry Participant/Others
        </option>
        <option value="Research Scholar/ UG/PG Student">
          Research Scholar/ UG/PG Student
        </option>
        <option value="Attendee">Attendee</option>
        <option value="Non Presenting Author">Non Presenting Author</option>
      </>
    )}
    {formData.nationality === "international" && (
      <>
        <option value="">--Select Category--</option>
        <option value="Academician/Industry Participant/Others">
          Academician/Industry Participant/Others
        </option>
      </>
    )}
  </select>
</div>

{/* ID Image */}
{formData.categoryType === "Research Scholar/ UG/PG Student" && (
  <>
    <div className="space-y-2">
      <label className="block text-gray-600">Upload ID Image</label>
      {!isUploaded ? (
        <>
          <input
            type="file"
            accept="image/*"
            onChange={handleIdFileChange}
            className="border-2 p-1"
          />
          {uploadError && <p style={{ color: "red" }}>{uploadError}</p>}

          <button
            onClick={handleIdUpload}
            disabled={uploading}
            className={`px-6 py-2 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              uploading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
            }`}
          >
            {uploading ? "Uploading..." : "Upload ID"}
          </button>
        </>
      ) : (
        <p className="text-green-600">ID Image Uploaded</p>
      )}
    </div>
  </>
)}


              {/* Paper ID */}
              <div className="space-y-2">
                <label className="block text-gray-600">Paper Id</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, paperId: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Paper Title */}
              <div className="space-y-2">
                <label className="block text-gray-600">Paper Title</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, paperTitle: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="block text-gray-600">Title</label>
                    <select
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      className="w-full min-w-[100px] py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Mr">Mr.</option>
                      <option value="Dr">Dr.</option>
                      <option value="Author">Author</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-2">
                    {/* <label className="block text-gray-600">Name</label> */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1">
                        <label className="block text-gray-600">
                          First Name
                        </label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              firstName: e.target.value,
                            })
                          }
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      {/* <div className="col-span-1">
                        <label className="block text-gray-600">
                          Middle Name
                        </label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              middleName: e.target.value,
                            })
                          }
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div> */}

                      <div className="col-span-1">
                        <label className="block text-gray-600">Last Name</label>
                        <input
                          type="text"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              lastName: e.target.value,
                            })
                          }
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paper Presentation Mode */}
              {/* <div className="space-y-2">
                <label className="block text-gray-600">
                  Paper Presentation Mode
                </label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="presentationMode"
                      value="online"
                      checked={formData.presentationMode === "online"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          presentationMode: e.target.value,
                        })
                      }
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Online</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="presentationMode"
                      value="offline"
                      checked={formData.presentationMode === "offline"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          presentationMode: e.target.value,
                        })
                      }
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Offline</span>
                  </label>
                </div>
              </div> */}

              {/* Gender */}
              <div className="space-y-2">
                <label className="block text-gray-600">Gender</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={(e) =>
                        setFormData({ ...formData, gender: e.target.value })
                      }
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
                  type="number"
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email ID */}
              <div className="space-y-2">
                <label className="block text-gray-600">Email ID</label>
                <input
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Institution */}
              <div className="space-y-2">
                <label className="block text-gray-600">
                  Institution / Organization
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, institution: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="block text-gray-600">City</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-600">State</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              

              {/* IEEE Member Section */}
              <div className="space-y-2">
                <label className="block text-gray-600">IEEE Member</label>
                <div className="space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="ieeeMember"
                      value="yes"
                      onChange={(e) =>
                        setFormData({ ...formData, ieeeMember: e.target.value })
                      }
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="ieeeMember"
                      value="no"
                      onChange={(e) =>
                        setFormData({ ...formData, ieeeMember: e.target.value })
                      }
                      className="form-radio text-blue-600"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              {formData.ieeeMember === "yes" && (
                <>
                  <div className="space-y-2">
                    <label className="block text-gray-600">
                      IEEE Document Upload
                    </label>
                    {
                      !isUploaded ? (
                        <>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className='border-2 p-1'
                          // name='ieeemember'
                        />
                        {uploadError && (
                          <p style={{ color: "red" }}>{uploadError}</p>
                        )}{" "}
                    <button
                      onClick={handleUpload}
                      disabled={uploading}
                      className={`px-6 py-2 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        uploading
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                      }`}
                    >
                      {uploading ? "Uploading..." : "Upload PDF"}
                    </button>
                    </>
                      ) : <p className='text-green-600'>Document Uploaded</p>
                    }
                  </div>

                </>
              )}
                  <div className="space-y-2">
                    <label className="block text-gray-600">
                      Payable Amount
                    </label>
                    <input
                      type="number"
                      // value="350 EUR"
                      name='amount'
                      onChange={(e) =>
                        setFormData({ ...formData, amount: e.target.value })
                      }
                      // disabled
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

              {/* {formData.ieeeMember === "no" && (
                <div className="space-y-2">
                  <label className="block text-gray-600">Payable Amount</label>
                  <input
                    type="text"
                    value="400 EUR"
                    disabled
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              )} */}
            </>
          )}
        </div>

        {!showPayment && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        )}
        <ToastContainer />
      </form>
    </div>
  );
}