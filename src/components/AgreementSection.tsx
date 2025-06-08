
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
          className="mt-0.5 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" 
          style={{
            borderColor: 'rgba(80, 144, 255, 0.8)'
          }} 
        />
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
    </>
  );
};

export default AgreementSection;
