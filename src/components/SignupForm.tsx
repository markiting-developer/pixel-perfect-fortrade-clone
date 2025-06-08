
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
    agreement: false
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
        agreement: false
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="relative w-full max-w-sm bg-gray-800/95 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-gray-700/50">
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
          <p className="text-white text-center">Processing your registration...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm">
      {/* Trusted Partner Badge - positioned outside the form, overlapping top-right */}
      <div className="absolute -top-4 -right-4 z-20">
        <img 
          src="/lovable-uploads/21fc4cb8-1e35-44ea-bfad-badea26e461f.png" 
          alt="Trusted Partner" 
          className="h-16 w-16"
        />
      </div>

      {/* Main Form Container */}
      <div className="bg-gray-800/95 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-gray-700/50 relative">
        {/* Header with FXCritics branding */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gray-300 text-sm font-medium">Trusted by</span>
            <img 
              src="/lovable-uploads/208044a7-6b78-4781-9c35-2f68a2dafd9c.png" 
              alt="FX" 
              className="h-4 w-auto"
            />
            <span className="text-white text-sm font-medium">Critics</span>
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
              className="bg-gray-700/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 h-14 px-4 rounded-lg text-base"
              required
            />
          </div>

          <div>
            <Input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="bg-gray-700/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 h-14 px-4 rounded-lg text-base"
              required
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="bg-gray-700/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 h-14 px-4 rounded-lg text-base"
              required
            />
          </div>

          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="44"
              value={formData.phoneCode}
              onChange={(e) => handleInputChange("phoneCode", e.target.value)}
              className="bg-gray-700/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 h-14 px-4 rounded-lg w-20 text-base"
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="bg-gray-700/80 border-gray-600/50 text-white placeholder-gray-400 focus:border-blue-500 h-14 px-4 rounded-lg flex-1 text-base"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 text-white font-semibold text-base rounded-lg transition-all duration-200 hover:opacity-90 mt-5"
            style={{ backgroundColor: '#2193FF' }}
            disabled={isLoading}
          >
            GET STARTED →
          </Button>

          <div className="flex items-start gap-3 mt-3">
            <Checkbox
              id="agreement"
              checked={formData.agreement}
              onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
              className="mt-1 border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <label htmlFor="agreement" className="text-sm text-gray-300 leading-relaxed">
              I agree to share my details to Fortrade.com and create a demo trading account.
            </label>
          </div>

          <div className="text-xs text-gray-400 leading-relaxed mt-4 opacity-60">
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

          <div className="text-center mt-4 space-y-1">
            <p className="text-gray-400 text-xs opacity-60">
              Already have an account?
            </p>
            <p className="text-xs opacity-60">
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
