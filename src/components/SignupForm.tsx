import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, User, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

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
      <div className="relative w-full max-w-sm p-8 border" style={{
        backgroundColor: '#020826',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(59, 130, 246, 0.3)'
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
      {/* Trusted Partner Badge - positioned outside the form, overlapping top-right */}
      <div className="absolute -top-10 -right-10 z-20">
        <img src="/lovable-uploads/21fc4cb8-1e35-44ea-bfad-badea26e461f.png" alt="Trusted Partner" className="h-24 w-24" />
      </div>

      {/* Main Form Container with #020826 background */}
      <div style={{
        backgroundColor: '#020826',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
        borderColor: 'rgba(59, 130, 246, 0.3)'
      }} className="p-8 border relative">
        
        {/* Header with FXCritics branding */}
        <div className="mb-8">
          <div className="mb-6">
            <p className="text-gray-300 text-sm font-normal mb-3">Trusted by</p>
            <div className="flex items-baseline gap-1">
              <img src="/lovable-uploads/208044a7-6b78-4781-9c35-2f68a2dafd9c.png" alt="FX" className="h-10 w-auto" />
              <span className="text-white text-3xl font-bold">Critics</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white z-10" />
            <Input 
              type="text" 
              placeholder="First Name" 
              value={formData.firstName} 
              onChange={e => handleInputChange("firstName", e.target.value)} 
              className="h-12 pl-12 pr-4 rounded-md text-sm text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid white',
                borderRadius: '6px'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
              onBlur={(e) => e.target.style.borderColor = 'white'}
              required 
            />
          </div>

          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white z-10" />
            <Input 
              type="text" 
              placeholder="Last Name" 
              value={formData.lastName} 
              onChange={e => handleInputChange("lastName", e.target.value)} 
              className="h-12 pl-12 pr-4 rounded-md text-sm text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid white',
                borderRadius: '6px'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
              onBlur={(e) => e.target.style.borderColor = 'white'}
              required 
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white z-10" />
            <Input 
              type="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={e => handleInputChange("email", e.target.value)} 
              className="h-12 pl-12 pr-4 rounded-md text-sm text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid white',
                borderRadius: '6px'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
              onBlur={(e) => e.target.style.borderColor = 'white'}
              required 
            />
          </div>

          <div className="flex gap-3">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white z-10" />
              <Input 
                type="text" 
                placeholder="44" 
                value={formData.phoneCode} 
                onChange={e => handleInputChange("phoneCode", e.target.value)} 
                className="h-12 pl-10 pr-4 rounded-md w-20 text-sm text-white placeholder:text-gray-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid white',
                  borderRadius: '6px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
                onBlur={(e) => e.target.style.borderColor = 'white'}
              />
            </div>
            <div className="relative flex-1">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white z-10" />
              <Input 
                type="tel" 
                placeholder="Phone" 
                value={formData.phone} 
                onChange={e => handleInputChange("phone", e.target.value)} 
                className="h-12 pl-10 pr-4 rounded-md text-sm text-white placeholder:text-gray-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid white',
                  borderRadius: '6px'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
                onBlur={(e) => e.target.style.borderColor = 'white'}
                required 
              />
            </div>
          </div>

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

          <div className="flex items-start gap-3 mt-6">
            <Checkbox id="agreement" checked={formData.agreement} onCheckedChange={checked => handleInputChange("agreement", checked as boolean)} className="mt-0.5 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" style={{
              borderColor: 'rgba(80, 144, 255, 0.8)'
            }} />
            <label htmlFor="agreement" className="text-sm text-white leading-relaxed font-normal">
              I agree to share my details to Fortrade.com and create a demo trading account.
            </label>
          </div>

          <div className="text-xs leading-relaxed mt-4 font-normal" style={{
            color: 'rgba(255,255,255,0.7)'
          }}>
            <p>
              By proceeding, I agree to the{" "}
              <a href="#" className="text-blue-400 underline hover:text-blue-300">Privacy Policy</a>{" "}
              and the{" "}
              <a href="#" className="text-blue-400 underline hover:text-blue-300">Terms and Conditions</a>.{" "}
              I agree to receive important updates and promotions. I understand that I can unsubscribe from the 
              marketing notifications anytime via notification settings.{" "}
              For more information, please{" "}
              <a href="#" className="text-blue-400 underline hover:text-blue-300">click here</a>.
            </p>
          </div>

          <div className="text-center mt-6 space-y-2">
            <p className="text-blue-400 text-sm font-normal">
              Already have an account?
            </p>
            <p className="text-sm font-normal text-blue-400">
              Need help?{" "}
              <a href="#" className="text-blue-400 underline hover:text-blue-300">Contact Us</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
