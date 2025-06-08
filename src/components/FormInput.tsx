
import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  required?: boolean;
  className?: string;
}

const FormInput = ({ type, placeholder, value, onChange, icon: Icon, required = false, className = "" }: FormInputProps) => {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white z-10" />
      <Input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`h-12 pl-12 pr-4 rounded-md text-sm text-white placeholder:text-gray-300 ${className}`}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '6px'
        }}
        onFocus={(e) => e.target.style.borderColor = '#3c84ff'}
        onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'}
        required={required}
      />
    </div>
  );
};

export default FormInput;
