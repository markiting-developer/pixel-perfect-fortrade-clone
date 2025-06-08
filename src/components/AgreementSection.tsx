
import { Checkbox } from "@/components/ui/checkbox";

interface AgreementSectionProps {
  agreement: boolean;
  onAgreementChange: (checked: boolean) => void;
}

const AgreementSection = ({ agreement, onAgreementChange }: AgreementSectionProps) => {
  return (
    <>
      <div className="flex items-start gap-3 mt-6">
        <Checkbox 
          id="agreement" 
          checked={agreement} 
          onCheckedChange={checked => onAgreementChange(checked as boolean)} 
          className="mt-0.5 data-[state=checked]:bg-[#3c84ff] data-[state=checked]:border-[#3c84ff] border-white bg-[rgba(255,255,255,0.05)]" 
        />
        <label htmlFor="agreement" className="text-sm text-white leading-relaxed font-normal">
          I agree to share my details to Fortrade.com and create a demo trading account.
        </label>
      </div>

      <div className="text-sm leading-relaxed mt-4 font-normal text-white/90">
        <p>
          By proceeding, I agree to the{" "}
          <a href="#" className="text-[#448AFF] underline hover:text-[#5A9AFF] transition-colors">Privacy Policy</a>{" "}
          and the{" "}
          <a href="#" className="text-[#448AFF] underline hover:text-[#5A9AFF] transition-colors">Terms and Conditions</a>.{" "}
          I agree to receive important updates and promotions. I understand that I can unsubscribe from the 
          marketing notifications anytime via notification settings.{" "}
          For more information, please{" "}
          <a href="#" className="text-[#448AFF] underline hover:text-[#5A9AFF] transition-colors">click here</a>.
        </p>
      </div>

      <div className="text-center mt-6 space-y-2">
        <p className="text-[#448AFF] text-sm font-normal hover:text-[#5A9AFF] transition-colors cursor-pointer">
          Already have an account?
        </p>
        <p className="text-sm font-normal text-white/90">
          Need help?{" "}
          <a href="#" className="text-[#448AFF] underline hover:text-[#5A9AFF] transition-colors">Contact Us</a>
        </p>
      </div>
    </>
  );
};

export default AgreementSection;
