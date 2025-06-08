
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
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
        <Input 
          type="text" 
          placeholder="44" 
          value={phoneCode} 
          onChange={e => onPhoneCodeChange(e.target.value)} 
          className="h-12 pl-12 pr-4 rounded-lg w-20 text-base text-white placeholder:text-gray-400 bg-transparent border border-white/30 focus:border-blue-400"
        />
      </div>
      <div className="relative flex-1">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
        <Input 
          type="tel" 
          placeholder="Phone" 
          value={phone} 
          onChange={e => onPhoneChange(e.target.value)} 
          className="h-12 pl-12 pr-4 rounded-lg text-base text-white placeholder:text-gray-400 bg-transparent border border-white/30 focus:border-blue-400"
          required 
        />
      </div>
    </div>
  );
};

export default PhoneInputGroup;
