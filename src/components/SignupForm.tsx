
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
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
      <div className="relative w-full max-w-sm rounded-xl p-8 shadow-2xl border" 
           style={{
             background: 'linear-gradient(135deg, #1a2332 0%, #1e2a3a 50%, #1a2332 100%)',
             borderColor: 'rgba(59, 130, 246, 0.3)',
             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
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
      <div className="absolute -top-8 -right-8 z-20">
        <img 
          src="/lovable-uploads/21fc4cb8-1e35-44ea-bfad-badea26e461f.png" 
          alt="Trusted Partner" 
          className="h-32 w-32"
        />
      </div>

      {/* Main Form Container with rich navy gradient */}
      <div className="rounded-xl p-8 shadow-2xl border relative" 
           style={{
             background: 'linear-gradient(135deg, #1a2332 0%, #1e2a3a 50%, #1a2332 100%)',
             borderColor: 'rgba(59, 130, 246, 0.3)',
             boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
           }}>
        
        {/* Header with FXCritics branding */}
        <div className="mb-8">
          <div className="flex items-end gap-2 mb-6">
            <span className="text-gray-300 text-lg font-medium">Trusted by</span>
            <img 
              src="/lovable-uploads/208044a7-6b78-4781-9c35-2f68a2dafd9c.png" 
              alt="FX" 
              className="h-12 w-auto mb-0.5"
            />
            <span className="text-white text-lg font-medium">Critics</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="h-12 px-4 rounded-md text-sm font-light text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(30, 42, 58, 0.7)',
                borderColor: 'rgba(59, 130, 246, 0.6)',
                borderWidth: '1px'
              }}
              required
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="h-12 px-4 rounded-md text-sm font-light text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(30, 42, 58, 0.7)',
                borderColor: 'rgba(59, 130, 246, 0.6)',
                borderWidth: '1px'
              }}
              required
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 px-4 rounded-md text-sm font-light text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(30, 42, 58, 0.7)',
                borderColor: 'rgba(59, 130, 246, 0.6)',
                borderWidth: '1px'
              }}
              required
            />
          </div>

          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="44"
              value={formData.phoneCode}
              onChange={(e) => handleInputChange("phoneCode", e.target.value)}
              className="h-12 px-4 rounded-md w-20 text-sm font-light text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(30, 42, 58, 0.7)',
                borderColor: 'rgba(59, 130, 246, 0.6)',
                borderWidth: '1px'
              }}
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="h-12 px-4 rounded-md flex-1 text-sm font-light text-white placeholder:text-gray-300"
              style={{
                backgroundColor: 'rgba(30, 42, 58, 0.7)',
                borderColor: 'rgba(59, 130, 246, 0.6)',
                borderWidth: '1px'
              }}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-white font-bold text-sm rounded-md transition-all duration-200 hover:brightness-110 mt-6"
            style={{ 
              backgroundColor: '#3c84ff',
              color: '#ffffff'
            }}
            disabled={isLoading}
          >
            GET STARTED →
          </Button>

          <div className="flex items-start gap-3 mt-4">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
              className="mt-0.5 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
              style={{
                borderColor: 'rgba(59, 130, 246, 0.8)'
              }}
            />
            <label htmlFor="agreement" className="text-sm text-gray-300 leading-relaxed font-normal">
              I agree to share my details to Fortrade.com and create a demo trading account.
            </label>
          </div>

          <div className="text-xs leading-relaxed mt-4 font-normal" style={{ color: 'rgba(255,255,255,0.6)' }}>
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

          <div className="text-center mt-5 space-y-1">
            <p className="text-gray-400 text-xs font-normal">
              Already have an account?
            </p>
            <p className="text-xs font-normal text-gray-400">
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
