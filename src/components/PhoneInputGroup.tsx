
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

interface PhoneInputGroupProps {
  phoneCode: string;
  phone: string;
  onPhoneCodeChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const PhoneInputGroup = ({ phoneCode, phone, onPhoneCodeChange, onPhoneChange }: PhoneInputGroupProps) => {
  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '6px'
  };

  return (
    <div className="flex gap-3">
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white z-10" />
        <Input 
          type="text" 
          placeholder="44" 
          value={phoneCode} 
          onChange={e => onPhoneCodeChange(e.target.value)} 
          className="h-12 pl-10 pr-4 rounded-md w-20 text-sm text-white placeholder:text-gray-300"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
        />
      </div>
      <div className="relative flex-1">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white z-10" />
        <Input 
          type="tel" 
          placeholder="Phone" 
          value={phone} 
          onChange={e => onPhoneChange(e.target.value)} 
          className="h-12 pl-10 pr-4 rounded-md text-sm text-white placeholder:text-gray-300"
          style={inputStyle}
          onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
          onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
          required 
        />
      </div>
    </div>
  );
};

export default PhoneInputGroup;
