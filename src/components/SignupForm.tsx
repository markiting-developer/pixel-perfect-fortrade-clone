
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, User, Mail } from "lucide-react";
import { toast } from "sonner";
import TrustedPartnerBadge from "./TrustedPartnerBadge";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import PhoneInputGroup from "./PhoneInputGroup";
import AgreementSection from "./AgreementSection";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "44",
    phone: "",
    agreement: true
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.agreement) {
      toast.error("Please fill in all required fields and accept the agreement");
      return;
    }
    setIsLoading(true);
    try {
      // Simulate form submission to Fortrade endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Registration submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneCode: "44",
        phone: "",
        agreement: true
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="relative w-full max-w-sm p-8" style={{
        backgroundColor: '#020826',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }}>
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-400 mb-4" />
          <p className="text-white text-center">Processing your registration...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm">
      <TrustedPartnerBadge />

      {/* Main Form Container with #020826 background */}
      <div style={{
        backgroundColor: '#020826',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
      }} className="p-8 relative">
        
        <FormHeader />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={value => handleInputChange("firstName", value)}
            icon={User}
            required
          />

          <FormInput
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={value => handleInputChange("lastName", value)}
            icon={User}
            required
          />

          <FormInput
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={value => handleInputChange("email", value)}
            icon={Mail}
            required
          />

          <PhoneInputGroup
            phoneCode={formData.phoneCode}
            phone={formData.phone}
            onPhoneCodeChange={value => handleInputChange("phoneCode", value)}
            onPhoneChange={value => handleInputChange("phone", value)}
          />

          <Button 
            type="submit" 
            className="w-full text-white font-bold text-base rounded-lg transition-all duration-200 mt-6" 
            style={{
              backgroundColor: '#3c84ff',
              height: '50px',
              borderRadius: '6px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5b9dff'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3c84ff'}
            disabled={isLoading}
          >
            GET STARTED →
          </Button>

          <AgreementSection
            agreement={formData.agreement}
            onAgreementChange={checked => handleInputChange("agreement", checked)}
          />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
