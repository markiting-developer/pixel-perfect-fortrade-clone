
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
      // Simulate form submission
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
      <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-gray-700 relative">
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
          <p className="text-white text-center">Processing your registration...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-gray-700 relative">
      {/* Trusted Partner Badge */}
      <div className="absolute -top-4 -right-4">
        <img 
          src="/lovable-uploads/c1c64c79-3519-496d-b9f5-617ee7c56aa1.png" 
          alt="Trusted Partner" 
          className="h-16 w-16"
        />
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-400 text-sm">Trusted by</span>
          <img 
            src="/lovable-uploads/d0bbb2aa-489b-41bc-a18f-f9533a1d0a6f.png" 
            alt="FX" 
            className="h-6 w-auto"
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
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="44"
            value={formData.phoneCode}
            onChange={(e) => handleInputChange("phoneCode", e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 w-20"
          />
          <Input
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 flex-1"
            required
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
          disabled={isLoading}
        >
          GET STARTED →
        </Button>

        <div className="flex items-start gap-2 mt-4">
          <Checkbox
            id="agreement"
            checked={formData.agreement}
            onCheckedChange={(checked) => handleInputChange("agreement", checked as boolean)}
            className="mt-0.5 border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
          />
          <label htmlFor="agreement" className="text-xs text-gray-300 leading-relaxed">
            I agree to share my details to Fortrade.com and create a demo trading account.
          </label>
        </div>

        <div className="text-xs text-gray-400 leading-relaxed mt-4">
          <p>
            By proceeding, I agree to the{" "}
            <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>{" "}
            and the{" "}
            <a href="#" className="text-blue-400 hover:underline">Terms and Conditions</a>.{" "}
            I agree to receive important updates and promotions. I understand that I can unsubscribe from the 
            marketing notifications anytime via notification settings.{" "}
            For more information, please{" "}
            <a href="#" className="text-blue-400 hover:underline">click here</a>.
          </p>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Already have an account?
          </p>
          <p className="text-sm">
            Need help?{" "}
            <a href="#" className="text-blue-400 hover:underline">Contact Us</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
