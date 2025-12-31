import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function Job() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    placeOfResidence: "",
    phone: "",
    email: "",
    qualifications: [
      {
        institution: "",
        degree: "",
        marks: "",
        place: ""
      }
    ],
    pqe: "",
    areaOfLaw: [] as string[],
    message: "",
    cv: null as File | null,
    coverLetter: null as File | null,
    photo: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };

  const handleAreaOfLawChange = (area: string) => {
    setFormData(prev => {
      if (prev.areaOfLaw.includes(area)) {
        return {
          ...prev,
          areaOfLaw: prev.areaOfLaw.filter(a => a !== area)
        };
      } else {
        return {
          ...prev,
          areaOfLaw: [...prev.areaOfLaw, area]
        };
      }
    });
  };

  const handleQualificationChange = (index: number, field: string, value: string) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications[index] = {
      ...updatedQualifications[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      qualifications: updatedQualifications
    }));
  };

  const addQualification = () => {
    setFormData(prev => ({
      ...prev,
      qualifications: [
        ...prev.qualifications,
        { institution: "", degree: "", marks: "", place: "" }
      ]
    }));
  };

  const removeQualification = (index: number) => {
    if (formData.qualifications.length > 1) {
      const updatedQualifications = formData.qualifications.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        qualifications: updatedQualifications
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.placeOfResidence.trim()) newErrors.placeOfResidence = "Place of residence is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    
    // Validate qualifications
    formData.qualifications.forEach((qual, index) => {
      if (!qual.institution.trim()) newErrors[`qual_institution_${index}`] = "Institution is required";
      if (!qual.degree.trim()) newErrors[`qual_degree_${index}`] = "Degree is required";
    });
    
    // Validate area of law
    if (formData.areaOfLaw.length === 0) newErrors.areaOfLaw = "Please select at least one area of law";
    
    // Validate files
    if (!formData.cv) newErrors.cv = "CV is required";
    if (!formData.coverLetter) newErrors.coverLetter = "Cover letter is required";
    if (!formData.photo) newErrors.photo = "Photograph is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", formData);
      
      // Show success message (you could use a toast notification here)
      alert("Application submitted successfully! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        age: "",
        placeOfResidence: "",
        phone: "",
        email: "",
        qualifications: [{ institution: "", degree: "", marks: "", place: "" }],
        pqe: "",
        areaOfLaw: [],
        message: "",
        cv: null,
        coverLetter: null,
        photo: null,
      });
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  const areasOfLaw = [
    "Criminal Law",
    "Civil Law",
    "Family Law",
    "Intellectual Property Rights (IPR)",
    "Labour Law",
    "Corporate Law",
    "Constitutional Law",
    "Tax Law",
    "Property Law"
  ];

  return (
    <>
      <section
        className="relative min-h-screen py-16 sm:py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: "#FFF8E7" }}
      >
        <Navbar />
        
        {/* Subtle background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(180,140,90,0.08),transparent_45%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(90,60,30,0.06),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-50/20"></div>

        {/* Soft pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_50%,#000_50%,#000_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>

        <div className="relative container mx-auto px-4">
          {/* FORM CONTAINER */}
          <div className="max-w-6xl mx-auto">
            {/* HEADER SECTION */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 bg-clip-text text-transparent">
                  Career Opportunities
                </span>
              </h1>
              
              <div className="relative">
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/30 via-accent/50 to-amber-400/30 blur-sm rounded-full"></div>
              </div>
              
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
                Join our team of dedicated legal professionals. Submit your application below.
                Fields marked with * are required.
              </p>
            </div>

            {/* FORM CARD */}
            <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* PERSONAL DETAILS SECTION */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary">
                      Personal Details
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                          errors.name 
                            ? "border-red-300 focus:ring-red-500/30" 
                            : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                        }`}
                        placeholder="Full Name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                          errors.age 
                            ? "border-red-300 focus:ring-red-500/30" 
                            : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                        }`}
                        placeholder="e.g., 28"
                        min="18"
                        max="70"
                      />
                      {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age}</p>}
                    </div>

                    {/* Place of Residence */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Place of Residence <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="placeOfResidence"
                        value={formData.placeOfResidence}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                          errors.placeOfResidence 
                            ? "border-red-300 focus:ring-red-500/30" 
                            : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                        }`}
                        placeholder="City, State"
                      />
                      {errors.placeOfResidence && <p className="mt-1 text-sm text-red-600">{errors.placeOfResidence}</p>}
                    </div>

                    {/* Contact Info - Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                          errors.phone 
                            ? "border-red-300 focus:ring-red-500/30" 
                            : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                        }`}
                        placeholder="+91 9876543210"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>

                    {/* Contact Info - Email */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                          errors.email 
                            ? "border-red-300 focus:ring-red-500/30" 
                            : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                        }`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* EDUCATIONAL QUALIFICATIONS SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h2 className="text-xl font-serif font-bold text-primary">
                        Educational Qualifications
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={addQualification}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all text-sm font-medium"
                    >
                      + Add Another
                    </button>
                  </div>
                  
                  {formData.qualifications.map((qual, index) => (
                    <div key={index} className="relative bg-stone-50 rounded-lg p-5 border border-stone-200">
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeQualification(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-sm hover:bg-red-600"
                        >
                          ×
                        </button>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Institution/University <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={qual.institution}
                            onChange={(e) => handleQualificationChange(index, "institution", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                              errors[`qual_institution_${index}`] 
                                ? "border-red-300 focus:ring-red-500/30" 
                                : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                            }`}
                            placeholder="e.g., University of Delhi"
                          />
                          {errors[`qual_institution_${index}`] && (
                            <p className="mt-1 text-sm text-red-600">{errors[`qual_institution_${index}`]}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Degree <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={qual.degree}
                            onChange={(e) => handleQualificationChange(index, "degree", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                              errors[`qual_degree_${index}`] 
                                ? "border-red-300 focus:ring-red-500/30" 
                                : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                            }`}
                            placeholder="e.g., LL.B., B.A. LL.B."
                          />
                          {errors[`qual_degree_${index}`] && (
                            <p className="mt-1 text-sm text-red-600">{errors[`qual_degree_${index}`]}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Marks/Percentage/CGPA
                          </label>
                          <input
                            type="text"
                            value={qual.marks}
                            onChange={(e) => handleQualificationChange(index, "marks", e.target.value)}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:outline-none transition-all"
                            placeholder="e.g., 85%, 3.8/4.0"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Place of Education
                          </label>
                          <input
                            type="text"
                            value={qual.place}
                            onChange={(e) => handleQualificationChange(index, "place", e.target.value)}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:outline-none transition-all"
                            placeholder="City, Country"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PROFESSIONAL DETAILS SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary">
                      Professional Details
                    </h2>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Post Qualification Experience (PQE) if any
                    </label>
                    <input
                      type="text"
                      name="pqe"
                      value={formData.pqe}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:outline-none transition-all"
                      placeholder="e.g., 3 years in corporate law"
                    />
                    <p className="mt-2 text-sm text-gray-500">Please specify years and area of practice if applicable</p>
                  </div>
                </div>

                {/* UPLOADS SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary">
                      Required Documents
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* CV Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Curriculum Vitae (CV) <span className="text-red-500">*</span>
                      </label>
                      <div className={`border-2 border-dashed rounded-lg p-4 text-center transition-all ${
                        errors.cv ? "border-red-300 bg-red-50" : "border-stone-300 hover:border-amber-400 hover:bg-amber-50/50"
                      }`}>
                        <input
                          type="file"
                          name="cv"
                          onChange={handleFileChange}
                          className="hidden"
                          id="cv-upload"
                          accept=".pdf,.doc,.docx"
                        />
                        <label htmlFor="cv-upload" className="cursor-pointer">
                          <div className="text-amber-600 mb-2">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600">Click to upload CV</p>
                          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                          {formData.cv && (
                            <p className="text-sm text-green-600 mt-2">{formData.cv.name}</p>
                          )}
                        </label>
                      </div>
                      {errors.cv && <p className="mt-1 text-sm text-red-600">{errors.cv}</p>}
                    </div>

                    {/* Cover Letter Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter <span className="text-red-500">*</span>
                      </label>
                      <div className={`border-2 border-dashed rounded-lg p-4 text-center transition-all ${
                        errors.coverLetter ? "border-red-300 bg-red-50" : "border-stone-300 hover:border-amber-400 hover:bg-amber-50/50"
                      }`}>
                        <input
                          type="file"
                          name="coverLetter"
                          onChange={handleFileChange}
                          className="hidden"
                          id="cover-letter-upload"
                          accept=".pdf,.doc,.docx"
                        />
                        <label htmlFor="cover-letter-upload" className="cursor-pointer">
                          <div className="text-amber-600 mb-2">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600">Click to upload Cover Letter</p>
                          <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                          {formData.coverLetter && (
                            <p className="text-sm text-green-600 mt-2">{formData.coverLetter.name}</p>
                          )}
                        </label>
                      </div>
                      {errors.coverLetter && <p className="mt-1 text-sm text-red-500">{errors.coverLetter}</p>}
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Photograph <span className="text-red-500">*</span>
                      </label>
                      <div className={`border-2 border-dashed rounded-lg p-4 text-center transition-all ${
                        errors.photo ? "border-red-300 bg-red-50" : "border-stone-300 hover:border-amber-400 hover:bg-amber-50/50"
                      }`}>
                        <input
                          type="file"
                          name="photo"
                          onChange={handleFileChange}
                          className="hidden"
                          id="photo-upload"
                          accept="image/*"
                        />
                        <label htmlFor="photo-upload" className="cursor-pointer">
                          <div className="text-amber-600 mb-2">
                            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <p className="text-sm text-gray-600">Click to upload Photo</p>
                          <p className="text-xs text-gray-500 mt-1">JPG, PNG (Max 2MB)</p>
                          {formData.photo && (
                            <p className="text-sm text-green-600 mt-2">{formData.photo.name}</p>
                          )}
                        </label>
                      </div>
                      {errors.photo && <p className="mt-1 text-sm text-red-500">{errors.photo}</p>}
                    </div>
                  </div>
                </div>

                {/* AREA OF LAW SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary">
                      Area of Law Interested <span className="text-red-500">*</span>
                    </h2>
                  </div>
                  
                  {errors.areaOfLaw && (
                    <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{errors.areaOfLaw}</p>
                  )}
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {areasOfLaw.map((area) => (
                      <div key={area} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`area-${area}`}
                          checked={formData.areaOfLaw.includes(area)}
                          onChange={() => handleAreaOfLawChange(area)}
                          className="h-4 w-4 text-amber-600 border-stone-300 rounded focus:ring-amber-500"
                        />
                        <label
                          htmlFor={`area-${area}`}
                          className={`ml-3 text-sm ${
                            formData.areaOfLaw.includes(area)
                              ? "text-amber-800 font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          {area}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MESSAGE SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">6</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary">
                      Additional Message
                    </h2>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Any additional information you'd like to share
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:outline-none transition-all"
                      placeholder="Tell us about your career aspirations, why you want to join our firm, or any other relevant information..."
                    />
                    <p className="mt-2 text-sm text-gray-500">Maximum 1000 characters</p>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-6 border-t border-stone-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                      By submitting, you agree to our privacy policy and consent to contact.
                    </p>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-lg hover:from-amber-700 hover:to-amber-800 focus:ring-2 focus:ring-amber-500/50 focus:outline-none transition-all shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* FOOTNOTE */}
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500">
                We typically respond to applications within 7-10 business days.
                For urgent inquiries, please contact careers@abhaybharadwaj.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Job;