
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

interface PhoneInputGroupProps {
  phoneCode: string;
  phone: string;
  onPhoneCodeChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const PhoneInputGroup = ({ phoneCode, phone, onPhoneCodeChange, onPhoneChange }: PhoneInputGroupProps) => {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#d0d0d0] z-10" />
        <Input 
          type="text" 
          placeholder="44" 
          value={phoneCode} 
          onChange={e => onPhoneCodeChange(e.target.value)} 
          className="h-12 pl-12 pr-4 rounded-lg w-20 text-base text-white placeholder:text-[#d0d0d0] bg-[rgba(255,255,255,0.05)] border border-white focus:border-white focus:shadow-[0_0_0_1px_rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.08)] transition-all duration-200"
        />
      </div>
      <div className="relative flex-1">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#d0d0d0] z-10" />
        <Input 
          type="tel" 
          placeholder="Phone" 
          value={phone} 
          onChange={e => onPhoneChange(e.target.value)} 
          className="h-12 pl-12 pr-4 rounded-lg text-base text-white placeholder:text-[#d0d0d0] bg-[rgba(255,255,255,0.05)] border border-white focus:border-white focus:shadow-[0_0_0_1px_rgba(255,255,255,0.3)] focus:bg-[rgba(255,255,255,0.08)] transition-all duration-200"
          required 
        />
      </div>
    </div>
  );
};

export default PhoneInputGroup;
