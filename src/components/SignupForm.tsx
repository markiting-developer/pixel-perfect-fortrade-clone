
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, User, Mail } from "lucide-react";
import { toast } from "sonner";
import TrustedPartnerBadge from "./TrustedPartnerBadge";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import PhoneInputGroup from "./PhoneInputGroup";
import AgreementSection from "./AgreementSection";
import TiltCard from "./TiltCard";
import ParallaxElement from "./ParallaxElement";

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
      <TiltCard className="relative w-full max-w-md p-8 bg-[#020826] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-400 mb-4" />
          <p className="text-white text-center">Processing your registration...</p>
        </div>
      </TiltCard>
    );
  }

  return (
    <div className="relative w-full max-w-md mt-6 md:mt-0">
      <TrustedPartnerBadge />

      {/* Main Form Container with 3D Tilt Effect */}
      <TiltCard className="bg-[#020826] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-6 md:p-8 relative border border-white/10">
        
        <ParallaxElement intensity={0.2}>
          <FormHeader />
        </ParallaxElement>

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

          <ParallaxElement intensity={0.4}>
            <Button 
              type="submit" 
              className="w-full bg-[#3c84ff] hover:bg-[#2c74ef] text-white font-bold text-base rounded-lg h-12 mt-6 shadow-lg hover:shadow-xl transition-all duration-200" 
              disabled={isLoading}
            >
              GET STARTED →
            </Button>
          </ParallaxElement>

          <AgreementSection
            agreement={formData.agreement}
            onAgreementChange={checked => handleInputChange("agreement", checked)}
          />
        </form>
      </TiltCard>
    </div>
  );
};

export default SignupForm;
