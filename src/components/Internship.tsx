import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function Internship() {
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
        degreeType: "3-year",
        year: "",
        marks: "",
        place: ""
      }
    ],
    period: "",
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
        { institution: "", degree: "", degreeType: "3-year", year: "", marks: "", place: "" }
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
    if (!formData.period.trim()) newErrors.period = "Period of internship is required";
    
    // Validate qualifications
    formData.qualifications.forEach((qual, index) => {
      if (!qual.institution.trim()) newErrors[`qual_institution_${index}`] = "Institution is required";
      if (!qual.degree.trim()) newErrors[`qual_degree_${index}`] = "Degree is required";
      if (!qual.year.trim()) newErrors[`qual_year_${index}`] = "Year of college is required";
    });
    
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
      console.log("Internship application submitted:", formData);
      
      alert("Internship application submitted successfully! We'll contact you within 5-7 business days.");
      
      // Reset form
      setFormData({
        name: "",
        age: "",
        placeOfResidence: "",
        phone: "",
        email: "",
        qualifications: [{ institution: "", degree: "", degreeType: "3-year", year: "", marks: "", place: "" }],
        period: "",
        message: "",
        cv: null,
        coverLetter: null,
        photo: null,
      });
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  const getYearOptions = (degreeType: string) => {
    const years = [];
    if (degreeType === "3-year") {
      for (let i = 1; i <= 3; i++) {
        years.push(`Year ${i}`);
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        years.push(`Year ${i}`);
      }
    }
    return years;
  };

  const internshipPeriods = [
    "1 month",
    "2 months",
    "3 months",
    "4 months",
    "6 months",
    "1 year",
    "Custom period"
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
            {/* HEADER SECTION WITH OFFLINE NOTE */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 bg-clip-text text-transparent">
                  Internship Program
                </span>
              </h1>
              
              <div className="relative">
                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400/30 via-accent/50 to-amber-400/30 blur-sm rounded-full"></div>
              </div>
              
              {/* IMPORTANT OFFLINE INTERNSHIP NOTE */}
              <div className="mt-6 mb-8 max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-r-4 border-red-800 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">Important Note</h3>
                      <div className="mt-2 text-sm text-red-700">
                        <p>
                          <strong>We only offer offline internships.</strong> All internships are conducted 
                          in-person at our office premises to ensure comprehensive learning and practical experience 
                          under direct supervision of our senior advocates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
                Apply for our comprehensive internship program designed for law students.
                Fields marked with * are required.
              </p>
            </div>

            {/* FORM CARD */}
            <div className="bg-white rounded-2xl shadow-xl border border-stone-200 p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className=" max-w-6xl space-y-8">
                
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
                        placeholder="e.g., 21"
                        min="16"
                        max="35"
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
                            placeholder="e.g., National Law University"
                          />
                          {errors[`qual_institution_${index}`] && (
                            <p className="mt-1 text-sm text-red-600">{errors[`qual_institution_${index}`]}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Degree Pursuing <span className="text-red-500">*</span>
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
                            placeholder="e.g., B.A. LL.B., LL.B."
                          />
                          {errors[`qual_degree_${index}`] && (
                            <p className="mt-1 text-sm text-red-600">{errors[`qual_degree_${index}`]}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Degree Type <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={qual.degreeType}
                            onChange={(e) => handleQualificationChange(index, "degreeType", e.target.value)}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:outline-none transition-all bg-white"
                          >
                            <option value="3-year">3-year Law Program</option>
                            <option value="5-year">5-year Integrated Program</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Year of College <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={qual.year}
                            onChange={(e) => handleQualificationChange(index, "year", e.target.value)}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                              errors[`qual_year_${index}`] 
                                ? "border-red-300 focus:ring-red-500/30" 
                                : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                            }`}
                          >
                            <option value="">Select Year</option>
                            {getYearOptions(qual.degreeType).map(year => (
                              <option key={year} value={year}>{year}</option>
                            ))}
                          </select>
                          {errors[`qual_year_${index}`] && (
                            <p className="mt-1 text-sm text-red-600">{errors[`qual_year_${index}`]}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Semester Marks
                          </label>
                          <input
                            type="text"
                            value={qual.marks}
                            onChange={(e) => handleQualificationChange(index, "marks", e.target.value)}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:outline-none transition-all"
                            placeholder="e.g., 8.5 CGPA, 85%"
                          />
                          <p className="mt-1 text-xs text-gray-500">CGPA/Percentage/SGPA of last completed semester</p>
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
                            placeholder="City, State"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* UPLOADS SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
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

                {/* INTERNSHIP PERIOD SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary">
                      Internship Period <span className="text-red-500">*</span>
                    </h2>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Desired Duration <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="period"
                      value={formData.period}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-offset-1 focus:outline-none transition-all ${
                        errors.period 
                          ? "border-red-300 focus:ring-red-500/30" 
                          : "border-stone-300 focus:ring-amber-500/30 focus:border-amber-400"
                      }`}
                    >
                      <option value="">Select Internship Period</option>
                      {internshipPeriods.map(period => (
                        <option key={period} value={period}>{period}</option>
                      ))}
                    </select>
                    {errors.period && <p className="mt-1 text-sm text-red-600">{errors.period}</p>}
                    
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <svg className="h-5 w-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-amber-800">Internship Schedule</h3>
                          <div className="mt-2 text-sm text-amber-700">
                            <p>• Minimum duration: 1 month</p>
                            <p>• Working hours: 10:00 AM to 6:00 PM (Monday to Saturday)</p>
                            <p>• Stipend: Performance-based (details provided upon selection)</p>
                            <p>• Certificate provided upon successful completion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MESSAGE SECTION */}
                <div className="space-y-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-primary">
                      Additional Information
                    </h2>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Why do you want to intern with us?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 focus:outline-none transition-all"
                      placeholder="Tell us about your interest in interning with our firm, your career goals, and what you hope to learn..."
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      This helps us understand your motivation and expectations (Maximum 1000 characters)
                    </p>
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-6 border-t border-stone-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-gray-500">
                      <p>By submitting, you confirm:</p>
                      <ul className="list-disc list-inside mt-1">
                        <li>You are available for in-person internship</li>
                        <li>All information provided is accurate</li>
                        <li>You agree to our terms and conditions</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-medium rounded-lg hover:from-amber-700 hover:to-amber-800 focus:ring-2 focus:ring-amber-500/50 focus:outline-none transition-all shadow-lg hover:shadow-xl"
                    >
                      Submit Internship Application
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* FOOTNOTE */}
            <div className="mt-10 text-center">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="font-serif font-bold text-lg text-primary mb-3">
                  What to Expect After Application
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <p>Application Review (5-7 business days)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <p>Interview Call (if shortlisted)</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 bg-amber-100 rounded-full flex items-center justify-center">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                    <p>Offer Letter & Onboarding</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  For queries, contact: <strong>internship@abhaybharadwaj.com</strong> | Phone: +91-XXX-XXXX-XXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Internship;